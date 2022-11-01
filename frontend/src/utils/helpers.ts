// Convert from "S01E01" to "Season 1, Episode 1"
export function formatEpisodeAndSeason(episode: string) {
  const episodeNum = episode.split("E")[1];
  const seasonNum = episode.split("E")[0].split("S")[1];
  return `Season ${Number.parseInt(seasonNum)}, Episode ${Number.parseInt(
    episodeNum
  )}`;
}
