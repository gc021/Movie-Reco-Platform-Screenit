import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Film, Sparkles, UserCheck, Star, Play, Clock,
  ExternalLink, Search, Clapperboard, Award,
  Compass, ArrowLeft, Filter, Check
} from 'lucide-react';
import { CURATED_MOVIES } from '../data/curatedMovies';
import { Movie, WizardType } from '../types';
import { playSelectChime } from '../services/soundEffects';
import { getOttPlatformUrl } from '../services/ottLinks';
import { MagicalHatIcon } from './MagicalHatIcon';

export type CategoryTab = 'directors' | 'actors' | 'genres';

interface BrowseCategoriesProps {
  initialTab?: CategoryTab;
  onSelectMovie: (movie: Movie) => void;
  onWatchTrailer: (movie: Movie) => void;
  onStartQuest: (prefill?: { genre?: string; party?: string }) => void;
  onBackToHome: () => void;
  activeWizard: WizardType;
}

export const BrowseCategories: React.FC<BrowseCategoriesProps> = ({
  initialTab = 'directors',
  onSelectMovie,
  onWatchTrailer,
  onStartQuest,
  onBackToHome,
  activeWizard
}) => {
  const [activeTab, setActiveTab] = useState<CategoryTab>(initialTab);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedEntity, setSelectedEntity] = useState<string>('All');

  // Extract unique directors with counts
  const directorsList = useMemo(() => {
    const counts: Record<string, number> = {};
    CURATED_MOVIES.forEach(m => {
      counts[m.director] = (counts[m.director] || 0) + 1;
    });
    return Object.entries(counts)
      .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
      .map(([name, count]) => ({ name, count }));
  }, []);

  // Extract unique actors with counts
  const actorsList = useMemo(() => {
    const counts: Record<string, number> = {};
    CURATED_MOVIES.forEach(m => {
      m.cast.forEach(actor => {
        counts[actor] = (counts[actor] || 0) + 1;
      });
    });
    return Object.entries(counts)
      .filter(([_, count]) => count >= 1)
      .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
      .map(([name, count]) => ({ name, count }));
  }, []);

  // Extract unique genres with counts
  const genresList = useMemo(() => {
    const counts: Record<string, number> = {};
    CURATED_MOVIES.forEach(m => {
      m.genres.forEach(genre => {
        counts[genre] = (counts[genre] || 0) + 1;
      });
    });
    return Object.entries(counts)
      .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
      .map(([name, count]) => ({ name, count }));
  }, []);

  // Filter movies based on activeTab, selectedEntity, and searchQuery
  const filteredMovies = useMemo(() => {
    return CURATED_MOVIES.filter(movie => {
      // Search filter
      const matchesSearch =
        movie.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        movie.director.toLowerCase().includes(searchQuery.toLowerCase()) ||
        movie.cast.some(c => c.toLowerCase().includes(searchQuery.toLowerCase())) ||
        movie.genres.some(g => g.toLowerCase().includes(searchQuery.toLowerCase()));

      if (!matchesSearch) return false;

      // Entity filter
      if (selectedEntity === 'All') return true;

      if (activeTab === 'directors') {
        return movie.director.toLowerCase() === selectedEntity.toLowerCase();
      } else if (activeTab === 'actors') {
        return movie.cast.some(c => c.toLowerCase() === selectedEntity.toLowerCase());
      } else if (activeTab === 'genres') {
        return movie.genres.some(g => g.toLowerCase() === selectedEntity.toLowerCase());
      }

      return true;
    });
  }, [activeTab, selectedEntity, searchQuery]);

  const handleTabChange = (tab: CategoryTab) => {
    playSelectChime();
    setActiveTab(tab);
    setSelectedEntity('All');
    setSearchQuery('');
  };

  return (
    <div id="browse-categories-view" className="py-8 px-4 sm:px-6 max-w-7xl mx-auto space-y-8">
      {/* Top Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-4 border-b border-slate-800">
        <div className="space-y-1.5">
          <div className="flex items-center gap-2">
            <button
              onClick={onBackToHome}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl atmospheric-glass hover:border-amber-500/50 text-slate-300 hover:text-amber-300 text-xs font-semibold transition-all cursor-pointer group"
            >
              <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
              <span>Back</span>
            </button>
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5" />
              Legendary Filmography Vault
            </span>
          </div>

          <h1 className="font-cinzel text-3xl sm:text-4xl font-extrabold text-slate-100">
            Browse Curated Movies
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 max-w-2xl">
            Explore masterpieces by legendary Directors, iconic Actors, and cinematic Genres with instant Indian OTT streaming links.
          </p>
        </div>

        {/* Tab Switcher Pills */}
        <div className="flex items-center p-1 rounded-2xl bg-slate-950/90 border border-slate-800 shadow-xl self-stretch sm:self-auto">
          <button
            onClick={() => handleTabChange('directors')}
            className={`flex-1 sm:flex-none px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
              activeTab === 'directors'
                ? 'bg-amber-500 text-slate-950 shadow-[0_0_15px_rgba(245,158,11,0.5)]'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Clapperboard className="w-4 h-4" />
            <span>By Director</span>
          </button>

          <button
            onClick={() => handleTabChange('actors')}
            className={`flex-1 sm:flex-none px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
              activeTab === 'actors'
                ? 'bg-amber-500 text-slate-950 shadow-[0_0_15px_rgba(245,158,11,0.5)]'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <UserCheck className="w-4 h-4" />
            <span>By Actor</span>
          </button>

          <button
            onClick={() => handleTabChange('genres')}
            className={`flex-1 sm:flex-none px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
              activeTab === 'genres'
                ? 'bg-amber-500 text-slate-950 shadow-[0_0_15px_rgba(245,158,11,0.5)]'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Film className="w-4 h-4" />
            <span>By Genre</span>
          </button>
        </div>
      </div>

      {/* Subcategory Pills & Search */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row items-center gap-3">
          {/* Search input */}
          <div className="relative flex-1 w-full">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder={`Search ${activeTab === 'directors' ? 'directors or movies' : activeTab === 'actors' ? 'actors or movies' : 'genres or movies'}...`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-950/80 border border-slate-800 rounded-xl pl-10 pr-4 py-2.5 text-xs sm:text-sm text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-amber-500/60 focus:ring-1 focus:ring-amber-500/30 transition-all"
            />
          </div>

          {/* Start Quest shortcut */}
          <button
            onClick={() => onStartQuest()}
            className="gold-glow-btn px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-slate-950 flex items-center gap-2 cursor-pointer shrink-0 w-full sm:w-auto justify-center"
          >
            <Compass className="w-4 h-4" />
            <span>Start 7-Step Quest</span>
          </button>
        </div>

        {/* Horizontal Quick-Filter Chips */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin">
          <button
            onClick={() => {
              playSelectChime();
              setSelectedEntity('All');
            }}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold shrink-0 transition-all cursor-pointer ${
              selectedEntity === 'All'
                ? 'bg-amber-500 text-slate-950 shadow-[0_0_12px_rgba(245,158,11,0.4)]'
                : 'atmospheric-glass border-slate-800 text-slate-300 hover:text-slate-100'
            }`}
          >
            All {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} ({CURATED_MOVIES.length})
          </button>

          {activeTab === 'directors' &&
            directorsList.map(({ name, count }) => (
              <button
                key={name}
                onClick={() => {
                  playSelectChime();
                  setSelectedEntity(name);
                }}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold shrink-0 transition-all cursor-pointer flex items-center gap-1.5 ${
                  selectedEntity === name
                    ? 'bg-amber-500 text-slate-950 shadow-[0_0_12px_rgba(245,158,11,0.4)]'
                    : 'atmospheric-glass border-slate-800 text-slate-300 hover:text-amber-300'
                }`}
              >
                <span>{name}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${selectedEntity === name ? 'bg-slate-950/20 text-slate-950 font-black' : 'bg-slate-800 text-amber-300'}`}>
                  {count}
                </span>
              </button>
            ))}

          {activeTab === 'actors' &&
            actorsList.map(({ name, count }) => (
              <button
                key={name}
                onClick={() => {
                  playSelectChime();
                  setSelectedEntity(name);
                }}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold shrink-0 transition-all cursor-pointer flex items-center gap-1.5 ${
                  selectedEntity === name
                    ? 'bg-amber-500 text-slate-950 shadow-[0_0_12px_rgba(245,158,11,0.4)]'
                    : 'atmospheric-glass border-slate-800 text-slate-300 hover:text-amber-300'
                }`}
              >
                <span>{name}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${selectedEntity === name ? 'bg-slate-950/20 text-slate-950 font-black' : 'bg-slate-800 text-amber-300'}`}>
                  {count}
                </span>
              </button>
            ))}

          {activeTab === 'genres' &&
            genresList.map(({ name, count }) => (
              <button
                key={name}
                onClick={() => {
                  playSelectChime();
                  setSelectedEntity(name);
                }}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold shrink-0 transition-all cursor-pointer flex items-center gap-1.5 ${
                  selectedEntity === name
                    ? 'bg-amber-500 text-slate-950 shadow-[0_0_12px_rgba(245,158,11,0.4)]'
                    : 'atmospheric-glass border-slate-800 text-slate-300 hover:text-amber-300'
                }`}
              >
                <span>{name}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${selectedEntity === name ? 'bg-slate-950/20 text-slate-950 font-black' : 'bg-slate-800 text-amber-300'}`}>
                  {count}
                </span>
              </button>
            ))}
        </div>
      </div>

      {/* Results Header */}
      <div className="flex items-center justify-between text-xs text-slate-400">
        <div>
          Showing <span className="font-bold text-amber-300">{filteredMovies.length}</span> top rated curated titles
          {selectedEntity !== 'All' && <span> for <strong className="text-slate-100">{selectedEntity}</strong></span>}
        </div>
        <span className="text-[11px] bg-emerald-500/10 text-emerald-300 border border-emerald-500/30 px-2.5 py-0.5 rounded-full font-semibold">
          Verified Indian OTT Streaming
        </span>
      </div>

      {/* Movies Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredMovies.map((movie) => (
          <motion.div
            key={movie.id}
            layout
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="parchment-card rounded-2xl overflow-hidden border border-slate-800 hover:border-amber-500/50 transition-all flex flex-col justify-between group shadow-lg"
          >
            {/* Poster & Badges */}
            <div className="relative aspect-[2/3] w-full overflow-hidden bg-slate-950 cursor-pointer" onClick={() => onSelectMovie(movie)}>
              <img
                src={movie.posterUrl}
                alt={movie.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />

              {/* IMDb Rating Badge */}
              <div className="absolute top-3 left-3 px-2 py-1 rounded-lg bg-black/80 backdrop-blur-md border border-amber-500/40 text-amber-300 text-xs font-bold flex items-center gap-1 shadow-lg">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                <span>{movie.imdbRating.toFixed(1)}</span>
              </div>

              {/* Gaurav Rating Badge if present */}
              {movie.gauravRating && (
                <div className="absolute top-3 right-3 px-2 py-1 rounded-lg bg-amber-500/90 text-slate-950 text-xs font-black flex items-center gap-1 shadow-lg">
                  <UserCheck className="w-3.5 h-3.5 text-slate-950 stroke-[2.5]" />
                  <span>{movie.gauravRating}/10</span>
                </div>
              )}

              {/* Play Trailer Overlay Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onWatchTrailer(movie);
                }}
                className="absolute inset-0 m-auto w-12 h-12 rounded-full bg-amber-500/90 hover:bg-amber-400 text-slate-950 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all scale-90 group-hover:scale-100 cursor-pointer shadow-[0_0_20px_rgba(245,158,11,0.6)]"
                title="Watch Trailer"
              >
                <Play className="w-5 h-5 fill-slate-950 ml-0.5" />
              </button>
            </div>

            {/* Movie Info & OTT Links */}
            <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
              <div>
                <div className="flex items-center justify-between gap-2 text-slate-400 text-[11px] mb-1">
                  <span>{movie.year}</span>
                  <span>•</span>
                  <span>{movie.runtimeMinutes}m</span>
                  <span>•</span>
                  <span className="font-semibold text-slate-300">{movie.genres[0]}</span>
                </div>

                <h3
                  onClick={() => onSelectMovie(movie)}
                  className="font-cinzel text-base font-bold text-slate-100 hover:text-amber-300 transition-colors line-clamp-1 cursor-pointer"
                >
                  {movie.title}
                </h3>
                <p className="text-xs text-slate-400 line-clamp-1 mt-0.5">
                  Dir: <strong className="text-slate-300">{movie.director}</strong>
                </p>
                <p className="text-[11px] text-slate-400 line-clamp-1">
                  Cast: {movie.cast.slice(0, 2).join(', ')}
                </p>
              </div>

              {/* Where to Watch OTT Deep Links */}
              <div className="pt-2 border-t border-slate-800 space-y-1.5">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                  Where to Watch (India):
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {movie.indianOtt.platforms.slice(0, 3).map((platform, pIdx) => {
                    const ottUrl = getOttPlatformUrl(platform.name, movie.title, movie.year);
                    return (
                      <a
                        key={pIdx}
                        href={ottUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[10px] px-2 py-0.5 rounded-md bg-indigo-950/80 hover:bg-indigo-900 border border-indigo-500/40 text-indigo-200 font-semibold flex items-center gap-1 transition-all hover:scale-105"
                        title={`Watch ${movie.title} on ${platform.name}`}
                      >
                        <span>{platform.name}</span>
                        <ExternalLink className="w-2.5 h-2.5 opacity-70" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
