export interface StreamingPlatform {
  name: string;
  type: 'subscription' | 'rent' | 'buy' | 'free';
  pricing?: string;
  deepLink?: string;
  badgeColor?: string;
}

export interface IndianOttInfo {
  available: boolean;
  platforms: StreamingPlatform[];
  lastChecked?: string;
  notes?: string;
}

export interface Movie {
  id: string;
  title: string;
  year: number;
  imdbRating: number; // Must be >= 6.5
  runtimeMinutes: number;
  director: string;
  cast: string[];
  genres: string[];
  contentTags: string[]; // e.g. "Family-safe", "Heartwarming", "Intense Action", "Dark & Gritty", "Mind-bending", "No sad ending", "Fast-paced"
  moodTags: string[]; // "Escape reality", "Feel every feeling", "Solve a mystery", "Get your pulse racing", "Have a great time", "See something unforgettable"
  weapons: string[]; // "Big action", "Clever twists", "Deep feelings", "Beautiful worlds", "Cozy comfort"
  parties: string[]; // "Solo", "Date night", "Friends", "Family", "Kids"
  treasureCategories: string[]; // "Brand-new release", "Popular crowd-pleaser", "Underrated gem", "Award-winning pick", "Cult classic"
  posterUrl: string;
  backdropUrl: string;
  trailerYoutubeId: string;
  synopsis: string;
  isCultClassic?: boolean;
  isAwardWinner?: boolean;
  ageRating: 'G' | 'PG' | 'PG-13' | 'R';
  indianOtt: IndianOttInfo;
  gauravRating?: number; // From Gaurav's IMDb vault
}

export type WizardType =
  | 'standard'
  | 'gaurav'
  | 'nolan'
  | 'tarantino'
  | 'scorsese'
  | 'villeneuve'
  | 'cruise'
  | 'bale'
  | 'pitt-damon';

export interface CouncilMember {
  id: WizardType;
  name: string;
  avatar: string;
  roleTitle: string;
  epithet: string;
  quote: string;
  philosophy: string;
  signatureGenres: string[];
  keyDirectors: string[];
  keyActors: string[];
  hallmarkFilms: string[];
  badgeColor?: string;
}

export interface UserContact {
  name: string;
  phone: string;
  countryCode: string;
  submittedAt: number;
}

export interface UserLead {
  id: string;
  name: string;
  phone: string;
  countryCode: string;
  submittedAt: number;
  wizard: string;
  mission?: string;
  party?: string;
  weapon?: string;
  genres?: string[];
  recommendedMovies?: string[];
  chosenMovie?: string;
}

export interface AnalyticsSummary {
  totalPageVisits: number;
  uniqueSessions: number;
  questsStarted: number;
  questsCompleted: number;
  totalLeads: number;
  completionRate: number; // percentage
  leadConversionRate: number; // percentage
}

export type AppView =
  | 'home'
  | 'quiz'
  | 'contact_gate'
  | 'recommendations'
  | 'final_choice'
  | 'browse_directors'
  | 'browse_actors'
  | 'browse_genres'
  | 'council_of_oracles';


export interface GauravWizardConfig {
  activeWizard: WizardType;
  includeRatedMovies: boolean; // if false, exclude movies already rated in Gaurav's IMDb list to discover new unseen gems
}

export interface QuizAnswers {
  q1Mission: string;
  q2Runtime: string;
  q3Party: string;
  q4Weapon: string;
  q5Genres: string[];
  q6Treasure: string;
  q7Rules: string[];
}

export interface RecommendationResult {
  movie: Movie;
  wizardReason: string;
  matchScore: number;
  matchHighlights: string[];
  gauravRating?: number;
  gauravVerdict?: string;
  contrastiveHighlights?: string[];
}

export interface AnalyticsEvent {
  eventName: string;
  timestamp: number;
  properties?: Record<string, any>;
}

