import { ICharacter } from "./characters";

export declare interface IEpisode {
  id: number; //	The id of the episode.
  name: string; //	The name of the episode.
  air_date: string; //	The air date of the episode.
  episode: string; //	The code of the episode. S2E4
  characters: ICharacter[]; // (urls)	List of characters who have been seen in the episode.
  created: string; //	Time at which the episode was created in the database
}
export declare interface IEpisodeFilters {
  name?: string;
  season?: string;
  start_date?: string;
  end_date?: string;
}

export type IEpisodeSort = {
  [key in string]: "asc" | "desc";
};
