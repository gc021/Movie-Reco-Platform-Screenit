/**
 * OTT Deep-link & Web Search Generator for Indian Streaming Platforms
 */
export function getOttPlatformUrl(platformName: string, movieTitle: string, year?: number): string {
  const norm = platformName.toLowerCase();
  const query = encodeURIComponent(movieTitle);
  const fullSearchQuery = encodeURIComponent(`${movieTitle} ${year || ''} movie watch online india`);

  if (norm.includes('netflix')) {
    return `https://www.netflix.com/search?q=${query}`;
  }
  if (norm.includes('prime') || norm.includes('amazon')) {
    return `https://www.primevideo.com/search/ref=atv_nb_sr?phrase=${query}`;
  }
  if (norm.includes('hotstar') || norm.includes('jiohotstar') || norm.includes('disney')) {
    return `https://www.hotstar.com/in/search?q=${query}`;
  }
  if (norm.includes('apple') || norm.includes('itunes')) {
    return `https://tv.apple.com/search?term=${query}`;
  }
  if (norm.includes('sonyliv') || norm.includes('sony')) {
    return `https://www.sonyliv.com/search/${query}`;
  }
  if (norm.includes('zee5') || norm.includes('zee')) {
    return `https://www.zee5.com/search?q=${query}`;
  }
  if (norm.includes('jiocinema') || norm.includes('jio')) {
    return `https://www.jiocinema.com/search/${query}`;
  }
  if (norm.includes('lionsgate')) {
    return `https://www.lionsgateplay.com/search?query=${query}`;
  }
  if (norm.includes('youtube') || norm.includes('google play') || norm.includes('rent')) {
    return `https://www.youtube.com/results?search_query=${encodeURIComponent(movieTitle + ' movie ' + (year || ''))}`;
  }

  return `https://www.google.com/search?q=${fullSearchQuery}`;
}
