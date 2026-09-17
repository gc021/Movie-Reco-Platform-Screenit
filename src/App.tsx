import React, { useState, useEffect, useCallback } from 'react';
import { BackgroundParticles } from './components/BackgroundParticles';
import { Navbar } from './components/Navbar';
import { WizardHero } from './components/WizardHero';
import { WizardSelector } from './components/WizardSelector';
import { QuestQuiz } from './components/QuestQuiz';
import { ContactGateScreen } from './components/ContactGateScreen';
import { RecommendationScreen } from './components/RecommendationScreen';
import { FinalChoiceScreen } from './components/FinalChoiceScreen';
import { CuratedGallery } from './components/CuratedGallery';
import { TestimonialsSection } from './components/TestimonialsSection';
import { WatchHistoryModal } from './components/WatchHistoryModal';
import { TrailerModal } from './components/TrailerModal';
import { MovieDetailModal } from './components/MovieDetailModal';
import { AdminDashboardModal } from './components/AdminDashboardModal';
import { BrowseCategories, CategoryTab } from './components/BrowseCategories';
import { CouncilOfOraclesView } from './components/CouncilOfOraclesView';
import { Footer } from './components/Footer';
import { Movie, QuizAnswers, RecommendationResult, WizardType, AppView } from './types';
import { getRecommendations, getSingleReplacement } from './services/recommendationEngine';
import { trackEvent, recordPageVisit, recordUserLead } from './services/analytics';
import { playSelectChime, playSwapSwoosh } from './services/soundEffects';

export function App() {
  const [view, setView] = useState<AppView>('home');
  const [activeCategoryTab, setActiveCategoryTab] = useState<CategoryTab>('directors');

  const [watchedMovieIds, setWatchedMovieIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('screenit_watched_movies');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [userName, setUserName] = useState<string>(() => {
    try {
      const saved = localStorage.getItem('screenit_user_contact');
      return saved ? JSON.parse(saved).name || '' : '';
    } catch {
      return '';
    }
  });

  // Wizard state: Standard (Grand Oracle) is ALWAYS the default as requested
  const [activeWizard, setActiveWizard] = useState<WizardType>(() => {
    try {
      const saved = localStorage.getItem('screenit_wizard_type') as WizardType;
      return (saved && ['standard', 'gaurav', 'nolan', 'tarantino', 'scorsese', 'villeneuve', 'cruise', 'bale', 'pitt-damon'].includes(saved))
        ? saved
        : 'standard';
    } catch {
      return 'standard';
    }
  });

  const [includeGauravRated, setIncludeGauravRated] = useState<boolean>(() => {
    try {
      const saved = localStorage.getItem('screenit_include_gaurav_rated');
      return saved !== null ? JSON.parse(saved) : true;
    } catch {
      return true;
    }
  });

  const [quizAnswers, setQuizAnswers] = useState<Partial<QuizAnswers>>({});
  const [recommendations, setRecommendations] = useState<RecommendationResult[]>([]);
  const [swapsRemaining, setSwapsRemaining] = useState<number>(3);
  const [sessionExcludedIds, setSessionExcludedIds] = useState<string[]>([]);
  const [isReplacingId, setIsReplacingId] = useState<string | null>(null);

  // Final selection
  const [chosenMovie, setChosenMovie] = useState<Movie | null>(null);

  // Modals
  const [isHistoryModalOpen, setIsHistoryModalOpen] = useState(false);
  const [isPreQuizCalibration, setIsPreQuizCalibration] = useState(false);
  const [activeTrailerMovie, setActiveTrailerMovie] = useState<Movie | null>(null);
  const [previewMovie, setPreviewMovie] = useState<Movie | null>(null);
  const [isAdminModalOpen, setIsAdminModalOpen] = useState(false);

  // Track page visit & keyboard shortcuts on initial mount
  useEffect(() => {
    recordPageVisit();

    const handleKeyDown = (e: KeyboardEvent) => {
      // Shortcut Ctrl+Shift+A or Alt+A to open Admin Dashboard
      if ((e.ctrlKey && e.shiftKey && (e.key === 'A' || e.key === 'a')) || (e.altKey && (e.key === 'a' || e.key === 'A'))) {
        e.preventDefault();
        setIsAdminModalOpen(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Sync watched movies to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('screenit_watched_movies', JSON.stringify(watchedMovieIds));
    } catch (e) {
      console.warn('LocalStorage save failed', e);
    }
  }, [watchedMovieIds]);

  // Sync wizard preferences to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('screenit_wizard_type', activeWizard);
      localStorage.setItem('screenit_include_gaurav_rated', JSON.stringify(includeGauravRated));
    } catch (e) {
      console.warn('LocalStorage save failed', e);
    }
  }, [activeWizard, includeGauravRated]);

  // Recalculate recommendations helper
  const refreshRecommendations = useCallback((
    answers: Partial<QuizAnswers>,
    wizard: WizardType,
    includeRated: boolean
  ) => {
    const results = getRecommendations(answers, watchedMovieIds, [], 3, {
      wizardType: wizard,
      includeGauravRated: includeRated
    });
    setRecommendations(results);
    setSessionExcludedIds(results.map(r => r.movie.id));
  }, [watchedMovieIds]);

  // Handle switching wizard
  const handleSelectWizard = (wizard: WizardType) => {
    setActiveWizard(wizard);
    trackEvent('wizard_switched', { wizard });
    if (view === 'recommendations' && Object.keys(quizAnswers).length > 0) {
      refreshRecommendations(quizAnswers, wizard, includeGauravRated);
    }
  };

  // Handle toggling include / exclude Gaurav rated movies
  const handleToggleIncludeRated = (include: boolean) => {
    setIncludeGauravRated(include);
    trackEvent('gaurav_include_rated_toggled', { include });
    if (view === 'recommendations' && Object.keys(quizAnswers).length > 0) {
      refreshRecommendations(quizAnswers, activeWizard, include);
    }
  };

  // Handler: Start Quest
  const handleStartQuest = (prefill?: { genre?: string; party?: string }) => {
    trackEvent('quiz_start', { wizard: activeWizard, prefill });
    setQuizAnswers(prefill ? { q5Genres: prefill.genre ? [prefill.genre] : undefined, q3Party: prefill.party } : {});
    setSwapsRemaining(3);
    setSessionExcludedIds([]);
    setView('quiz');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handler: Open Category Subpage
  const handleOpenCategories = (tab: CategoryTab) => {
    playSelectChime();
    setActiveCategoryTab(tab);
    if (tab === 'directors') setView('browse_directors');
    else if (tab === 'actors') setView('browse_actors');
    else if (tab === 'genres') setView('browse_genres');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handler: Open Council of Oracles view
  const handleOpenCouncil = () => {
    playSelectChime();
    setView('council_of_oracles');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handler: Update partial answers during quiz
  const handleUpdateAnswers = (newAnswers: Partial<QuizAnswers>) => {
    setQuizAnswers(newAnswers);
  };

  // Handler: Complete Quiz & Proceed to Contact Gate (Name + Mobile Number)
  const handleCompleteQuiz = (completedAnswers: QuizAnswers) => {
    setQuizAnswers(completedAnswers);
    trackEvent('quiz_complete', { answers: completedAnswers, wizard: activeWizard });
    setView('contact_gate');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handler: Unlock Recommendations after Name & Mobile Number submitted
  const handleUnlockRecommendations = (contactData: { name: string; phone: string; countryCode: string }) => {
    setUserName(contactData.name);
    trackEvent('contact_unlocked', { name: contactData.name, wizard: activeWizard });

    // Generate 3 recommendations
    const results = getRecommendations(quizAnswers, watchedMovieIds, [], 3, {
      wizardType: activeWizard,
      includeGauravRated
    });
    setRecommendations(results);
    const initialIds = results.map(r => r.movie.id);
    setSessionExcludedIds(initialIds);

    // Record lead with generated recommendations
    recordUserLead({
      name: contactData.name,
      phone: contactData.phone,
      countryCode: contactData.countryCode,
      wizard: activeWizard,
      mission: quizAnswers.q1Mission,
      party: quizAnswers.q3Party,
      weapon: quizAnswers.q4Weapon,
      genres: quizAnswers.q5Genres,
      recommendedMovies: results.map(r => `${r.movie.title} (${r.movie.year})`),
      submittedAt: Date.now()
    });

    // If user has 0 watched movies, offer friendly 1-tap calibration modal or jump directly
    if (watchedMovieIds.length === 0) {
      setIsPreQuizCalibration(true);
      setIsHistoryModalOpen(true);
    } else {
      setView('recommendations');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Handler: Proceed to recommendations after optional calibration
  const handleProceedFromCalibration = () => {
    setIsHistoryModalOpen(false);
    setIsPreQuizCalibration(false);
    // Refresh recommendations with any new watched marks
    const results = getRecommendations(quizAnswers, watchedMovieIds, [], 3, {
      wizardType: activeWizard,
      includeGauravRated
    });
    setRecommendations(results);
    setSessionExcludedIds(results.map(r => r.movie.id));
    setView('recommendations');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handler: Replace a single recommendation (Up to 3 swaps)
  const handleReplaceMovie = (movieIdToReplace: string) => {
    if (swapsRemaining <= 0) return;

    setIsReplacingId(movieIdToReplace);
    trackEvent('recommendation_replaced', { movieId: movieIdToReplace, swapsLeft: swapsRemaining - 1 });

    setTimeout(() => {
      const updatedExcluded = [...sessionExcludedIds, movieIdToReplace];
      setSessionExcludedIds(updatedExcluded);

      const replacement = getSingleReplacement(
        quizAnswers,
        watchedMovieIds,
        updatedExcluded,
        {
          wizardType: activeWizard,
          includeGauravRated
        }
      );

      if (replacement) {
        setRecommendations(prev =>
          prev.map(r => (r.movie.id === movieIdToReplace ? replacement : r))
        );
        setSessionExcludedIds(prev => [...prev, replacement.movie.id]);
        setSwapsRemaining(prev => prev - 1);
      }
      setIsReplacingId(null);
    }, 250);
  };

  // Handler: Mark movie as watched from recommendation card (Unlimited recommendations)
  const handleMarkWatched = (movieId: string) => {
    const updatedWatched = watchedMovieIds.includes(movieId)
      ? watchedMovieIds
      : [...watchedMovieIds, movieId];

    if (!watchedMovieIds.includes(movieId)) {
      setWatchedMovieIds(updatedWatched);
      trackEvent('marked_watched', { movieId });
    }

    // Unlimited recommendation replacement when marked as "Already Watched"
    setIsReplacingId(movieId);
    setTimeout(() => {
      const updatedExcluded = sessionExcludedIds.includes(movieId)
        ? sessionExcludedIds
        : [...sessionExcludedIds, movieId];
      setSessionExcludedIds(updatedExcluded);

      const replacement = getSingleReplacement(
        quizAnswers,
        updatedWatched,
        updatedExcluded,
        {
          wizardType: activeWizard,
          includeGauravRated
        }
      );

      if (replacement) {
        setRecommendations(prev =>
          prev.map(r => (r.movie.id === movieId ? replacement : r))
        );
        setSessionExcludedIds(prev => [...prev, replacement.movie.id]);
        trackEvent('watched_unlimited_replacement', {
          replacedMovieId: movieId,
          newMovieId: replacement.movie.id,
          wizard: activeWizard
        });
      }
      setIsReplacingId(null);
    }, 250);
  };

  // Handler: Toggle watched state in history manager
  const handleToggleWatched = (movieId: string) => {
    setWatchedMovieIds(prev =>
      prev.includes(movieId) ? prev.filter(id => id !== movieId) : [...prev, movieId]
    );
  };

  // Handler: Import watched list
  const handleImportWatched = (movieIds: string[]) => {
    setWatchedMovieIds(prev => Array.from(new Set([...prev, ...movieIds])));
  };

  // Handler: Clear watched list
  const handleClearWatched = () => {
    setWatchedMovieIds([]);
  };

  // Handler: Select final champion movie
  const handleSelectFinalChoice = (movie: Movie) => {
    trackEvent('final_selection', { movieId: movie.id, title: movie.title, wizard: activeWizard });
    setChosenMovie(movie);
    setView('final_choice');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#090B14] text-slate-100 relative flex flex-col justify-between selection:bg-amber-500 selection:text-slate-950">
      {/* Background Star Particles & Constellations */}
      <BackgroundParticles />

      {/* Primary Top Navigation */}
      <Navbar
        onStartQuest={() => handleStartQuest()}
        onOpenHistory={() => {
          setIsPreQuizCalibration(false);
          setIsHistoryModalOpen(true);
        }}
        onOpenCategories={handleOpenCategories}
        onOpenCouncil={handleOpenCouncil}
        watchedCount={watchedMovieIds.length}
        isQuestActive={view === 'quiz' || view === 'contact_gate'}
        activeWizard={activeWizard}
        onSelectWizard={handleSelectWizard}
        currentView={view}
        onResetToHome={() => {
          playSelectChime();
          setView('home');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* Main Dynamic View Content */}
      <main className="relative z-10 flex-1">
        {view === 'home' && (
          <div className="space-y-12">
            <WizardHero
              onStartQuest={() => handleStartQuest()}
              onOpenHistory={() => {
                setIsPreQuizCalibration(false);
                setIsHistoryModalOpen(true);
              }}
              onOpenCategories={handleOpenCategories}
              onOpenCouncil={handleOpenCouncil}
              watchedCount={watchedMovieIds.length}
            />

            {/* Divination Wizard Configuration Card */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              <WizardSelector
                activeWizard={activeWizard}
                onSelectWizard={handleSelectWizard}
                includeGauravRated={includeGauravRated}
                onToggleIncludeRated={handleToggleIncludeRated}
                onOpenCouncil={handleOpenCouncil}
              />
            </div>

            <CuratedGallery
              onSelectMoviePreview={movie => setPreviewMovie(movie)}
              onStartQuest={() => handleStartQuest()}
            />

            <TestimonialsSection />
          </div>
        )}

        {view === 'quiz' && (
          <QuestQuiz
            answers={quizAnswers}
            onUpdateAnswers={handleUpdateAnswers}
            onCompleteQuiz={handleCompleteQuiz}
            onCancel={() => {
              setView('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {view === 'contact_gate' && (
          <ContactGateScreen
            answers={quizAnswers}
            activeWizard={activeWizard}
            onUnlockRecommendations={handleUnlockRecommendations}
            onBackToQuiz={() => {
              setView('quiz');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {view === 'recommendations' && (
          <RecommendationScreen
            recommendations={recommendations}
            answers={quizAnswers}
            userName={userName}
            onReplaceMovie={handleReplaceMovie}
            onMarkWatched={handleMarkWatched}
            onWatchTrailer={movie => setActiveTrailerMovie(movie)}
            onSelectFinalChoice={handleSelectFinalChoice}
            onRetakeQuest={() => handleStartQuest()}
            onAdjustAnswers={() => {
              setView('quiz');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            swapsRemaining={swapsRemaining}
            isReplacingId={isReplacingId}
            activeWizard={activeWizard}
            onSelectWizard={handleSelectWizard}
            includeGauravRated={includeGauravRated}
            onToggleIncludeRated={handleToggleIncludeRated}
            onOpenCouncil={handleOpenCouncil}
          />
        )}

        {view === 'final_choice' && chosenMovie && (
          <FinalChoiceScreen
            movie={chosenMovie}
            onStartNewQuest={() => handleStartQuest()}
            onWatchTrailer={movie => setActiveTrailerMovie(movie)}
            activeWizard={activeWizard}
            onSwitchWizard={handleSelectWizard}
            onOpenCouncil={handleOpenCouncil}
          />
        )}

        {/* Subpages: Browse by Director / Actor / Genre */}
        {(view === 'browse_directors' || view === 'browse_actors' || view === 'browse_genres') && (
          <BrowseCategories
            initialTab={
              view === 'browse_directors'
                ? 'directors'
                : view === 'browse_actors'
                ? 'actors'
                : 'genres'
            }
            onSelectMovie={movie => setPreviewMovie(movie)}
            onWatchTrailer={movie => setActiveTrailerMovie(movie)}
            onStartQuest={handleStartQuest}
            onBackToHome={() => {
              playSelectChime();
              setView('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            activeWizard={activeWizard}
          />
        )}

        {/* The Council of Oracles Page */}
        {view === 'council_of_oracles' && (
          <CouncilOfOraclesView
            activeWizard={activeWizard}
            onSelectWizard={handleSelectWizard}
            onStartQuestWithWizard={(wizardId) => {
              handleSelectWizard(wizardId);
              handleStartQuest();
            }}
            onBackToHome={() => {
              playSelectChime();
              setView('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}
      </main>

      {/* Global Footer */}
      <Footer
        onStartQuest={() => handleStartQuest()}
        onOpenHistory={() => {
          setIsPreQuizCalibration(false);
          setIsHistoryModalOpen(true);
        }}
        onOpenCategories={handleOpenCategories}
        onOpenCouncil={handleOpenCouncil}
        onOpenAdmin={() => setIsAdminModalOpen(true)}
      />

      {/* Admin Creator Vault & Metrics Dashboard Modal */}
      <AdminDashboardModal
        isOpen={isAdminModalOpen}
        onClose={() => setIsAdminModalOpen(false)}
      />

      {/* Watched History & Calibration Modal */}
      <WatchHistoryModal
        isOpen={isHistoryModalOpen}
        onClose={() => {
          setIsHistoryModalOpen(false);
          if (isPreQuizCalibration) {
            setView('recommendations');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }}
        watchedMovieIds={watchedMovieIds}
        onToggleWatched={handleToggleWatched}
        onImportWatched={handleImportWatched}
        onClearWatched={handleClearWatched}
        isPreQuizCheckpoint={isPreQuizCalibration}
        onProceedToRecommendations={handleProceedFromCalibration}
      />

      {/* Official YouTube Trailer Modal */}
      <TrailerModal
        movie={activeTrailerMovie}
        onClose={() => setActiveTrailerMovie(null)}
      />

      {/* Quick Movie Detail Modal */}
      <MovieDetailModal
        movie={previewMovie}
        onClose={() => setPreviewMovie(null)}
        onWatchTrailer={movie => {
          setPreviewMovie(null);
          setActiveTrailerMovie(movie);
        }}
        onToggleWatched={handleToggleWatched}
        isWatched={previewMovie ? watchedMovieIds.includes(previewMovie.id) : false}
        onChooseMovie={movie => {
          setPreviewMovie(null);
          handleSelectFinalChoice(movie);
        }}
      />
    </div>
  );
}

export default App;
