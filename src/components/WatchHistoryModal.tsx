import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import {
  X, Search, Check, Trash2, Upload, ShieldCheck,
  Film, Sparkles, AlertCircle, ArrowRight
} from 'lucide-react';
import { Movie } from '../types';
import { CURATED_MOVIES } from '../data/curatedMovies';
import { playSelectChime } from '../services/soundEffects';

interface WatchHistoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  watchedMovieIds: string[];
  onToggleWatched: (movieId: string) => void;
  onImportWatched: (movieIds: string[]) => void;
  onClearWatched: () => void;
  isPreQuizCheckpoint?: boolean;
  onProceedToRecommendations?: () => void;
}

export const WatchHistoryModal: React.FC<WatchHistoryModalProps> = ({
  isOpen,
  onClose,
  watchedMovieIds,
  onToggleWatched,
  onImportWatched,
  onClearWatched,
  isPreQuizCheckpoint = false,
  onProceedToRecommendations
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [importStatus, setImportStatus] = useState<string | null>(null);
  const [allMovies, setAllMovies] = useState<Movie[]>(CURATED_MOVIES);

  if (!isOpen) return null;

  const watchedSet = new Set(watchedMovieIds);

  const filteredMovies = allMovies.filter(m =>
    m.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    m.director.toLowerCase().includes(searchQuery.toLowerCase()) ||
    m.genres.some(g => g.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const text = event.target?.result as string;
        const matchedIds: string[] = [];

        // Parse CSV lines or JSON
        if (file.name.endsWith('.json')) {
          const parsed = JSON.parse(text);
          const titles = Array.isArray(parsed)
            ? parsed.map((item: any) => (typeof item === 'string' ? item : item.title || item.Title || item.name))
            : [];

          titles.forEach((t: string) => {
            if (!t) return;
            const match = CURATED_MOVIES.find(m => m.title.toLowerCase() === t.trim().toLowerCase());
            if (match) matchedIds.push(match.id);
          });
        } else {
          // Plain CSV or list
          const lines = text.split(/\r?\n/);
          lines.forEach(line => {
            const cleanLine = line.replace(/"/g, '').trim().toLowerCase();
            const match = CURATED_MOVIES.find(m => cleanLine.includes(m.title.toLowerCase()) || m.title.toLowerCase() === cleanLine);
            if (match && !matchedIds.includes(match.id)) {
              matchedIds.push(match.id);
            }
          });
        }

        if (matchedIds.length > 0) {
          onImportWatched(matchedIds);
          setImportStatus(`Successfully imported ${matchedIds.length} titles from your file!`);
          playSelectChime();
        } else {
          setImportStatus('No matching Hollywood catalog titles found in file. You can search & tap titles below.');
        }
      } catch (err) {
        setImportStatus('Could not read file format. Try uploading an IMDb or Letterboxd CSV/JSON.');
      }
    };
    reader.readAsText(file);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-xl overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        className="w-full max-w-2xl parchment-card border border-amber-500/40 rounded-3xl shadow-[0_0_60px_rgba(0,0,0,0.8)] p-6 sm:p-7 relative max-h-[90vh] flex flex-col"
      >
        {/* Top Header */}
        <div className="flex items-start justify-between pb-4 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2">
              <Film className="w-5 h-5 text-amber-400" />
              <h2 className="font-cinzel text-xl sm:text-2xl font-bold text-slate-100">
                {isPreQuizCheckpoint ? 'Watch History Calibration' : 'Your Watched Movie Vault'}
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              {isPreQuizCheckpoint
                ? 'Already seen a few Hollywood gems? Mark them to guarantee 100% fresh recommendations.'
                : 'Manage movies excluded from the wizard’s recommendations.'}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl atmospheric-glass text-slate-400 hover:text-slate-200 hover:border-amber-500/40 transition-all cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Privacy Notice Badge */}
        <div className="mt-4 px-3.5 py-2.5 rounded-xl bg-indigo-950/70 border border-indigo-500/40 flex items-center gap-3 text-xs text-indigo-200 shadow-sm">
          <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
          <div>
            <span className="font-semibold text-emerald-300">100% Client-Side Privacy: </span>
            Your watch history stays strictly inside your browser’s localStorage. No external accounts required.
          </div>
        </div>

        {/* Import & Search Tools */}
        <div className="mt-4 space-y-3">
          <div className="flex flex-col sm:flex-row gap-2">
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search by title, director, or genre..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="w-full atmospheric-glass border-slate-700/80 focus:border-amber-400 rounded-xl pl-10 pr-4 py-2 text-sm text-slate-200 focus:outline-none transition-colors"
              />
            </div>

            <label className="px-4 py-2 atmospheric-glass hover:border-amber-500/50 rounded-xl text-xs sm:text-sm font-semibold text-slate-200 cursor-pointer flex items-center justify-center gap-2 transition-all shrink-0 shadow-sm">
              <Upload className="w-4 h-4 text-amber-400" />
              <span>Import CSV / JSON</span>
              <input
                type="file"
                accept=".csv,.json,.txt"
                onChange={handleFileUpload}
                className="hidden"
              />
            </label>
          </div>

          {importStatus && (
            <div className="text-xs text-amber-300 bg-amber-500/15 border border-amber-500/40 px-3 py-1.5 rounded-xl flex items-center gap-2 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>{importStatus}</span>
            </div>
          )}
        </div>

        {/* Watched count & clear button */}
        <div className="mt-3 flex items-center justify-between text-xs text-slate-400 px-1">
          <span>
            Marked as watched: <strong className="text-amber-300 font-bold">{watchedMovieIds.length}</strong> titles
          </span>
          {watchedMovieIds.length > 0 && (
            <button
              onClick={onClearWatched}
              className="text-red-400 hover:text-red-300 flex items-center gap-1 hover:underline cursor-pointer"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>Clear history</span>
            </button>
          )}
        </div>

        {/* Scrollable Movies Checklist */}
        <div className="mt-3 flex-1 overflow-y-auto max-h-64 border border-slate-800 rounded-2xl divide-y divide-slate-800/80 atmospheric-glass">
          {filteredMovies.length === 0 ? (
            <div className="p-6 text-center text-sm text-slate-400">
              No matching titles found.
            </div>
          ) : (
            filteredMovies.map(movie => {
              const isWatched = watchedSet.has(movie.id);
              return (
                <div
                  key={movie.id}
                  onClick={() => {
                    playSelectChime();
                    onToggleWatched(movie.id);
                  }}
                  className={`p-3 flex items-center justify-between cursor-pointer transition-colors ${
                    isWatched
                      ? 'bg-amber-500/15 hover:bg-amber-500/20'
                      : 'hover:bg-slate-800/50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-5 h-5 rounded-md flex items-center justify-center border transition-all ${
                        isWatched
                          ? 'bg-amber-400 border-amber-400 text-slate-950 shadow-[0_0_8px_rgba(245,158,11,0.5)]'
                          : 'border-slate-700 text-transparent'
                      }`}
                    >
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-slate-100">
                        {movie.title} <span className="text-xs text-slate-400 font-normal">({movie.year})</span>
                      </div>
                      <div className="text-xs text-slate-400">
                        {movie.genres.slice(0, 2).join(', ')} • {movie.director} • ⭐ {movie.imdbRating}
                      </div>
                    </div>
                  </div>

                  <span className={`text-xs px-2.5 py-0.5 rounded-full font-medium ${
                    isWatched
                      ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                      : 'atmospheric-glass text-slate-400'
                  }`}>
                    {isWatched ? 'Watched' : 'Unwatched'}
                  </span>
                </div>
              );
            })
          )}
        </div>

        {/* Bottom CTA Actions */}
        <div className="mt-5 pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl text-sm font-semibold text-slate-300 hover:text-slate-100 atmospheric-glass hover:border-slate-600 transition-all cursor-pointer"
          >
            {isPreQuizCheckpoint ? 'Skip for now' : 'Close'}
          </button>

          {isPreQuizCheckpoint && onProceedToRecommendations && (
            <button
              id="watch-history-proceed-btn"
              onClick={() => {
                playSelectChime();
                onProceedToRecommendations();
              }}
              className="gold-glow-btn w-full sm:w-auto px-6 py-2.5 rounded-xl text-sm font-bold flex items-center justify-center gap-2 cursor-pointer shadow-lg"
            >
              <span>See My 3 Movie Recommendations</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </motion.div>
    </div>
  );
};
