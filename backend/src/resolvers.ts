import { Character } from "./models/Character";
import { Episode } from "./models/Episode";

export const resolvers = {
  Query: {
    characters: async () => {
      const characters = await Character.find();

      // Generate array of all episodes for all characters
      const episodeIds = characters.reduce((acc, character): number[] => {
        return [...acc, ...character.episode];
      }, [] as number[]);

      const episodes = await Episode.find({
        id: { $in: episodeIds },
      });

      // Map episodes to characters
      const charactersWithEpisodes = characters.map((character) => {
        const episodesForCharacter = episodes.filter((episode) =>
          character.episode.includes(episode.id)
        );

        return {
          ...character._doc,
          episode: episodesForCharacter,
        };
      });

      return charactersWithEpisodes;
    },

    character: async (_: unknown, { id }: { id: number }) => {
      const character = await Character.findOne({ id });

      if (!character) {
        return null;
      }

      const episodes = await Episode.find({
        id: { $in: character.episode },
      });

      return {
        ...character._doc,
        episodes,
      };
    },

    episodes: async () => {
      const episodes = await Episode.find();

      // Generate array of all characters for all episodes
      const characterIds = episodes.reduce((acc, episode): number[] => {
        return [...acc, ...episode.characters];
      }, [] as number[]);

      const characters = await Character.find({
        id: { $in: characterIds },
      });

      // Map characters to episodes
      const episodeWithCharacters = episodes.map((episode) => {
        const characterForEpisode = characters.filter((character) =>
          episode.characters.includes(character.id)
        );

        return {
          ...episode._doc,
          characters: characterForEpisode,
        };
      });

      return episodeWithCharacters;
    },

    episode: async (_: unknown, { id }: { id: number }) => {
      const episode = await Episode.findOne({ id });

      if (!episode) {
        return null;
      }

      const characters = await Character.find({
        id: { $in: episode.characters },
      });

      return {
        ...episode._doc,
        characters,
      };
    },
  },
};
