import { Character, ICharacter } from "./models/Character";
import { Episode, IEpisode } from "./models/Episode";

export const resolvers = {
  Query: {
    characters: async () => {
      return await Character.find();
    },

    character: async (_: unknown, { id }: { id: number }) => {
      return await Character.findOne({ id });
    },

    episodes: async () => {
      return await Episode.find();
    },

    episode: async (_: unknown, { id }: { id: number }) => {
      return await Episode.findOne({ id });
    },
  },

  Character: {
    episode: async (character: ICharacter) => {
      return await Episode.find({ characters: character.id });
    },
  },

  Episode: {
    characters: async (episode: IEpisode) => {
      return await Character.find({ episode: episode.id });
    },
  },
};
