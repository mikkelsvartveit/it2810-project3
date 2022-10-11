import { Schema, model } from "mongoose";

interface ICharacter {
  id: string;
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
});

export const Character = model<Schema>("Character", CharacterSchema);
