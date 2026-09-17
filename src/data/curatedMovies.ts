import { Movie } from '../types';

export const CURATED_MOVIES: Movie[] = [
  {
    id: 'interstellar-2014',
    title: 'Interstellar',
    year: 2014,
    imdbRating: 8.7,
    runtimeMinutes: 169,
    director: 'Christopher Nolan',
    cast: ['Matthew McConaughey', 'Anne Hathaway', 'Jessica Chastain', 'Michael Caine'],
    genres: ['Sci-fi', 'Drama', 'Adventure'],
    contentTags: ['Mind-bending', 'Epic Scale', 'Emotional', 'Stunning Visuals', 'Space Odyssey'],
    moodTags: ['Escape reality', 'Feel every feeling', 'See something unforgettable'],
    weapons: ['Deep feelings', 'Beautiful worlds', 'Clever twists'],
    parties: ['Solo', 'Date night', 'Friends'],
    treasureCategories: ['Popular crowd-pleaser', 'Award-winning pick', 'Cult classic'],
    posterUrl: 'https://image.tmdb.org/t/p/w780/yQvGrMoipbRoddT0ZR8tPoR7NfX.jpg',
    backdropUrl: 'https://image.tmdb.org/t/p/w1280/5XNQBqnBwPA9yT0jZ0p3s8bbLh0.jpg',
    trailerYoutubeId: 'zSWdZVtXT7E',
    synopsis: 'When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.',
    isCultClassic: true,
    isAwardWinner: true,
    ageRating: 'PG-13',
    indianOtt: {
      available: true,
      platforms: [
        { name: 'Prime Video', type: 'subscription', pricing: 'Included in Prime', badgeColor: '#00A8E1' },
        { name: 'Apple TV', type: 'rent', pricing: 'Rent ₹120 / Buy ₹490', badgeColor: '#A2AAAD' },
        { name: 'JioHotstar', type: 'subscription', pricing: 'Included with Premium', badgeColor: '#0C2054' }
      ],
      lastChecked: '2026-08-20'
    }
  },
  {
    id: 'knives-out-2019',
    title: 'Knives Out',
    year: 2019,
    imdbRating: 7.9,
    runtimeMinutes: 130,
    director: 'Rian Johnson',
    cast: ['Daniel Craig', 'Ana de Armas', 'Chris Evans', 'Jamie Lee Curtis'],
    genres: ['Comedy', 'Mystery', 'Thriller', 'Drama'],
    contentTags: ['Clever twists', 'Whodunit', 'Family-safe', 'Witty', 'No horror'],
    moodTags: ['Solve a mystery', 'Have a great time', 'Escape reality'],
    weapons: ['Clever twists', 'Cozy comfort'],
    parties: ['Date night', 'Friends', 'Family', 'Solo'],
    treasureCategories: ['Popular crowd-pleaser', 'Award-winning pick'],
    posterUrl: 'https://image.tmdb.org/t/p/w780/pThyQovXQrw2m0s9x82twj48Jq4.jpg',
    backdropUrl: 'https://image.tmdb.org/t/p/w1280/4HWAQu28e2yaWrtupFPGFkdNU7V.jpg',
    trailerYoutubeId: 'qGqiHJTsR4Q',
    synopsis: 'A detective investigates the death of a patriarch of an eccentric, combative family in a lavish country estate filled with secret passages, deceit, and twisted motives.',
    isCultClassic: false,
    isAwardWinner: true,
    ageRating: 'PG-13',
    indianOtt: {
      available: true,
      platforms: [
        { name: 'Netflix India', type: 'subscription', pricing: 'Included with Plan', badgeColor: '#E50914' },
        { name: 'Lionsgate Play', type: 'subscription', pricing: 'Included with VIP', badgeColor: '#B38E3F' },
        { name: 'Prime Video', type: 'rent', pricing: 'Rent ₹99', badgeColor: '#00A8E1' }
      ],
      lastChecked: '2026-08-22'
    }
  },
  {
    id: 'everything-everywhere-2022',
    title: 'Everything Everywhere All at Once',
    year: 2022,
    imdbRating: 7.8,
    runtimeMinutes: 139,
    director: 'Daniel Kwan, Daniel Scheinert',
    cast: ['Michelle Yeoh', 'Ke Huy Quan', 'Stephanie Hsu', 'Jamie Lee Curtis'],
    genres: ['Sci-fi', 'Comedy', 'Adventure', 'Action', 'Drama'],
    contentTags: ['Mind-bending', 'Heartwarming', 'Multiverse', 'Emotional Climax', 'Kung Fu'],
    moodTags: ['Escape reality', 'Feel every feeling', 'See something unforgettable', 'Have a great time'],
    weapons: ['Beautiful worlds', 'Deep feelings', 'Clever twists', 'Big action'],
    parties: ['Friends', 'Date night', 'Solo'],
    treasureCategories: ['Award-winning pick', 'Cult classic', 'Popular crowd-pleaser'],
    posterUrl: 'https://image.tmdb.org/t/p/w780/u68AjlvlutfEIcpmbYpKcdi09ut.jpg',
    backdropUrl: 'https://image.tmdb.org/t/p/w1280/ss0Os3uWJfQAENILHZUdX8Tt1OC.jpg',
    trailerYoutubeId: 'wxN1T1uxQ2g',
    synopsis: 'A middle-aged Chinese immigrant is swept up into an insane adventure in which she alone can save existence by exploring other universes and connecting with the lives she could have led.',
    isCultClassic: true,
    isAwardWinner: true,
    ageRating: 'R',
    indianOtt: {
      available: true,
      platforms: [
        { name: 'SonyLIV', type: 'subscription', pricing: 'Included with Premium', badgeColor: '#302F93' },
        { name: 'Apple TV', type: 'rent', pricing: 'Rent ₹120', badgeColor: '#A2AAAD' }
      ],
      lastChecked: '2026-08-25'
    }
  },
  {
    id: 'paddington-2-2017',
    title: 'Paddington 2',
    year: 2017,
    imdbRating: 7.8,
    runtimeMinutes: 103,
    director: 'Paul King',
    cast: ['Hugh Bonneville', 'Sally Hawkins', 'Hugh Grant', 'Ben Whishaw'],
    genres: ['Comedy', 'Adventure', 'Animation'],
    contentTags: ['Family-safe', 'Cozy comfort', 'Heartwarming', 'No sad ending', 'No horror', 'Pure Joy'],
    moodTags: ['Have a great time', 'Feel every feeling', 'Escape reality'],
    weapons: ['Cozy comfort', 'Beautiful worlds'],
    parties: ['Kids', 'Family', 'Date night', 'Solo', 'Friends'],
    treasureCategories: ['Award-winning pick', 'Cult classic', 'Underrated gem'],
    posterUrl: 'https://image.tmdb.org/t/p/w780/1OJ9vkD5xPt3skC6KguyXAgagRZ.jpg',
    backdropUrl: 'https://image.tmdb.org/t/p/w1280/kRVUMsXFzhuXjr20JcCGc6TapxA.jpg',
    trailerYoutubeId: '52x5HJ9PBvM',
    synopsis: 'Paddington, now happily settled with the Brown family, picks up a series of odd jobs to buy the perfect present for his Aunt Lucy\'s 100th birthday, only for the gift to be stolen.',
    isCultClassic: true,
    isAwardWinner: true,
    ageRating: 'PG',
    indianOtt: {
      available: true,
      platforms: [
        { name: 'Prime Video', type: 'subscription', pricing: 'Included with Prime', badgeColor: '#00A8E1' },
        { name: 'Apple TV', type: 'rent', pricing: 'Rent ₹80', badgeColor: '#A2AAAD' }
      ],
      lastChecked: '2026-08-21'
    }
  },
  {
    id: 'blade-runner-2049-2017',
    title: 'Blade Runner 2049',
    year: 2017,
    imdbRating: 8.0,
    runtimeMinutes: 164,
    director: 'Denis Villeneuve',
    cast: ['Ryan Gosling', 'Harrison Ford', 'Ana de Armas', 'Sylvia Hoeks'],
    genres: ['Sci-fi', 'Mystery', 'Drama', 'Thriller'],
    contentTags: ['Cinematography Masterpiece', 'Cyberpunk', 'Atmospheric', 'Slow Burn', 'Deep Mystery'],
    moodTags: ['Escape reality', 'Solve a mystery', 'See something unforgettable'],
    weapons: ['Beautiful worlds', 'Clever twists', 'Deep feelings'],
    parties: ['Solo', 'Date night'],
    treasureCategories: ['Cult classic', 'Award-winning pick', 'Underrated gem'],
    posterUrl: 'https://image.tmdb.org/t/p/w780/gajva2L0rPYkEWjzgFlBXCAVBE5.jpg',
    backdropUrl: 'https://image.tmdb.org/t/p/w1280/gNdLJU9TxrpGx4dkZidjys3fyy0.jpg',
    trailerYoutubeId: 'gCcx85zbxz4',
    synopsis: 'Young Blade Runner K\'s discovery of a long-buried secret leads him to track down former Blade Runner Rick Deckard, who\'s been missing for thirty years.',
    isCultClassic: true,
    isAwardWinner: true,
    ageRating: 'R',
    indianOtt: {
      available: true,
      platforms: [
        { name: 'Netflix India', type: 'subscription', pricing: 'Included in Plan', badgeColor: '#E50914' },
        { name: 'SonyLIV', type: 'subscription', pricing: 'Included with Premium', badgeColor: '#302F93' },
        { name: 'Apple TV', type: 'rent', pricing: 'Rent ₹120', badgeColor: '#A2AAAD' }
      ],
      lastChecked: '2026-08-24'
    }
  },
  {
    id: 'grand-budapest-hotel-2014',
    title: 'The Grand Budapest Hotel',
    year: 2014,
    imdbRating: 8.1,
    runtimeMinutes: 99,
    director: 'Wes Anderson',
    cast: ['Ralph Fiennes', 'Tony Revolori', 'Saoirse Ronan', 'Willem Dafoe'],
    genres: ['Comedy', 'Adventure', 'Drama'],
    contentTags: ['Visual Symmetry', 'Fast-paced', 'Witty', 'Peculiar Charm', 'Heist'],
    moodTags: ['Have a great time', 'Escape reality', 'See something unforgettable'],
    weapons: ['Beautiful worlds', 'Cozy comfort', 'Clever twists'],
    parties: ['Date night', 'Friends', 'Solo', 'Family'],
    treasureCategories: ['Cult classic', 'Award-winning pick', 'Popular crowd-pleaser'],
    posterUrl: 'https://image.tmdb.org/t/p/w780/eWdyYQreja6JGCzqHWXpWHDrrPo.jpg',
    backdropUrl: 'https://image.tmdb.org/t/p/w1280/9udCLTxTFl28RxnK8Q05E154ZGa.jpg',
    trailerYoutubeId: '1Fg5iWmQjwk',
    synopsis: 'A writer encounters the owner of an aging high-class hotel, who tells him of his early years serving as a lobby boy in the glorious years under an exceptional concierge.',
    isCultClassic: true,
    isAwardWinner: true,
    ageRating: 'R',
    indianOtt: {
      available: true,
      platforms: [
        { name: 'JioHotstar', type: 'subscription', pricing: 'Included with Premium', badgeColor: '#0C2054' },
        { name: 'Apple TV', type: 'rent', pricing: 'Rent ₹120', badgeColor: '#A2AAAD' }
      ],
      lastChecked: '2026-08-25'
    }
  },
  {
    id: 'top-gun-maverick-2022',
    title: 'Top Gun: Maverick',
    year: 2022,
    imdbRating: 8.2,
    runtimeMinutes: 130,
    director: 'Joseph Kosinski',
    cast: ['Tom Cruise', 'Miles Teller', 'Jennifer Connelly', 'Jon Hamm'],
    genres: ['Action', 'Drama'],
    contentTags: ['Adrenaline Rush', 'Real Jet Stunts', 'Pure Spectacle', 'Crowd-Pleaser', 'No horror'],
    moodTags: ['Get your pulse racing', 'Have a great time', 'See something unforgettable'],
    weapons: ['Big action', 'Deep feelings'],
    parties: ['Friends', 'Family', 'Date night', 'Solo'],
    treasureCategories: ['Popular crowd-pleaser', 'Award-winning pick', 'Brand-new release'],
    posterUrl: 'https://image.tmdb.org/t/p/w780/n0YuM4f5lvGAP6MAW2kBIzugXnc.jpg',
    backdropUrl: 'https://image.tmdb.org/t/p/w1280/AaV1YIdWKnjAIAOe8UUKBFm327v.jpg',
    trailerYoutubeId: 'giXco2jaZ_4',
    synopsis: 'After thirty years, Maverick is still pushing the envelope as a top naval aviator, but must confront ghosts of his past when he leads TOP GUN\'s elite graduates on a perilous mission.',
    isCultClassic: false,
    isAwardWinner: true,
    ageRating: 'PG-13',
    indianOtt: {
      available: true,
      platforms: [
        { name: 'Prime Video', type: 'subscription', pricing: 'Included in Prime', badgeColor: '#00A8E1' },
        { name: 'JioHotstar', type: 'subscription', pricing: 'Included with Premium', badgeColor: '#0C2054' },
        { name: 'Apple TV', type: 'rent', pricing: 'Rent ₹120', badgeColor: '#A2AAAD' }
      ],
      lastChecked: '2026-08-23'
    }
  },
  {
    id: 'hunt-wilderpeople-2016',
    title: 'Hunt for the Wilderpeople',
    year: 2016,
    imdbRating: 7.8,
    runtimeMinutes: 101,
    director: 'Taika Waititi',
    cast: ['Sam Neill', 'Julian Dennison', 'Rima Te Wiata', 'Rachel House'],
    genres: ['Comedy', 'Adventure', 'Drama'],
    contentTags: ['Heartwarming', 'Quirky Humor', 'Wilderness', 'Cozy comfort', 'Fast-paced'],
    moodTags: ['Have a great time', 'Feel every feeling', 'Escape reality'],
    weapons: ['Cozy comfort', 'Beautiful worlds', 'Deep feelings'],
    parties: ['Family', 'Friends', 'Solo', 'Date night'],
    treasureCategories: ['Underrated gem', 'Cult classic'],
    posterUrl: 'https://image.tmdb.org/t/p/w780/hkmz9rxgcweizXNElozGeKwmAJE.jpg',
    backdropUrl: 'https://image.tmdb.org/t/p/w1280/ixpUtvrZNwk6LBObXaNH8fh4FYf.jpg',
    trailerYoutubeId: 'dPaU4Gymt3E',
    synopsis: 'A national manhunt is ordered for a rebellious kid and his foster uncle who go missing in the wild New Zealand bush, forging an unbreakable bond amidst hilarity.',
    isCultClassic: true,
    isAwardWinner: true,
    ageRating: 'PG-13',
    indianOtt: {
      available: true,
      platforms: [
        { name: 'Netflix India', type: 'subscription', pricing: 'Included in Plan', badgeColor: '#E50914' },
        { name: 'MUBI', type: 'subscription', pricing: 'Included in MUBI', badgeColor: '#1A2980' }
      ],
      lastChecked: '2026-08-20'
    }
  },
  {
    id: 'spider-verse-2018',
    title: 'Spider-Man: Into the Spider-Verse',
    year: 2018,
    imdbRating: 8.4,
    runtimeMinutes: 117,
    director: 'Bob Persichetti, Peter Ramsey, Rodney Rothman',
    cast: ['Shameik Moore', 'Jake Johnson', 'Hailee Steinfeld', 'Mahershala Ali'],
    genres: ['Animation', 'Action', 'Adventure', 'Sci-fi', 'Comedy'],
    contentTags: ['Groundbreaking Animation', 'Family-safe', 'Superb Soundtrack', 'Coming of Age'],
    moodTags: ['See something unforgettable', 'Get your pulse racing', 'Have a great time', 'Escape reality'],
    weapons: ['Beautiful worlds', 'Big action', 'Deep feelings'],
    parties: ['Kids', 'Family', 'Friends', 'Solo', 'Date night'],
    treasureCategories: ['Award-winning pick', 'Popular crowd-pleaser', 'Cult classic'],
    posterUrl: 'https://image.tmdb.org/t/p/w780/iiZZdoQBEYBv6id8su7ImL0oCbD.jpg',
    backdropUrl: 'https://image.tmdb.org/t/p/w1280/8mnXR9rey5uQ08rZAvzojKWbDQS.jpg',
    trailerYoutubeId: 'g4Hbz2jLxvQ',
    synopsis: 'Teenager Miles Morales becomes the new Spider-Man and must join other Spider-Heroes from various alternate dimensions to stop a threat to all reality.',
    isCultClassic: true,
    isAwardWinner: true,
    ageRating: 'PG',
    indianOtt: {
      available: true,
      platforms: [
        { name: 'Netflix India', type: 'subscription', pricing: 'Included in Plan', badgeColor: '#E50914' },
        { name: 'SonyLIV', type: 'subscription', pricing: 'Included with Premium', badgeColor: '#302F93' },
        { name: 'Apple TV', type: 'rent', pricing: 'Rent ₹80', badgeColor: '#A2AAAD' }
      ],
      lastChecked: '2026-08-25'
    }
  },
  {
    id: 'coherence-2013',
    title: 'Coherence',
    year: 2013,
    imdbRating: 7.2,
    runtimeMinutes: 89,
    director: 'James Ward Byrkit',
    cast: ['Emily Baldoni', 'Maury Sterling', 'Nicholas Brendon', 'Lorene Scafaria'],
    genres: ['Sci-fi', 'Mystery', 'Thriller'],
    contentTags: ['Mind-bending', 'Under 90 min', 'Clever twists', 'Indie Masterpiece', 'Tense Dinner'],
    moodTags: ['Solve a mystery', 'Escape reality', 'Get your pulse racing'],
    weapons: ['Clever twists'],
    parties: ['Solo', 'Friends', 'Date night'],
    treasureCategories: ['Underrated gem', 'Cult classic'],
    posterUrl: 'https://image.tmdb.org/t/p/w780/ezUtb9m5DeLwL2gxi4gktzNCvQv.jpg',
    backdropUrl: 'https://image.tmdb.org/t/p/w1280/cvGE73s935bXEAVt2W0zADPPegG.jpg',
    trailerYoutubeId: 'sPE2EZFqEfY',
    synopsis: 'Strange things begin to happen when a group of friends gather for a dinner party on the evening of an anomalous comet passing overhead.',
    isCultClassic: true,
    isAwardWinner: false,
    ageRating: 'PG-13',
    indianOtt: {
      available: true,
      platforms: [
        { name: 'Prime Video', type: 'subscription', pricing: 'Included in Prime', badgeColor: '#00A8E1' },
        { name: 'Apple TV', type: 'rent', pricing: 'Rent ₹80', badgeColor: '#A2AAAD' }
      ],
      lastChecked: '2026-08-21'
    }
  },
  {
    id: 'the-nice-guys-2016',
    title: 'The Nice Guys',
    year: 2016,
    imdbRating: 7.4,
    runtimeMinutes: 116,
    director: 'Shane Black',
    cast: ['Ryan Gosling', 'Russell Crowe', 'Angourie Rice', 'Matt Bomer'],
    genres: ['Comedy', 'Action', 'Crime', 'Mystery'],
    contentTags: ['Buddy Cop', 'Laugh-out-Loud', '70s Style', 'Fast-paced', 'Twisty Mystery'],
    moodTags: ['Have a great time', 'Solve a mystery', 'Get your pulse racing'],
    weapons: ['Big action', 'Clever twists', 'Cozy comfort'],
    parties: ['Friends', 'Date night', 'Solo'],
    treasureCategories: ['Underrated gem', 'Cult classic', 'Popular crowd-pleaser'],
    posterUrl: 'https://image.tmdb.org/t/p/w780/clq4So9spa9cXk3MZy2iMdqkxP2.jpg',
    backdropUrl: 'https://image.tmdb.org/t/p/w1280/yxYUN3fBPJdTNdXC1l8L24XFPhX.jpg',
    trailerYoutubeId: 'GQR5zsLLbIM',
    synopsis: 'In 1970s Los Angeles, a mismatched pair of private eyes investigate a missing girl and the mysterious death of a porn star, stumbling into a sprawling conspiracy.',
    isCultClassic: true,
    isAwardWinner: false,
    ageRating: 'R',
    indianOtt: {
      available: true,
      platforms: [
        { name: 'Netflix India', type: 'subscription', pricing: 'Included in Plan', badgeColor: '#E50914' },
        { name: 'Lionsgate Play', type: 'subscription', pricing: 'Included in VIP', badgeColor: '#B38E3F' }
      ],
      lastChecked: '2026-08-22'
    }
  },
  {
    id: 'palm-springs-2020',
    title: 'Palm Springs',
    year: 2020,
    imdbRating: 7.4,
    runtimeMinutes: 90,
    director: 'Max Barbakow',
    cast: ['Andy Samberg', 'Cristin Milioti', 'J.K. Simmons', 'Peter Gallagher'],
    genres: ['Comedy', 'Romance', 'Sci-fi', 'Drama'],
    contentTags: ['Time Loop', 'Under 90 min', 'Heartwarming', 'Fast-paced', 'Great Chemistry'],
    moodTags: ['Have a great time', 'Feel every feeling', 'Escape reality'],
    weapons: ['Cozy comfort', 'Clever twists', 'Deep feelings'],
    parties: ['Date night', 'Solo', 'Friends'],
    treasureCategories: ['Popular crowd-pleaser', 'Underrated gem'],
    posterUrl: 'https://image.tmdb.org/t/p/w780/gnAfqiV7yO3Jq9IntTmwkcaICqc.jpg',
    backdropUrl: 'https://image.tmdb.org/t/p/w1280/d7JUXVvjvVCXWs1mlpyO5ESdWdT.jpg',
    trailerYoutubeId: 'CpBLtXdUajk',
    synopsis: 'Stuck in a time loop at a Palm Springs wedding, two uninspired guests develop a budding romance while living the same day over and over.',
    isCultClassic: true,
    isAwardWinner: true,
    ageRating: 'R',
    indianOtt: {
      available: true,
      platforms: [
        { name: 'SonyLIV', type: 'subscription', pricing: 'Included with Premium', badgeColor: '#302F93' },
        { name: 'Apple TV', type: 'rent', pricing: 'Rent ₹80', badgeColor: '#A2AAAD' }
      ],
      lastChecked: '2026-08-23'
    }
  },
  {
    id: 'whiplash-2014',
    title: 'Whiplash',
    year: 2014,
    imdbRating: 8.5,
    runtimeMinutes: 107,
    director: 'Damien Chazelle',
    cast: ['Miles Teller', 'J.K. Simmons', 'Paul Reiser', 'Melissa Benoist'],
    genres: ['Drama', 'Music'],
    contentTags: ['Intense Tension', 'Masterclass Acting', 'Electrifying Finale', 'Obsession'],
    moodTags: ['Get your pulse racing', 'Feel every feeling', 'See something unforgettable'],
    weapons: ['Deep feelings', 'Big action'],
    parties: ['Solo', 'Friends', 'Date night'],
    treasureCategories: ['Award-winning pick', 'Cult classic', 'Popular crowd-pleaser'],
    posterUrl: 'https://image.tmdb.org/t/p/w780/7fn624j5lj3xTme2SgiLCeuedmO.jpg',
    backdropUrl: 'https://image.tmdb.org/t/p/w1280/wbQa0EnWUyRzQ5d1pHLNRlmsCUP.jpg',
    trailerYoutubeId: '7d_jQycdQGo',
    synopsis: 'A promising young drummer enrolls at a cut-throat music conservatory where his dreams of greatness are mentored by an instructor who will stop at nothing to realize a student\'s potential.',
    isCultClassic: true,
    isAwardWinner: true,
    ageRating: 'R',
    indianOtt: {
      available: true,
      platforms: [
        { name: 'Netflix India', type: 'subscription', pricing: 'Included in Plan', badgeColor: '#E50914' },
        { name: 'SonyLIV', type: 'subscription', pricing: 'Included with Premium', badgeColor: '#302F93' }
      ],
      lastChecked: '2026-08-24'
    }
  },
  {
    id: 'the-princess-bride-1987',
    title: 'The Princess Bride',
    year: 1987,
    imdbRating: 8.0,
    runtimeMinutes: 98,
    director: 'Rob Reiner',
    cast: ['Cary Elwes', 'Robin Wright', 'Mandy Patinkin', 'Andre the Giant'],
    genres: ['Adventure', 'Comedy', 'Romance', 'Fantasy'],
    contentTags: ['Cult Classic', 'Family-safe', 'Quotable', 'Pure Heart', 'Swashbuckling'],
    moodTags: ['Escape reality', 'Have a great time', 'Feel every feeling'],
    weapons: ['Cozy comfort', 'Beautiful worlds', 'Big action'],
    parties: ['Family', 'Kids', 'Date night', 'Friends', 'Solo'],
    treasureCategories: ['Cult classic', 'Popular crowd-pleaser'],
    posterUrl: 'https://image.tmdb.org/t/p/w780/2FC9L9MrjBoGHYjYZjdWQdopVYb.jpg',
    backdropUrl: 'https://image.tmdb.org/t/p/w1280/2CisgvF2HcIVnbMZbSjASCtSgEb.jpg',
    trailerYoutubeId: 'WNNUcHY_K-8',
    synopsis: 'A bedridden boy\'s grandfather reads him the story of a farmhand-turned-pirate who encounters numerous obstacles, enemies, and allies in his quest to be reunited with his true love.',
    isCultClassic: true,
    isAwardWinner: false,
    ageRating: 'PG',
    indianOtt: {
      available: true,
      platforms: [
        { name: 'Prime Video', type: 'subscription', pricing: 'Included in Prime', badgeColor: '#00A8E1' },
        { name: 'Apple TV', type: 'rent', pricing: 'Rent ₹80', badgeColor: '#A2AAAD' }
      ],
      lastChecked: '2026-08-20'
    }
  },
  {
    id: 'arrival-2016',
    title: 'Arrival',
    year: 2016,
    imdbRating: 7.9,
    runtimeMinutes: 116,
    director: 'Denis Villeneuve',
    cast: ['Amy Adams', 'Jeremy Renner', 'Forest Whitaker', 'Michael Stuhlbarg'],
    genres: ['Sci-fi', 'Drama', 'Mystery'],
    contentTags: ['Mind-bending', 'Linguistic Wonder', 'Emotional Heart', 'First Contact', 'Deep Twists'],
    moodTags: ['See something unforgettable', 'Solve a mystery', 'Feel every feeling', 'Escape reality'],
    weapons: ['Clever twists', 'Deep feelings', 'Beautiful worlds'],
    parties: ['Solo', 'Date night', 'Friends'],
    treasureCategories: ['Award-winning pick', 'Cult classic', 'Popular crowd-pleaser'],
    posterUrl: 'https://image.tmdb.org/t/p/w780/pEzNVQfdzYDzVK0XqxERIw2x2se.jpg',
    backdropUrl: 'https://image.tmdb.org/t/p/w1280/8MUZz7oPXQftFTslZpRP3CVMOoq.jpg',
    trailerYoutubeId: 'tFMo3UJ4B4g',
    synopsis: 'A linguist works with the military to communicate with alien lifeforms after twelve mysterious spacecraft appear around the world, uncovering a perception-shattering truth.',
    isCultClassic: true,
    isAwardWinner: true,
    ageRating: 'PG-13',
    indianOtt: {
      available: true,
      platforms: [
        { name: 'Netflix India', type: 'subscription', pricing: 'Included in Plan', badgeColor: '#E50914' },
        { name: 'SonyLIV', type: 'subscription', pricing: 'Included with Premium', badgeColor: '#302F93' },
        { name: 'Apple TV', type: 'rent', pricing: 'Rent ₹120', badgeColor: '#A2AAAD' }
      ],
      lastChecked: '2026-08-25'
    }
  },
  {
    id: 'dune-2-2024',
    title: 'Dune: Part Two',
    year: 2024,
    imdbRating: 8.5,
    runtimeMinutes: 166,
    director: 'Denis Villeneuve',
    cast: ['Timothée Chalamet', 'Zendaya', 'Rebecca Ferguson', 'Austin Butler'],
    genres: ['Sci-fi', 'Adventure', 'Action', 'Drama'],
    contentTags: ['Epic Scale', 'Visual Masterpiece', 'Desert World', 'Spectacular Sound'],
    moodTags: ['Escape reality', 'See something unforgettable', 'Get your pulse racing'],
    weapons: ['Beautiful worlds', 'Big action', 'Deep feelings'],
    parties: ['Friends', 'Date night', 'Solo'],
    treasureCategories: ['Brand-new release', 'Award-winning pick', 'Popular crowd-pleaser'],
    posterUrl: 'https://image.tmdb.org/t/p/w780/6izwz7rsy95ARzTR3poZ8H6c5pp.jpg',
    backdropUrl: 'https://image.tmdb.org/t/p/w1280/eZ239CUp1d6OryZEBPnO2n87gMG.jpg',
    trailerYoutubeId: 'Way9Dexny3w',
    synopsis: 'Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family, facing a choice between love and the fate of the universe.',
    isCultClassic: false,
    isAwardWinner: true,
    ageRating: 'PG-13',
    indianOtt: {
      available: true,
      platforms: [
        { name: 'JioHotstar', type: 'subscription', pricing: 'Included with Premium', badgeColor: '#0C2054' },
        { name: 'Prime Video', type: 'rent', pricing: 'Rent ₹149', badgeColor: '#00A8E1' },
        { name: 'Apple TV', type: 'buy', pricing: 'Buy ₹590', badgeColor: '#A2AAAD' }
      ],
      lastChecked: '2026-08-24'
    }
  },
  {
    id: 'baby-driver-2017',
    title: 'Baby Driver',
    year: 2017,
    imdbRating: 7.6,
    runtimeMinutes: 113,
    director: 'Edgar Wright',
    cast: ['Ansel Elgort', 'Lily James', 'Kevin Spacey', 'Jon Hamm', 'Jamie Foxx'],
    genres: ['Action', 'Crime', 'Drama', 'Thriller'],
    contentTags: ['Rhythm & Beats', 'Car Chases', 'Electrifying Soundtrack', 'Fast-paced', 'Stylized'],
    moodTags: ['Get your pulse racing', 'Have a great time', 'Escape reality'],
    weapons: ['Big action', 'Cozy comfort', 'Clever twists'],
    parties: ['Friends', 'Date night', 'Solo'],
    treasureCategories: ['Popular crowd-pleaser', 'Cult classic', 'Award-winning pick'],
    posterUrl: 'https://image.tmdb.org/t/p/w780/tYzFuYXmT8LOYASlFCkaPiAFAl0.jpg',
    backdropUrl: 'https://image.tmdb.org/t/p/w1280/yir5430WblZSZuIMd9C6pIZerfA.jpg',
    trailerYoutubeId: 'D9YZw_X5nYw',
    synopsis: 'After being coerced into working for a crime boss, a young getaway driver finds himself taking part in a heist doomed to fail, driven purely by the soundtrack in his headphones.',
    isCultClassic: true,
    isAwardWinner: true,
    ageRating: 'R',
    indianOtt: {
      available: true,
      platforms: [
        { name: 'Netflix India', type: 'subscription', pricing: 'Included in Plan', badgeColor: '#E50914' },
        { name: 'SonyLIV', type: 'subscription', pricing: 'Included with Premium', badgeColor: '#302F93' }
      ],
      lastChecked: '2026-08-25'
    }
  },
  {
    id: 'about-time-2013',
    title: 'About Time',
    year: 2013,
    imdbRating: 7.8,
    runtimeMinutes: 123,
    director: 'Richard Curtis',
    cast: ['Domhnall Gleeson', 'Rachel McAdams', 'Bill Nighy', 'Margot Robbie'],
    genres: ['Romance', 'Comedy', 'Drama', 'Fantasy'],
    contentTags: ['Heartwarming', 'Tearjerker', 'Cozy comfort', 'Father-Son Bond', 'No horror'],
    moodTags: ['Feel every feeling', 'Have a great time', 'Escape reality'],
    weapons: ['Deep feelings', 'Cozy comfort'],
    parties: ['Date night', 'Solo', 'Family'],
    treasureCategories: ['Underrated gem', 'Cult classic', 'Popular crowd-pleaser'],
    posterUrl: 'https://image.tmdb.org/t/p/w780/ls6zswrOZVhCXQBh96DlbnLBajM.jpg',
    backdropUrl: 'https://image.tmdb.org/t/p/w1280/einbto9qLXFx9QXxEHylaxDbKPx.jpg',
    trailerYoutubeId: 'T7A810duHvw',
    synopsis: 'At the age of 21, Tim discovers he can travel in time and change what happens and has happened in his own life. His decision to make his world a better place by getting a girlfriend turns out not to be as easy as you might think.',
    isCultClassic: true,
    isAwardWinner: false,
    ageRating: 'R',
    indianOtt: {
      available: true,
      platforms: [
        { name: 'Prime Video', type: 'subscription', pricing: 'Included in Prime', badgeColor: '#00A8E1' },
        { name: 'Apple TV', type: 'rent', pricing: 'Rent ₹80', badgeColor: '#A2AAAD' }
      ],
      lastChecked: '2026-08-23'
    }
  },
  {
    id: 'la-la-land-2016',
    title: 'La La Land',
    year: 2016,
    imdbRating: 8.0,
    runtimeMinutes: 128,
    director: 'Damien Chazelle',
    cast: ['Ryan Gosling', 'Emma Stone', 'John Legend', 'J.K. Simmons'],
    genres: ['Romance', 'Drama', 'Music', 'Comedy'],
    contentTags: ['Vibrant Colors', 'Bittersweet Magic', 'Musical Wonder', 'Hollywood Dreams'],
    moodTags: ['Feel every feeling', 'See something unforgettable', 'Escape reality'],
    weapons: ['Beautiful worlds', 'Deep feelings', 'Cozy comfort'],
    parties: ['Date night', 'Solo', 'Friends'],
    treasureCategories: ['Award-winning pick', 'Cult classic', 'Popular crowd-pleaser'],
    posterUrl: 'https://image.tmdb.org/t/p/w780/uDO8zWDhfWwoFdKS4fzkUJt0Rf0.jpg',
    backdropUrl: 'https://image.tmdb.org/t/p/w1280/nlPCdZlHtRNcF6C9hzUH4ebmV1w.jpg',
    trailerYoutubeId: '0pdqf4P9MB8',
    synopsis: 'While navigating their careers in Los Angeles, a pianist and an actress fall in love while attempting to reconcile their aspirations for the future with the golden romance they share.',
    isCultClassic: true,
    isAwardWinner: true,
    ageRating: 'PG-13',
    indianOtt: {
      available: true,
      platforms: [
        { name: 'Lionsgate Play', type: 'subscription', pricing: 'Included in VIP', badgeColor: '#B38E3F' },
        { name: 'Prime Video', type: 'subscription', pricing: 'Included in Prime', badgeColor: '#00A8E1' },
        { name: 'Apple TV', type: 'rent', pricing: 'Rent ₹120', badgeColor: '#A2AAAD' }
      ],
      lastChecked: '2026-08-22'
    }
  },
  {
    id: 'the-holdovers-2023',
    title: 'The Holdovers',
    year: 2023,
    imdbRating: 7.9,
    runtimeMinutes: 133,
    director: 'Alexander Payne',
    cast: ['Paul Giamatti', 'Dominic Sessa', 'Da\'Vine Joy Randolph'],
    genres: ['Comedy', 'Drama'],
    contentTags: ['Heartwarming', 'Cozy comfort', '70s Film Feel', 'Soulful', 'Found Family'],
    moodTags: ['Feel every feeling', 'Have a great time', 'Escape reality'],
    weapons: ['Cozy comfort', 'Deep feelings'],
    parties: ['Date night', 'Solo', 'Family', 'Friends'],
    treasureCategories: ['Award-winning pick', 'Underrated gem', 'Brand-new release'],
    posterUrl: 'https://image.tmdb.org/t/p/w780/VHSzNBTwxV8vh7wylo7O9CLdac.jpg',
    backdropUrl: 'https://image.tmdb.org/t/p/w1280/A99WMiz0ASpH9coOFrxSEuwTWx0.jpg',
    trailerYoutubeId: 'AhKLpJmHhIg',
    synopsis: 'A cranky history teacher at a remote prep school is forced to remain on campus during Christmas break to babysit the handful of students with nowhere to go, forming an improbable sanctuary.',
    isCultClassic: false,
    isAwardWinner: true,
    ageRating: 'R',
    indianOtt: {
      available: true,
      platforms: [
        { name: 'JioHotstar', type: 'subscription', pricing: 'Included with Premium', badgeColor: '#0C2054' },
        { name: 'Prime Video', type: 'rent', pricing: 'Rent ₹120', badgeColor: '#00A8E1' }
      ],
      lastChecked: '2026-08-24'
    }
  },
  {
    id: 'mad-max-fury-road-2015',
    title: 'Mad Max: Fury Road',
    year: 2015,
    imdbRating: 8.1,
    runtimeMinutes: 120,
    director: 'George Miller',
    cast: ['Tom Hardy', 'Charlize Theron', 'Nicholas Hoult', 'Hugh Keays-Byrne'],
    genres: ['Action', 'Adventure', 'Sci-fi'],
    contentTags: ['Relentless Pacing', 'Practical Stunts', 'Visual Masterpiece', 'Adrenaline Rush'],
    moodTags: ['Get your pulse racing', 'See something unforgettable', 'Escape reality'],
    weapons: ['Big action', 'Beautiful worlds'],
    parties: ['Friends', 'Solo', 'Date night'],
    treasureCategories: ['Award-winning pick', 'Cult classic', 'Popular crowd-pleaser'],
    posterUrl: 'https://image.tmdb.org/t/p/w780/ulcAi4dKpAjHwYGS08vNyx9H6I9.jpg',
    backdropUrl: 'https://image.tmdb.org/t/p/w1280/uT895WNwm0aIJRtGizcQhrejWUo.jpg',
    trailerYoutubeId: 'hEJnMQG9ev8',
    synopsis: 'In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search for her homeland with the aid of a group of female prisoners, a psychotic worshiper and an ex-drifter named Max.',
    isCultClassic: true,
    isAwardWinner: true,
    ageRating: 'R',
    indianOtt: {
      available: true,
      platforms: [
        { name: 'JioHotstar', type: 'subscription', pricing: 'Included with Premium', badgeColor: '#0C2054' },
        { name: 'Prime Video', type: 'subscription', pricing: 'Included in Prime', badgeColor: '#00A8E1' },
        { name: 'Apple TV', type: 'rent', pricing: 'Rent ₹120', badgeColor: '#A2AAAD' }
      ],
      lastChecked: '2026-08-25'
    }
  },
  {
    id: 'the-truman-show-1998',
    title: 'The Truman Show',
    year: 1998,
    imdbRating: 8.2,
    runtimeMinutes: 103,
    director: 'Peter Weir',
    cast: ['Jim Carrey', 'Laura Linney', 'Ed Harris', 'Natascha McElhone'],
    genres: ['Comedy', 'Drama', 'Sci-fi'],
    contentTags: ['Mind-bending', 'Philosophical', 'Heartwarming', 'Clever twists', 'Family-safe'],
    moodTags: ['Escape reality', 'Feel every feeling', 'See something unforgettable', 'Solve a mystery'],
    weapons: ['Clever twists', 'Deep feelings', 'Cozy comfort'],
    parties: ['Family', 'Date night', 'Friends', 'Solo'],
    treasureCategories: ['Cult classic', 'Award-winning pick', 'Popular crowd-pleaser'],
    posterUrl: 'https://image.tmdb.org/t/p/w780/vuza0WqY239yBXOadKlGwJsZJFE.jpg',
    backdropUrl: 'https://image.tmdb.org/t/p/w1280/rmiG2uwcNoGFmBKMoa1pIcf514L.jpg',
    trailerYoutubeId: 'dlnmQbPGuls',
    synopsis: 'An insurance salesman discovers his entire life is actually a 24/7 reality TV show broadcast across the globe, sparking an intrepid bid to escape to the real world.',
    isCultClassic: true,
    isAwardWinner: true,
    ageRating: 'PG',
    indianOtt: {
      available: true,
      platforms: [
        { name: 'Prime Video', type: 'subscription', pricing: 'Included in Prime', badgeColor: '#00A8E1' },
        { name: 'Apple TV', type: 'rent', pricing: 'Rent ₹80', badgeColor: '#A2AAAD' }
      ],
      lastChecked: '2026-08-21'
    }
  },
  {
    id: 'ratatouille-2007',
    title: 'Ratatouille',
    year: 2007,
    imdbRating: 8.1,
    runtimeMinutes: 111,
    director: 'Brad Bird, Jan Pinkava',
    cast: ['Patton Oswalt', 'Ian Holm', 'Lou Romano', 'Peter O\'Toole'],
    genres: ['Animation', 'Comedy', 'Family', 'Fantasy'],
    contentTags: ['Family-safe', 'Cozy comfort', 'Gourmet Paris', 'Heartwarming', 'No sad ending'],
    moodTags: ['Have a great time', 'Feel every feeling', 'Escape reality'],
    weapons: ['Cozy comfort', 'Beautiful worlds'],
    parties: ['Kids', 'Family', 'Date night', 'Friends', 'Solo'],
    treasureCategories: ['Award-winning pick', 'Cult classic', 'Popular crowd-pleaser'],
    posterUrl: 'https://image.tmdb.org/t/p/w780/t3vaWRPSf6WjDSamIkKDs1iQWna.jpg',
    backdropUrl: 'https://image.tmdb.org/t/p/w1280/qxGmHvmjlBlH5WZOhdHEHAjHaMB.jpg',
    trailerYoutubeId: 'NgsQ8mViPZU',
    synopsis: 'A rat who can cook makes an unusual alliance with a young kitchen worker at a famous Paris restaurant, demonstrating that anyone can achieve greatness.',
    isCultClassic: true,
    isAwardWinner: true,
    ageRating: 'G',
    indianOtt: {
      available: true,
      platforms: [
        { name: 'JioHotstar', type: 'subscription', pricing: 'Included with Disney+ Bundle', badgeColor: '#0C2054' },
        { name: 'Apple TV', type: 'rent', pricing: 'Rent ₹80', badgeColor: '#A2AAAD' }
      ],
      lastChecked: '2026-08-25'
    }
  },
  {
    id: 'oppenheimer-2023',
    title: 'Oppenheimer',
    year: 2023,
    imdbRating: 8.9,
    runtimeMinutes: 180,
    director: 'Christopher Nolan',
    cast: ['Cillian Murphy', 'Emily Blunt', 'Matt Damon', 'Robert Downey Jr.'],
    genres: ['Drama', 'History', 'Thriller'],
    contentTags: ['Epic Scale', 'Intense Tension', 'Masterpiece', 'Oscar Winner', '3 Hours Epic'],
    moodTags: ['See something unforgettable', 'Get your pulse racing', 'Feel every feeling'],
    weapons: ['Deep feelings', 'Big action', 'Clever twists'],
    parties: ['Solo', 'Friends', 'Date night'],
    treasureCategories: ['Award-winning pick', 'Brand-new release', 'Popular crowd-pleaser'],
    posterUrl: 'https://image.tmdb.org/t/p/w780/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg',
    backdropUrl: 'https://image.tmdb.org/t/p/w1280/neeNHeXjMF5fXoCJRsOmkNGC7q.jpg',
    trailerYoutubeId: 'uYPbbksJxIg',
    synopsis: 'The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb, followed by the harrowing political fallout of his creation.',
    isCultClassic: false,
    isAwardWinner: true,
    ageRating: 'R',
    indianOtt: {
      available: true,
      platforms: [
        { name: 'JioHotstar', type: 'subscription', pricing: 'Included with Premium', badgeColor: '#0C2054' },
        { name: 'Prime Video', type: 'rent', pricing: 'Rent ₹120', badgeColor: '#00A8E1' },
        { name: 'Apple TV', type: 'rent', pricing: 'Rent ₹149', badgeColor: '#A2AAAD' }
      ],
      lastChecked: '2026-08-25'
    }
  },
  {
    id: 'the-big-lebowski-1998',
    title: 'The Big Lebowski',
    year: 1998,
    imdbRating: 8.1,
    runtimeMinutes: 117,
    director: 'Joel Coen, Ethan Coen',
    cast: ['Jeff Bridges', 'John Goodman', 'Julianne Moore', 'Steve Buscemi'],
    genres: ['Comedy', 'Crime'],
    contentTags: ['Cult Classic', 'Endlessly Quotable', 'Absurdist Humor', 'Cozy comfort', 'Bowling'],
    moodTags: ['Have a great time', 'Escape reality', 'Solve a mystery'],
    weapons: ['Cozy comfort', 'Clever twists'],
    parties: ['Friends', 'Solo', 'Date night'],
    treasureCategories: ['Cult classic', 'Popular crowd-pleaser'],
    posterUrl: 'https://image.tmdb.org/t/p/w780/3bv6WAp6BSxxYvB5ozKFUYuRA8C.jpg',
    backdropUrl: 'https://image.tmdb.org/t/p/w1280/hXsy4XCCHrUk81XoRhcooyWejao.jpg',
    trailerYoutubeId: 'cd-go0oBF4Y',
    synopsis: 'Ultimate slacker Jeffrey "The Dude" Lebowski is mistaken for a multi-millionaire of the same name and seeks restitution for a ruined rug, enlisting his bowling buddies.',
    isCultClassic: true,
    isAwardWinner: false,
    ageRating: 'R',
    indianOtt: {
      available: true,
      platforms: [
        { name: 'JioHotstar', type: 'subscription', pricing: 'Included with Premium', badgeColor: '#0C2054' },
        { name: 'Prime Video', type: 'subscription', pricing: 'Included in Prime', badgeColor: '#00A8E1' },
        { name: 'Apple TV', type: 'rent', pricing: 'Rent ₹80', badgeColor: '#A2AAAD' }
      ],
      lastChecked: '2026-08-21'
    }
  },
  {
    id: 'sicario-2015',
    title: 'Sicario',
    year: 2015,
    imdbRating: 7.7,
    runtimeMinutes: 121,
    director: 'Denis Villeneuve',
    cast: ['Emily Blunt', 'Benicio Del Toro', 'Josh Brolin', 'Victor Garber'],
    genres: ['Thriller', 'Crime', 'Drama', 'Action'],
    contentTags: ['Gripping Tension', 'Moral Ambiguity', 'Dark & Gritty', 'Border Ops'],
    moodTags: ['Get your pulse racing', 'Solve a mystery', 'See something unforgettable'],
    weapons: ['Big action', 'Clever twists', 'Deep feelings'],
    parties: ['Solo', 'Friends'],
    treasureCategories: ['Award-winning pick', 'Cult classic', 'Underrated gem'],
    posterUrl: 'https://image.tmdb.org/t/p/w780/lz8vNyXeidqqOdJW9ZjnDAMb5Vr.jpg',
    backdropUrl: 'https://image.tmdb.org/t/p/w1280/fKPgObonYgPgCdu88yjV7Hpn7Dp.jpg',
    trailerYoutubeId: 'G8tlEJIoSCh',
    synopsis: 'An idealistic FBI agent is enlisted by a government task force to aid in the escalating war against drugs at the border area between the U.S. and Mexico.',
    isCultClassic: true,
    isAwardWinner: true,
    ageRating: 'R',
    indianOtt: {
      available: true,
      platforms: [
        { name: 'Prime Video', type: 'subscription', pricing: 'Included in Prime', badgeColor: '#00A8E1' },
        { name: 'Lionsgate Play', type: 'subscription', pricing: 'Included in VIP', badgeColor: '#B38E3F' }
      ],
      lastChecked: '2026-08-22'
    }
  },
  {
    id: 'scott-pilgrim-2010',
    title: 'Scott Pilgrim vs. the World',
    year: 2010,
    imdbRating: 7.5,
    runtimeMinutes: 112,
    director: 'Edgar Wright',
    cast: ['Michael Cera', 'Mary Elizabeth Winstead', 'Kieran Culkin', 'Chris Evans', 'Brie Larson'],
    genres: ['Comedy', 'Action', 'Fantasy', 'Romance'],
    contentTags: ['Cult Classic', 'Video Game Aesthetic', 'Hyper-fast Pacing', 'Rock Soundtrack'],
    moodTags: ['Have a great time', 'Escape reality', 'Get your pulse racing'],
    weapons: ['Big action', 'Beautiful worlds', 'Cozy comfort'],
    parties: ['Friends', 'Date night', 'Solo'],
    treasureCategories: ['Cult classic', 'Underrated gem'],
    posterUrl: 'https://image.tmdb.org/t/p/w780/g5IoYeudx9XBEfwNL0fHvSckLBz.jpg',
    backdropUrl: 'https://image.tmdb.org/t/p/w1280/6R9nT6m8wmzayV5XOQq3TRA6yZw.jpg',
    trailerYoutubeId: '7wd5KEaOtm4',
    synopsis: 'In a magically realistic version of Toronto, a bass guitarist must defeat the seven evil exes of his new girlfriend in order to win her heart.',
    isCultClassic: true,
    isAwardWinner: false,
    ageRating: 'PG-13',
    indianOtt: {
      available: true,
      platforms: [
        { name: 'Netflix India', type: 'subscription', pricing: 'Included in Plan', badgeColor: '#E50914' },
        { name: 'Prime Video', type: 'rent', pricing: 'Rent ₹80', badgeColor: '#00A8E1' }
      ],
      lastChecked: '2026-08-25'
    }
  },
  {
    id: 'past-lives-2023',
    title: 'Past Lives',
    year: 2023,
    imdbRating: 7.9,
    runtimeMinutes: 105,
    director: 'Celine Song',
    cast: ['Greta Lee', 'Teo Yoo', 'John Magaro'],
    genres: ['Romance', 'Drama'],
    contentTags: ['Subtle Emotion', 'In-Yun Destiny', 'Heartbreaking', 'Poetic'],
    moodTags: ['Feel every feeling', 'See something unforgettable'],
    weapons: ['Deep feelings', 'Beautiful worlds'],
    parties: ['Date night', 'Solo'],
    treasureCategories: ['Award-winning pick', 'Underrated gem', 'Brand-new release'],
    posterUrl: 'https://image.tmdb.org/t/p/w780/k3waqVXSnvCZWfJYNtdamTgTtTA.jpg',
    backdropUrl: 'https://image.tmdb.org/t/p/w1280/7HR38hMBl23lf38MAN63y4pKsHz.jpg',
    trailerYoutubeId: 'kA244xewjcI',
    synopsis: 'Nora and Hae Sung, two deeply connected childhood friends, are wrest apart after Nora\'s family emigrates from South Korea. Two decades later, they are reunited in New York for one fateful week.',
    isCultClassic: false,
    isAwardWinner: true,
    ageRating: 'PG-13',
    indianOtt: {
      available: true,
      platforms: [
        { name: 'Lionsgate Play', type: 'subscription', pricing: 'Included in VIP', badgeColor: '#B38E3F' },
        { name: 'Prime Video', type: 'rent', pricing: 'Rent ₹120', badgeColor: '#00A8E1' }
      ],
      lastChecked: '2026-08-24'
    }
  },
  {
    id: 'ex-machina-2014',
    title: 'Ex Machina',
    year: 2014,
    imdbRating: 7.7,
    runtimeMinutes: 108,
    director: 'Alex Garland',
    cast: ['Domhnall Gleeson', 'Alicia Vikander', 'Oscar Isaac'],
    genres: ['Sci-fi', 'Drama', 'Mystery', 'Thriller'],
    contentTags: ['Mind-bending', 'AI Turing Test', 'Claustrophobic Thriller', 'Clever twists'],
    moodTags: ['Solve a mystery', 'Get your pulse racing', 'Escape reality'],
    weapons: ['Clever twists', 'Beautiful worlds'],
    parties: ['Solo', 'Friends', 'Date night'],
    treasureCategories: ['Cult classic', 'Award-winning pick', 'Underrated gem'],
    posterUrl: 'https://image.tmdb.org/t/p/w780/dmJW8IAKHKxFNiUnoDR7JfsK7Rp.jpg',
    backdropUrl: 'https://image.tmdb.org/t/p/w1280/uqOuJ50EtTj7kkDIXP8LCg7G45D.jpg',
    trailerYoutubeId: 'EoQuVnKhxaM',
    synopsis: 'A young programmer is selected to participate in a ground-breaking experiment in synthetic intelligence by evaluating the human qualities of a highly advanced humanoid A.I.',
    isCultClassic: true,
    isAwardWinner: true,
    ageRating: 'R',
    indianOtt: {
      available: true,
      platforms: [
        { name: 'JioHotstar', type: 'subscription', pricing: 'Included with Premium', badgeColor: '#0C2054' },
        { name: 'Apple TV', type: 'rent', pricing: 'Rent ₹80', badgeColor: '#A2AAAD' }
      ],
      lastChecked: '2026-08-22'
    }
  },
  {
    id: 'ford-v-ferrari-2019',
    title: 'Ford v Ferrari',
    year: 2019,
    imdbRating: 8.1,
    runtimeMinutes: 152,
    director: 'James Mangold',
    cast: ['Matt Damon', 'Christian Bale', 'Jon Bernthal', 'Caitríona Balfe'],
    genres: ['Action', 'Drama', 'Biography'],
    contentTags: ['High Speed', 'Friendship', 'Epic Racing', 'Crowd-Pleaser', 'No horror'],
    moodTags: ['Get your pulse racing', 'Feel every feeling', 'Have a great time'],
    weapons: ['Big action', 'Deep feelings'],
    parties: ['Family', 'Friends', 'Solo', 'Date night'],
    treasureCategories: ['Popular crowd-pleaser', 'Award-winning pick'],
    posterUrl: 'https://image.tmdb.org/t/p/w780/dR1Ju50iudrOh3YgfwkAU1g2HZe.jpg',
    backdropUrl: 'https://image.tmdb.org/t/p/w1280/2vq5GTJOahE03mNYZGxIynlHcWr.jpg',
    trailerYoutubeId: 'zyYg8TeAt6w',
    synopsis: 'American car designer Carroll Shelby and driver Ken Miles battle corporate interference and the laws of physics to build a revolutionary race car for Ford in 1966 Le Mans.',
    isCultClassic: false,
    isAwardWinner: true,
    ageRating: 'PG-13',
    indianOtt: {
      available: true,
      platforms: [
        { name: 'JioHotstar', type: 'subscription', pricing: 'Included with Premium', badgeColor: '#0C2054' },
        { name: 'Apple TV', type: 'rent', pricing: 'Rent ₹120', badgeColor: '#A2AAAD' }
      ],
      lastChecked: '2026-08-24'
    }
  },
  {
    id: 'crazy-rich-asians-2018',
    title: 'Crazy Rich Asians',
    year: 2018,
    imdbRating: 6.9,
    runtimeMinutes: 120,
    director: 'Jon M. Chu',
    cast: ['Constance Wu', 'Henry Golding', 'Michelle Yeoh', 'Awkwafina'],
    genres: ['Comedy', 'Romance', 'Drama'],
    contentTags: ['Family-safe', 'Lavish Luxury', 'Feel-Good', 'Wedding Spectacle', 'No sad ending'],
    moodTags: ['Have a great time', 'Feel every feeling', 'Escape reality'],
    weapons: ['Cozy comfort', 'Beautiful worlds'],
    parties: ['Date night', 'Family', 'Friends', 'Solo'],
    treasureCategories: ['Popular crowd-pleaser'],
    posterUrl: 'https://image.tmdb.org/t/p/w780/1XxL4LJ5WHdrcYcihEZUCgNCpAW.jpg',
    backdropUrl: 'https://image.tmdb.org/t/p/w1280/zeHB7aP46Xs3u4aFLuAq2GFeUGb.jpg',
    trailerYoutubeId: 'ZQ-YX-5bAs0',
    synopsis: 'An economics professor travels to Singapore with her boyfriend for his best friend\'s wedding, only to discover he belongs to one of the country\'s wealthiest and most scrutinized families.',
    isCultClassic: false,
    isAwardWinner: false,
    ageRating: 'PG-13',
    indianOtt: {
      available: true,
      platforms: [
        { name: 'Netflix India', type: 'subscription', pricing: 'Included in Plan', badgeColor: '#E50914' },
        { name: 'Prime Video', type: 'rent', pricing: 'Rent ₹80', badgeColor: '#00A8E1' }
      ],
      lastChecked: '2026-08-23'
    }
  },
  {
    id: 'fight-club-1999',
    title: 'Fight Club',
    year: 1999,
    imdbRating: 8.8,
    runtimeMinutes: 139,
    director: 'David Fincher',
    cast: ['Brad Pitt', 'Edward Norton', 'Helena Bonham Carter'],
    genres: ['Drama', 'Thriller'],
    contentTags: ['Mind-bending', 'Clever twists', 'Dark & Gritty', 'Cult Classic'],
    moodTags: ['Get your pulse racing', 'Solve a mystery', 'See something unforgettable'],
    weapons: ['Clever twists', 'Big action', 'Deep feelings'],
    parties: ['Solo', 'Friends'],
    treasureCategories: ['Cult classic', 'Popular crowd-pleaser'],
    posterUrl: 'https://image.tmdb.org/t/p/w780/jSziioSwPVrOy9Yow3XhWIBDjq1.jpg',
    backdropUrl: 'https://image.tmdb.org/t/p/w1280/c6OLXfKAk5BKeR6broC8pYiCquX.jpg',
    trailerYoutubeId: 'qtRKDV93JU8',
    synopsis: 'An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into something much more sinister.',
    isCultClassic: true,
    isAwardWinner: false,
    ageRating: 'R',
    indianOtt: {
      available: true,
      platforms: [
        { name: 'Prime Video', type: 'subscription', pricing: 'Included in Prime', badgeColor: '#00A8E1' },
        { name: 'Apple TV', type: 'rent', pricing: 'Rent ₹80', badgeColor: '#A2AAAD' }
      ],
      lastChecked: '2026-08-25'
    }
  },
  {
    id: 'soul-2020',
    title: 'Soul',
    year: 2020,
    imdbRating: 8.0,
    runtimeMinutes: 100,
    director: 'Pete Docter, Kemp Powers',
    cast: ['Jamie Foxx', 'Tina Fey', 'Graham Norton', 'Rachel House'],
    genres: ['Animation', 'Adventure', 'Comedy', 'Drama', 'Fantasy'],
    contentTags: ['Family-safe', 'Deep Philosophical', 'Heartwarming', 'Jazz Music', 'No sad ending'],
    moodTags: ['Feel every feeling', 'See something unforgettable', 'Escape reality'],
    weapons: ['Deep feelings', 'Beautiful worlds', 'Cozy comfort'],
    parties: ['Kids', 'Family', 'Date night', 'Solo', 'Friends'],
    treasureCategories: ['Award-winning pick', 'Popular crowd-pleaser'],
    posterUrl: 'https://image.tmdb.org/t/p/w780/hm58Jw4Lw8OIeECIq5qyPYhAeRJ.jpg',
    backdropUrl: 'https://image.tmdb.org/t/p/w1280/rQaHA74pevnGsxcKGaoZVGWe9TC.jpg',
    trailerYoutubeId: 'xOsLIiBStEs',
    synopsis: 'After landing the gig of a lifetime, a New York jazz pianist suddenly finds himself trapped in a strange land between Earth and the afterlife.',
    isCultClassic: false,
    isAwardWinner: true,
    ageRating: 'PG',
    indianOtt: {
      available: true,
      platforms: [
        { name: 'JioHotstar', type: 'subscription', pricing: 'Included with Disney+ Bundle', badgeColor: '#0C2054' },
        { name: 'Apple TV', type: 'rent', pricing: 'Rent ₹80', badgeColor: '#A2AAAD' }
      ],
      lastChecked: '2026-08-24'
    }
  },
  {
    id: 'nightcrawler-2014',
    title: 'Nightcrawler',
    year: 2014,
    imdbRating: 7.8,
    runtimeMinutes: 117,
    director: 'Dan Gilroy',
    cast: ['Jake Gyllenhaal', 'Rene Russo', 'Riz Ahmed', 'Bill Paxton'],
    genres: ['Crime', 'Drama', 'Thriller'],
    contentTags: ['Chilling Performance', 'Tense Atmosphere', 'Dark & Gritty', 'Media Satire'],
    moodTags: ['Get your pulse racing', 'See something unforgettable'],
    weapons: ['Big action', 'Clever twists'],
    parties: ['Solo', 'Friends'],
    treasureCategories: ['Cult classic', 'Underrated gem', 'Award-winning pick'],
    posterUrl: 'https://image.tmdb.org/t/p/w780/j9HrX8f7GbZQm1BrBiR40uFQZSb.jpg',
    backdropUrl: 'https://image.tmdb.org/t/p/w1280/bdI6U1mT0kCdTJ6TWtiFxQ42GSn.jpg',
    trailerYoutubeId: 'u1uP_8VJIBU',
    synopsis: 'When Louis Bloom, a driven man desperate for work, muscles into the world of L.A. crime journalism, he blurs the line between observer and participant.',
    isCultClassic: true,
    isAwardWinner: true,
    ageRating: 'R',
    indianOtt: {
      available: true,
      platforms: [
        { name: 'Prime Video', type: 'subscription', pricing: 'Included in Prime', badgeColor: '#00A8E1' },
        { name: 'Lionsgate Play', type: 'subscription', pricing: 'Included in VIP', badgeColor: '#B38E3F' }
      ],
      lastChecked: '2026-08-22'
    }
  },
  {
    id: 'inside-out-2-2024',
    title: 'Inside Out 2',
    year: 2024,
    imdbRating: 7.7,
    runtimeMinutes: 96,
    director: 'Kelsey Mann',
    cast: ['Amy Poehler', 'Maya Hawke', 'Kensington Tallman', 'Liza Lapira'],
    genres: ['Animation', 'Comedy', 'Drama', 'Family'],
    contentTags: ['Family-safe', 'Relatable Emotion', 'Fast-paced', 'Heartwarming', 'No horror'],
    moodTags: ['Feel every feeling', 'Have a great time', 'Escape reality'],
    weapons: ['Deep feelings', 'Cozy comfort', 'Beautiful worlds'],
    parties: ['Kids', 'Family', 'Date night', 'Friends', 'Solo'],
    treasureCategories: ['Brand-new release', 'Popular crowd-pleaser', 'Award-winning pick'],
    posterUrl: 'https://image.tmdb.org/t/p/w780/vpnVM9B6NMmQpWeZvzLvDESb2QY.jpg',
    backdropUrl: 'https://image.tmdb.org/t/p/w1280/p5ozvmdgsmbWe0H8Xk7Rc8SCwAB.jpg',
    trailerYoutubeId: 'LEjhY15eCx0',
    synopsis: 'Joy, Sadness, Anger, Fear and Disgust face unexpected headquarters renovations to make room for brand-new Emotions, including the relentless Anxiety.',
    isCultClassic: false,
    isAwardWinner: true,
    ageRating: 'PG',
    indianOtt: {
      available: true,
      platforms: [
        { name: 'JioHotstar', type: 'subscription', pricing: 'Included with Disney+ Bundle', badgeColor: '#0C2054' },
        { name: 'Apple TV', type: 'buy', pricing: 'Buy ₹490', badgeColor: '#A2AAAD' }
      ],
      lastChecked: '2026-08-25'
    }
  },
  {
    id: 'a-quiet-place-2018',
    title: 'A Quiet Place',
    year: 2018,
    imdbRating: 7.5,
    runtimeMinutes: 90,
    director: 'John Krasinski',
    cast: ['Emily Blunt', 'John Krasinski', 'Millicent Simmonds', 'Noah Jupe'],
    genres: ['Horror', 'Sci-fi', 'Drama', 'Thriller'],
    contentTags: ['Under 90 min', 'Suspense Masterclass', 'Monster Mystery', 'Family Defense'],
    moodTags: ['Get your pulse racing', 'Solve a mystery', 'Escape reality'],
    weapons: ['Big action', 'Clever twists'],
    parties: ['Date night', 'Friends', 'Solo'],
    treasureCategories: ['Popular crowd-pleaser', 'Award-winning pick'],
    posterUrl: 'https://image.tmdb.org/t/p/w780/nAU74GmpUk7t5iklEp3bufwDq4n.jpg',
    backdropUrl: 'https://image.tmdb.org/t/p/w1280/nHRUtBwFNnNN70vcQ7lAsjc2T6S.jpg',
    trailerYoutubeId: 'WR7cc5t7tv8',
    synopsis: 'In a post-apocalyptic world, a family is forced to live in silence while hiding from monsters with ultra-sensitive hearing.',
    isCultClassic: true,
    isAwardWinner: true,
    ageRating: 'PG-13',
    indianOtt: {
      available: true,
      platforms: [
        { name: 'Netflix India', type: 'subscription', pricing: 'Included in Plan', badgeColor: '#E50914' },
        { name: 'JioHotstar', type: 'subscription', pricing: 'Included with Premium', badgeColor: '#0C2054' },
        { name: 'Prime Video', type: 'rent', pricing: 'Rent ₹80', badgeColor: '#00A8E1' }
      ],
      lastChecked: '2026-08-24'
    }
  },
  {
    id: 'sing-street-2016',
    title: 'Sing Street',
    year: 2016,
    imdbRating: 7.9,
    runtimeMinutes: 106,
    director: 'John Carney',
    cast: ['Ferdia Walsh-Peelo', 'Lucy Boynton', 'Jack Reynor', 'Aidan Gillen'],
    genres: ['Comedy', 'Drama', 'Music', 'Romance'],
    contentTags: ['80s Music', 'Heartwarming', 'Cozy comfort', 'No sad ending', 'Family-safe'],
    moodTags: ['Feel every feeling', 'Have a great time', 'Escape reality'],
    weapons: ['Cozy comfort', 'Deep feelings', 'Beautiful worlds'],
    parties: ['Date night', 'Friends', 'Family', 'Solo'],
    treasureCategories: ['Underrated gem', 'Cult classic'],
    posterUrl: 'https://image.tmdb.org/t/p/w780/sUWpVlrvzU2SJbnVZqIeKulPKwk.jpg',
    backdropUrl: 'https://image.tmdb.org/t/p/w1280/zArKQrtZRb4lqjYXepBMLdegiDz.jpg',
    trailerYoutubeId: 'C_YqJ_aim4c',
    synopsis: 'A boy growing up in 1980s Dublin escapes his strained family life by starting a band to impress the mysterious girl he likes.',
    isCultClassic: true,
    isAwardWinner: true,
    ageRating: 'PG-13',
    indianOtt: {
      available: true,
      platforms: [
        { name: 'Prime Video', type: 'subscription', pricing: 'Included in Prime', badgeColor: '#00A8E1' },
        { name: 'Apple TV', type: 'rent', pricing: 'Rent ₹80', badgeColor: '#A2AAAD' }
      ],
      lastChecked: '2026-08-23'
    }
  },
  {
    id: 'inception-2010',
    title: 'Inception',
    year: 2010,
    imdbRating: 8.8,
    runtimeMinutes: 148,
    director: 'Christopher Nolan',
    cast: ['Leonardo DiCaprio', 'Joseph Gordon-Levitt', 'Elliot Page', 'Tom Hardy'],
    genres: ['Sci-fi', 'Action', 'Adventure', 'Thriller'],
    contentTags: ['Mind-bending', 'Dream within a Dream', 'Clever twists', 'Epic Scale'],
    moodTags: ['Solve a mystery', 'Get your pulse racing', 'See something unforgettable', 'Escape reality'],
    weapons: ['Clever twists', 'Big action', 'Beautiful worlds'],
    parties: ['Friends', 'Date night', 'Solo'],
    treasureCategories: ['Award-winning pick', 'Popular crowd-pleaser', 'Cult classic'],
    posterUrl: 'https://image.tmdb.org/t/p/w780/xlaY2zyzMfkhk0HSC5VUwzoZPU1.jpg',
    backdropUrl: 'https://image.tmdb.org/t/p/w1280/8ZTVqvKDQ8emSGUEMjsS4yHAwrp.jpg',
    trailerYoutubeId: 'YoHD9XEInc0',
    synopsis: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.',
    isCultClassic: true,
    isAwardWinner: true,
    ageRating: 'PG-13',
    indianOtt: {
      available: true,
      platforms: [
        { name: 'Netflix India', type: 'subscription', pricing: 'Included in Plan', badgeColor: '#E50914' },
        { name: 'JioHotstar', type: 'subscription', pricing: 'Included with Premium', badgeColor: '#0C2054' },
        { name: 'Prime Video', type: 'subscription', pricing: 'Included in Prime', badgeColor: '#00A8E1' }
      ],
      lastChecked: '2026-08-25'
    }
  },
  {
    id: 'pulp-fiction-1994',
    title: 'Pulp Fiction',
    year: 1994,
    imdbRating: 8.9,
    runtimeMinutes: 154,
    director: 'Quentin Tarantino',
    cast: ['John Travolta', 'Uma Thurman', 'Samuel L. Jackson', 'Bruce Willis'],
    genres: ['Crime', 'Drama'],
    contentTags: ['Cult Classic', 'Non-linear Narrative', 'Iconic Dialogue', 'Dark Humor'],
    moodTags: ['See something unforgettable', 'Have a great time', 'Get your pulse racing'],
    weapons: ['Clever twists', 'Big action'],
    parties: ['Friends', 'Solo'],
    treasureCategories: ['Cult classic', 'Award-winning pick', 'Popular crowd-pleaser'],
    posterUrl: 'https://image.tmdb.org/t/p/w780/vQWk5YBFWF4bZaofAbv0tShwBvQ.jpg',
    backdropUrl: 'https://image.tmdb.org/t/p/w1280/suaEOtk1N1sgg2MTM7oZd2cfVp3.jpg',
    trailerYoutubeId: 's7EdQ4FqbhY',
    synopsis: 'The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.',
    isCultClassic: true,
    isAwardWinner: true,
    ageRating: 'R',
    indianOtt: {
      available: true,
      platforms: [
        { name: 'Prime Video', type: 'subscription', pricing: 'Included in Prime', badgeColor: '#00A8E1' },
        { name: 'Lionsgate Play', type: 'subscription', pricing: 'Included in VIP', badgeColor: '#B38E3F' },
        { name: 'Apple TV', type: 'rent', pricing: 'Rent ₹120', badgeColor: '#A2AAAD' }
      ],
      lastChecked: '2026-08-24'
    }
  },
  {
    id: 'superbad-2007',
    title: 'Superbad',
    year: 2007,
    imdbRating: 7.6,
    runtimeMinutes: 113,
    director: 'Greg Mottola',
    cast: ['Jonah Hill', 'Michael Cera', 'Christopher Mintz-Plasse', 'Bill Hader', 'Seth Rogen'],
    genres: ['Comedy'],
    contentTags: ['High School Party', 'Endless Laughs', 'McLovin', 'Fast-paced', 'No sad ending'],
    moodTags: ['Have a great time', 'Escape reality'],
    weapons: ['Cozy comfort', 'Big action'],
    parties: ['Friends', 'Solo'],
    treasureCategories: ['Cult classic', 'Popular crowd-pleaser'],
    posterUrl: 'https://image.tmdb.org/t/p/w780/ek8e8txUyUwd2BNqj6lFEerJfbq.jpg',
    backdropUrl: 'https://image.tmdb.org/t/p/w1280/coru98UcFBzJIU7bxZguxaePgu0.jpg',
    trailerYoutubeId: '4eaZ_48ZYog',
    synopsis: 'Two co-dependent high school seniors are forced to deal with separation anxiety after their plan to stage a booze-soaked party goes wildly awry.',
    isCultClassic: true,
    isAwardWinner: false,
    ageRating: 'R',
    indianOtt: {
      available: true,
      platforms: [
        { name: 'Netflix India', type: 'subscription', pricing: 'Included in Plan', badgeColor: '#E50914' },
        { name: 'SonyLIV', type: 'subscription', pricing: 'Included with Premium', badgeColor: '#302F93' }
      ],
      lastChecked: '2026-08-25'
    }
  },
  {
    id: 'the-dark-knight-2008',
    title: 'The Dark Knight',
    year: 2008,
    imdbRating: 9.0,
    runtimeMinutes: 152,
    director: 'Christopher Nolan',
    cast: ['Christian Bale', 'Heath Ledger', 'Aaron Eckhart', 'Michael Caine', 'Maggie Gyllenhaal'],
    genres: ['Action', 'Crime', 'Drama', 'Thriller'],
    contentTags: ['Masterpiece', 'Iconic Joker', 'Moral Dilemma', 'Epic Scale'],
    moodTags: ['Get your pulse racing', 'See something unforgettable', 'Solve a mystery'],
    weapons: ['Big action', 'Clever twists', 'Deep feelings'],
    parties: ['Friends', 'Solo', 'Date night', 'Family'],
    treasureCategories: ['Award-winning pick', 'Popular crowd-pleaser', 'Cult classic'],
    posterUrl: 'https://image.tmdb.org/t/p/w780/qJ2tW6WMUDux911r6m7haRef0WH.jpg',
    backdropUrl: 'https://image.tmdb.org/t/p/w1280/9FE5eD92WfVCiivM9Pq9GVSrlWk.jpg',
    trailerYoutubeId: 'EXeTwQWrcwY',
    synopsis: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
    isCultClassic: true,
    isAwardWinner: true,
    ageRating: 'PG-13',
    indianOtt: {
      available: true,
      platforms: [
        { name: 'Netflix India', type: 'subscription', pricing: 'Included in Plan', badgeColor: '#E50914' },
        { name: 'JioHotstar', type: 'subscription', pricing: 'Included with Premium', badgeColor: '#0C2054' },
        { name: 'Prime Video', type: 'subscription', pricing: 'Included in Prime', badgeColor: '#00A8E1' }
      ],
      lastChecked: '2026-08-25'
    }
  },
  {
    id: 'free-solo-2018',
    title: 'Free Solo',
    year: 2018,
    imdbRating: 8.1,
    runtimeMinutes: 100,
    director: 'Jimmy Chin, Elizabeth Chai Vasarhelyi',
    cast: ['Alex Honnold', 'Tommy Caldwell', 'Jimmy Chin', 'Sanni McCandless'],
    genres: ['Documentary', 'Adventure', 'Sport'],
    contentTags: ['Palms Sweating', 'Mind-Blowing Real Feat', 'El Capitan', 'Family-safe'],
    moodTags: ['Get your pulse racing', 'See something unforgettable', 'Escape reality'],
    weapons: ['Big action', 'Beautiful worlds', 'Deep feelings'],
    parties: ['Friends', 'Solo', 'Family', 'Date night'],
    treasureCategories: ['Award-winning pick', 'Underrated gem'],
    posterUrl: 'https://image.tmdb.org/t/p/w780/v4QfYZMACODlWul9doN9RxE99ag.jpg',
    backdropUrl: 'https://image.tmdb.org/t/p/w1280/z2uuQasY4gQJ8VDAFki746JWeQJ.jpg',
    trailerYoutubeId: 'urRVZ4SW7WU',
    synopsis: 'Follow Alex Honnold as he becomes the first person to ever free solo climb the 3,000 foot El Capitan Wall in Yosemite National Park with no ropes or safety gear.',
    isCultClassic: false,
    isAwardWinner: true,
    ageRating: 'PG-13',
    indianOtt: {
      available: true,
      platforms: [
        { name: 'JioHotstar', type: 'subscription', pricing: 'Included with Disney+ Bundle', badgeColor: '#0C2054' },
        { name: 'Apple TV', type: 'rent', pricing: 'Rent ₹80', badgeColor: '#A2AAAD' }
      ],
      lastChecked: '2026-08-24'
    }
  },
  {
    id: 'the-prestige-2006',
    title: 'The Prestige',
    year: 2006,
    imdbRating: 8.5,
    runtimeMinutes: 130,
    director: 'Christopher Nolan',
    cast: ['Christian Bale', 'Hugh Jackman', 'Scarlett Johansson', 'Michael Caine', 'David Bowie'],
    genres: ['Drama', 'Mystery', 'Sci-fi', 'Thriller'],
    contentTags: ['Clever twists', 'Victorian Magic', 'Obsessive Rivalry', 'Mind-bending'],
    moodTags: ['Solve a mystery', 'See something unforgettable', 'Get your pulse racing'],
    weapons: ['Clever twists', 'Deep feelings', 'Beautiful worlds'],
    parties: ['Solo', 'Friends', 'Date night'],
    treasureCategories: ['Cult classic', 'Award-winning pick', 'Popular crowd-pleaser'],
    posterUrl: 'https://image.tmdb.org/t/p/w780/Ag2B2KHKQPukjH7WutmgnnSNurZ.jpg',
    backdropUrl: 'https://image.tmdb.org/t/p/w1280/z3br1ub7spqGMkxgjgJSdM4DC21.jpg',
    trailerYoutubeId: 'o4gHCmTQDVI',
    synopsis: 'After a tragic accident, two stage magicians in 1890s London engage in a battle to create the ultimate illusion while sacrificing everything they have to outwit each other.',
    isCultClassic: true,
    isAwardWinner: true,
    ageRating: 'PG-13',
    indianOtt: {
      available: true,
      platforms: [
        { name: 'Prime Video', type: 'subscription', pricing: 'Included in Prime', badgeColor: '#00A8E1' },
        { name: 'Apple TV', type: 'rent', pricing: 'Rent ₹120', badgeColor: '#A2AAAD' }
      ],
      lastChecked: '2026-08-25'
    }
  },
  {
    id: 'little-miss-sunshine-2006',
    title: 'Little Miss Sunshine',
    year: 2006,
    imdbRating: 7.8,
    runtimeMinutes: 101,
    director: 'Jonathan Dayton, Valerie Faris',
    cast: ['Steve Carell', 'Toni Collette', 'Greg Kinnear', 'Abigail Breslin', 'Alan Arkin'],
    genres: ['Comedy', 'Drama'],
    contentTags: ['Family Road Trip', 'Heartwarming', 'Yellow VW Bus', 'Tearjerker & Laughs', 'Family-safe'],
    moodTags: ['Feel every feeling', 'Have a great time', 'Escape reality'],
    weapons: ['Cozy comfort', 'Deep feelings'],
    parties: ['Family', 'Date night', 'Friends', 'Solo'],
    treasureCategories: ['Award-winning pick', 'Cult classic', 'Underrated gem'],
    posterUrl: 'https://image.tmdb.org/t/p/w780/niNdhTpPHSgw22tK0PLjQMV640v.jpg',
    backdropUrl: 'https://image.tmdb.org/t/p/w1280/twdtjJm31AExNx73DXaD4KRNU9c.jpg',
    trailerYoutubeId: 'wvwVkllXT80',
    synopsis: 'A family determined to get their young daughter into the finals of a beauty pageant take a cross-country trip in their quirky yellow VW bus.',
    isCultClassic: true,
    isAwardWinner: true,
    ageRating: 'R',
    indianOtt: {
      available: true,
      platforms: [
        { name: 'JioHotstar', type: 'subscription', pricing: 'Included with Premium', badgeColor: '#0C2054' },
        { name: 'Apple TV', type: 'rent', pricing: 'Rent ₹80', badgeColor: '#A2AAAD' }
      ],
      lastChecked: '2026-08-22'
    }
  },
  {
    id: 'the-iron-giant-1999',
    title: 'The Iron Giant',
    year: 1999,
    imdbRating: 8.1,
    runtimeMinutes: 86,
    director: 'Brad Bird',
    cast: ['Eli Marienthal', 'Vin Diesel', 'Jennifer Aniston', 'Harry Connick Jr.'],
    genres: ['Animation', 'Action', 'Adventure', 'Sci-fi', 'Family'],
    contentTags: ['Under 90 min', 'Family-safe', 'Cold War Retro', 'Tearjerker Ending', 'No horror'],
    moodTags: ['Feel every feeling', 'Escape reality', 'See something unforgettable'],
    weapons: ['Deep feelings', 'Cozy comfort', 'Beautiful worlds'],
    parties: ['Kids', 'Family', 'Solo', 'Friends'],
    treasureCategories: ['Cult classic', 'Underrated gem', 'Award-winning pick'],
    posterUrl: 'https://image.tmdb.org/t/p/w780/ct04FCFLPImNG5thcPLRnVsZlmS.jpg',
    backdropUrl: 'https://image.tmdb.org/t/p/w1280/ni5cXCrrGzoiIEoIwOzGiIwMZlH.jpg',
    trailerYoutubeId: 'obLTYGe4cCY',
    synopsis: 'A young boy befriends a giant alien robot that a paranoid government agent wants to destroy, teaching the gentle colossus the power of choice: "You are who you choose to be."',
    isCultClassic: true,
    isAwardWinner: true,
    ageRating: 'PG',
    indianOtt: {
      available: true,
      platforms: [
        { name: 'Prime Video', type: 'subscription', pricing: 'Included in Prime', badgeColor: '#00A8E1' },
        { name: 'Apple TV', type: 'rent', pricing: 'Rent ₹80', badgeColor: '#A2AAAD' }
      ],
      lastChecked: '2026-08-21'
    }
  },
  {
    id: 'before-sunrise-1995',
    title: 'Before Sunrise',
    year: 1995,
    imdbRating: 8.1,
    runtimeMinutes: 101,
    director: 'Richard Linklater',
    cast: ['Ethan Hawke', 'Julie Delpy'],
    genres: ['Drama', 'Romance'],
    contentTags: ['Vienna Romance', 'Sublime Dialogue', 'One Magical Night', 'Deep Connection'],
    moodTags: ['Feel every feeling', 'Escape reality', 'Have a great time'],
    weapons: ['Deep feelings', 'Beautiful worlds', 'Cozy comfort'],
    parties: ['Date night', 'Solo'],
    treasureCategories: ['Cult classic', 'Underrated gem', 'Award-winning pick'],
    posterUrl: 'https://image.tmdb.org/t/p/w780/kf1Jb1c2JAOqjuzA3H4oDM263uB.jpg',
    backdropUrl: 'https://image.tmdb.org/t/p/w1280/qA2TyqPldTtoTVY3LKrNIG5g6bH.jpg',
    trailerYoutubeId: '9v6X-Dytlko',
    synopsis: 'A young man and woman meet on a train in Europe and wind up spending one evening together in Vienna. Unfortunately, both know that this will probably be their only night together.',
    isCultClassic: true,
    isAwardWinner: false,
    ageRating: 'R',
    indianOtt: {
      available: true,
      platforms: [
        { name: 'Prime Video', type: 'subscription', pricing: 'Included in Prime', badgeColor: '#00A8E1' },
        { name: 'Apple TV', type: 'rent', pricing: 'Rent ₹80', badgeColor: '#A2AAAD' }
      ],
      lastChecked: '2026-08-25'
    }
  },
  {
    id: 'the-martian-2015',
    title: 'The Martian',
    year: 2015,
    imdbRating: 8.0,
    runtimeMinutes: 144,
    director: 'Ridley Scott',
    cast: ['Matt Damon', 'Jessica Chastain', 'Kristen Wiig', 'Jeff Daniels', 'Chiwetel Ejiofor'],
    genres: ['Sci-fi', 'Adventure', 'Drama'],
    contentTags: ['Survival Science', 'Uplifting Triumph', 'Family-safe', 'Fast-paced', 'No horror'],
    moodTags: ['Escape reality', 'Have a great time', 'Solve a mystery', 'Get your pulse racing'],
    weapons: ['Clever twists', 'Big action', 'Beautiful worlds'],
    parties: ['Family', 'Friends', 'Solo', 'Date night'],
    treasureCategories: ['Popular crowd-pleaser', 'Award-winning pick'],
    posterUrl: 'https://image.tmdb.org/t/p/w780/fASz8A0yFE3QB6LgGoOfwvFSseV.jpg',
    backdropUrl: 'https://image.tmdb.org/t/p/w1280/lzMS0CI3FLQYC5EgJoWeIaEt0lm.jpg',
    trailerYoutubeId: 'ej3ioOneTy8',
    synopsis: 'An astronaut becomes stranded on Mars after his team assumes him dead, and must rely on his ingenuity and scientific spirit to find a way to signal to Earth that he is alive.',
    isCultClassic: false,
    isAwardWinner: true,
    ageRating: 'PG-13',
    indianOtt: {
      available: true,
      platforms: [
        { name: 'JioHotstar', type: 'subscription', pricing: 'Included with Premium', badgeColor: '#0C2054' },
        { name: 'Prime Video', type: 'subscription', pricing: 'Included in Prime', badgeColor: '#00A8E1' },
        { name: 'Apple TV', type: 'rent', pricing: 'Rent ₹80', badgeColor: '#A2AAAD' }
      ],
      lastChecked: '2026-08-24'
    }
  },
  {
    id: 'fantastic-mr-fox-2009',
    title: 'Fantastic Mr. Fox',
    year: 2009,
    imdbRating: 7.9,
    runtimeMinutes: 87,
    director: 'Wes Anderson',
    cast: ['George Clooney', 'Meryl Streep', 'Bill Murray', 'Jason Schwartzman'],
    genres: ['Animation', 'Adventure', 'Comedy', 'Family'],
    contentTags: ['Under 90 min', 'Family-safe', 'Stop-Motion Wonder', 'Quirky Wit', 'Cozy comfort'],
    moodTags: ['Have a great time', 'Escape reality', 'Feel every feeling'],
    weapons: ['Cozy comfort', 'Beautiful worlds', 'Clever twists'],
    parties: ['Kids', 'Family', 'Date night', 'Friends', 'Solo'],
    treasureCategories: ['Cult classic', 'Award-winning pick', 'Underrated gem'],
    posterUrl: 'https://image.tmdb.org/t/p/w780/bOVr292mwn3jxr1e0NmUPM1rcjo.jpg',
    backdropUrl: 'https://image.tmdb.org/t/p/w1280/xRxSLhhjPG2D8l0BXi0KdN4IvPt.jpg',
    trailerYoutubeId: 'n2igjYFojUo',
    synopsis: 'An urbane fox cannot resist returning to his farm-raiding ways and then must help his community survive the farmers\' furious retaliation.',
    isCultClassic: true,
    isAwardWinner: true,
    ageRating: 'PG',
    indianOtt: {
      available: true,
      platforms: [
        { name: 'JioHotstar', type: 'subscription', pricing: 'Included with Disney+ Bundle', badgeColor: '#0C2054' },
        { name: 'Apple TV', type: 'rent', pricing: 'Rent ₹80', badgeColor: '#A2AAAD' }
      ],
      lastChecked: '2026-08-25'
    }
  }
];
