import React from 'react';
import { motion } from 'motion/react';
import { X, Star, Clock, Play, Clapperboard, Check, Sparkles, ExternalLink, Shield, UserCheck } from 'lucide-react';
import { Movie } from '../types';
import { findGauravRating, evaluateMovieUnderGauravTaste } from '../data/gauravTasteProfile';
import { playSelectChime } from '../services/soundEffects';
import { getOttPlatformUrl } from '../services/ottLinks';

interface MovieDetailModalProps {
  movie: Movie | null;
  onClose: () => void;
  onWatchTrailer: (movie: Movie) => void;
  onToggleWatched: (movieId: string) => void;
  isWatched: boolean;
  onChooseMovie?: (movie: Movie) => void;
}

export const MovieDetailModal: React.FC<MovieDetailModalProps> = ({
  movie,
  onClose,
  onWatchTrailer,
  onToggleWatched,
  isWatched,
  onChooseMovie
}) => {
  if (!movie) return null;

  const gRating = findGauravRating(movie.title, movie.year);
  const evaluation = evaluateMovieUnderGauravTaste(movie);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-xl overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.92 }}
        className="w-full max-w-3xl parchment-card border border-amber-500/40 rounded-3xl shadow-[0_0_60px_rgba(0,0,0,0.8)] overflow-hidden relative max-h-[90vh] flex flex-col"
      >
        {/* Backdrop Header */}
        <div className="relative h-48 sm:h-64 w-full overflow-hidden">
          <img
            src={movie.backdropUrl || movie.posterUrl}
            alt={movie.title}
            className="w-full h-full object-cover brightness-75"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0C1024] via-[#0C1024]/40 to-transparent" />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-xl atmospheric-glass text-slate-300 hover:text-white hover:border-amber-500/40 transition-all cursor-pointer shadow-md"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Floating Poster + Quick info in backdrop */}
          <div className="absolute bottom-4 left-6 right-6 flex items-end gap-4">
            <img
              src={movie.posterUrl}
              alt={movie.title}
              className="w-20 h-28 sm:w-28 sm:h-40 rounded-2xl object-cover border-2 border-amber-400/50 shadow-2xl hidden sm:block shrink-0"
            />
            <div className="space-y-1">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-xl atmospheric-glass text-amber-300 border-amber-500/40 text-xs font-bold flex items-center gap-1 shadow-sm">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <span>IMDb {movie.imdbRating}</span>
                </span>

                {gRating && (
                  <span className="px-2.5 py-0.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 text-xs font-black flex items-center gap-1 shadow-md">
                    <UserCheck className="w-3.5 h-3.5" />
                    <span>Gaurav: {gRating.rating}/10</span>
                  </span>
                )}

                <span className="text-xs px-2.5 py-0.5 rounded-xl atmospheric-glass text-slate-300 font-medium border-slate-700">
                  {movie.year}
                </span>
                <span className="text-xs px-2.5 py-0.5 rounded-xl atmospheric-glass text-slate-300 font-medium flex items-center gap-1 border-slate-700">
                  <Clock className="w-3 h-3 text-slate-400" />
                  <span>{movie.runtimeMinutes} min</span>
                </span>
                <span className="text-xs px-2.5 py-0.5 rounded-xl bg-indigo-900/80 text-indigo-200 border border-indigo-500/40 font-medium">
                  {movie.ageRating}
                </span>
              </div>
              <h2 className="font-cinzel text-xl sm:text-3xl font-extrabold text-slate-100 leading-tight">
                {movie.title}
              </h2>
              <div className="text-xs sm:text-sm text-amber-200/90 font-medium">
                Directed by <span className="font-semibold text-slate-100">{movie.director}</span>
              </div>
            </div>
          </div>
        </div>


        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          {/* Genre Badges */}
          <div className="flex flex-wrap gap-2">
            {movie.genres.map(g => (
              <span key={g} className="px-3 py-1 rounded-full atmospheric-glass text-slate-200 text-xs font-medium border-slate-700">
                {g}
              </span>
            ))}
            {movie.contentTags.map(t => (
              <span key={t} className="px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-medium">
                #{t}
              </span>
            ))}
          </div>

          {/* Synopsis */}
          <div>
            <h4 className="font-cinzel text-sm font-bold text-amber-300 uppercase tracking-wider mb-2">
              Synopsis
            </h4>
            <p className="text-sm text-slate-300 leading-relaxed">
              {movie.synopsis}
            </p>
          </div>

          {/* Cast */}
          {movie.cast && movie.cast.length > 0 && (
            <div>
              <h4 className="font-cinzel text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                Starring Cast
              </h4>
              <p className="text-xs sm:text-sm text-slate-300">
                {movie.cast.join(', ')}
              </p>
            </div>
          )}

          {/* Indian OTT Streaming Availability */}
          <div className="p-4 rounded-2xl atmospheric-glass border-amber-500/30 space-y-2">
            <div className="flex items-center justify-between">
              <h4 className="font-cinzel text-sm font-bold text-amber-300 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>Where to Watch in India</span>
              </h4>
              <span className="text-[11px] text-slate-400 italic">
                Availability may change
              </span>
            </div>

            {movie.indianOtt.available && movie.indianOtt.platforms.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                {movie.indianOtt.platforms.map((plat, idx) => {
                  const ottUrl = getOttPlatformUrl(plat.name, movie.title, movie.year);
                  return (
                    <a
                      key={idx}
                      href={ottUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-2.5 rounded-xl bg-slate-800/90 hover:bg-amber-500/20 border border-slate-700/80 hover:border-amber-500/50 text-xs shadow-sm transition-all text-slate-100 hover:text-amber-300 group"
                      title={`Stream ${movie.title} on ${plat.name}`}
                    >
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-400 shadow-[0_0_6px_rgba(245,158,11,0.6)] group-hover:scale-125 transition-transform" />
                        <strong className="font-semibold">{plat.name}</strong>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-amber-300 font-medium px-2 py-0.5 rounded bg-amber-500/15 border border-amber-500/25 text-[11px]">
                          {plat.pricing || plat.type}
                        </span>
                        <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-amber-300 transition-colors" />
                      </div>
                    </a>
                  );
                })}
              </div>
            ) : (
              <div className="text-xs text-slate-400 italic py-1">
                Streaming availability in India is currently updating across regional platforms. Check YouTube Movies or Apple TV for rent/purchase.
              </div>
            )}
          </div>
        </div>

        {/* Bottom Actions Bar */}
        <div className="p-4 atmospheric-glass border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                onToggleWatched(movie.id);
                playSelectChime();
              }}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                isWatched
                  ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 shadow-sm'
                  : 'atmospheric-glass text-slate-300 hover:text-white hover:border-slate-600'
              }`}
            >
              <Check className="w-4 h-4" />
              <span>{isWatched ? 'Marked as Watched' : 'Mark as Watched'}</span>
            </button>

            <button
              onClick={() => onWatchTrailer(movie)}
              className="px-3.5 py-2 rounded-xl atmospheric-glass hover:border-amber-500/40 text-slate-200 hover:text-amber-300 text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer shadow-sm"
            >
              <Play className="w-4 h-4 text-amber-400 fill-amber-400" />
              <span>Watch Trailer</span>
            </button>
          </div>

          {onChooseMovie && (
            <button
              onClick={() => {
                playSelectChime();
                onChooseMovie(movie);
              }}
              className="gold-glow-btn px-6 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 cursor-pointer shadow-md"
            >
              <Sparkles className="w-4 h-4" />
              <span>Select as Tonight’s Adventure</span>
            </button>
          )}
        </div>
      </motion.div>
    </div>
  );
};
