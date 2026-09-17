import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Compass, ArrowLeft, ArrowRight, Sparkles, Check,
  Clock, Users, Zap, Shield, BookmarkCheck, Heart,
  Flame, Skull, Film, Wand2, Eye, Coffee, Mountain,
  Smile, Award, Gem, Stars, AlertCircle
} from 'lucide-react';
import { MagicalHatIcon } from './MagicalHatIcon';
import { QuizAnswers } from '../types';
import { playSelectChime } from '../services/soundEffects';

interface QuestQuizProps {
  answers: Partial<QuizAnswers>;
  onUpdateAnswers: (newAnswers: Partial<QuizAnswers>) => void;
  onCompleteQuiz: (completedAnswers: QuizAnswers) => void;
  onCancel: () => void;
}

interface QuestionConfig {
  id: number;
  title: string;
  subtitle: string;
  helperText?: string;
  isMultiSelect?: boolean;
  maxMulti?: number;
  options: Array<{
    label: string;
    description?: string;
    icon: React.ElementType;
    badge?: string;
  }>;
}

const QUESTIONS: QuestionConfig[] = [
  {
    id: 1,
    title: 'You are here to…',
    subtitle: 'Choose your cinematic mission today.',
    options: [
      { label: 'Escape reality', description: 'Transport to rich other worlds and wondrous lore', icon: Mountain },
      { label: 'Feel every feeling', description: 'Tearjerkers, heartwarming joy, and deep human bonds', icon: Heart },
      { label: 'Solve a mystery', description: 'Puzzles, whodunits, and jaw-dropping revelations', icon: Eye },
      { label: 'Get your pulse racing', description: 'Edge-of-your-seat suspense, tension, and high stakes', icon: Flame },
      { label: 'Have a great time', description: 'Laugh out loud, feel-good vibes, and joyful fun', icon: Smile },
      { label: 'See something unforgettable', description: 'Cinematic artistry, iconic scenes, and grand spectacle', icon: Stars }
    ]
  },
  {
    id: 2,
    title: 'How long can you stay in the story?',
    subtitle: 'Pick your viewing window before the real world calls you back.',
    options: [
      { label: 'Under 2 hours', description: 'Quick, punchy, and zero filler—easy to finish', icon: Clock, badge: '⚡ Brisk' },
      { label: '2 to 2.5 Hours', description: 'The golden cinematic sweet spot (~120 to 150 min)', icon: Film, badge: '⭐ Standard' },
      { label: 'Make it an epic', description: 'Sprawling worlds and deep 2.5hr+ sagas (150m+)', icon: Wand2, badge: '🌌 Grand' }
    ]
  },
  {
    id: 3,
    title: 'Who’s joining your watch party?',
    subtitle: 'Every quest needs the right party.',
    options: [
      { label: 'Solo', description: 'Just you, pure focus, no compromises', icon: Zap },
      { label: 'Date night', description: 'Engaging, stylish, great chemistry & conversation', icon: Heart },
      { label: 'Friends', description: 'Crowd-pleasers, thrilling twists, or high-energy fun', icon: Users },
      { label: 'Family', description: 'Appealing across generations without awkward scenes', icon: Shield },
      { label: 'Kids', description: 'Family-safe wonder, animation, and uplifting joy', icon: Smile }
    ]
  },
  {
    id: 4,
    title: 'Choose your cinematic weapon.',
    subtitle: 'What kind of movie magic are you craving?',
    options: [
      { label: 'Big action', description: 'Choreographed stunts, car chases, and adrenaline', icon: Flame },
      { label: 'Clever twists', description: 'Subverted expectations and brilliant narrative turns', icon: Eye },
      { label: 'Deep feelings', description: 'Resonant emotional truth, love, and redemption', icon: Heart },
      { label: 'Beautiful worlds', description: 'Stunning cinematography, set design, and atmosphere', icon: Stars },
      { label: 'Cozy comfort', description: 'Warm tea for the soul, charming characters, safe harbor', icon: Coffee },
      { label: 'Casual viewing', description: 'Easygoing vibe, great for background or multitasking', icon: Coffee, badge: '🍿 Chill' }
    ]
  },
  {
    id: 5,
    title: 'Open the genre portal.',
    subtitle: 'Which worlds are you willing to enter? Pick up to three.',
    helperText: 'Select up to 3 genres',
    isMultiSelect: true,
    maxMulti: 3,
    options: [
      { label: 'Thriller', icon: Flame },
      { label: 'Comedy', icon: Smile },
      { label: 'Sci-fi', icon: Wand2 },
      { label: 'Romance', icon: Heart },
      { label: 'Horror', icon: Skull },
      { label: 'Animation', icon: Stars },
      { label: 'Drama', icon: Film },
      { label: 'Documentary', icon: Compass },
      { label: 'Adventure', icon: Mountain },
      { label: 'Mystery', icon: Eye },
      { label: 'Crime', icon: Shield },
      { label: 'Surprise me', icon: Sparkles, badge: '✨ Wildcard' }
    ]
  },
  {
    id: 6,
    title: 'Pick the treasure map.',
    subtitle: 'Where should we search for your next favorite?',
    options: [
      { label: 'Brand-new release', description: 'Recent hits from the past couple of years', icon: Sparkles },
      { label: 'Popular crowd-pleaser', description: 'Universally loved blockbusters and hits', icon: Users },
      { label: 'Underrated gem', description: 'Overlooked masterpieces waiting in the shadows', icon: Gem },
      { label: 'Award-winning pick', description: 'Oscar winners and critically revered triumphs', icon: Award },
      { label: 'Cult classic', description: 'Legendary fan favorites with timeless adoration', icon: Shield },
      { label: 'Surprise me', description: 'Let the wizard consult the crystal ball freely', icon: Wand2 }
    ]
  },
  {
    id: 7,
    title: 'Set the quest rules.',
    subtitle: 'What must this movie deliver—or never do?',
    helperText: 'Select any rules (or leave empty if you are open to anything)',
    isMultiSelect: true,
    options: [
      { label: 'No sad ending', description: 'Must leave us feeling hopeful or triumphant', icon: Smile },
      { label: 'Keep it fast', description: 'No slow burns—keep the momentum going', icon: Clock },
      { label: 'No horror', description: 'Zero jump scares or gory horrors allowed', icon: Shield },
      { label: 'Nothing too heavy', description: 'Avoid grim tragedy or intensely depressing themes', icon: Coffee },
      { label: 'Family-safe', description: 'PG/PG-13 rating with no extreme explicit content', icon: BookmarkCheck },
      { label: 'Trust the Wizard', description: 'None of the above—let the wizard choose completely unrestricted', icon: Wand2 }
    ]
  }
];

export const QuestQuiz: React.FC<QuestQuizProps> = ({
  answers,
  onUpdateAnswers,
  onCompleteQuiz,
  onCancel
}) => {
  const [currentStep, setCurrentStep] = React.useState(0);
  const q = QUESTIONS[currentStep];

  // Keyboard shortcut listener (1-6 for fast answering)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onCancel();
        return;
      }
      if (e.key === 'ArrowLeft' && currentStep > 0) {
        handleBack();
        return;
      }
      const num = parseInt(e.key, 10);
      if (!isNaN(num) && num >= 1 && num <= q.options.length) {
        handleSelectOption(q.options[num - 1].label);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentStep, q, answers]);

  const handleBack = () => {
    playSelectChime();
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    } else {
      onCancel();
    }
  };

  const getAnswerForCurrentQuestion = () => {
    switch (currentStep) {
      case 0: return answers.q1Mission;
      case 1: return answers.q2Runtime;
      case 2: return answers.q3Party;
      case 3: return answers.q4Weapon;
      case 4: return answers.q5Genres || [];
      case 5: return answers.q6Treasure;
      case 6: return answers.q7Rules || [];
      default: return undefined;
    }
  };

  const handleSelectOption = (optionLabel: string) => {
    playSelectChime();

    if (currentStep === 0) {
      const updated = { ...answers, q1Mission: optionLabel };
      onUpdateAnswers(updated);
      advanceToNext(updated);
    } else if (currentStep === 1) {
      const updated = { ...answers, q2Runtime: optionLabel };
      onUpdateAnswers(updated);
      advanceToNext(updated);
    } else if (currentStep === 2) {
      const updated = { ...answers, q3Party: optionLabel };
      onUpdateAnswers(updated);
      advanceToNext(updated);
    } else if (currentStep === 3) {
      const updated = { ...answers, q4Weapon: optionLabel };
      onUpdateAnswers(updated);
      advanceToNext(updated);
    } else if (currentStep === 4) {
      // If "Surprise me" is chosen in Question 5, move forward directly without waiting for other options
      if (optionLabel === 'Surprise me') {
        const updatedGenres = ['Surprise me'];
        const updated = { ...answers, q5Genres: updatedGenres };
        onUpdateAnswers(updated);
        advanceToNext(updated);
        return;
      }

      // Multi-select for specific Genres (up to 3, removes "Surprise me" if previously set)
      const current = (answers.q5Genres || []).filter(g => g !== 'Surprise me');
      let updatedGenres: string[];
      if (current.includes(optionLabel)) {
        updatedGenres = current.filter(g => g !== optionLabel);
      } else {
        if (current.length >= 3) {
          // Replace oldest or cap at 3
          updatedGenres = [...current.slice(1), optionLabel];
        } else {
          updatedGenres = [...current, optionLabel];
        }
      }
      onUpdateAnswers({ ...answers, q5Genres: updatedGenres });
    } else if (currentStep === 5) {
      const updated = { ...answers, q6Treasure: optionLabel };
      onUpdateAnswers(updated);
      advanceToNext(updated);
    } else if (currentStep === 6) {
      if (optionLabel === 'Trust the Wizard') {
        const updatedRules = ['Trust the Wizard'];
        const updated = { ...answers, q7Rules: updatedRules };
        onUpdateAnswers(updated);
        advanceToNext(updated);
        return;
      }

      // Multi-select for Rules
      const current = (answers.q7Rules || []).filter(r => r !== 'Trust the Wizard');
      const updatedRules = current.includes(optionLabel)
        ? current.filter(r => r !== optionLabel)
        : [...current, optionLabel];
      onUpdateAnswers({ ...answers, q7Rules: updatedRules });
    }
  };

  const advanceToNext = (latestAnswers = answers) => {
    if (currentStep < QUESTIONS.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      // Ensure defaults for any unselected
      const finalAnswers: QuizAnswers = {
        q1Mission: latestAnswers.q1Mission || 'Escape reality',
        q2Runtime: latestAnswers.q2Runtime || 'Around 2 hours',
        q3Party: latestAnswers.q3Party || 'Solo',
        q4Weapon: latestAnswers.q4Weapon || 'Clever twists',
        q5Genres: latestAnswers.q5Genres && latestAnswers.q5Genres.length > 0 ? latestAnswers.q5Genres : ['Drama', 'Sci-fi'],
        q6Treasure: latestAnswers.q6Treasure || 'Popular crowd-pleaser',
        q7Rules: latestAnswers.q7Rules || []
      };
      onCompleteQuiz(finalAnswers);
    }
  };

  const isOptionSelected = (label: string) => {
    const currentVal = getAnswerForCurrentQuestion();
    if (Array.isArray(currentVal)) {
      return currentVal.includes(label);
    }
    return currentVal === label;
  };

  const currentVal = getAnswerForCurrentQuestion();
  const canAdvanceMulti = q.isMultiSelect && (currentStep === 6 || (Array.isArray(currentVal) && currentVal.length > 0));

  return (
    <div id="quest-quiz-container" className="relative min-h-[85vh] flex flex-col justify-between max-w-4xl mx-auto px-4 sm:px-6 py-6">
      {/* Top Quest Header & Progress Bar */}
      <div className="space-y-5">
        <div className="flex items-center justify-between">
          <button
            id="quest-back-btn"
            onClick={handleBack}
            className="flex items-center gap-2 px-3.5 py-2 rounded-xl atmospheric-glass hover:border-amber-500/50 text-slate-200 hover:text-amber-300 text-xs sm:text-sm font-semibold transition-all cursor-pointer shadow-sm group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
            <span>{currentStep === 0 ? 'Back to Sanctuary' : 'Previous Step'}</span>
          </button>

          {/* Quest Step indicator */}
          <div className="flex items-center gap-2 px-4 py-1.5 rounded-full atmospheric-glass border-amber-500/40 text-amber-300 text-xs sm:text-sm font-bold tracking-wider shadow-[0_0_20px_rgba(245,158,11,0.2)]">
            <Compass className="w-4 h-4 text-amber-400 animate-spin" style={{ animationDuration: '12s' }} />
            <span>Quest {currentStep + 1} of 7</span>
          </div>

          <button
            onClick={onCancel}
            className="text-xs text-slate-400 hover:text-slate-200 transition-colors cursor-pointer px-2 py-1"
          >
            Exit Quest
          </button>
        </div>

        {/* 7-Segment Quest Progress Path */}
        <div className="grid grid-cols-7 gap-1.5 sm:gap-2.5">
          {QUESTIONS.map((_, idx) => (
            <div
              key={idx}
              className={`h-2 rounded-full transition-all duration-500 ${
                idx === currentStep
                  ? 'bg-gradient-to-r from-amber-400 to-amber-300 shadow-[0_0_16px_rgba(245,158,11,0.9)] scale-y-125'
                  : idx < currentStep
                  ? 'bg-amber-600/90 shadow-[0_0_8px_rgba(217,119,6,0.5)]'
                  : 'bg-slate-800/80 border border-slate-700/40'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Main Question Card Animation Container */}
      <div className="my-8 flex-1 flex flex-col justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -25 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="space-y-6"
          >
            {/* Question Titles */}
            <div className="text-center space-y-2 max-w-2xl mx-auto">
              <h2 className="font-cinzel text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-100 leading-snug">
                {q.title}
              </h2>
              <p className="text-base sm:text-lg text-amber-300 font-light text-gold-glow">
                {q.subtitle}
              </p>
              {q.helperText && (
                <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full atmospheric-glass border-indigo-500/40 text-indigo-200 text-xs font-semibold mt-1">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span>{q.helperText}</span>
                  {currentStep === 4 && (
                    <span className="font-bold text-amber-300">
                      ({(answers.q5Genres || []).length}/3 selected)
                    </span>
                  )}
                </div>
              )}
            </div>

            {/* Options Grid */}
            <div
              className={`grid gap-3.5 sm:gap-4 ${
                q.options.length > 6
                  ? 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4'
                  : q.options.length >= 5
                  ? 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3'
                  : 'grid-cols-1 sm:grid-cols-3'
              }`}
            >
              {q.options.map((opt, idx) => {
                const selected = isOptionSelected(opt.label);
                const IconComponent = opt.icon;

                return (
                  <button
                    key={opt.label}
                    id={`quest-opt-${currentStep}-${idx}`}
                    onClick={() => handleSelectOption(opt.label)}
                    className={`relative text-left p-4 sm:p-5 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between group ${
                      selected
                        ? 'bg-amber-500/20 border-amber-400 shadow-[0_0_30px_rgba(245,158,11,0.35)] ring-1 ring-amber-400/60 scale-[1.02]'
                        : 'parchment-card hover:border-amber-500/50'
                    }`}
                  >
                    {/* Top Row: Icon + Badge + Check */}
                    <div className="flex items-center justify-between w-full mb-3">
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
                          selected
                            ? 'bg-gradient-to-tr from-amber-400 to-amber-300 text-slate-950 shadow-[0_0_15px_rgba(245,158,11,0.5)]'
                            : 'bg-slate-800/90 text-amber-400 border border-slate-700/60 group-hover:bg-amber-500/20 group-hover:text-amber-300'
                        }`}
                      >
                        <IconComponent className="w-5 h-5" />
                      </div>

                      <div className="flex items-center gap-2">
                        {opt.badge && (
                          <span className="text-[11px] px-2 py-0.5 rounded-md bg-indigo-950/90 border border-indigo-500/40 text-indigo-300 font-semibold shadow-sm">
                            {opt.badge}
                          </span>
                        )}
                        <div
                          className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                            selected
                              ? 'bg-amber-400 text-slate-950 scale-110 shadow-[0_0_10px_rgba(245,158,11,0.6)]'
                              : 'border border-slate-700 text-transparent group-hover:border-slate-500'
                          }`}
                        >
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                        </div>
                      </div>
                    </div>

                    {/* Label & Description */}
                    <div>
                      <h3
                        className={`text-base sm:text-lg font-bold tracking-tight mb-1 ${
                          selected ? 'text-amber-300' : 'text-slate-100 group-hover:text-amber-200'
                        }`}
                      >
                        {opt.label}
                      </h3>
                      {opt.description && (
                        <p className="text-xs sm:text-sm text-slate-300/85 leading-relaxed">
                          {opt.description}
                        </p>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom Action Footer */}
      <div className="pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-xs text-slate-400 flex items-center gap-2">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>Press 1-{q.options.length} on your keyboard to quick-select</span>
        </div>

        {q.isMultiSelect && (
          <button
            id="quest-continue-multi-btn"
            onClick={() => advanceToNext()}
            disabled={!canAdvanceMulti && currentStep === 4}
            className={`w-full sm:w-auto px-8 py-3.5 rounded-2xl font-bold text-sm sm:text-base flex items-center justify-center gap-2 transition-all cursor-pointer ${
              canAdvanceMulti || currentStep === 6
                ? 'gold-glow-btn text-slate-950 shadow-xl'
                : 'bg-slate-800/80 text-slate-500 cursor-not-allowed border border-slate-700'
            }`}
          >
            <span>{currentStep === 6 ? 'Cast Spell & See Recommendations' : 'Continue Quest'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
};
