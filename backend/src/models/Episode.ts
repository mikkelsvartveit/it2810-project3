import { Schema, model } from "mongoose";

export interface IEpisode {
  id: number;
  name: string;
  airDate: string;
  episode: string;
  created: string;
  characters: number[];
}

const EpisodeSchema = new Schema<IEpisode>({
  id: Number,
  name: String,
  airDate: String,
  episode: String,
  created: String,
  characters: Array,
});

export const Episode = model<Schema>("Episode", EpisodeSchema);
