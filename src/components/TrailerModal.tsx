import React from 'react';
import { motion } from 'motion/react';
import { X, Film, ExternalLink } from 'lucide-react';
import { Movie } from '../types';

interface TrailerModalProps {
  movie: Movie | null;
  onClose: () => void;
}

export const TrailerModal: React.FC<TrailerModalProps> = ({ movie, onClose }) => {
  if (!movie) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-xl">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="w-full max-w-4xl parchment-card border border-amber-500/40 rounded-3xl shadow-[0_0_60px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col"
      >
        {/* Top bar */}
        <div className="px-5 py-3.5 atmospheric-glass border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Film className="w-4 h-4 text-amber-400" />
            <h3 className="font-cinzel text-base sm:text-lg font-bold text-slate-100 truncate max-w-md">
              {movie.title} ({movie.year}) — Official Trailer
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-xl atmospheric-glass text-slate-400 hover:text-slate-200 hover:border-amber-500/40 transition-all cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Player */}
        <div className="relative w-full aspect-video bg-black">
          {movie.trailerYoutubeId ? (
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${movie.trailerYoutubeId}?autoplay=1&rel=0`}
              title={`${movie.title} Trailer`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full border-0"
            />
          ) : (
            <div className="flex flex-col items-center justify-center h-full text-slate-400 space-y-3">
              <Film className="w-12 h-12 text-slate-600" />
              <p>Official trailer preview will load from YouTube.</p>
              <a
                href={`https://www.youtube.com/results?search_query=${encodeURIComponent(movie.title + ' official trailer ' + movie.year)}`}
                target="_blank"
                rel="noreferrer"
                className="gold-glow-btn px-5 py-2.5 rounded-xl font-bold text-sm flex items-center gap-2"
              >
                <span>Search Trailer on YouTube</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          )}
        </div>

        {/* Bottom Details Strip */}
        <div className="p-4 atmospheric-glass border-t border-slate-800 flex items-center justify-between text-xs sm:text-sm text-slate-400">
          <div>
            Directed by <strong className="text-slate-200">{movie.director}</strong> • Runtime: <strong className="text-slate-200">{movie.runtimeMinutes} min</strong> • IMDb: <strong className="text-amber-400">⭐ {movie.imdbRating}</strong>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-xl atmospheric-glass hover:border-amber-500/50 text-slate-300 hover:text-amber-300 font-semibold text-xs transition-all cursor-pointer shadow-sm"
          >
            Done Watching
          </button>
        </div>
      </motion.div>
    </div>
  );
};
