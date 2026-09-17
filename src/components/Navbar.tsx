import React from 'react';
import { Sparkles, Volume2, VolumeX, Clapperboard, Compass, UserCheck } from 'lucide-react';
import { isSoundEnabled, toggleSound, playSelectChime } from '../services/soundEffects';
import { WizardType } from '../types';
import { MagicalHatIcon } from './MagicalHatIcon';

interface NavbarProps {
  onStartQuest: () => void;
  onOpenHistory: () => void;
  onOpenCategories?: (tab: 'directors' | 'actors' | 'genres') => void;
  onOpenCouncil?: () => void;
  watchedCount: number;
  isQuestActive: boolean;
  onResetToHome: () => void;
  activeWizard: WizardType;
  onSelectWizard: (type: WizardType) => void;
  currentView?: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  onStartQuest,
  onOpenHistory,
  onOpenCategories,
  onOpenCouncil,
  watchedCount,
  isQuestActive,
  onResetToHome,
  activeWizard,
  onSelectWizard
}) => {
  const [soundOn, setSoundOn] = React.useState(true);

  const handleSoundToggle = () => {
    const newState = toggleSound();
    setSoundOn(newState);
    if (newState) {
      playSelectChime();
    }
  };

  const handleWizardToggle = () => {
    playSelectChime();
    onSelectWizard(activeWizard === 'gaurav' ? 'standard' : 'gaurav');
  };

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-2xl bg-[#050713]/80 border-b border-amber-500/20 shadow-[0_4px_30px_rgba(0,0,0,0.5)] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
        {/* Logo & Brand */}
        <div
          onClick={onResetToHome}
          className="flex items-center gap-3 cursor-pointer group"
          id="navbar-brand-logo"
        >
          <div className="w-11 h-11 rounded-xl bg-slate-900/90 border border-amber-400/50 flex items-center justify-center shadow-[0_0_20px_rgba(245,158,11,0.35)] group-hover:scale-105 group-hover:border-amber-400 group-hover:shadow-[0_0_30px_rgba(245,158,11,0.6)] transition-all p-1">
            <MagicalHatIcon className="w-8 h-8" />
          </div>

          <div>
            <div className="font-cinzel text-xl sm:text-2xl font-black text-slate-100 tracking-wider flex items-center gap-1">
              <span>SCREEN</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 text-gold-glow">IT</span>
            </div>
            <div className="text-[10px] sm:text-[11px] text-amber-300/80 font-semibold tracking-widest uppercase font-sans -mt-1 flex items-center gap-1">
              <span>Cinematic Quest</span>
              <Sparkles className="w-2.5 h-2.5 text-amber-400" />
            </div>
          </div>
        </div>

        {/* Right Nav Utilities */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Wizard Switcher Quick Pill */}
          <button
            id="navbar-wizard-toggle"
            onClick={handleWizardToggle}
            className={`px-3 py-1.5 sm:py-2 rounded-xl border text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer shadow-sm ${
              activeWizard === 'gaurav'
                ? 'bg-gradient-to-r from-amber-500/25 to-amber-600/30 border-amber-500/60 text-amber-300 shadow-[0_0_15px_rgba(245,158,11,0.3)]'
                : 'atmospheric-glass border-slate-700 text-slate-300 hover:text-slate-100'
            }`}
            title="Toggle between Grand Oracle & Gaurav Cinephile Wizard"
          >
            {activeWizard === 'gaurav' ? (
              <>
                <UserCheck className="w-3.5 h-3.5 text-amber-400" />
                <span className="hidden sm:inline">Gaurav Oracle</span>
                <span className="sm:hidden">Gaurav</span>
                <span className="text-[9px] px-1 py-0.2 rounded bg-amber-500/30 text-amber-200 uppercase tracking-tighter">IMDb</span>
              </>
            ) : (
              <>
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span className="hidden sm:inline">Grand Oracle</span>
                <span className="sm:hidden">Oracle</span>
              </>
            )}
          </button>

          {/* Sound FX Toggle */}
          <button
            onClick={handleSoundToggle}
            className="p-2 sm:px-3 sm:py-2 rounded-xl atmospheric-glass hover:border-amber-500/50 text-slate-300 hover:text-amber-300 transition-all flex items-center gap-1.5 text-xs font-semibold cursor-pointer group shadow-sm"
            title={soundOn ? 'Mute magical spell sound effects' : 'Unmute sound effects'}
            aria-label="Toggle Sound Effects"
          >
            {soundOn ? (
              <>
                <Volume2 className="w-4 h-4 text-amber-400 group-hover:scale-110 transition-transform" />
                <span className="hidden md:inline">Audio</span>
              </>
            ) : (
              <>
                <VolumeX className="w-4 h-4 text-slate-500" />
                <span className="hidden md:inline text-slate-500">Muted</span>
              </>
            )}
          </button>

          {/* Watched History Vault */}
          <button
            id="navbar-watched-btn"
            onClick={onOpenHistory}
            className="px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-xl atmospheric-glass hover:border-amber-500/50 text-slate-200 hover:text-amber-300 transition-all flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-semibold cursor-pointer group shadow-sm"
          >
            <Clapperboard className="w-4 h-4 text-amber-400 group-hover:scale-110 transition-transform" />
            <span className="hidden sm:inline">Vault</span>
            {watchedCount > 0 && (
              <span className="px-1.5 sm:px-2 py-0.5 text-[10px] font-bold rounded-full bg-amber-500/25 text-amber-300 border border-amber-500/50 shadow-[0_0_10px_rgba(245,158,11,0.3)]">
                {watchedCount}
              </span>
            )}
          </button>

          {/* Quest Action */}
          {!isQuestActive && (
            <button
              onClick={() => {
                playSelectChime();
                onStartQuest();
              }}
              className="gold-glow-btn px-3.5 sm:px-5 py-1.5 sm:py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-1.5 sm:gap-2 cursor-pointer shadow-lg"
            >
              <Compass className="w-4 h-4" />
              <span className="hidden sm:inline">Start Quest</span>
              <span className="sm:hidden">Quest</span>
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

