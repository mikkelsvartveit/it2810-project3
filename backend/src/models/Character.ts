import { Schema, model } from "mongoose";

export interface ICharacter {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
  };
  location: {
    name: string;
  };
  image: string;
  episode: number[];
}

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
});

export const Character = model<Schema>("Character", CharacterSchema);
