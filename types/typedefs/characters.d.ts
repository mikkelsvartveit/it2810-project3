import { IEpisode } from "./episodes";
import { ILocation } from "./locations";

export declare interface ICharacter {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: ILocation;
  location: ILocation;
  image: string;
  episode: IEpisode[];
  episodeCount: number;
  created: string;
  rating: number;
}
export declare interface ICharacterFilters {
  name?: string;
  status?: string[];
  species?: string[];
  gender?: string[];
}

export type ICharacterSort = {
  [key in string]: "asc" | "desc";
};
