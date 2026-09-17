import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, UserCheck, Eye, EyeOff, Film, Award, ShieldAlert, Sliders } from 'lucide-react';
import { WizardType } from '../types';
import { playSelectChime } from '../services/soundEffects';

interface WizardSelectorProps {
  activeWizard: WizardType;
  onSelectWizard: (wizard: WizardType) => void;
  includeGauravRated: boolean;
  onToggleIncludeRated: (include: boolean) => void;
  compact?: boolean;
}

export const WizardSelector: React.FC<WizardSelectorProps> = ({
  activeWizard,
  onSelectWizard,
  includeGauravRated,
  onToggleIncludeRated,
  compact = false
}) => {
  const handleWizardChange = (type: WizardType) => {
    playSelectChime();
    onSelectWizard(type);
  };

  if (compact) {
    return (
      <div className="flex items-center gap-2 p-1.5 rounded-2xl atmospheric-glass border-amber-500/30">
        <button
          onClick={() => handleWizardChange('standard')}
          className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
            activeWizard === 'standard'
              ? 'bg-amber-500 text-slate-950 shadow-[0_0_15px_rgba(245,158,11,0.5)]'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Grand Oracle</span>
        </button>

        <button
          onClick={() => handleWizardChange('gaurav')}
          className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
            activeWizard === 'gaurav'
              ? 'bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 shadow-[0_0_15px_rgba(245,158,11,0.6)]'
              : 'text-slate-400 hover:text-amber-300'
          }`}
        >
          <UserCheck className="w-3.5 h-3.5 text-slate-950" />
          <span>Gaurav's Oracle</span>
          <span className="text-[10px] px-1 py-0.2 rounded bg-slate-950/20 font-black">Cinephile</span>
        </button>
      </div>
    );
  }

  return (
    <div className="w-full atmospheric-card rounded-3xl p-5 sm:p-6 border-amber-500/40 relative overflow-hidden shadow-2xl">
      {/* Background glow banner */}
      <div className="absolute top-0 right-0 w-80 h-40 bg-gradient-to-l from-amber-500/10 to-transparent blur-3xl pointer-events-none" />

      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-5 pb-4 border-b border-slate-800/80">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-amber-500/20 border border-amber-500/50 flex items-center justify-center text-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.3)]">
            <Sliders className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-cinzel text-lg font-bold text-slate-100 flex items-center gap-2">
              <span>Choose Your Divination Wizard</span>
              <span className="text-xs font-sans px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40">
                Personalized
              </span>
            </h3>
            <p className="text-xs text-slate-400">
              Select the intelligence guiding your 7-question quest and recommendation scoring.
            </p>
          </div>
        </div>

        {/* Wizard Switcher Pills */}
        <div className="flex items-center p-1 rounded-2xl bg-slate-950/80 border border-slate-800 self-stretch sm:self-auto">
          <button
            id="wizard-mode-standard"
            onClick={() => handleWizardChange('standard')}
            className={`flex-1 sm:flex-none px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
              activeWizard === 'standard'
                ? 'bg-amber-500 text-slate-950 shadow-[0_0_15px_rgba(245,158,11,0.5)]'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Sparkles className="w-4 h-4" />
            <span>The Grand Oracle</span>
          </button>

          <button
            id="wizard-mode-gaurav"
            onClick={() => handleWizardChange('gaurav')}
            className={`flex-1 sm:flex-none px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
              activeWizard === 'gaurav'
                ? 'bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-slate-950 shadow-[0_0_20px_rgba(245,158,11,0.6)]'
                : 'text-slate-400 hover:text-amber-300'
            }`}
          >
            <UserCheck className="w-4 h-4" />
            <span>Gaurav (Cinephile Wizard)</span>
          </button>
        </div>
      </div>

      {/* Dynamic Detail Card Based on Selected Wizard */}
      {activeWizard === 'gaurav' ? (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-4"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Gaurav profile overview */}
            <div className="p-4 rounded-2xl bg-gradient-to-br from-amber-500/15 via-slate-900/60 to-slate-950 border border-amber-500/30 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                    <UserCheck className="w-3.5 h-3.5" />
                    Gaurav's Taste Matrix
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-amber-500/30 text-amber-200 font-bold border border-amber-500/50">
                    230+ IMDb Ratings
                  </span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Calibrated directly from Gaurav's personal IMDb history. Favors high-concept mind-benders, intricate suspense, and brilliant dialogue from Nolan, Fincher, Tarantino, Chazelle, and Villeneuve.
                </p>
              </div>

              <div className="pt-3 mt-2 border-t border-amber-500/20 flex items-center justify-between text-[11px] text-amber-300">
                <span>⭐ 10/10 Masterpieces: 40+</span>
                <span>⭐ 9/10 Classics: 80+</span>
              </div>
            </div>

            {/* Contrastive engine description */}
            <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 flex flex-col justify-between">
              <div className="space-y-1.5">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5" />
                  Contrastive Boosts
                </span>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Heavy preference for intricate plot twists, razor-sharp scripts, and visceral audio-visual storytelling.
                </p>
                <div className="flex flex-wrap gap-1 pt-1">
                  {['Nolan', 'Fincher', 'Tarantino', 'Villeneuve', 'Chazelle', 'Wright'].map(name => (
                    <span key={name} className="px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-300 text-[10px] font-semibold border border-emerald-500/30">
                      {name}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-2 mt-2 border-t border-slate-800 text-[11px] text-slate-400 flex items-center gap-1.5">
                <ShieldAlert className="w-3 h-3 text-red-400" />
                <span>Filters out cheap parodies & generic CGI cash-ins</span>
              </div>
            </div>

            {/* Include / Exclude Toggle Controller */}
            <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 flex flex-col justify-between">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                  <Film className="w-3.5 h-3.5" />
                  Gaurav's Rated Titles
                </span>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Choose whether to include movies Gaurav has already rated or strictly discover unseen gems:
                </p>
              </div>

              <div className="pt-3">
                <button
                  id="toggle-gaurav-include-rated"
                  onClick={() => {
                    playSelectChime();
                    onToggleIncludeRated(!includeGauravRated);
                  }}
                  className={`w-full py-2.5 px-3.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer border ${
                    includeGauravRated
                      ? 'bg-amber-500/20 border-amber-500/60 text-amber-300 shadow-[0_0_15px_rgba(245,158,11,0.2)]'
                      : 'bg-indigo-500/20 border-indigo-500/60 text-indigo-300 shadow-[0_0_15px_rgba(99,102,241,0.2)]'
                  }`}
                >
                  {includeGauravRated ? (
                    <>
                      <Eye className="w-4 h-4 text-amber-400" />
                      <span>Include Gaurav's Rated Classics</span>
                    </>
                  ) : (
                    <>
                      <EyeOff className="w-4 h-4 text-indigo-400" />
                      <span>Exclude Rated (Unseen Recommendations)</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-300"
        >
          <div className="flex items-center gap-3">
            <Sparkles className="w-5 h-5 text-amber-400 shrink-0" />
            <div>
              <strong className="text-slate-100 block sm:inline mr-2">The Grand Oracle:</strong>
              Curation algorithm balanced across universal IMDb 6.5+ ratings, emotional archetype alignment, and quest parameters.
            </div>
          </div>
          <button
            onClick={() => handleWizardChange('gaurav')}
            className="px-4 py-1.5 rounded-xl bg-amber-500/15 hover:bg-amber-500/25 text-amber-300 border border-amber-500/40 text-xs font-semibold shrink-0 cursor-pointer transition-all"
          >
            Switch to Gaurav's Oracle →
          </button>
        </motion.div>
      )}
    </div>
  );
};
