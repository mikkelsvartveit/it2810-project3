import { Schema, model } from "mongoose";
import { ICharacter } from "types";

const CharacterSchema = new Schema<ICharacter>({
  id: Number,
  name: String,
  status: String,
  species: String,
  type: String,
  gender: String,
  origin: {
    name: String,
  },
  location: {
    name: String,
  },
  image: String,
  episode: Array,
  episodeCount: Number,
  rating: Number,
});

export const Character = model<Schema>("Character", CharacterSchema);
