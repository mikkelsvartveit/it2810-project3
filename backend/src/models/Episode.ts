import { Schema, model } from "mongoose";
import type { IEpisode } from "types";

const EpisodeSchema = new Schema<IEpisode>({
  id: Number,
  name: String,
  air_date: String,
  episode: String,
  created: String,
  characters: Array,
  rating: Number,
});

export const Episode = model<Schema>("Episode", EpisodeSchema);
