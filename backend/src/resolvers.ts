import { Character } from "./models/Character";

export const resolvers = {
  Query: {
    characters: async () => {
      return await Character.find();
    },
  },
};
