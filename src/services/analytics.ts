import {
  collection,
  doc,
  setDoc,
  getDocs,
  getDoc,
  query,
  orderBy,
  increment,
  onSnapshot,
  writeBatch
} from 'firebase/firestore';
import { db } from '../lib/firebase';
import { AnalyticsEvent, UserLead, AnalyticsSummary } from '../types';

const LEADS_STORAGE_KEY = 'screenit_leads_vault';
const METRICS_STORAGE_KEY = 'screenit_metrics_counters';
const SESSION_STORAGE_KEY = 'screenit_session_token';

// Firestore collection references
const METRICS_DOC_REF = doc(db, 'analytics_metrics', 'global_summary');
const LEADS_COLLECTION_REF = collection(db, 'leads');
const EVENTS_COLLECTION_REF = collection(db, 'events');

interface MetricCounters {
  pageVisits: number;
  questsStarted: number;
  questsCompleted: number;
  uniqueSessions: string[];
}

function getStoredMetrics(): MetricCounters {
  try {
    const raw = localStorage.getItem(METRICS_STORAGE_KEY);
    if (raw) {
      return JSON.parse(raw);
    }
  } catch (e) {
    console.warn('Failed to parse analytics metrics', e);
  }
  return {
    pageVisits: 0,
    questsStarted: 0,
    questsCompleted: 0,
    uniqueSessions: []
  };
}

function saveMetrics(metrics: MetricCounters) {
  try {
    localStorage.setItem(METRICS_STORAGE_KEY, JSON.stringify(metrics));
  } catch (e) {
    console.warn('Failed to save analytics metrics', e);
  }
}

/**
 * Initializes session and records a page visit across both local cache and Firestore
 */
export async function recordPageVisit() {
  if (typeof window === 'undefined') return;

  try {
    const metrics = getStoredMetrics();
    metrics.pageVisits = (metrics.pageVisits || 0) + 1;

    // Track unique sessions
    let sessionId = sessionStorage.getItem(SESSION_STORAGE_KEY);
    const isNewSession = !sessionId;
    if (isNewSession) {
      sessionId = `sess_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
      sessionStorage.setItem(SESSION_STORAGE_KEY, sessionId);

      if (!metrics.uniqueSessions) metrics.uniqueSessions = [];
      if (!metrics.uniqueSessions.includes(sessionId)) {
        metrics.uniqueSessions.push(sessionId);
      }
    }

    saveMetrics(metrics);

    // 1. Sync to Firestore directly
    try {
      await setDoc(
        METRICS_DOC_REF,
        {
          totalPageVisits: increment(1),
          uniqueSessions: isNewSession ? increment(1) : increment(0),
          lastVisitAt: Date.now()
        },
        { merge: true }
      );
    } catch (fsErr) {
      console.warn('Firestore metrics update fallback:', fsErr);
    }

    // 2. Track page_visit event
    trackEvent('page_visit', { sessionId, totalVisits: metrics.pageVisits });
  } catch (e) {
    console.warn('Error recording page visit', e);
  }
}

/**
 * Global Event Tracker - pushes to Firestore & local storage
 */
export async function trackEvent(eventName: string, properties?: Record<string, any>) {
  const event: AnalyticsEvent = {
    eventName,
    timestamp: Date.now(),
    properties: properties || {}
  };

  try {
    // Update local counters based on event
    const metrics = getStoredMetrics();
    if (eventName === 'quiz_start') {
      metrics.questsStarted = (metrics.questsStarted || 0) + 1;
      saveMetrics(metrics);
      // Sync to Firestore
      setDoc(
        METRICS_DOC_REF,
        { questsStarted: increment(1), lastActivityAt: Date.now() },
        { merge: true }
      ).catch(() => {});
    } else if (eventName === 'quiz_complete') {
      metrics.questsCompleted = (metrics.questsCompleted || 0) + 1;
      saveMetrics(metrics);
      // Sync to Firestore
      setDoc(
        METRICS_DOC_REF,
        { questsCompleted: increment(1), lastActivityAt: Date.now() },
        { merge: true }
      ).catch(() => {});
    }

    // Safe console telemetry for diagnostics
    if (process.env.NODE_ENV !== 'production') {
      console.log(`[Screenit Telemetry] ${eventName}`, properties);
    }

    // Non-blocking write to Firestore events collection
    try {
      const eventDocId = `evt_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;
      setDoc(doc(EVENTS_COLLECTION_REF, eventDocId), {
        ...event,
        createdAt: Date.now()
      }).catch((e) => console.warn('Firestore event write notice:', e));
    } catch (e) {
      console.warn('Firestore event setDoc notice:', e);
    }

    // Fallback non-blocking server API dispatch with keepalive
    try {
      if (typeof window !== 'undefined') {
        fetch('/api/analytics/event', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(event),
          keepalive: true
        }).catch(() => {});
      }
    } catch {}
  } catch (e) {
    console.warn('Error in trackEvent', e);
  }
}

/**
 * Stores a new captured user lead to Firestore, Server API, and local storage
 */
export async function recordUserLead(lead: Omit<UserLead, 'id' | 'submittedAt'> & { id?: string; submittedAt?: number }) {
  if (typeof window === 'undefined') return;

  try {
    const existingLeads = getLeadsList();
    const leadId = lead.id || `lead_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;
    const newLead: UserLead = {
      id: leadId,
      name: lead.name,
      phone: lead.phone,
      countryCode: lead.countryCode,
      submittedAt: lead.submittedAt || Date.now(),
      wizard: lead.wizard,
      mission: lead.mission,
      party: lead.party,
      weapon: lead.weapon,
      genres: lead.genres,
      recommendedMovies: lead.recommendedMovies,
      chosenMovie: lead.chosenMovie
    };

    console.log('📝 Submitting lead to Cloud Firestore & Server:', newLead.name, newLead.phone);

    // Save to local cache
    const isDuplicateLocal = existingLeads.some(
      l => l.phone === newLead.phone && Math.abs(l.submittedAt - newLead.submittedAt) < 5000
    );

    if (!isDuplicateLocal) {
      const updated = [newLead, ...existingLeads];
      localStorage.setItem(LEADS_STORAGE_KEY, JSON.stringify(updated));
    }

    // 1. Direct write to Firestore leads collection
    try {
      await setDoc(doc(LEADS_COLLECTION_REF, leadId), {
        ...newLead,
        createdAt: Date.now()
      });
      // Increment total leads metric counter in Firestore
      await setDoc(
        METRICS_DOC_REF,
        { totalLeads: increment(1), lastLeadAt: Date.now() },
        { merge: true }
      );
      console.log('✅ Lead saved to Firestore directly:', leadId);
    } catch (fsErr) {
      console.warn('Firestore direct lead submission notice:', fsErr);
    }

    // 2. Server API sync backup with keepalive
    try {
      await fetch('/api/analytics/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newLead),
        keepalive: true
      });
      console.log('✅ Lead synced via server API endpoint');
    } catch (serverErr) {
      console.warn('Server API lead sync notice:', serverErr);
    }

    return newLead;
  } catch (e) {
    console.error('Failed to record user lead:', e);
  }
}

/**
 * Retrieves all stored leads from local storage
 */
export function getLeadsList(): UserLead[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(LEADS_STORAGE_KEY);
    if (raw) {
      return JSON.parse(raw);
    }
  } catch (e) {
    console.warn('Failed to read leads list', e);
  }
  return [];
}

/**
 * Real-time listener for Firestore leads & metrics
 */
export function subscribeToFirestoreAnalytics(
  callback: (data: { summary: AnalyticsSummary; leads: UserLead[] }) => void
) {
  try {
    const q = query(LEADS_COLLECTION_REF, orderBy('submittedAt', 'desc'));
    const unsubscribeLeads = onSnapshot(q, (snapshot) => {
      const firestoreLeads: UserLead[] = [];
      snapshot.forEach(docSnap => {
        firestoreLeads.push(docSnap.data() as UserLead);
      });

      // Update local storage
      if (firestoreLeads.length > 0) {
        try {
          localStorage.setItem(LEADS_STORAGE_KEY, JSON.stringify(firestoreLeads));
        } catch {}
      }

      // Read latest metrics
      getDoc(METRICS_DOC_REF).then(metricSnap => {
        const metricData = metricSnap.data() || {};
        const totalPageVisits = Math.max(metricData.totalPageVisits || 0, firestoreLeads.length > 0 ? 1 : 0);
        const uniqueSessions = Math.max(metricData.uniqueSessions || 0, firestoreLeads.length > 0 ? 1 : 0);
        const questsStarted = metricData.questsStarted || 0;
        const questsCompleted = metricData.questsCompleted || 0;
        const totalLeads = firestoreLeads.length;

        const completionRate = questsStarted > 0
          ? Math.min(100, Math.round((questsCompleted / questsStarted) * 100))
          : 0;

        const leadConversionRate = questsCompleted > 0
          ? Math.min(100, Math.round((totalLeads / questsCompleted) * 100))
          : (questsStarted > 0 ? Math.min(100, Math.round((totalLeads / questsStarted) * 100)) : 0);

        callback({
          summary: {
            totalPageVisits,
            uniqueSessions,
            questsStarted,
            questsCompleted,
            totalLeads,
            completionRate,
            leadConversionRate
          },
          leads: firestoreLeads
        });
      }).catch(() => {
        callback({
          summary: getAnalyticsSummary(),
          leads: firestoreLeads
        });
      });
    });

    return unsubscribeLeads;
  } catch (err) {
    console.warn('Could not setup Firestore realtime subscription:', err);
    return () => {};
  }
}

/**
 * Fetches analytics summary and leads directly from Firestore (primary) and Server API (fallback)
 */
export async function fetchServerAnalytics(): Promise<{ summary: AnalyticsSummary; leads: UserLead[] }> {
  const localSummary = getAnalyticsSummary();
  const localLeads = getLeadsList();

  // 1. Primary: Query Firestore Cloud Database directly
  try {
    const q = query(LEADS_COLLECTION_REF, orderBy('submittedAt', 'desc'));
    const [leadsSnap, metricSnap] = await Promise.all([
      getDocs(q),
      getDoc(METRICS_DOC_REF)
    ]);

    const firestoreLeads: UserLead[] = [];
    leadsSnap.forEach(docSnap => {
      firestoreLeads.push(docSnap.data() as UserLead);
    });

    const metricData = metricSnap.data() || {};
    
    // Merge any un-synced local leads to Firestore in background
    const fsLeadIds = new Set(firestoreLeads.map(l => `${l.phone}_${l.name}`));
    localLeads.forEach(l => {
      const key = `${l.phone}_${l.name}`;
      if (!fsLeadIds.has(key)) {
        firestoreLeads.push(l);
        setDoc(doc(LEADS_COLLECTION_REF, l.id), { ...l, createdAt: Date.now() }).catch(() => {});
      }
    });

    firestoreLeads.sort((a, b) => (b.submittedAt || 0) - (a.submittedAt || 0));

    const totalPageVisits = Math.max(metricData.totalPageVisits || 0, localSummary.totalPageVisits, firestoreLeads.length > 0 ? 1 : 0);
    const uniqueSessions = Math.max(metricData.uniqueSessions || 0, localSummary.uniqueSessions, firestoreLeads.length > 0 ? 1 : 0);
    const questsStarted = Math.max(metricData.questsStarted || 0, localSummary.questsStarted, 0);
    const questsCompleted = Math.max(metricData.questsCompleted || 0, localSummary.questsCompleted, 0);
    const totalLeads = firestoreLeads.length;

    const completionRate = questsStarted > 0
      ? Math.min(100, Math.round((questsCompleted / questsStarted) * 100))
      : 0;

    const leadConversionRate = questsCompleted > 0
      ? Math.min(100, Math.round((totalLeads / questsCompleted) * 100))
      : (questsStarted > 0 ? Math.min(100, Math.round((totalLeads / questsStarted) * 100)) : 0);

    const summary: AnalyticsSummary = {
      totalPageVisits,
      uniqueSessions,
      questsStarted,
      questsCompleted,
      totalLeads,
      completionRate,
      leadConversionRate
    };

    // Update local cache
    try {
      localStorage.setItem(LEADS_STORAGE_KEY, JSON.stringify(firestoreLeads));
    } catch {}

    return { summary, leads: firestoreLeads };
  } catch (fsErr) {
    console.warn('Firestore direct fetch failed, falling back to server API endpoint:', fsErr);
  }

  // 2. Secondary fallback: Server API route
  try {
    const res = await fetch('/api/analytics/summary', { cache: 'no-store' });
    if (res.ok) {
      const data = await res.json();
      return {
        summary: data.summary || localSummary,
        leads: data.leads || localLeads
      };
    }
  } catch (err) {
    console.warn('Could not fetch server analytics, falling back to local storage:', err);
  }

  return {
    summary: localSummary,
    leads: localLeads
  };
}

/**
 * Computes high-level platform analytics summary (local fallback)
 */
export function getAnalyticsSummary(): AnalyticsSummary {
  const metrics = getStoredMetrics();
  const leads = getLeadsList();

  const totalPageVisits = Math.max(metrics.pageVisits, 1);
  const uniqueSessions = Math.max(metrics.uniqueSessions?.length || 1, 1);
  const questsStarted = metrics.questsStarted || 0;
  const questsCompleted = metrics.questsCompleted || 0;
  const totalLeads = leads.length;

  const completionRate = questsStarted > 0
    ? Math.min(100, Math.round((questsCompleted / questsStarted) * 100))
    : 0;

  const leadConversionRate = questsCompleted > 0
    ? Math.min(100, Math.round((totalLeads / questsCompleted) * 100))
    : (questsStarted > 0 ? Math.min(100, Math.round((totalLeads / questsStarted) * 100)) : 0);

  return {
    totalPageVisits,
    uniqueSessions,
    questsStarted,
    questsCompleted,
    totalLeads,
    completionRate,
    leadConversionRate
  };
}

/**
 * Exports all leads to a formatted CSV file and triggers automatic browser download
 */
export function exportLeadsToCsv(leadsToExport?: UserLead[]) {
  const leads = leadsToExport || getLeadsList();

  if (leads.length === 0) {
    return { success: false, message: 'No leads available to export yet.' };
  }

  const headers = [
    'Lead ID',
    'Date & Time (UTC)',
    'User Name',
    'Country Code',
    'Mobile Number',
    'Full Phone',
    'Oracle / Wizard',
    'Mission / Mood',
    'Party',
    'Weapon',
    'Genres Selected',
    'Recommended Movies',
    'Chosen Movie'
  ];

  const escapeCsv = (val: any) => {
    if (val === undefined || val === null) return '""';
    const str = String(val).replace(/"/g, '""');
    return `"${str}"`;
  };

  const rows = leads.map(lead => {
    const formattedDate = new Date(lead.submittedAt).toLocaleString('en-US', {
      year: 'numeric',
      month: 'short',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    });

    const genresStr = (lead.genres || []).join('; ');
    const moviesStr = (lead.recommendedMovies || []).join('; ');

    return [
      escapeCsv(lead.id),
      escapeCsv(formattedDate),
      escapeCsv(lead.name),
      escapeCsv(lead.countryCode),
      escapeCsv(lead.phone.replace(lead.countryCode, '')),
      escapeCsv(lead.phone),
      escapeCsv(lead.wizard),
      escapeCsv(lead.mission || ''),
      escapeCsv(lead.party || ''),
      escapeCsv(lead.weapon || ''),
      escapeCsv(genresStr),
      escapeCsv(moviesStr),
      escapeCsv(lead.chosenMovie || '')
    ].join(',');
  });

  const csvContent = '\uFEFF' + [headers.join(','), ...rows].join('\r\n');
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');

  const today = new Date().toISOString().split('T')[0];
  link.setAttribute('href', url);
  link.setAttribute('download', `screenit_user_leads_${today}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);

  return { success: true, message: `Successfully exported ${leads.length} leads to CSV.` };
}

/**
 * Seeds sample leads for testing/demonstration if user wants to preview the dashboard with data
 */
export async function seedSampleLeads() {
  const sampleLeads: UserLead[] = [
    {
      id: 'lead_demo_1',
      name: 'Aarav Mehta',
      phone: '+919820198201',
      countryCode: '+91',
      submittedAt: Date.now() - 3600000 * 2,
      wizard: 'standard',
      mission: 'Get your pulse racing',
      party: 'Solo',
      weapon: 'Clever twists',
      genres: ['Sci-Fi', 'Thriller'],
      recommendedMovies: ['Inception (2010)', 'Interstellar (2014)', 'Blade Runner 2049 (2017)'],
      chosenMovie: 'Inception (2010)'
    },
    {
      id: 'lead_demo_2',
      name: 'Rohan Verma',
      phone: '+919876543210',
      countryCode: '+91',
      submittedAt: Date.now() - 3600000 * 5,
      wizard: 'gaurav',
      mission: 'Feel every feeling',
      party: 'Date night',
      weapon: 'Deep feelings',
      genres: ['Drama', 'Romance'],
      recommendedMovies: ['La La Land (2016)', 'Before Sunrise (1995)', 'Her (2013)'],
      chosenMovie: 'La La Land (2016)'
    },
    {
      id: 'lead_demo_3',
      name: 'Priya Sharma',
      phone: '+919123456789',
      countryCode: '+91',
      submittedAt: Date.now() - 3600000 * 18,
      wizard: 'nolan',
      mission: 'Solve a mystery',
      party: 'Friends',
      weapon: 'Clever twists',
      genres: ['Mystery', 'Sci-Fi'],
      recommendedMovies: ['Memento (2000)', 'The Prestige (2006)', 'Shutter Island (2010)']
    }
  ];

  localStorage.setItem(LEADS_STORAGE_KEY, JSON.stringify(sampleLeads));
  
  // Write samples to Firestore
  try {
    for (const lead of sampleLeads) {
      await setDoc(doc(LEADS_COLLECTION_REF, lead.id), { ...lead, createdAt: Date.now() });
    }
    await setDoc(
      METRICS_DOC_REF,
      {
        totalPageVisits: 35,
        uniqueSessions: 22,
        questsStarted: 18,
        questsCompleted: 12,
        totalLeads: 3
      },
      { merge: true }
    );
  } catch (e) {
    console.warn('Could not seed to Firestore:', e);
  }
}

/**
 * Clears stored leads and reset counters (both locally and on Firestore)
 */
export async function clearAnalyticsData() {
  localStorage.removeItem(LEADS_STORAGE_KEY);
  localStorage.removeItem(METRICS_STORAGE_KEY);
  
  try {
    // Reset Firestore metrics
    await setDoc(METRICS_DOC_REF, {
      totalPageVisits: 0,
      uniqueSessions: 0,
      questsStarted: 0,
      questsCompleted: 0,
      totalLeads: 0
    });

    // Delete leads from Firestore collection
    const snap = await getDocs(LEADS_COLLECTION_REF);
    const batch = writeBatch(db);
    snap.forEach(d => {
      batch.delete(d.ref);
    });
    await batch.commit();
  } catch (fsErr) {
    console.warn('Could not reset Firestore data:', fsErr);
  }

  try {
    await fetch('/api/analytics/reset', { method: 'POST' });
  } catch (e) {
    console.warn('Could not reset server analytics:', e);
  }
}
