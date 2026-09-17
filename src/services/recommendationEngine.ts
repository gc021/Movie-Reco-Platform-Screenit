import { CURATED_MOVIES } from '../data/curatedMovies';
import { Movie, QuizAnswers, RecommendationResult, WizardType } from '../types';
import { evaluateMovieUnderGauravTaste, findGauravRating } from '../data/gauravTasteProfile';

export interface RecommendationOptions {
  wizardType?: WizardType;
  includeGauravRated?: boolean;
}

export function scoreMovie(
  movie: Movie,
  answers: Partial<QuizAnswers>,
  wizardType: WizardType = 'standard'
): { score: number; highlights: string[]; gauravVerdict?: string; gauravRating?: number; contrastiveHighlights?: string[] } {
  let score = 0;
  const highlights: string[] = [];

  // Base score from IMDb rating (Top Curated ratings)
  score += (movie.imdbRating - 6.0) * 12;

  let gauravVerdict: string | undefined;
  let gauravRating: number | undefined;
  let contrastiveHighlights: string[] | undefined;

  // Council of Oracles specialized scoring boosts
  if (wizardType === 'gaurav') {
    const evaluation = evaluateMovieUnderGauravTaste(movie);
    score += evaluation.contrastiveScore;
    gauravVerdict = evaluation.verdict;
    gauravRating = evaluation.directRating;
    contrastiveHighlights = evaluation.positiveAffinities;

    if (evaluation.directRating && evaluation.directRating >= 9) {
      highlights.push(`⭐ Gaurav's IMDb Rating: ${evaluation.directRating}/10 (Crown Jewel)`);
    } else if (evaluation.directRating && evaluation.directRating >= 8) {
      highlights.push(`⭐ Gaurav's IMDb Rating: ${evaluation.directRating}/10 (High Tier)`);
    }

    if (evaluation.positiveAffinities.length > 0) {
      highlights.push(evaluation.positiveAffinities[0]);
    }
  } else if (wizardType === 'nolan') {
    if (movie.director === 'Christopher Nolan') {
      score += 90;
      highlights.push('Christopher Nolan Directorial Masterpiece');
    } else if (movie.contentTags.includes('Mind-bending') || movie.genres.includes('Sci-fi')) {
      score += 45;
      highlights.push('Nolan-esque Mind-Bending Grandeur');
    }
    if (movie.weapons.includes('Clever twists') || movie.weapons.includes('Beautiful worlds')) {
      score += 25;
    }
  } else if (wizardType === 'tarantino') {
    if (movie.director === 'Quentin Tarantino') {
      score += 90;
      highlights.push('Quentin Tarantino Signature Classic');
    } else if (movie.genres.includes('Crime') || movie.contentTags.includes('Dark & Gritty') || movie.weapons.includes('Big action')) {
      score += 40;
      highlights.push('High-Tension Dialogue & Visceral Energy');
    }
  } else if (wizardType === 'scorsese') {
    if (movie.director === 'Martin Scorsese') {
      score += 90;
      highlights.push('Martin Scorsese Directorial Triumph');
    } else if (movie.genres.includes('Crime') || movie.genres.includes('Drama')) {
      score += 40;
      highlights.push('Kinetic Narrative Pace & Moral Complexity');
    }
  } else if (wizardType === 'villeneuve') {
    if (movie.director === 'Denis Villeneuve') {
      score += 90;
      highlights.push('Denis Villeneuve Atmospheric Vision');
    } else if (movie.genres.includes('Sci-fi') || movie.weapons.includes('Beautiful worlds')) {
      score += 45;
      highlights.push('Monumental Atmospheric Scale & Soundscape');
    }
  } else if (wizardType === 'cruise') {
    if (movie.cast.includes('Tom Cruise')) {
      score += 90;
      highlights.push('Tom Cruise Practical Stunt Spectacle');
    } else if (movie.genres.includes('Action') || movie.genres.includes('Thriller') || movie.weapons.includes('Big action')) {
      score += 45;
      highlights.push('Unrelenting Momentum & Theatrical Stakes');
    }
  } else if (wizardType === 'bale') {
    if (movie.cast.includes('Christian Bale')) {
      score += 90;
      highlights.push('Christian Bale Immersion Masterclass');
    } else if (movie.contentTags.includes('Dark & Gritty') || movie.weapons.includes('Clever twists')) {
      score += 40;
      highlights.push('Dark Psychological Depth & Moral Ambiguity');
    }
  } else if (wizardType === 'pitt-damon') {
    if (movie.cast.includes('Brad Pitt') || movie.cast.includes('Matt Damon')) {
      score += 85;
      highlights.push('Brad Pitt / Matt Damon Magnetic Star Chemistry');
    } else if (movie.genres.includes('Comedy') || movie.treasureCategories.includes('Popular crowd-pleaser')) {
      score += 35;
      highlights.push('Effortless Swagger & Witty Banter');
    }
  }

  // Q1: Mission Match
  if (answers.q1Mission) {
    if (movie.moodTags.includes(answers.q1Mission)) {
      score += 35;
      highlights.push(`Matches your quest to ${answers.q1Mission.toLowerCase()}`);
    }
  }

  // Q2: Runtime Match (Revised Buckets)
  if (answers.q2Runtime) {
    if (answers.q2Runtime === 'Under 2 hours' || answers.q2Runtime === 'Under 90 min') {
      if (movie.runtimeMinutes <= 120) {
        score += 30;
        highlights.push(`Under 2 hour runtime (${movie.runtimeMinutes} min)`);
      } else if (movie.runtimeMinutes <= 130) {
        score += 10;
      } else {
        score -= 25;
      }
    } else if (answers.q2Runtime === '2 to 2.5 Hours' || answers.q2Runtime === 'Around 2 hours') {
      if (movie.runtimeMinutes >= 115 && movie.runtimeMinutes <= 150) {
        score += 30;
        highlights.push(`Perfect 2 to 2.5 hour window (${movie.runtimeMinutes} min)`);
      } else if (movie.runtimeMinutes > 165) {
        score -= 15;
      }
    } else if (answers.q2Runtime === 'Make it an epic') {
      if (movie.runtimeMinutes >= 145) {
        score += 35;
        highlights.push(`Grand cinematic epic (${movie.runtimeMinutes} min)`);
      } else {
        score -= 10;
      }
    }
  }

  // Q3: Watch Party Match
  if (answers.q3Party) {
    if (movie.parties.includes(answers.q3Party)) {
      score += 25;
      highlights.push(`Tailored for your ${answers.q3Party.toLowerCase()} watch party`);
    } else if (answers.q3Party === 'Kids' && (movie.ageRating === 'R' || !movie.contentTags.includes('Family-safe'))) {
      score -= 80; // strong penalty for R-rated with kids
    }
  }

  // Q4: Weapon Match (Including Casual viewing)
  if (answers.q4Weapon) {
    if (answers.q4Weapon === 'Casual viewing') {
      if (movie.genres.includes('Comedy') || movie.weapons.includes('Cozy comfort') || movie.treasureCategories.includes('Popular crowd-pleaser')) {
        score += 35;
        highlights.push('Easygoing, highly rewatchable & multitasking-friendly');
      } else if (movie.runtimeMinutes <= 125) {
        score += 20;
      }
    } else if (movie.weapons.includes(answers.q4Weapon)) {
      score += 30;
      highlights.push(`Packed with ${answers.q4Weapon.toLowerCase()}`);
    }
  }

  // Q5: Genres Match (Up to 3, with Surprise Me support)
  if (answers.q5Genres && answers.q5Genres.length > 0) {
    if (answers.q5Genres.includes('Surprise me')) {
      score += 30;
      highlights.push('Wildcard discovery across curated masterpieces');
    } else {
      let genreMatchCount = 0;
      for (const genre of answers.q5Genres) {
        if (movie.genres.map(g => g.toLowerCase()).includes(genre.toLowerCase())) {
          genreMatchCount++;
        }
      }
      if (genreMatchCount > 0) {
        score += genreMatchCount * 25;
        highlights.push(`Aligns with your chosen genre portals (${movie.genres.slice(0, 2).join(', ')})`);
      }
    }
  }

  // Q6: Treasure Map
  if (answers.q6Treasure) {
    if (answers.q6Treasure === 'Cult classic' && movie.isCultClassic) {
      score += 30;
      highlights.push('Legendary cult classic treasure');
    } else if (answers.q6Treasure === 'Award-winning pick' && movie.isAwardWinner) {
      score += 30;
      highlights.push('Acclaimed award-winning cinematic achievement');
    } else if (answers.q6Treasure === 'Underrated gem' && movie.treasureCategories.includes('Underrated gem')) {
      score += 30;
      highlights.push('Hidden cinematic gem to discover');
    } else if (answers.q6Treasure === 'Brand-new release' && (movie.year >= 2022 || movie.treasureCategories.includes('Brand-new release'))) {
      score += 30;
      highlights.push(`Modern masterpiece from ${movie.year}`);
    } else if (answers.q6Treasure === 'Popular crowd-pleaser' && movie.treasureCategories.includes('Popular crowd-pleaser')) {
      score += 25;
      highlights.push('Beloved crowd-pleasing spectacle');
    } else if (answers.q6Treasure === 'Surprise me') {
      score += 20;
    }
  }

  // Q7: Quest Rules
  if (answers.q7Rules && answers.q7Rules.length > 0) {
    if (answers.q7Rules.includes('Keep it fast') && movie.runtimeMinutes <= 120) {
      score += 15;
    }
    if (answers.q7Rules.includes('No sad ending') && movie.contentTags.includes('Heartwarming')) {
      score += 20;
    }
    if (answers.q7Rules.includes('Family-safe') && movie.contentTags.includes('Family-safe')) {
      score += 20;
    }
  }

  return { score, highlights, gauravVerdict, gauravRating, contrastiveHighlights };
}

export function passesHardFilters(
  movie: Movie,
  answers: Partial<QuizAnswers>,
  watchedMovieIds: Set<string>,
  sessionExcludedIds: Set<string>,
  options: RecommendationOptions = {}
): boolean {
  // Top Curated Recommendations check
  if (!movie.imdbRating || movie.imdbRating < 6.5) return false;

  // Exclude watched
  if (watchedMovieIds.has(movie.id)) return false;

  // Exclude previously shown in this session
  if (sessionExcludedIds.has(movie.id)) return false;

  // If Gaurav Wizard is active and user opted to exclude already-rated movies to find unseen gems
  if (options.wizardType === 'gaurav' && options.includeGauravRated === false) {
    const isRated = findGauravRating(movie.title, movie.year);
    if (isRated) return false;
  }

  const rules = answers.q7Rules || [];

  // Hard Rule: No horror
  if (rules.includes('No horror')) {
    if (movie.genres.map(g => g.toLowerCase()).includes('horror')) return false;
    if (movie.contentTags.some(t => t.toLowerCase().includes('horror'))) return false;
  }

  // Hard Rule: Family-safe or Kids party
  if (rules.includes('Family-safe') || answers.q3Party === 'Kids') {
    if (movie.ageRating === 'R') return false;
  }

  // Hard Rule: Nothing too heavy
  if (rules.includes('Nothing too heavy')) {
    if (movie.contentTags.includes('Dark & Gritty') && !movie.genres.includes('Comedy')) return false;
    if (movie.contentTags.includes('Intense Tension') && movie.ageRating === 'R') return false;
  }

  return true;
}

export function generateWizardReason(movie: Movie, answers: Partial<QuizAnswers>, wizardType: WizardType = 'standard'): string {
  const mission = answers.q1Mission ? answers.q1Mission.toLowerCase() : 'escape reality';
  const party = answers.q3Party ? answers.q3Party.toLowerCase() : 'your quest party';
  const weapon = answers.q4Weapon ? answers.q4Weapon.toLowerCase() : 'cinematic magic';
  const treasure = answers.q6Treasure ? answers.q6Treasure.toLowerCase() : 'a great pick';

  if (wizardType === 'gaurav') {
    const gRating = findGauravRating(movie.title, movie.year);
    if (gRating && gRating.rating >= 9) {
      return `Gaurav's Cinephile Divination: "${movie.title}" is rated ${gRating.rating}/10 in Gaurav's personal IMDb vault—chosen for its elite ${movie.director} craft, uncompromising script, and complete contrast to hollow cinema.`;
    }
    if (gRating && gRating.rating >= 8) {
      return `Gaurav's Cinephile Divination: A verified ${gRating.rating}/10 favorite of Gaurav's. Delivers masterclass ${weapon} and ${mission} for your ${party}.`;
    }
    return `Gaurav's Contrastive Taste Divination: Modeled directly against Gaurav's highest-rated masterworks. Selected for ${movie.director}'s intricate storytelling, high tension, and absence of generic tropes.`;
  }

  if (wizardType === 'nolan') {
    return `Christopher Nolan's Divination: "${movie.title}" embodies uncompromising cinematic scale, intellectual rigor, and narrative momentum for ${party}.`;
  }
  if (wizardType === 'tarantino') {
    return `Quentin Tarantino's Divination: Selected for explosive conversational tension, electric needle-drops, and pure celluloid energy.`;
  }
  if (wizardType === 'scorsese') {
    return `Martin Scorsese's Divination: Kinetic storytelling fueled by raw moral ambiguity, magnetic character acting, and unmatched momentum.`;
  }
  if (wizardType === 'villeneuve') {
    return `Denis Villeneuve's Divination: Monumental atmospheric compositions, deep auditory immersion, and cosmic philosophical depth.`;
  }
  if (wizardType === 'cruise') {
    return `Tom Cruise's Divination: Pure, authentic theatrical adrenaline crafted with relentless forward momentum for your screen.`;
  }
  if (wizardType === 'bale') {
    return `Christian Bale's Divination: Dark psychological intensity and total commitment to visceral, high-stakes human truth.`;
  }
  if (wizardType === 'pitt-damon') {
    return `Pitt & Damon's Divination: Unmatched charisma, razor-sharp dialogue, and high-IQ ensemble flow that makes movie night fly by.`;
  }

  const templates = [
    `The Grand Oracle scried the constellations and summoned "${movie.title}"—crafted for your wish to ${mission} with ${party}, armed with ${weapon} and an IMDb rating of ${movie.imdbRating.toFixed(1)}.`,
    `A celestial match: because you sought ${weapon} and ${mission}, this ${movie.year} ${movie.genres[0] || 'film'} casts the exact spell your ${party} needs.`,
    `Drawn from the ancient scrolls: "${movie.title}" satisfies your quest for ${treasure} with ${movie.runtimeMinutes} minutes of unmissable storytelling.`
  ];

  const index = (movie.id.length + (movie.year % 3)) % templates.length;
  return templates[index];
}

export function getRecommendations(
  answers: Partial<QuizAnswers>,
  watchedMovieIds: string[] = [],
  sessionExcludedIds: string[] = [],
  requestedCount: number = 3,
  options: RecommendationOptions = {}
): RecommendationResult[] {
  const watchedSet = new Set(watchedMovieIds);
  const sessionExcludedSet = new Set(sessionExcludedIds);
  const wizardType = options.wizardType || 'standard';

  // 1. Primary Filter: Full hard filters (rating >= 6.5, unwatched, not sessionExcluded, strict quest rules)
  let eligibleMovies = CURATED_MOVIES.filter(m => passesHardFilters(m, answers, watchedSet, sessionExcludedSet, options));

  // 2. Fallback A: If strict exclusion left too few candidates in Gaurav mode, loosen Gaurav rated exclusion
  if (eligibleMovies.length < requestedCount && options.wizardType === 'gaurav' && options.includeGauravRated === false) {
    const loosenedGaurav = CURATED_MOVIES.filter(m => passesHardFilters(m, answers, watchedSet, sessionExcludedSet, { ...options, includeGauravRated: true }));
    for (const m of loosenedGaurav) {
      if (!eligibleMovies.some(e => e.id === m.id)) {
        eligibleMovies.push(m);
      }
    }
  }

  // 3. Fallback B: If still fewer than requested count, loosen sessionExcludedIds while strictly keeping unwatched
  if (eligibleMovies.length < requestedCount) {
    const unwatchedCandidates = CURATED_MOVIES.filter(m => !watchedSet.has(m.id) && !sessionExcludedSet.has(m.id));
    for (const m of unwatchedCandidates) {
      if (!eligibleMovies.some(e => e.id === m.id)) {
        eligibleMovies.push(m);
      }
    }
  }

  // 4. Fallback C: If all unwatched movies were session-excluded, allow any unwatched movie in the entire library
  if (eligibleMovies.length < requestedCount) {
    const allUnwatched = CURATED_MOVIES.filter(m => !watchedSet.has(m.id));
    for (const m of allUnwatched) {
      if (!eligibleMovies.some(e => e.id === m.id)) {
        eligibleMovies.push(m);
      }
    }
  }

  // Score candidates
  const scored = eligibleMovies.map(movie => {
    const { score, highlights, gauravVerdict, gauravRating, contrastiveHighlights } = scoreMovie(movie, answers, wizardType);
    return {
      movie,
      matchScore: score,
      matchHighlights: highlights,
      gauravVerdict,
      gauravRating,
      contrastiveHighlights,
      wizardReason: generateWizardReason(movie, answers, wizardType)
    };
  });

  // Sort descending by match score
  scored.sort((a, b) => b.matchScore - a.matchScore);

  // Variety selection: Pick top requestedCount ensuring distinct feel where possible
  const selected: RecommendationResult[] = [];
  const usedPrimaryGenres = new Set<string>();

  for (const item of scored) {
    if (selected.length >= requestedCount) break;

    const primaryGenre = item.movie.genres[0] || 'General';
    if (!usedPrimaryGenres.has(primaryGenre) || scored.length <= requestedCount * 2) {
      selected.push(item);
      usedPrimaryGenres.add(primaryGenre);
    }
  }

  // If still need more, backfill from remaining highest scored
  if (selected.length < requestedCount) {
    for (const item of scored) {
      if (selected.length >= requestedCount) break;
      if (!selected.some(s => s.movie.id === item.movie.id)) {
        selected.push(item);
      }
    }
  }

  return selected;
}

export function getSingleReplacement(
  answers: Partial<QuizAnswers>,
  watchedMovieIds: string[] = [],
  sessionExcludedIds: string[] = [],
  options: RecommendationOptions = {}
): RecommendationResult | null {
  const recommendations = getRecommendations(answers, watchedMovieIds, sessionExcludedIds, 1, options);
  return recommendations.length > 0 ? recommendations[0] : null;
}
