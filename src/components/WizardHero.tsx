import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Compass, ShieldCheck, Clapperboard, Film, ArrowRight, UserCheck, Award } from 'lucide-react';
import { WizardCanvas } from './WizardCanvas';
import { playSelectChime } from '../services/soundEffects';
import { MagicalHatIcon } from './MagicalHatIcon';

interface WizardHeroProps {
  onStartQuest: () => void;
  onOpenHistory: () => void;
  onOpenCategories?: (tab: 'directors' | 'actors' | 'genres') => void;
  onOpenCouncil?: () => void;
  watchedCount: number;
}

export const WizardHero: React.FC<WizardHeroProps> = ({
  onStartQuest,
  onOpenHistory,
  onOpenCategories,
  onOpenCouncil,
  watchedCount
}) => {
  const handleStart = () => {
    playSelectChime();
    onStartQuest();
  };

  return (
    <section id="hero-quest-section" className="relative pt-8 pb-16 md:pt-14 md:pb-24 px-4 sm:px-6 max-w-7xl mx-auto overflow-hidden">
      {/* Atmospheric celestial glow arcs and radial nebula */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[850px] h-[420px] bg-gradient-to-b from-indigo-600/20 via-purple-600/15 to-transparent blur-[140px] pointer-events-none -z-10 animate-ambient-pulse" />
      <div className="absolute top-10 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
        {/* Left Copy & CTA Column */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6"
        >
          {/* Top Quest Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full atmospheric-glass border-amber-500/40 text-amber-300 text-xs sm:text-sm font-semibold tracking-wide shadow-[0_0_20px_rgba(245,158,11,0.15)]">
            <MagicalHatIcon className="w-4 h-4 text-amber-400" />
            <span>The 7-Question Cinematic Adventure</span>
          </div>

          {/* Main Hero Headings */}
          <div className="space-y-3">
            <h1 className="font-cinzel text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-100 tracking-tight leading-[1.15]">
              Your next great movie is <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 text-gold-glow">hiding somewhere</span>.
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl font-light text-slate-300 tracking-wide font-sans">
              Answer seven questions. <span className="text-amber-200 font-semibold text-gold-glow">Let the wizard find it.</span>
            </p>
          </div>

          {/* Subtext description */}
          <p className="text-sm sm:text-base text-slate-300/90 max-w-xl leading-relaxed">
            No endless doomscrolling. Escape into a curated quest tuned to your exact mood, runtime, group, and cinematic taste—complete with verified top ratings and Indian OTT streaming links.
          </p>

          {/* CTA Group */}
          <div className="pt-2 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <button
              id="hero-start-quest-btn"
              onClick={handleStart}
              className="gold-glow-btn w-full sm:w-auto px-8 py-4 rounded-2xl text-base sm:text-lg font-bold flex items-center justify-center gap-3 cursor-pointer group shadow-2xl"
            >
              <Compass className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300" />
              <span>Start your movie quest</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
            </button>

            <button
              id="hero-history-btn"
              onClick={onOpenHistory}
              className="w-full sm:w-auto px-6 py-4 rounded-2xl text-sm sm:text-base font-semibold text-slate-200 hover:text-amber-300 atmospheric-glass hover:border-amber-500/50 transition-all flex items-center justify-center gap-2.5 shadow-lg group cursor-pointer"
            >
              <Clapperboard className="w-4 h-4 text-amber-400 group-hover:scale-110 transition-transform" />
              <span>Watched History</span>
              {watchedCount > 0 && (
                <span className="ml-1 px-2.5 py-0.5 text-xs font-bold rounded-full bg-amber-500/25 text-amber-300 border border-amber-500/50 shadow-[0_0_10px_rgba(245,158,11,0.3)]">
                  {watchedCount}
                </span>
              )}
            </button>
          </div>

          {/* Subpage Explore Quick Pills */}
          {onOpenCategories && (
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1">
              <span className="text-xs text-slate-400 font-medium mr-1">Browse Subpages:</span>
              <button
                onClick={() => onOpenCategories('directors')}
                className="px-3 py-1 rounded-xl atmospheric-glass hover:border-amber-500/50 text-slate-300 hover:text-amber-300 text-xs font-semibold transition-all cursor-pointer"
              >
                🎬 By Director
              </button>
              <button
                onClick={() => onOpenCategories('actors')}
                className="px-3 py-1 rounded-xl atmospheric-glass hover:border-amber-500/50 text-slate-300 hover:text-amber-300 text-xs font-semibold transition-all cursor-pointer"
              >
                ⭐ By Actor
              </button>
              <button
                onClick={() => onOpenCategories('genres')}
                className="px-3 py-1 rounded-xl atmospheric-glass hover:border-amber-500/50 text-slate-300 hover:text-amber-300 text-xs font-semibold transition-all cursor-pointer"
              >
                🍿 By Genre
              </button>
              {onOpenCouncil && (
                <button
                  onClick={onOpenCouncil}
                  className="px-3 py-1 rounded-xl bg-amber-500/15 hover:bg-amber-500/25 border border-amber-500/40 text-amber-300 text-xs font-bold transition-all cursor-pointer"
                >
                  🧙 Council of Oracles
                </button>
              )}
            </div>
          )}

          {/* Trust & Quality Indicators */}
          <div className="pt-4 grid grid-cols-3 gap-4 border-t border-slate-800/80 w-full text-slate-300 text-xs sm:text-sm">
            <div className="flex items-center gap-2 justify-center lg:justify-start">
              <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
              <span className="font-medium">Top Curated Recommendations Only</span>
            </div>
            <div className="flex items-center gap-2 justify-center lg:justify-start">
              <Film className="w-4 h-4 text-indigo-400 shrink-0" />
              <span className="font-medium">Where to Watch in India</span>
            </div>
            <div className="flex items-center gap-2 justify-center lg:justify-start">
              <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
              <span className="font-medium">3 Tailored Picks</span>
            </div>
          </div>
        </motion.div>

        {/* Right Animated Wizard Canvas Column */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5 flex flex-col items-center justify-center relative"
        >
          {/* Outer glowing compass frame with atmospheric media depth */}
          <div className="relative p-3 sm:p-5 rounded-full bg-gradient-to-b from-amber-500/15 via-purple-900/15 to-transparent border border-amber-500/30 shadow-[0_0_50px_rgba(245,158,11,0.15)]">
            <WizardCanvas onInteract={handleStart} />
          </div>

          {/* Wizard quote badge */}
          <div className="mt-5 px-5 py-2.5 rounded-xl atmospheric-glass border-amber-500/30 text-xs text-slate-300 text-center max-w-xs shadow-xl">
            <span className="text-amber-400 font-bold">“The Oracle speaks: </span>
            A memorable film awaits your command.”
          </div>
        </motion.div>
      </div>
    </section>
  );
};
