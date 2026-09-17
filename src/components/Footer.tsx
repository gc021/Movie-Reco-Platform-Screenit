import React from 'react';
import { ShieldCheck, Film, Heart, Sparkles } from 'lucide-react';
import { MagicalHatIcon } from './MagicalHatIcon';

interface FooterProps {
  onStartQuest: () => void;
  onOpenHistory: () => void;
  onOpenCategories?: (tab: 'directors' | 'actors' | 'genres') => void;
  onOpenCouncil?: () => void;
  onOpenAdmin?: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onStartQuest,
  onOpenHistory,
  onOpenCategories,
  onOpenCouncil,
  onOpenAdmin
}) => {
  return (
    <footer className="mt-20 border-t border-slate-800/80 bg-[#050713]/90 backdrop-blur-xl text-slate-400 py-12 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        {/* Brand column */}
        <div className="md:col-span-2 space-y-3">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-slate-900 border border-amber-400/50 flex items-center justify-center text-slate-950 font-black text-sm shadow-[0_0_15px_rgba(245,158,11,0.3)] p-1">
              <MagicalHatIcon className="w-6 h-6" />
            </div>
            <span className="font-cinzel text-xl font-bold text-slate-100 tracking-wider">SCREENIT</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-400 max-w-md leading-relaxed">
            The adventure-themed movie recommendation experience. Conquering movie-night indecision through seven questions, top curated recommendations only, and verified Indian OTT streaming.
          </p>
          <div className="flex items-center gap-4 text-xs text-slate-400 pt-1">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              100% Client-Side Privacy
            </span>
            <span>•</span>
            <span>No Account Required</span>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-2">
          <h4 className="font-cinzel text-xs font-bold text-amber-400 uppercase tracking-wider">
            Adventure Quest
          </h4>
          <ul className="space-y-1.5 text-xs text-slate-400">
            <li>
              <button onClick={onStartQuest} className="hover:text-amber-300 transition-colors cursor-pointer">
                Start 7-Step Movie Quest
              </button>
            </li>
            {onOpenCouncil && (
              <li>
                <button onClick={onOpenCouncil} className="hover:text-amber-300 transition-colors cursor-pointer">
                  The Council of Oracles
                </button>
              </li>
            )}
            <li>
              <button onClick={onOpenHistory} className="hover:text-amber-300 transition-colors cursor-pointer">
                Manage Watched Movie Vault
              </button>
            </li>
            {onOpenCategories && (
              <>
                <li>
                  <button onClick={() => onOpenCategories('directors')} className="hover:text-amber-300 transition-colors cursor-pointer">
                    Browse by Director
                  </button>
                </li>
                <li>
                  <button onClick={() => onOpenCategories('actors')} className="hover:text-amber-300 transition-colors cursor-pointer">
                    Browse by Actor
                  </button>
                </li>
                <li>
                  <button onClick={() => onOpenCategories('genres')} className="hover:text-amber-300 transition-colors cursor-pointer">
                    Browse by Genre
                  </button>
                </li>
              </>
            )}
            {onOpenAdmin && (
              <li className="pt-1">
                <button
                  onClick={onOpenAdmin}
                  className="inline-flex items-center gap-1.5 text-xs text-amber-400 hover:text-amber-300 font-semibold transition-colors cursor-pointer"
                >
                  <span>📊 Creator Vault (Analytics & Leads)</span>
                </button>
              </li>
            )}
          </ul>
        </div>

        {/* OTT Rights & Legal Disclaimer */}
        <div className="space-y-2">
          <h4 className="font-cinzel text-xs font-bold text-slate-300 uppercase tracking-wider">
            Streaming & Data Notice
          </h4>
          <p className="text-[11px] text-slate-500 leading-relaxed">
            Streaming availability across Netflix India, Prime Video, JioHotstar, Apple TV, and regional OTT platforms is updated periodically. Availability and regional subscription licensing may change. All movie metadata and trademarks belong to their respective copyright holders.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
        <div>
          © {new Date().getFullYear()} Screenit (“Screen It”) • Top Curated Recommendations Only.
        </div>
        <div className="flex items-center gap-1 text-slate-400">
          <span>Finding the hidden movie gems for your watch party</span>
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
        </div>
      </div>
    </footer>
  );
};
