export declare interface Episode {
  id: number; //	The id of the episode.
  name: string; //	The name of the episode.
  air_date: string; //	The air date of the episode.
  episode: string; //	The code of the episode.
  characters: string[]; // (urls)	List of characters who have been seen in the episode.
  url: string; // (url)	Link to the episode's own endpoint.
  created: string; //	Time at which the episode was created in the database
}
