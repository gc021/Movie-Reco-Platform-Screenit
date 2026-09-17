import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Sparkles, RefreshCw, Compass, RotateCcw,
  Film, AlertCircle, ShieldCheck, ArrowRight, UserCheck, Eye, EyeOff,
  Smartphone, Award
} from 'lucide-react';
import { Movie, RecommendationResult, QuizAnswers, WizardType } from '../types';
import { MovieCard } from './MovieCard';
import { playSelectChime } from '../services/soundEffects';
import { ContactCaptureModal } from './ContactCaptureModal';
import { MagicalHatIcon } from './MagicalHatIcon';

interface RecommendationScreenProps {
  recommendations: RecommendationResult[];
  answers: Partial<QuizAnswers>;
  userName?: string;
  onReplaceMovie: (movieId: string) => void;
  onMarkWatched: (movieId: string) => void;
  onWatchTrailer: (movie: Movie) => void;
  onSelectFinalChoice: (movie: Movie) => void;
  onRetakeQuest: () => void;
  onAdjustAnswers: () => void;
  swapsRemaining: number;
  isReplacingId: string | null;
  activeWizard: WizardType;
  onSelectWizard: (type: WizardType) => void;
  includeGauravRated: boolean;
  onToggleIncludeRated: (include: boolean) => void;
  onOpenCouncil?: () => void;
}

export const RecommendationScreen: React.FC<RecommendationScreenProps> = ({
  recommendations,
  answers,
  userName,
  onReplaceMovie,
  onMarkWatched,
  onWatchTrailer,
  onSelectFinalChoice,
  onRetakeQuest,
  onAdjustAnswers,
  swapsRemaining,
  isReplacingId,
  activeWizard,
  onSelectWizard,
  includeGauravRated,
  onToggleIncludeRated,
  onOpenCouncil
}) => {
  const [showContactModal, setShowContactModal] = useState(false);

  return (
    <div id="recommendation-screen-container" className="py-8 px-4 sm:px-6 max-w-7xl mx-auto space-y-8">
      {/* Top Banner & Heading */}
      <div className="text-center space-y-3 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full atmospheric-glass border-amber-500/40 text-amber-300 text-xs sm:text-sm font-bold tracking-wide shadow-[0_0_20px_rgba(245,158,11,0.2)]">
          {activeWizard === 'gaurav' ? (
            <>
              <UserCheck className="w-4 h-4 text-amber-400" />
              <span>Gaurav Cinephile Wizard: Contrastive Divination Active</span>
            </>
          ) : (
            <>
              <MagicalHatIcon className="w-4 h-4 text-amber-400" />
              <span>The Grand Oracle’s Divination is Complete</span>
            </>
          )}
        </div>

        <h1 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-100 tracking-tight">
          {userName ? `Which adventure are you taking, ${userName}?` : 'Which adventure are you taking?'}
        </h1>

        <p className="text-sm sm:text-base text-slate-300">
          Chosen for your quest: <span className="text-amber-300 font-semibold">{answers.q1Mission || 'Great Movie'}</span> with <span className="text-amber-300 font-semibold">{answers.q3Party || 'your watch party'}</span>, armed with <span className="text-amber-300 font-semibold">{answers.q4Weapon || 'cinematic magic'}</span>.
        </p>

        {/* Wizard Selector Switcher Bar on Results Screen */}
        <div className="pt-2 flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm">
          {/* Active Wizard Switch */}
          <div className="p-1 rounded-2xl bg-slate-950/80 border border-slate-800 flex items-center shadow-lg">
            <button
              onClick={() => {
                playSelectChime();
                onSelectWizard('standard');
              }}
              className={`px-3 py-1.5 rounded-xl font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                activeWizard === 'standard'
                  ? 'bg-amber-500 text-slate-950 shadow-[0_0_12px_rgba(245,158,11,0.4)]'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Grand Oracle</span>
            </button>

            <button
              onClick={() => {
                playSelectChime();
                onSelectWizard('gaurav');
              }}
              className={`px-3 py-1.5 rounded-xl font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                activeWizard === 'gaurav'
                  ? 'bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 shadow-[0_0_15px_rgba(245,158,11,0.5)]'
                  : 'text-slate-400 hover:text-amber-300'
              }`}
            >
              <UserCheck className="w-3.5 h-3.5 text-slate-950" />
              <span>Gaurav's Oracle</span>
              <span className="text-[9px] px-1 py-0.2 rounded bg-slate-950/20 uppercase font-black">IMDb</span>
            </button>
          </div>

          {/* Gaurav specific include/exclude filter toggle if in Gaurav mode */}
          {activeWizard === 'gaurav' && (
            <button
              onClick={() => {
                playSelectChime();
                onToggleIncludeRated(!includeGauravRated);
              }}
              className={`px-3 py-1.5 rounded-xl border text-xs font-semibold flex items-center gap-1.5 cursor-pointer transition-all ${
                includeGauravRated
                  ? 'bg-amber-500/15 border-amber-500/40 text-amber-300'
                  : 'bg-indigo-500/15 border-indigo-500/40 text-indigo-300'
              }`}
              title="Click to toggle between including Gaurav's rated favorites or strictly unseen gems"
            >
              {includeGauravRated ? (
                <>
                  <Eye className="w-3.5 h-3.5 text-amber-400" />
                  <span>Including Gaurav's Rated</span>
                </>
              ) : (
                <>
                  <EyeOff className="w-3.5 h-3.5 text-indigo-400" />
                  <span>Excluding Rated (Unseen)</span>
                </>
              )}
            </button>
          )}

          {/* Save to Phone CTA Button */}
          <button
            onClick={() => {
              playSelectChime();
              setShowContactModal(true);
            }}
            className="px-3.5 py-1.5 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 border border-amber-500/50 text-amber-300 text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer shadow-sm"
          >
            <Smartphone className="w-3.5 h-3.5 text-amber-400" />
            <span>Send Watchlist to Phone</span>
          </button>

          {/* Swaps remaining pill with Unlimited Already Watched badge */}
          <div
            className={`px-3.5 py-1.5 rounded-xl border flex items-center gap-2 font-semibold text-xs shadow-sm ${
              swapsRemaining > 0
                ? 'atmospheric-glass border-indigo-500/50 text-indigo-200'
                : 'atmospheric-glass border-amber-500/50 text-amber-300'
            }`}
            title="Manual swaps remaining. Note: 'Already Watched' offers unlimited fresh recommendations."
          >
            <div className="flex items-center gap-1.5">
              <RefreshCw className="w-3 h-3 text-amber-400" />
              <span>{swapsRemaining} manual swaps left</span>
            </div>
            <span className="text-slate-600 hidden sm:inline">•</span>
            <span className="text-[11px] text-amber-300/90 font-medium hidden sm:inline">
              ✓ "Already Watched" is unlimited
            </span>
          </div>
        </div>
      </div>

      {/* 3 Movie Cards Grid */}
      {recommendations.length === 0 ? (
        <div className="p-12 text-center parchment-card rounded-3xl max-w-xl mx-auto space-y-4 shadow-2xl">
          <AlertCircle className="w-12 h-12 text-amber-400 mx-auto" />
          <h3 className="font-cinzel text-xl font-bold text-slate-100">
            No further unwatched titles match this exact combination
          </h3>
          <p className="text-sm text-slate-300">
            Try switching the wizard or adjusting a quest rule to broaden the divination.
          </p>
          <div className="flex justify-center gap-3 pt-2">
            <button
              onClick={onAdjustAnswers}
              className="gold-glow-btn px-6 py-2.5 rounded-xl text-sm font-bold"
            >
              Adjust Answers
            </button>
            <button
              onClick={onRetakeQuest}
              className="px-6 py-2.5 rounded-xl atmospheric-glass text-slate-200 font-semibold text-sm hover:border-amber-500/40"
            >
              Retake Quest
            </button>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {recommendations.map((rec, idx) => (
            <MovieCard
              key={rec.movie.id}
              recommendation={rec}
              index={idx}
              onReplace={onReplaceMovie}
              onMarkWatched={onMarkWatched}
              onWatchTrailer={onWatchTrailer}
              onSelectFinalChoice={onSelectFinalChoice}
              swapsRemaining={swapsRemaining}
              isReplacing={isReplacingId === rec.movie.id}
            />
          ))}
        </div>
      )}

      {/* Interactive Nudge to Try Gaurav's Oracle & Council of Oracles */}
      {activeWizard === 'standard' && (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-5 sm:p-6 rounded-3xl bg-gradient-to-r from-amber-500/15 via-slate-900/90 to-indigo-950/60 border border-amber-500/40 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-xl"
        >
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-2xl bg-amber-500 flex items-center justify-center text-slate-950 shadow-[0_0_20px_rgba(245,158,11,0.5)] shrink-0">
              <UserCheck className="w-6 h-6 text-slate-950 stroke-[2.5]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-black uppercase tracking-wider text-amber-400">
                  ✨ Cinephile Taste Upgrade
                </span>
                <span className="text-[10px] px-2 py-0.2 rounded-full bg-amber-500/25 text-amber-200 font-bold border border-amber-500/40">
                  230+ IMDb Ratings
                </span>
              </div>
              <h4 className="font-cinzel text-base sm:text-lg font-bold text-slate-100 mt-0.5">
                Curious what Gaurav's Oracle would recommend?
              </h4>
              <p className="text-xs text-slate-300">
                Gaurav’s contrastive algorithm scores these picks against his favorite auteur directors (Nolan, Fincher, Tarantino) and filters out generic clichés.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 self-stretch sm:self-auto shrink-0">
            <button
              onClick={() => {
                playSelectChime();
                onSelectWizard('gaurav');
              }}
              className="gold-glow-btn px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-slate-950 flex items-center gap-1.5 cursor-pointer shadow-lg"
            >
              <span>Try Gaurav's Oracle</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            {onOpenCouncil && (
              <button
                onClick={() => {
                  playSelectChime();
                  onOpenCouncil();
                }}
                className="px-3.5 py-2.5 rounded-xl atmospheric-glass hover:border-indigo-500/50 text-indigo-200 hover:text-indigo-100 text-xs font-bold transition-all cursor-pointer"
              >
                View Council
              </button>
            )}
          </div>
        </motion.div>
      )}

      {/* Bottom Swap Limit Notification / Quest Controls */}
      <div className="pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-slate-400">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>
            {activeWizard === 'gaurav'
              ? "Divination powered by Gaurav's contrastive IMDb matrix (Director affinity & script complexity)"
              : 'Top Curated Recommendations Only • Verified Indian OTT Streaming'}
          </span>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={onAdjustAnswers}
            className="px-4 py-2 rounded-xl atmospheric-glass hover:border-slate-500 text-slate-300 hover:text-white transition-all cursor-pointer"
          >
            Adjust Quest Answers
          </button>
          <button
            onClick={onRetakeQuest}
            className="px-4 py-2 rounded-xl atmospheric-glass hover:border-amber-500/50 text-slate-300 hover:text-amber-300 transition-all flex items-center gap-1.5 cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5 text-amber-400" />
            <span>Retake Quest</span>
          </button>
        </div>
      </div>

      {/* Contact Modal */}
      <ContactCaptureModal
        isOpen={showContactModal}
        onClose={() => setShowContactModal(false)}
        contextTitle="Curated 3-Movie Watchlist & OTT Direct Links"
      />
    </div>
  );
};
