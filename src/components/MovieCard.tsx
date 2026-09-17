import React from 'react';
import { motion } from 'motion/react';
import {
  Star, Clock, Film, Sparkles, Play, RefreshCw,
  Check, Eye, ExternalLink, ShieldCheck, ChevronRight
} from 'lucide-react';
import { Movie, RecommendationResult } from '../types';
import { playSelectChime, playSwapSwoosh } from '../services/soundEffects';
import { getOttPlatformUrl } from '../services/ottLinks';

interface MovieCardProps {
  recommendation: RecommendationResult;
  index: number;
  onReplace: (movieId: string) => void;
  onMarkWatched: (movieId: string) => void;
  onWatchTrailer: (movie: Movie) => void;
  onSelectFinalChoice: (movie: Movie) => void;
  swapsRemaining: number;
  isReplacing?: boolean;
}

export const MovieCard: React.FC<MovieCardProps> = ({
  recommendation,
  index,
  onReplace,
  onMarkWatched,
  onWatchTrailer,
  onSelectFinalChoice,
  swapsRemaining,
  isReplacing = false
}) => {
  const { movie, wizardReason } = recommendation;

  const handleReplaceClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    playSwapSwoosh();
    onReplace(movie.id);
  };

  const handleWatchedClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    playSelectChime();
    onMarkWatched(movie.id);
  };

  const handleSelectClick = () => {
    playSelectChime();
    onSelectFinalChoice(movie);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      id={`recommendation-card-${movie.id}`}
      className={`parchment-card rounded-3xl overflow-hidden flex flex-col justify-between relative group border ${
        index === 0
          ? 'border-amber-400/60 shadow-[0_0_40px_rgba(245,158,11,0.25)] ring-1 ring-amber-400/40'
          : 'border-slate-800/80 hover:border-amber-500/40'
      }`}
    >
      {/* Top Banner Tag for First/Top Pick */}
      {index === 0 && (
        <div className="bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 text-slate-950 text-[11px] font-extrabold uppercase tracking-widest text-center py-1.5 px-4 shadow-md flex items-center justify-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 fill-slate-950" />
          <span>Wizard’s Prime Recommendation</span>
        </div>
      )}

      {/* Movie Poster & Header Info */}
      <div>
        <div className="relative h-60 sm:h-64 w-full overflow-hidden bg-slate-950">
          <img
            src={movie.posterUrl}
            alt={movie.title}
            className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 brightness-90 group-hover:brightness-95"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0C1024] via-[#0C1024]/40 to-transparent" />

          {/* IMDb Rating Badge & Gaurav Rating Badge with Atmospheric specular light */}
          <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
            <div className="atmospheric-glass border-amber-500/50 px-2.5 py-1 rounded-xl flex items-center gap-1.5 shadow-xl">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <span className="text-xs sm:text-sm font-extrabold text-amber-300">
                IMDb {movie.imdbRating.toFixed(1)}
              </span>
            </div>

            {recommendation.gauravRating && (
              <div className="px-2 py-0.8 rounded-xl bg-gradient-to-r from-amber-400 to-amber-600 text-slate-950 font-black text-[11px] flex items-center gap-1 shadow-[0_0_15px_rgba(245,158,11,0.6)] border border-amber-300/60">
                <Sparkles className="w-3 h-3 fill-slate-950" />
                <span>Gaurav: {recommendation.gauravRating}/10</span>
              </div>
            )}
          </div>

          {/* Runtime & Year Badge */}
          <div className="absolute top-3 right-3 atmospheric-glass border-slate-700/80 px-2.5 py-1 rounded-xl text-xs text-slate-300 font-semibold shadow-md flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-slate-400" />
            <span>{movie.runtimeMinutes} min</span>
            <span className="text-slate-500">•</span>
            <span>{movie.year}</span>
          </div>

          {/* Quick Play Trailer Floating Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onWatchTrailer(movie);
            }}
            className="absolute bottom-3 right-3 px-3.5 py-1.5 rounded-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold hover:scale-108 shadow-xl transition-all flex items-center gap-1.5 cursor-pointer shadow-[0_0_20px_rgba(245,158,11,0.5)]"
            title="Watch official trailer"
          >
            <Play className="w-3.5 h-3.5 fill-slate-950" />
            <span className="text-xs font-bold">Trailer</span>
          </button>
        </div>

        {/* Card Body */}
        <div className="p-5 sm:p-6 space-y-4">
          {/* Title and Genres */}
          <div>
            <h3 className="font-cinzel text-xl sm:text-2xl font-extrabold text-slate-100 leading-tight group-hover:text-amber-300 transition-colors">
              {movie.title}
            </h3>
            <div className="flex flex-wrap items-center gap-1.5 mt-2">
              {movie.genres.map(g => (
                <span
                  key={g}
                  className="px-2.5 py-0.5 rounded-lg atmospheric-glass text-[11px] font-semibold text-slate-300 border-slate-700/70"
                >
                  {g}
                </span>
              ))}
              <span className="px-2 py-0.5 rounded-lg bg-indigo-950/80 border border-indigo-500/40 text-[11px] font-semibold text-indigo-300">
                {movie.ageRating}
              </span>
            </div>
          </div>

          {/* Short Synopsis */}
          <p className="text-xs sm:text-sm text-slate-300/90 leading-relaxed line-clamp-3">
            {movie.synopsis}
          </p>

          {/* "Why the wizard chose this" magical reason */}
          <div className="p-3.5 rounded-2xl bg-gradient-to-br from-amber-500/15 via-amber-500/5 to-transparent border border-amber-500/35 space-y-2 relative shadow-inner">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5 text-[11px] font-bold text-amber-400 uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Why the Wizard Chose This</span>
              </div>
              {recommendation.gauravVerdict && (
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-amber-500/20 text-amber-300 border border-amber-500/40">
                  {recommendation.gauravVerdict}
                </span>
              )}
            </div>
            <p className="text-xs text-amber-200/95 italic leading-relaxed">
              “{wizardReason}”
            </p>
            {recommendation.contrastiveHighlights && recommendation.contrastiveHighlights.length > 0 && (
              <div className="pt-1.5 flex flex-wrap gap-1 border-t border-amber-500/20">
                {recommendation.contrastiveHighlights.slice(0, 2).map((ch, i) => (
                  <span key={i} className="text-[10px] px-2 py-0.5 rounded bg-amber-400/10 text-amber-300 font-medium">
                    ✓ {ch}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Where to watch in India Section */}
          <div className="p-3.5 rounded-2xl atmospheric-glass space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="font-cinzel font-bold text-slate-200 flex items-center gap-1.5">
                <Film className="w-3.5 h-3.5 text-amber-400" />
                <span>Where to watch in India</span>
              </span>
              <span className="text-[10px] text-amber-300/80 font-medium">
                Click to stream ↗
              </span>
            </div>

            {movie.indianOtt.available && movie.indianOtt.platforms.length > 0 ? (
              <div className="flex flex-wrap gap-1.5">
                {movie.indianOtt.platforms.map((plat, idx) => {
                  const ottUrl = getOttPlatformUrl(plat.name, movie.title, movie.year);
                  return (
                    <a
                      key={idx}
                      href={ottUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="px-2.5 py-1 rounded-lg bg-slate-800/90 hover:bg-amber-500/20 hover:border-amber-500/60 border border-slate-700/80 text-[11px] flex items-center gap-1.5 shadow-sm transition-all text-slate-200 hover:text-amber-300 cursor-pointer group/link"
                      title={`Open ${plat.name} to watch ${movie.title}`}
                    >
                      <span className="w-2 h-2 rounded-full bg-amber-400 group-hover/link:animate-ping" />
                      <span className="font-semibold">{plat.name}</span>
                      {plat.pricing && (
                        <span className="text-slate-400 text-[10px]">({plat.pricing})</span>
                      )}
                      <ExternalLink className="w-2.5 h-2.5 opacity-60 group-hover/link:opacity-100" />
                    </a>
                  );
                })}
              </div>
            ) : (
              <div className="text-[11px] text-slate-400 italic">
                Streaming rights in India updating. Rent/Buy available on Apple TV or YouTube.
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Card Actions Footer */}
      <div className="p-5 sm:p-6 pt-0 space-y-3">
        {/* Swap / Already Watched Strip */}
        <div className="grid grid-cols-2 gap-2 text-xs">
          <button
            onClick={handleWatchedClick}
            disabled={isReplacing}
            title="Mark as watched and summon a fresh unwatched recommendation (Unlimited)"
            className="px-3 py-2 rounded-xl atmospheric-glass hover:border-amber-500/50 text-slate-300 hover:text-amber-300 font-medium transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-sm active:scale-95"
          >
            <Check className={`w-3.5 h-3.5 text-amber-400 ${isReplacing ? 'animate-ping' : ''}`} />
            <span>Already watched</span>
          </button>

          <button
            onClick={handleReplaceClick}
            disabled={swapsRemaining <= 0 || isReplacing}
            title={
              swapsRemaining > 0
                ? `Reroll this film (${swapsRemaining} manual swaps remaining)`
                : 'No manual swaps remaining. Click "Already watched" for unlimited fresh recommendations'
            }
            className={`px-3 py-2 rounded-xl border font-medium transition-all flex items-center justify-center gap-1.5 ${
              swapsRemaining > 0
                ? 'atmospheric-glass hover:border-amber-500/50 text-slate-300 hover:text-amber-300 cursor-pointer shadow-sm active:scale-95'
                : 'bg-slate-900/60 text-slate-600 border-slate-800/60 cursor-not-allowed'
            }`}
          >
            <RefreshCw className={`w-3.5 h-3.5 ${isReplacing ? 'animate-spin' : ''}`} />
            <span>Replace pick {swapsRemaining > 0 ? `(${swapsRemaining})` : ''}</span>
          </button>
        </div>

        {/* Primary Selection Button */}
        <button
          id={`select-final-movie-${movie.id}`}
          onClick={handleSelectClick}
          className="gold-glow-btn w-full py-3.5 rounded-2xl text-sm sm:text-base font-bold flex items-center justify-center gap-2 cursor-pointer shadow-xl group-hover:scale-[1.02] transition-transform"
        >
          <Sparkles className="w-4 h-4 text-slate-950" />
          <span>Embark on this Adventure</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </motion.div>
  );
};
