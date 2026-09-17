import express from 'express';
import path from 'path';
import fs from 'fs';
import { createServer as createViteServer } from 'vite';
import { initializeApp, getApps, getApp } from 'firebase/app';
import {
  getFirestore,
  collection,
  doc,
  setDoc,
  getDoc,
  getDocs,
  increment,
  query,
  orderBy,
  writeBatch
} from 'firebase/firestore';
import { CURATED_MOVIES } from './src/data/curatedMovies';
import { getRecommendations, getSingleReplacement } from './src/services/recommendationEngine';

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Initialize Firebase Firestore for server-side persistence
  let fbDb: any = null;
  try {
    const configPath = path.join(process.cwd(), 'firebase-applet-config.json');
    if (fs.existsSync(configPath)) {
      const fbConfig = JSON.parse(fs.readFileSync(configPath, 'utf-8'));
      const fbApp = !getApps().length ? initializeApp(fbConfig) : getApp();
      fbDb = getFirestore(fbApp, fbConfig.firestoreDatabaseId);
      console.log('🔥 Server-side Firestore connected to database:', fbConfig.firestoreDatabaseId);
    }
  } catch (err) {
    console.warn('⚠️ Server-side Firestore initialization warning:', err);
  }

  // API Routes
  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', service: 'Screenit Cinematic Quest API' });
  });

  // Curated gallery endpoint
  app.get(['/api/movies', '/api/movies/curated'], (req, res) => {
    const category = (req.query.category as string) || 'all';
    let results = CURATED_MOVIES;

    if (category === 'cult') {
      results = results.filter(m => m.isCultClassic);
    } else if (category === 'award') {
      results = results.filter(m => m.isAwardWinner);
    } else if (category === 'mind-bending') {
      results = results.filter(m => m.contentTags.includes('Mind-bending') || m.genres.includes('Sci-fi'));
    } else if (category === 'comfort') {
      results = results.filter(m => m.weapons.includes('Cozy comfort') || m.contentTags.includes('Heartwarming'));
    } else if (category === 'action') {
      results = results.filter(m => m.genres.includes('Action') || m.moodTags.includes('Get your pulse racing'));
    }

    res.json({ count: results.length, movies: results });
  });

  // Search movies for watch-history marking
  app.get('/api/movies/search', (req, res) => {
    const query = ((req.query.q as string) || '').trim().toLowerCase();
    if (!query) {
      return res.json({ movies: CURATED_MOVIES.slice(0, 15) });
    }

    const matches = CURATED_MOVIES.filter(m =>
      m.title.toLowerCase().includes(query) ||
      m.director.toLowerCase().includes(query) ||
      m.genres.some(g => g.toLowerCase().includes(query)) ||
      m.cast.some(c => c.toLowerCase().includes(query))
    );

    res.json({ count: matches.length, movies: matches });
  });

  // Recommendation engine endpoint
  app.post('/api/recommendations', (req, res) => {
    try {
      const { answers = {}, watchedMovieIds = [], sessionExcludedIds = [] } = req.body;
      const recommendations = getRecommendations(answers, watchedMovieIds, sessionExcludedIds, 3);
      res.json({
        success: true,
        count: recommendations.length,
        recommendations
      });
    } catch (error: any) {
      console.error('Error generating recommendations:', error);
      res.status(500).json({ error: 'Failed to generate recommendations' });
    }
  });

  // Single replacement endpoint
  app.post('/api/recommendations/replace', (req, res) => {
    try {
      const { answers = {}, watchedMovieIds = [], currentSessionMovieIds = [] } = req.body;
      const replacement = getSingleReplacement(answers, watchedMovieIds, currentSessionMovieIds);
      if (!replacement) {
        return res.json({
          success: false,
          message: 'No further matching unwatched films found with your current filters.'
        });
      }
      res.json({
        success: true,
        replacement
      });
    } catch (error: any) {
      console.error('Error getting replacement:', error);
      res.status(500).json({ error: 'Failed to replace movie' });
    }
  });

  // Persistent server analytics store using file-backed storage
  const DATA_DIR = path.join(process.cwd(), 'data');
  const METRICS_FILE = path.join(DATA_DIR, 'metrics.json');
  const LEADS_FILE = path.join(DATA_DIR, 'leads.json');

  // Ensure data directory exists
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
  } catch (e) {
    console.warn('Could not create data dir:', e);
  }

  function readServerMetrics() {
    try {
      if (fs.existsSync(METRICS_FILE)) {
        return JSON.parse(fs.readFileSync(METRICS_FILE, 'utf-8'));
      }
    } catch (e) {
      console.warn('Error reading server metrics file:', e);
    }
    return {
      pageVisits: 0,
      questsStarted: 0,
      questsCompleted: 0,
      uniqueSessions: []
    };
  }

  function writeServerMetrics(metrics: any) {
    try {
      fs.writeFileSync(METRICS_FILE, JSON.stringify(metrics, null, 2), 'utf-8');
    } catch (e) {
      console.warn('Error writing server metrics file:', e);
    }
  }

  function readServerLeads(): any[] {
    try {
      if (fs.existsSync(LEADS_FILE)) {
        return JSON.parse(fs.readFileSync(LEADS_FILE, 'utf-8'));
      }
    } catch (e) {
      console.warn('Error reading server leads file:', e);
    }
    return [];
  }

  function writeServerLeads(leads: any[]) {
    try {
      fs.writeFileSync(LEADS_FILE, JSON.stringify(leads, null, 2), 'utf-8');
    } catch (e) {
      console.warn('Error writing server leads file:', e);
    }
  }

  // Analytics event receiver
  app.post('/api/analytics/event', async (req, res) => {
    try {
      const { eventName, properties } = req.body || {};
      const currentMetrics = readServerMetrics();
      
      if (eventName === 'page_visit') {
        currentMetrics.pageVisits = (currentMetrics.pageVisits || 0) + 1;
        const sessionId = properties?.sessionId;
        if (sessionId) {
          if (!currentMetrics.uniqueSessions) currentMetrics.uniqueSessions = [];
          if (!currentMetrics.uniqueSessions.includes(sessionId)) {
            currentMetrics.uniqueSessions.push(sessionId);
          }
        }
      } else if (eventName === 'quiz_start') {
        currentMetrics.questsStarted = (currentMetrics.questsStarted || 0) + 1;
      } else if (eventName === 'quiz_complete') {
        currentMetrics.questsCompleted = (currentMetrics.questsCompleted || 0) + 1;
      }
      
      writeServerMetrics(currentMetrics);

      // Persist event and metrics to Firestore
      if (fbDb) {
        try {
          const eventDocId = `evt_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;
          await setDoc(doc(fbDb, 'events', eventDocId), {
            eventName,
            timestamp: Date.now(),
            properties: properties || {},
            createdAt: Date.now()
          });

          const updateObj: Record<string, any> = { lastActivityAt: Date.now() };
          if (eventName === 'page_visit') {
            updateObj.totalPageVisits = increment(1);
            if (properties?.sessionId) {
              updateObj.uniqueSessions = increment(1);
            }
          } else if (eventName === 'quiz_start') {
            updateObj.questsStarted = increment(1);
          } else if (eventName === 'quiz_complete') {
            updateObj.questsCompleted = increment(1);
          }

          await setDoc(doc(fbDb, 'analytics_metrics', 'global_summary'), updateObj, { merge: true });
        } catch (fsErr) {
          console.warn('Server Firestore event write fallback:', fsErr);
        }
      }

      res.json({ status: 'received', eventName });
    } catch (e) {
      console.error('Error handling analytics event:', e);
      res.json({ status: 'error' });
    }
  });

  // Record user lead on server
  app.post('/api/analytics/lead', async (req, res) => {
    try {
      const lead = req.body;
      if (lead && lead.phone) {
        const leadId = lead.id || `lead_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;
        const leadRecord = {
          ...lead,
          id: leadId,
          receivedAt: Date.now()
        };

        const currentLeads = readServerLeads();
        // Check for duplicates
        const isDuplicate = currentLeads.some(
          (l: any) => l.phone === lead.phone && Math.abs((l.submittedAt || 0) - (lead.submittedAt || 0)) < 15000
        );

        if (!isDuplicate) {
          currentLeads.unshift(leadRecord);
          writeServerLeads(currentLeads);
        }

        // Persist lead directly to Firestore
        if (fbDb) {
          try {
            await setDoc(doc(fbDb, 'leads', leadId), {
              ...leadRecord,
              createdAt: Date.now()
            });
            await setDoc(
              doc(fbDb, 'analytics_metrics', 'global_summary'),
              { totalLeads: increment(1), lastLeadAt: Date.now() },
              { merge: true }
            );
            console.log('✅ Lead saved to Firestore successfully:', leadRecord.name, leadRecord.phone);
          } catch (fsErr) {
            console.error('Server Firestore lead save failed:', fsErr);
          }
        }

        return res.json({ status: 'recorded', count: currentLeads.length, id: leadId });
      }
      res.json({ status: 'ignored_missing_data' });
    } catch (e) {
      console.error('Error recording lead:', e);
      res.status(500).json({ error: 'Failed to record lead' });
    }
  });

  // Get server metrics summary & leads list for creator dashboard
  app.get('/api/analytics/summary', async (req, res) => {
    try {
      // 1. If Firestore is active, fetch live data directly from Firestore cloud
      if (fbDb) {
        try {
          const q = query(collection(fbDb, 'leads'), orderBy('submittedAt', 'desc'));
          const [leadsSnap, metricSnap] = await Promise.all([
            getDocs(q),
            getDoc(doc(fbDb, 'analytics_metrics', 'global_summary'))
          ]);

          const firestoreLeads: any[] = [];
          leadsSnap.forEach(docSnap => {
            firestoreLeads.push(docSnap.data());
          });

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

          return res.json({
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
        } catch (fsErr) {
          console.warn('Server summary fetch from Firestore fallback:', fsErr);
        }
      }

      // 2. Fallback to server local files
      const serverMetrics = readServerMetrics();
      const serverLeads = readServerLeads();

      const totalPageVisits = Math.max(serverMetrics.pageVisits || 0, 0);
      const uniqueSessions = Math.max(serverMetrics.uniqueSessions?.length || (totalPageVisits > 0 ? 1 : 0), 0);
      const questsStarted = serverMetrics.questsStarted || 0;
      const questsCompleted = serverMetrics.questsCompleted || 0;
      const totalLeads = serverLeads.length;

      const completionRate = questsStarted > 0
        ? Math.min(100, Math.round((questsCompleted / questsStarted) * 100))
        : 0;

      const leadConversionRate = questsCompleted > 0
        ? Math.min(100, Math.round((totalLeads / questsCompleted) * 100))
        : (questsStarted > 0 ? Math.min(100, Math.round((totalLeads / questsStarted) * 100)) : 0);

      res.json({
        summary: {
          totalPageVisits,
          uniqueSessions,
          questsStarted,
          questsCompleted,
          totalLeads,
          completionRate,
          leadConversionRate
        },
        leads: serverLeads
      });
    } catch (e) {
      console.error('Error getting analytics summary:', e);
      res.status(500).json({ error: 'Failed to fetch summary' });
    }
  });

  // Reset server analytics
  app.post('/api/analytics/reset', async (req, res) => {
    try {
      writeServerMetrics({
        pageVisits: 0,
        questsStarted: 0,
        questsCompleted: 0,
        uniqueSessions: []
      });
      writeServerLeads([]);

      if (fbDb) {
        try {
          await setDoc(doc(fbDb, 'analytics_metrics', 'global_summary'), {
            totalPageVisits: 0,
            uniqueSessions: 0,
            questsStarted: 0,
            questsCompleted: 0,
            totalLeads: 0
          });
          const leadsSnap = await getDocs(collection(fbDb, 'leads'));
          const batch = writeBatch(fbDb);
          leadsSnap.forEach(d => batch.delete(d.ref));
          await batch.commit();
        } catch (fsErr) {
          console.warn('Firestore reset fallback:', fsErr);
        }
      }

      res.json({ status: 'reset_successful' });
    } catch (e) {
      res.status(500).json({ error: 'Failed to reset analytics' });
    }
  });

  // Vite middleware for development & Static file serving for production
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`🧙‍♂️ Screenit Wizard Server running on port ${PORT}`);
  });
}

startServer();
