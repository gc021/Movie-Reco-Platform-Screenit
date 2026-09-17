import React from 'react';
import { motion } from 'motion/react';
import {
  Sparkles, UserCheck, ArrowRight, ShieldCheck,
  Film, Quote, Check, Compass, ArrowLeft, Star
} from 'lucide-react';
import { COUNCIL_OF_ORACLES } from '../data/councilOfOracles';
import { WizardType, Movie } from '../types';
import { playSelectChime, playQuestVictory } from '../services/soundEffects';
import { MagicalHatIcon } from './MagicalHatIcon';

interface CouncilOfOraclesViewProps {
  activeWizard: WizardType;
  onSelectWizard: (wizardId: WizardType) => void;
  onStartQuestWithWizard: (wizardId: WizardType) => void;
  onBackToHome: () => void;
  onSelectMovieTitle?: (title: string) => void;
}

export const CouncilOfOraclesView: React.FC<CouncilOfOraclesViewProps> = ({
  activeWizard,
  onSelectWizard,
  onStartQuestWithWizard,
  onBackToHome
}) => {
  const handleInvoke = (wizardId: WizardType) => {
    playQuestVictory();
    onSelectWizard(wizardId);
  };

  const handleStartQuest = (wizardId: WizardType) => {
    playSelectChime();
    onStartQuestWithWizard(wizardId);
  };

  return (
    <div id="council-of-oracles-view" className="py-8 px-4 sm:px-6 max-w-7xl mx-auto space-y-10">
      {/* Top Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <button
              onClick={onBackToHome}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl atmospheric-glass hover:border-amber-500/50 text-slate-300 hover:text-amber-300 text-xs font-semibold transition-all cursor-pointer group"
            >
              <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
              <span>Back to Sanctuary</span>
            </button>
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest flex items-center gap-1">
              <MagicalHatIcon className="w-4 h-4 text-amber-400" />
              High Chamber of Divination
            </span>
          </div>

          <h1 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-100">
            The Council of Oracles
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed">
            Choose the master mind guiding your 7-question movie divination. From Gaurav’s 230+ IMDb contrastive matrix to Nolan’s practical epics and Tarantino’s sharp dialogues, invoke the oracle whose cinematic soul matches yours.
          </p>
        </div>

        {/* Currently Active Oracle Badge */}
        <div className="p-3 rounded-2xl bg-amber-500/10 border border-amber-500/40 flex items-center gap-3 shrink-0">
          <div className="w-10 h-10 rounded-xl bg-amber-500 flex items-center justify-center text-slate-950 font-black shadow-[0_0_15px_rgba(245,158,11,0.5)]">
            <Sparkles className="w-5 h-5 text-slate-950" />
          </div>
          <div>
            <span className="text-[10px] uppercase font-bold text-amber-400 tracking-wider block">
              Active Oracle
            </span>
            <span className="text-xs sm:text-sm font-bold text-slate-100 font-cinzel">
              {COUNCIL_OF_ORACLES.find(c => c.id === activeWizard)?.name || 'The Grand Oracle'}
            </span>
          </div>
        </div>
      </div>

      {/* Council Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {COUNCIL_OF_ORACLES.map((oracle, idx) => {
          const isActive = activeWizard === oracle.id;

          return (
            <motion.div
              key={oracle.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className={`parchment-card rounded-3xl p-6 flex flex-col justify-between space-y-5 border-2 transition-all relative overflow-hidden ${
                isActive
                  ? 'border-amber-400/80 shadow-[0_0_40px_rgba(245,158,11,0.3)] bg-gradient-to-b from-amber-500/10 via-slate-900/90 to-slate-950'
                  : 'border-slate-800 hover:border-amber-500/40 hover:shadow-2xl'
              }`}
            >
              {/* Active Golden Ribbon */}
              {isActive && (
                <div className="absolute top-0 right-0 bg-gradient-to-l from-amber-400 to-amber-500 text-slate-950 font-extrabold text-[10px] px-4 py-1 rounded-bl-xl shadow-lg flex items-center gap-1">
                  <Check className="w-3 h-3 stroke-[3]" />
                  <span>ACTIVE ORACLE</span>
                </div>
              )}

              {/* Header Info */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 rounded-2xl bg-slate-900 border border-slate-700 flex items-center justify-center text-3xl shadow-inner shrink-0">
                    {oracle.avatar}
                  </div>
                  <div>
                    <h3 className="font-cinzel text-lg sm:text-xl font-bold text-slate-100 leading-tight">
                      {oracle.name}
                    </h3>
                    <p className="text-xs font-semibold text-amber-300">
                      {oracle.roleTitle}
                    </p>
                    <p className="text-[11px] text-slate-400">
                      {oracle.epithet}
                    </p>
                  </div>
                </div>

                {/* Quote */}
                <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 relative">
                  <Quote className="w-4 h-4 text-amber-500/30 absolute top-2 left-2" />
                  <p className="text-xs italic text-slate-300 pl-4 leading-relaxed">
                    “{oracle.quote}”
                  </p>
                </div>

                {/* Philosophy */}
                <div className="space-y-1 text-xs">
                  <span className="font-bold text-slate-400 uppercase tracking-wider text-[10px] block">
                    Divination Philosophy:
                  </span>
                  <p className="text-slate-300 leading-relaxed text-[11px]">
                    {oracle.philosophy}
                  </p>
                </div>

                {/* Hallmark Films */}
                <div className="space-y-1.5 pt-1">
                  <span className="font-bold text-amber-400 uppercase tracking-wider text-[10px] block flex items-center gap-1">
                    <Film className="w-3 h-3" />
                    Signature Vault Masterpieces:
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {oracle.hallmarkFilms.map((film, fIdx) => (
                      <span
                        key={fIdx}
                        className="text-[10px] px-2 py-0.5 rounded-md bg-indigo-950/80 border border-indigo-500/40 text-indigo-300 font-semibold"
                      >
                        {film}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-slate-800/80 flex flex-col gap-2">
                <button
                  onClick={() => handleInvoke(oracle.id)}
                  className={`w-full py-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md ${
                    isActive
                      ? 'bg-amber-500 text-slate-950 shadow-[0_0_15px_rgba(245,158,11,0.5)]'
                      : 'atmospheric-glass border-slate-700 text-slate-200 hover:border-amber-500/60 hover:text-amber-300'
                  }`}
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{isActive ? 'Currently Chosen Oracle' : 'Invoke This Oracle'}</span>
                </button>

                <button
                  onClick={() => handleStartQuest(oracle.id)}
                  className="w-full py-2 rounded-xl text-xs font-bold text-amber-300 hover:text-amber-200 bg-amber-500/15 hover:bg-amber-500/25 border border-amber-500/40 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Compass className="w-3.5 h-3.5 text-amber-400" />
                  <span>Start 7-Step Quest as {oracle.name.split(' ')[0]}</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
