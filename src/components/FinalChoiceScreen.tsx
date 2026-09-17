import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import confetti from 'canvas-confetti';
import {
  Sparkles, Star, Clock, Film, Play, RotateCcw,
  Share2, Check, ExternalLink, ShieldCheck, Heart, Copy,
  Smartphone, UserCheck, ArrowRight
} from 'lucide-react';
import { Movie, WizardType } from '../types';
import { playQuestVictory, playSelectChime } from '../services/soundEffects';
import { getOttPlatformUrl } from '../services/ottLinks';
import { ContactCaptureModal } from './ContactCaptureModal';
import { MagicalHatIcon } from './MagicalHatIcon';

interface FinalChoiceScreenProps {
  movie: Movie;
  onStartNewQuest: () => void;
  onWatchTrailer: (movie: Movie) => void;
  activeWizard?: WizardType;
  onSwitchWizard?: (wizard: WizardType) => void;
  onOpenCouncil?: () => void;
}

export const FinalChoiceScreen: React.FC<FinalChoiceScreenProps> = ({
  movie,
  onStartNewQuest,
  onWatchTrailer,
  activeWizard = 'standard',
  onSwitchWizard,
  onOpenCouncil
}) => {
  const [copied, setCopied] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);

  useEffect(() => {
    // Sound victory fanfare
    playQuestVictory();

    // Magical celebratory confetti burst
    const end = Date.now() + 1500;
    const colors = ['#F59E0B', '#FCD34D', '#818CF8', '#A855F7', '#38BDF8'];

    const frame = () => {
      confetti({
        particleCount: 4,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors
      });
      confetti({
        particleCount: 4,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };
    frame();
  }, []);

  const handleShare = () => {
    playSelectChime();
    const shareText = `🎬 Movie Quest Pick: "${movie.title}" (${movie.year}) • IMDb ${movie.imdbRating}\nStreaming in India on: ${movie.indianOtt.platforms.map(p => p.name).join(', ') || 'Apple TV / Prime Video'}\nChosen on Screenit!`;

    if (navigator.clipboard) {
      navigator.clipboard.writeText(shareText);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  return (
    <div id="final-choice-container" className="py-8 px-4 sm:px-6 max-w-4xl mx-auto space-y-8">
      {/* Celebratory Banner */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="text-center space-y-3"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full atmospheric-glass border-amber-400/60 text-amber-300 text-sm font-bold shadow-[0_0_20px_rgba(245,158,11,0.2)]">
          <Sparkles className="w-4 h-4 text-amber-400 animate-spin" style={{ animationDuration: '4s' }} />
          <span>Quest Conquered • Your Adventure Is Set</span>
        </div>

        <h1 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-black text-slate-100 tracking-tight">
          You venture into <span className="text-amber-300 text-gold-glow">“{movie.title}”</span>
        </h1>

        <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto">
          Prepare the popcorn and dim the lights. The divination has summoned the perfect cinematic tapestry for your screen.
        </p>
      </motion.div>

      {/* Hero Movie Feature Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="parchment-card rounded-3xl overflow-hidden border-2 border-amber-400/60 shadow-[0_0_50px_rgba(245,158,11,0.25)] relative"
      >
        {/* Backdrop Banner with Trailer Link */}
        <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-slate-950">
          <img
            src={movie.backdropUrl || movie.posterUrl}
            alt={movie.title}
            className="w-full h-full object-cover brightness-75 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0C1024] via-[#0C1024]/50 to-transparent" />

          {/* Golden Crown Badge */}
          <div className="absolute top-4 left-4 bg-amber-500 text-slate-950 font-extrabold px-3.5 py-1.5 rounded-xl text-xs sm:text-sm flex items-center gap-1.5 shadow-xl">
            <MagicalHatIcon className="w-4 h-4 text-slate-950" />
            <span>Chosen Quest Champion</span>
          </div>

          {/* Quick Trailer Play Button */}
          <button
            onClick={() => onWatchTrailer(movie)}
            className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-amber-500 hover:bg-amber-400 text-slate-950 flex items-center justify-center shadow-2xl hover:scale-110 transition-all cursor-pointer shadow-[0_0_30px_rgba(245,158,11,0.6)]"
            title="Play Trailer"
          >
            <Play className="w-7 h-7 fill-slate-950 ml-1" />
          </button>
        </div>

        {/* Detailed Info Section */}
        <div className="p-6 sm:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-1.5">
                <span className="px-2.5 py-1 rounded-xl atmospheric-glass border-amber-500/50 text-amber-300 text-xs font-bold flex items-center gap-1 shadow-sm">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <span>IMDb {movie.imdbRating.toFixed(1)}</span>
                </span>
                <span className="text-xs px-2.5 py-1 rounded-xl atmospheric-glass text-slate-300 font-semibold flex items-center gap-1 border-slate-700">
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                  <span>{movie.runtimeMinutes} min</span>
                </span>
                <span className="text-xs px-2.5 py-1 rounded-xl atmospheric-glass text-slate-300 font-semibold border-slate-700">
                  {movie.year}
                </span>
                <span className="text-xs px-2.5 py-1 rounded-xl bg-indigo-950/90 border border-indigo-500/40 text-indigo-300 font-semibold">
                  {movie.ageRating}
                </span>
              </div>

              <h2 className="font-cinzel text-2xl sm:text-3xl font-extrabold text-slate-100">
                {movie.title}
              </h2>
              <div className="text-xs sm:text-sm text-slate-400 mt-1">
                Directed by <strong className="text-slate-200">{movie.director}</strong>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleShare}
                className="px-4 py-2.5 rounded-xl atmospheric-glass hover:border-amber-500/50 text-slate-200 hover:text-amber-300 text-xs sm:text-sm font-semibold flex items-center gap-2 transition-all cursor-pointer shadow-sm"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? 'Party Invite Copied!' : 'Share Watch Party'}</span>
              </button>

              <button
                onClick={() => setShowContactModal(true)}
                className="px-4 py-2.5 rounded-xl bg-amber-500/15 hover:bg-amber-500/25 border border-amber-500/40 text-amber-300 text-xs sm:text-sm font-semibold flex items-center gap-2 transition-all cursor-pointer"
              >
                <Smartphone className="w-4 h-4 text-amber-400" />
                <span>Save to Phone</span>
              </button>
            </div>
          </div>

          {/* Synopsis */}
          <div className="space-y-2">
            <h3 className="font-cinzel text-xs font-bold text-amber-400 uppercase tracking-wider">
              About The Adventure
            </h3>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {movie.synopsis}
            </p>
          </div>

          {/* Starring Cast */}
          {movie.cast && movie.cast.length > 0 && (
            <div className="text-xs sm:text-sm text-slate-400">
              <span className="text-slate-300 font-semibold">Starring: </span>
              {movie.cast.join(', ')}
            </div>
          )}

          {/* Where to Watch in India Box with Clickable OTT Redirects */}
          <div className="p-5 rounded-2xl atmospheric-glass border-amber-500/30 space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="font-cinzel text-sm sm:text-base font-bold text-amber-300 flex items-center gap-2">
                <Film className="w-4 h-4 text-amber-400" />
                <span>Where to watch in India (Direct Streaming Links)</span>
              </h3>
              <span className="text-xs text-amber-300/80 font-medium">
                Click platform to open ↗
              </span>
            </div>

            {movie.indianOtt.available && movie.indianOtt.platforms.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
                {movie.indianOtt.platforms.map((plat, idx) => {
                  const ottUrl = getOttPlatformUrl(plat.name, movie.title, movie.year);
                  return (
                    <a
                      key={idx}
                      href={ottUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-xl bg-slate-800/90 hover:bg-amber-500/20 border border-slate-700/90 hover:border-amber-500/60 flex items-center justify-between text-xs sm:text-sm shadow-sm transition-all text-slate-100 hover:text-amber-300 group"
                      title={`Stream ${movie.title} on ${plat.name}`}
                    >
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-400 shadow-[0_0_6px_rgba(245,158,11,0.6)] group-hover:scale-125 transition-transform" />
                        <strong className="font-bold">{plat.name}</strong>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-amber-300 font-medium px-2 py-0.5 rounded bg-amber-500/15 border border-amber-500/30 text-xs">
                          {plat.pricing || plat.type}
                        </span>
                        <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-amber-300" />
                      </div>
                    </a>
                  );
                })}
              </div>
            ) : (
              <div className="text-xs text-slate-400 italic">
                Streaming rights in India updating across regional apps. Rent or buy directly via Apple TV, YouTube Movies, or Prime Video.
              </div>
            )}
          </div>
        </div>

        {/* Nudge to Consult Gaurav's Oracle or Council */}
        <div className="p-6 bg-gradient-to-r from-indigo-950/60 via-slate-900/90 to-amber-950/40 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/50 flex items-center justify-center text-amber-400 shrink-0">
              <UserCheck className="w-5 h-5" />
            </div>
            <div className="text-xs text-slate-300">
              <strong className="text-slate-100 block sm:inline mr-1.5">Try Gaurav’s Cinephile Oracle:</strong>
              Contrast your pick against 230+ IMDb ratings or consult Christopher Nolan and Quentin Tarantino in the Council of Oracles!
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {onSwitchWizard && activeWizard !== 'gaurav' && (
              <button
                onClick={() => {
                  playSelectChime();
                  onSwitchWizard('gaurav');
                }}
                className="px-3.5 py-2 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 border border-amber-500/50 text-amber-300 text-xs font-bold transition-all cursor-pointer"
              >
                Switch to Gaurav
              </button>
            )}

            {onOpenCouncil && (
              <button
                onClick={() => {
                  playSelectChime();
                  onOpenCouncil();
                }}
                className="px-3.5 py-2 rounded-xl atmospheric-glass hover:border-indigo-500/50 text-indigo-200 hover:text-indigo-100 text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5"
              >
                <span>Council Chamber</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Action Controls */}
        <div className="p-6 sm:p-8 atmospheric-glass border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            onClick={() => onWatchTrailer(movie)}
            className="w-full sm:w-auto px-6 py-3 rounded-xl atmospheric-glass hover:border-amber-500/50 text-slate-200 text-sm font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer shadow-sm"
          >
            <Play className="w-4 h-4 text-amber-400 fill-amber-400" />
            <span>Watch Official Trailer</span>
          </button>

          <button
            id="start-new-quest-btn"
            onClick={onStartNewQuest}
            className="gold-glow-btn w-full sm:w-auto px-8 py-3.5 rounded-2xl text-sm sm:text-base font-bold flex items-center justify-center gap-2 cursor-pointer shadow-xl"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Start a new quest</span>
          </button>
        </div>
      </motion.div>

      {/* Contact Capture Modal */}
      <ContactCaptureModal
        isOpen={showContactModal}
        onClose={() => setShowContactModal(false)}
        contextTitle={`Picked Movie: ${movie.title} (${movie.year})`}
      />
    </div>
  );
};
