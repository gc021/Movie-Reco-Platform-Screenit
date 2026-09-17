import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Star, Clock, Play, Film, Compass, ChevronRight, Eye, UserCheck } from 'lucide-react';
import { Movie } from '../types';
import { CURATED_MOVIES } from '../data/curatedMovies';
import { findGauravRating } from '../data/gauravTasteProfile';
import { playSelectChime } from '../services/soundEffects';

interface CuratedGalleryProps {
  onSelectMoviePreview: (movie: Movie) => void;
  onStartQuest: () => void;
}

type GalleryFilter = 'all' | 'gaurav' | 'cult' | 'award' | 'mind-bending' | 'feel-good' | 'action';

export const CuratedGallery: React.FC<CuratedGalleryProps> = ({
  onSelectMoviePreview,
  onStartQuest
}) => {
  const [activeFilter, setActiveFilter] = useState<GalleryFilter>('gaurav');

  const filterTabs: Array<{ id: GalleryFilter; label: string; count?: number }> = [
    { id: 'gaurav', label: "⭐ Gaurav's 9-10★ Classics" },
    { id: 'all', label: 'All Legendary Vault' },
    { id: 'cult', label: 'Cult Classics' },
    { id: 'award', label: 'Award-Winning' },
    { id: 'mind-bending', label: 'Mind-Bending' },
    { id: 'feel-good', label: 'Feel-Good & Cozy' },
    { id: 'action', label: 'Pulse-Racing Action' }
  ];

  const getFilteredMovies = () => {
    switch (activeFilter) {
      case 'gaurav':
        return CURATED_MOVIES.filter(m => {
          const g = findGauravRating(m.title, m.year);
          return g && g.rating >= 9;
        });
      case 'cult':
        return CURATED_MOVIES.filter(m => m.isCultClassic);
      case 'award':
        return CURATED_MOVIES.filter(m => m.isAwardWinner);
      case 'mind-bending':
        return CURATED_MOVIES.filter(m => m.contentTags.includes('Mind-bending') || m.genres.includes('Sci-fi') || m.genres.includes('Mystery'));
      case 'feel-good':
        return CURATED_MOVIES.filter(m => m.weapons.includes('Cozy comfort') || m.contentTags.includes('Heartwarming') || m.genres.includes('Comedy'));
      case 'action':
        return CURATED_MOVIES.filter(m => m.genres.includes('Action') || m.moodTags.includes('Get your pulse racing'));
      default:
        return CURATED_MOVIES;
    }
  };

  const displayedMovies = getFilteredMovies().slice(0, 12);

  return (
    <section id="curated-gallery-section" className="py-16 px-4 sm:px-6 max-w-7xl mx-auto space-y-8">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Curated Hollywood Vault & Cinephile Archives</span>
          </div>
          <h2 className="font-cinzel text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-100">
            Legendary films, waiting to be discovered.
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 max-w-2xl">
            Explore a curated selection of cult classics, top-rated English/Hollywood films, and Gaurav's highest-rated personal IMDb masterpieces. Tap any title for a quick preview.
          </p>
        </div>

        <button
          onClick={() => {
            playSelectChime();
            onStartQuest();
          }}
          className="gold-glow-btn px-6 py-3 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 self-start md:self-auto shrink-0 cursor-pointer"
        >
          <Compass className="w-4 h-4" />
          <span>Launch 7-Step Quest</span>
        </button>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {filterTabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => {
              playSelectChime();
              setActiveFilter(tab.id);
            }}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer ${
              activeFilter === tab.id
                ? 'bg-amber-500 text-slate-950 shadow-[0_0_20px_rgba(245,158,11,0.5)] font-bold'
                : 'atmospheric-glass text-slate-300 hover:text-white hover:border-amber-500/40'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Movies Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-5">
        {displayedMovies.map((movie, idx) => {
          const gRating = findGauravRating(movie.title, movie.year);

          return (
            <motion.div
              key={movie.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: (idx % 6) * 0.05 }}
              onClick={() => {
                playSelectChime();
                onSelectMoviePreview(movie);
              }}
              className="parchment-card rounded-2xl overflow-hidden group cursor-pointer border border-slate-800/90 hover:border-amber-400/60 flex flex-col justify-between"
            >
              <div className="relative aspect-[2/3] w-full overflow-hidden bg-slate-950">
                <img
                  src={movie.posterUrl}
                  alt={movie.title}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500 brightness-95"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C1024] via-transparent to-transparent opacity-80" />

                {/* IMDb rating badge */}
                <div className="absolute top-2 left-2 atmospheric-glass px-2 py-0.5 rounded-lg text-[10px] sm:text-xs font-bold text-amber-300 border-amber-500/40 flex items-center gap-1 shadow-md">
                  <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                  <span>{movie.imdbRating.toFixed(1)}</span>
                </div>

                {/* Gaurav rating badge */}
                {gRating && (
                  <div className="absolute top-2 right-2 px-1.5 py-0.5 rounded-md bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 text-[9px] font-black tracking-tight shadow-md">
                    Gaurav: {gRating.rating}★
                  </div>
                )}

                {/* Quick eye preview icon */}
                <div className="absolute inset-0 m-auto w-10 h-10 rounded-full bg-amber-500 text-slate-950 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity shadow-[0_0_20px_rgba(245,158,11,0.6)]">
                  <Eye className="w-5 h-5" />
                </div>
              </div>

              {/* Title & Metadata */}
              <div className="p-3 space-y-1">
                <h3 className="font-cinzel text-xs sm:text-sm font-bold text-slate-100 truncate group-hover:text-amber-300 transition-colors">
                  {movie.title}
                </h3>
                <div className="flex items-center justify-between text-[11px] text-slate-400">
                  <span>{movie.year}</span>
                  <span>{movie.runtimeMinutes}m</span>
                </div>
                <div className="text-[10px] text-amber-400/90 font-medium truncate">
                  {movie.genres.slice(0, 2).join(' • ')}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

