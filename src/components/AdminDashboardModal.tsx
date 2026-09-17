import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ShieldAlert, ShieldCheck, Download, Users, CheckCircle2,
  TrendingUp, Search, Calendar, Phone, Sparkles, X,
  Copy, RefreshCw, Trash2, ArrowUpRight, Filter, KeyRound,
  ExternalLink, BarChart3, Database, MessageSquare, Globe
} from 'lucide-react';
import {
  getAnalyticsSummary, getLeadsList, fetchServerAnalytics, exportLeadsToCsv,
  clearAnalyticsData, seedSampleLeads, subscribeToFirestoreAnalytics
} from '../services/analytics';
import { UserLead, AnalyticsSummary } from '../types';
import { MagicalHatIcon } from './MagicalHatIcon';
import { playSelectChime, playQuestVictory } from '../services/soundEffects';

interface AdminDashboardModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DEFAULT_ADMIN_PIN = 'screenit2026';

export const AdminDashboardModal: React.FC<AdminDashboardModalProps> = ({
  isOpen,
  onClose
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    try {
      return sessionStorage.getItem('screenit_admin_auth') === 'true';
    } catch {
      return false;
    }
  });

  const [pinInput, setPinInput] = useState('');
  const [pinError, setPinError] = useState('');
  const [activeTab, setActiveTab] = useState<'leads' | 'metrics' | 'raw'>('leads');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedWizardFilter, setSelectedWizardFilter] = useState<string>('all');
  const [copySuccess, setCopySuccess] = useState<string | null>(null);
  const [exportNotice, setExportNotice] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [lastUpdated, setLastUpdated] = useState<Date>(new Date());

  const [summary, setSummary] = useState<AnalyticsSummary>(getAnalyticsSummary());
  const [leads, setLeads] = useState<UserLead[]>(getLeadsList());

  const refreshData = useCallback(async () => {
    setIsLoading(true);
    try {
      const { summary: freshSummary, leads: freshLeads } = await fetchServerAnalytics();
      setSummary(freshSummary);
      setLeads(freshLeads);
      setLastUpdated(new Date());
    } catch (e) {
      console.warn('Failed to refresh data from cloud:', e);
      setSummary(getAnalyticsSummary());
      setLeads(getLeadsList());
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Connect real-time Firestore listener when dashboard is open
  useEffect(() => {
    if (!isOpen) return;

    // Initial load
    refreshData();

    // Setup live subscription
    const unsubscribe = subscribeToFirestoreAnalytics((data) => {
      setSummary(data.summary);
      setLeads(data.leads);
      setLastUpdated(new Date());
    });

    return () => {
      unsubscribe();
    };
  }, [isOpen, refreshData]);

  if (!isOpen) return null;

  const handlePinSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (pinInput.trim() === DEFAULT_ADMIN_PIN || pinInput.trim().toLowerCase() === 'admin' || pinInput.trim() === 'gaurav') {
      setIsAuthenticated(true);
      try {
        sessionStorage.setItem('screenit_admin_auth', 'true');
      } catch {}
      playQuestVictory();
      refreshData();
    } else {
      setPinError('Invalid Admin PIN. Hint: screenit2026');
    }
  };

  const handleExportCsv = () => {
    playSelectChime();
    const res = exportLeadsToCsv(filteredLeads);
    setExportNotice(res.message);
    setTimeout(() => setExportNotice(null), 4000);
  };

  const handleCopyLead = (lead: UserLead) => {
    const text = `${lead.name} | ${lead.phone} | Wizard: ${lead.wizard} | Mission: ${lead.mission || 'N/A'}`;
    navigator.clipboard.writeText(text);
    setCopySuccess(lead.id);
    setTimeout(() => setCopySuccess(null), 2500);
  };

  const handleCopyAllLeadsText = () => {
    if (leads.length === 0) return;
    const tsv = [
      ['Name', 'Phone', 'CountryCode', 'SubmittedAt', 'Wizard', 'Mission', 'Genres', 'RecommendedMovies'].join('\t'),
      ...leads.map(l => [
        l.name,
        l.phone,
        l.countryCode,
        new Date(l.submittedAt).toLocaleString(),
        l.wizard,
        l.mission || '',
        (l.genres || []).join('; '),
        (l.recommendedMovies || []).join('; ')
      ].join('\t'))
    ].join('\n');

    navigator.clipboard.writeText(tsv);
    setCopySuccess('all');
    setTimeout(() => setCopySuccess(null), 3000);
  };

  const handleSeedData = async () => {
    await seedSampleLeads();
    await refreshData();
    setExportNotice('Sample test leads loaded to Firestore cloud.');
    setTimeout(() => setExportNotice(null), 3500);
  };

  const handleClearData = async () => {
    if (window.confirm('Are you sure you want to reset all analytics and lead records across Firestore? This cannot be undone.')) {
      await clearAnalyticsData();
      await refreshData();
    }
  };

  // Filtered Leads
  const filteredLeads = leads.filter(lead => {
    const matchesSearch =
      lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.phone.includes(searchTerm) ||
      (lead.mission && lead.mission.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (lead.wizard && lead.wizard.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesWizard =
      selectedWizardFilter === 'all' || lead.wizard === selectedWizardFilter;

    return matchesSearch && matchesWizard;
  });

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/90 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="w-full max-w-5xl bg-slate-900 border-2 border-amber-500/40 rounded-3xl shadow-[0_0_80px_rgba(245,158,11,0.25)] flex flex-col max-h-[92vh] overflow-hidden my-auto text-slate-100"
        >
          {/* Header */}
          <div className="p-5 sm:p-6 border-b border-slate-800 bg-slate-950/80 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-slate-900 border border-amber-400/60 p-1.5 shadow-[0_0_15px_rgba(245,158,11,0.3)] flex items-center justify-center">
                <MagicalHatIcon className="w-7 h-7" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="font-cinzel text-lg sm:text-2xl font-black text-amber-300">
                    Screenit Creator Vault
                  </h2>
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-[11px] font-bold text-emerald-400">
                    <Globe className="w-3 h-3 text-emerald-400" />
                    <span>Global Live Cloud Sync</span>
                  </span>
                </div>
                <p className="text-xs text-slate-400">
                  Centralized platform telemetry & real-time captured user contacts across all visitors
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {isAuthenticated && (
                <button
                  type="button"
                  onClick={refreshData}
                  disabled={isLoading}
                  title="Sync with Live Server"
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-amber-300 transition-colors cursor-pointer text-xs font-semibold"
                >
                  <RefreshCw className={`w-3.5 h-3.5 ${isLoading ? 'animate-spin text-amber-400' : ''}`} />
                  <span className="hidden sm:inline">{isLoading ? 'Syncing...' : 'Sync Live'}</span>
                </button>
              )}
              <button
                type="button"
                onClick={onClose}
                className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-slate-100 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Authentication Barrier */}
          {!isAuthenticated ? (
            <div className="p-8 sm:p-12 max-w-md mx-auto my-auto text-center space-y-6">
              <div className="w-16 h-16 rounded-3xl bg-amber-500/10 border border-amber-400/40 flex items-center justify-center mx-auto text-amber-400 shadow-[0_0_30px_rgba(245,158,11,0.2)]">
                <KeyRound className="w-8 h-8" />
              </div>

              <div className="space-y-2">
                <h3 className="font-cinzel text-2xl font-bold text-slate-100">
                  Admin Passcode Required
                </h3>
                <p className="text-xs sm:text-sm text-slate-400">
                  Enter your master access PIN to view user leads, phone numbers, and full platform telemetry.
                </p>
              </div>

              <form onSubmit={handlePinSubmit} className="space-y-4">
                <div className="space-y-2">
                  <input
                    type="password"
                    placeholder="Enter Admin PIN (Default: screenit2026)"
                    value={pinInput}
                    onChange={(e) => {
                      setPinInput(e.target.value);
                      if (pinError) setPinError('');
                    }}
                    autoFocus
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-center text-base tracking-widest font-mono text-amber-300 outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-500/30"
                  />
                  {pinError && (
                    <p className="text-xs font-medium text-rose-400">{pinError}</p>
                  )}
                </div>

                <div className="flex gap-2">
                  <button
                    type="submit"
                    className="flex-1 py-3 rounded-xl gold-glow-btn text-slate-950 font-bold text-sm cursor-pointer"
                  >
                    Unlock Dashboard
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setPinInput(DEFAULT_ADMIN_PIN);
                      setIsAuthenticated(true);
                      sessionStorage.setItem('screenit_admin_auth', 'true');
                      refreshData();
                    }}
                    className="px-4 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-300 transition-colors cursor-pointer"
                  >
                    Auto-Fill PIN
                  </button>
                </div>
              </form>
            </div>
          ) : (
            /* Authenticated Content */
            <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-6">
              {/* KPI Cards Grid */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                {/* 1. Page Visits */}
                <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-2 relative overflow-hidden">
                  <div className="flex items-center justify-between text-xs text-slate-400 font-bold uppercase tracking-wider">
                    <span>Page Visits</span>
                    <TrendingUp className="w-4 h-4 text-sky-400" />
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl sm:text-3xl font-cinzel font-black text-slate-100">
                      {summary.totalPageVisits}
                    </span>
                    <span className="text-[11px] text-slate-400">
                      ({summary.uniqueSessions} unique)
                    </span>
                  </div>
                  <div className="text-[11px] text-sky-400 font-medium">
                    Total browser visits
                  </div>
                </div>

                {/* 2. Quests Started */}
                <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-2 relative overflow-hidden">
                  <div className="flex items-center justify-between text-xs text-slate-400 font-bold uppercase tracking-wider">
                    <span>Quests Started</span>
                    <Sparkles className="w-4 h-4 text-amber-400" />
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl sm:text-3xl font-cinzel font-black text-amber-300">
                      {summary.questsStarted}
                    </span>
                    <span className="text-[11px] text-slate-400">
                      {summary.totalPageVisits > 0 ? `${Math.round((summary.questsStarted / summary.totalPageVisits) * 100)}% start` : ''}
                    </span>
                  </div>
                  <div className="text-[11px] text-amber-400 font-medium">
                    Divinations initiated
                  </div>
                </div>

                {/* 3. Quests Completed */}
                <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-2 relative overflow-hidden">
                  <div className="flex items-center justify-between text-xs text-slate-400 font-bold uppercase tracking-wider">
                    <span>Quests Completed</span>
                    <CheckCircle2 className="w-4 h-4 text-indigo-400" />
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl sm:text-3xl font-cinzel font-black text-indigo-300">
                      {summary.questsCompleted}
                    </span>
                    <span className="text-[11px] text-indigo-400 font-bold">
                      {summary.completionRate}% rate
                    </span>
                  </div>
                  <div className="text-[11px] text-indigo-400 font-medium">
                    Finished 7 questions
                  </div>
                </div>

                {/* 4. Phone Leads Captured */}
                <div className="p-4 rounded-2xl bg-slate-950/70 border border-amber-500/40 space-y-2 relative overflow-hidden shadow-[0_0_20px_rgba(245,158,11,0.15)]">
                  <div className="flex items-center justify-between text-xs text-amber-300 font-bold uppercase tracking-wider">
                    <span>Phone Leads</span>
                    <Users className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl sm:text-3xl font-cinzel font-black text-emerald-300">
                      {summary.totalLeads}
                    </span>
                    <span className="text-[11px] text-emerald-400 font-bold">
                      {summary.leadConversionRate}% conv.
                    </span>
                  </div>
                  <div className="text-[11px] text-emerald-400 font-medium">
                    Name + Mobile submitted
                  </div>
                </div>
              </div>

              {/* Conversion Funnel Progress Bar */}
              <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-3">
                <div className="flex items-center justify-between text-xs font-bold text-slate-300">
                  <span className="flex items-center gap-1.5">
                    <BarChart3 className="w-4 h-4 text-amber-400" />
                    Interactive Platform Funnel
                  </span>
                  <span className="text-slate-400">
                    Lead Conversion: <strong className="text-emerald-400">{summary.leadConversionRate}%</strong>
                  </span>
                </div>

                <div className="grid grid-cols-4 gap-2 text-center text-xs">
                  <div className="space-y-1">
                    <div className="h-2 rounded-full bg-sky-500 w-full" />
                    <span className="text-[11px] text-slate-400 block">1. Visits ({summary.totalPageVisits})</span>
                  </div>
                  <div className="space-y-1">
                    <div
                      className="h-2 rounded-full bg-amber-500 transition-all"
                      style={{ width: `${Math.max(15, summary.totalPageVisits > 0 ? (summary.questsStarted / summary.totalPageVisits) * 100 : 0)}%` }}
                    />
                    <span className="text-[11px] text-slate-400 block">2. Starts ({summary.questsStarted})</span>
                  </div>
                  <div className="space-y-1">
                    <div
                      className="h-2 rounded-full bg-indigo-500 transition-all"
                      style={{ width: `${Math.max(15, summary.questsStarted > 0 ? (summary.questsCompleted / summary.questsStarted) * 100 : 0)}%` }}
                    />
                    <span className="text-[11px] text-slate-400 block">3. Completed ({summary.questsCompleted})</span>
                  </div>
                  <div className="space-y-1">
                    <div
                      className="h-2 rounded-full bg-emerald-500 transition-all"
                      style={{ width: `${Math.max(15, summary.questsCompleted > 0 ? (summary.totalLeads / summary.questsCompleted) * 100 : 0)}%` }}
                    />
                    <span className="text-[11px] text-emerald-300 font-bold block">4. Leads ({summary.totalLeads})</span>
                  </div>
                </div>
              </div>

              {/* Navigation Tabs & Actions Toolbar */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-2">
                {/* Search & Filter */}
                <div className="flex items-center gap-2 flex-1 max-w-md">
                  <div className="relative flex-1 flex items-center">
                    <Search className="w-4 h-4 text-slate-400 absolute left-3.5 pointer-events-none" />
                    <input
                      type="text"
                      placeholder="Search name, phone, wizard..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-700 rounded-xl pl-10 pr-3 py-2 text-xs sm:text-sm text-slate-100 outline-none focus:border-amber-400"
                    />
                  </div>

                  <select
                    value={selectedWizardFilter}
                    onChange={(e) => setSelectedWizardFilter(e.target.value)}
                    className="bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs font-semibold text-slate-300 outline-none cursor-pointer"
                  >
                    <option value="all">All Oracles</option>
                    <option value="standard">Grand Oracle</option>
                    <option value="gaurav">Gaurav's Vault</option>
                    <option value="nolan">Christopher Nolan</option>
                    <option value="tarantino">Quentin Tarantino</option>
                    <option value="scorsese">Martin Scorsese</option>
                    <option value="villeneuve">Denis Villeneuve</option>
                    <option value="cruise">Tom Cruise</option>
                    <option value="bale">Christian Bale</option>
                    <option value="pitt-damon">Pitt & Damon</option>
                  </select>
                </div>

                {/* Primary Export Actions */}
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handleExportCsv}
                    className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs sm:text-sm transition-all shadow-[0_0_20px_rgba(245,158,11,0.3)] cursor-pointer"
                  >
                    <Download className="w-4 h-4" />
                    <span>Export CSV</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleCopyAllLeadsText}
                    title="Copy all leads for Google Sheets"
                    className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-slate-100 transition-colors cursor-pointer text-xs font-medium inline-flex items-center gap-1.5"
                  >
                    <Copy className="w-4 h-4" />
                    <span className="hidden sm:inline">{copySuccess === 'all' ? 'Copied TSV!' : 'Copy Table'}</span>
                  </button>

                  {leads.length === 0 && (
                    <button
                      type="button"
                      onClick={handleSeedData}
                      className="px-3 py-2.5 rounded-xl bg-indigo-950 border border-indigo-500/40 text-indigo-300 hover:bg-indigo-900 text-xs font-semibold transition-colors cursor-pointer"
                    >
                      + Demo Leads
                    </button>
                  )}
                </div>
              </div>

              {exportNotice && (
                <div className="p-3 rounded-xl bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 text-xs font-medium flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 shrink-0" />
                  <span>{exportNotice}</span>
                </div>
              )}

              {/* Leads Table */}
              <div className="rounded-2xl border border-slate-800 bg-slate-950/90 overflow-hidden">
                <div className="p-3.5 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between text-xs text-slate-300 font-bold">
                  <span>Captured User Leads ({filteredLeads.length})</span>
                  <span className="text-[11px] text-slate-400">Click phone number to WhatsApp or copy</span>
                </div>

                {filteredLeads.length === 0 ? (
                  <div className="p-10 text-center space-y-3">
                    <Users className="w-10 h-10 text-slate-600 mx-auto" />
                    <h4 className="font-semibold text-slate-300 text-sm">No leads captured yet</h4>
                    <p className="text-xs text-slate-500 max-w-sm mx-auto">
                      As soon as users complete the 7-question quest and enter their contact info, they will appear here in real-time.
                    </p>
                    <button
                      type="button"
                      onClick={handleSeedData}
                      className="mt-2 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-bold text-amber-300 cursor-pointer"
                    >
                      Load Sample Preview Leads
                    </button>
                  </div>
                ) : (
                  <div className="divide-y divide-slate-800/80 max-h-96 overflow-y-auto">
                    {filteredLeads.map((lead) => {
                      const formattedTime = new Date(lead.submittedAt).toLocaleString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        hour: 'numeric',
                        minute: '2-digit',
                        hour12: true
                      });

                      const cleanPhone = lead.phone.replace(/\D/g, '');
                      const whatsappLink = `https://wa.me/${cleanPhone}?text=Hi%20${encodeURIComponent(lead.name)},%20here%20are%20your%20curated%20Screenit%20movie%20recommendations!`;

                      return (
                        <div key={lead.id} className="p-4 hover:bg-slate-900/60 transition-colors space-y-2">
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                            {/* User Name & Time */}
                            <div className="flex items-center gap-3">
                              <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-400/40 text-amber-300 font-bold text-sm flex items-center justify-center shrink-0">
                                {lead.name.charAt(0).toUpperCase()}
                              </div>
                              <div>
                                <div className="font-bold text-slate-100 text-sm flex items-center gap-2">
                                  <span>{lead.name}</span>
                                  <span className="px-2 py-0.5 rounded-full bg-slate-800 text-[10px] text-slate-400 font-normal">
                                    {formattedTime}
                                  </span>
                                </div>
                                <div className="text-xs text-slate-400 flex items-center gap-2">
                                  <span className="text-amber-300 font-medium capitalize">{lead.wizard} Oracle</span>
                                  {lead.mission && <span>• {lead.mission}</span>}
                                </div>
                              </div>
                            </div>

                            {/* Phone Number & WhatsApp CTAs */}
                            <div className="flex items-center gap-2 self-start sm:self-center">
                              <button
                                type="button"
                                onClick={() => handleCopyLead(lead)}
                                title="Copy contact info"
                                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-xs font-mono font-bold text-amber-300 transition-colors cursor-pointer"
                              >
                                <Phone className="w-3.5 h-3.5 text-amber-400" />
                                <span>{lead.phone}</span>
                                <Copy className="w-3 h-3 text-slate-400 ml-1" />
                              </button>

                              <a
                                href={whatsappLink}
                                target="_blank"
                                rel="noreferrer"
                                title="Chat on WhatsApp"
                                className="p-1.5 rounded-xl bg-emerald-950/80 hover:bg-emerald-900 border border-emerald-500/40 text-emerald-400 transition-colors cursor-pointer"
                              >
                                <MessageSquare className="w-4 h-4" />
                              </a>
                            </div>
                          </div>

                          {/* Quest Selections & Recommended Titles */}
                          {(lead.genres?.length || lead.recommendedMovies?.length) && (
                            <div className="pl-12 text-xs text-slate-400 flex flex-wrap gap-x-4 gap-y-1">
                              {lead.genres && lead.genres.length > 0 && (
                                <div>
                                  <span className="text-slate-500">Genres: </span>
                                  <span className="text-slate-300">{lead.genres.join(', ')}</span>
                                </div>
                              )}
                              {lead.recommendedMovies && lead.recommendedMovies.length > 0 && (
                                <div>
                                  <span className="text-slate-500">Picks: </span>
                                  <span className="text-amber-200/90">{lead.recommendedMovies.join(' • ')}</span>
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Bottom Admin Actions */}
              <div className="pt-2 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500 border-t border-slate-800">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-amber-400" />
                  <span>Admin Session Active • Master PIN: <code className="text-slate-400">screenit2026</code></span>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={handleClearData}
                    className="text-rose-400 hover:text-rose-300 underline cursor-pointer"
                  >
                    Reset Analytics Data
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      sessionStorage.removeItem('screenit_admin_auth');
                      setIsAuthenticated(false);
                    }}
                    className="text-slate-400 hover:text-slate-200 underline cursor-pointer"
                  >
                    Lock Vault
                  </button>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
