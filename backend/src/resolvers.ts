import { Character } from "./models/Character";
import { Episode } from "./models/Episode";
import {
  ICharacter,
  ICharacterFilters,
  ICharacterSort,
  IEpisode,
  IEpisodeFilters,
  IEpisodeSort,
} from "types";
import { GraphQLError } from "graphql";

const DEFAULT_PAGE_SIZE = 18;

const mongooseStringContains = (str?: string) => ({
  $regex: str ?? "",
  $options: "i",
});

export const resolvers = {
  Mutation: {
    // Mutation for setting the rating of a character
    setCharacterRating: async (
      _: unknown,
      { id, rating }: { id: number; rating: number }
    ) => {
      const character = await Character.findOne({ id });

      if (!character) {
        throw new GraphQLError("Character not found", {
          extensions: { code: "BAD_USER_INPUT" },
        });
      }

      character.rating = rating;
      await character.save();
      return character;
    },

    // Mutation for setting the rating of an episode
    setEpisodeRating: async (
      _: unknown,
      { id, rating }: { id: number; rating: number }
    ) => {
      const episode = await Episode.findOne({ id });

      if (!episode) {
        throw new GraphQLError("Episode not found", {
          extensions: { code: "BAD_USER_INPUT" },
        });
      }

      episode.rating = rating;
      await episode.save();
      return episode;
    },
  },

  Query: {
    // Query for getting a collection of characters
    // Allows for filtering, sorting and pagination
    characters: async (
      _: unknown,
      {
        page,
        pageSize,
        filters,
        sort,
      }: {
        page: number;
        pageSize?: number;
        filters: ICharacterFilters;
        sort: ICharacterSort;
      }
    ) => {
      if (!pageSize) {
        pageSize = DEFAULT_PAGE_SIZE;
      } else if (pageSize < 1) {
        throw new GraphQLError("Page size must be at least 1", {
          extensions: { code: "BAD_USER_INPUT" },
        });
      }
      return await Character.find({
        ...filters,
        name: mongooseStringContains(filters?.name),
      })
        .sort({ ...sort, _id: 1 } ?? { _id: 1 })
        .skip((page - 1) * pageSize)
        .limit(pageSize);
    },
    // Query for getting a single character by id
    character: async (_: unknown, { id }: { id: number }) =>
      await Character.findOne({ id }),

    // Query for getting a collection of episodes
    // Allows for filtering, sorting and pagination
    episodes: async (
      _: unknown,
      {
        page,
        pageSize,
        filters,
        sort,
      }: {
        page: number;
        pageSize?: number;
        filters: IEpisodeFilters;
        sort: IEpisodeSort;
      }
    ) => {
      if (!pageSize) {
        pageSize = DEFAULT_PAGE_SIZE;
      } else if (pageSize < 1) {
        throw new GraphQLError("Page size must be at least 1", {
          extensions: { code: "BAD_USER_INPUT" },
        });
      }
      return await Episode.find({
        name: mongooseStringContains(filters?.name),
        episode: mongooseStringContains(filters?.season),
        $where: `(${!filters?.start_date} || (new Date(this.air_date).getTime() >= new Date("${
          filters?.start_date
        }").getTime())) && (${!filters?.end_date} || (new Date(this.air_date).getTime() <= new Date("${
          filters?.end_date
        }").getTime()))`,
      })
        .sort({ ...sort, _id: 1 } ?? { _id: 1 })
        .skip((page - 1) * pageSize)
        .limit(pageSize);
    },

    // Query for getting a single episode by id
    episode: async (_: unknown, { id }: { id: number }) =>
      await Episode.findOne({ id }),
  },

  // Find all episodes that a character appears in
  Character: {
    episode: async (character: ICharacter) => {
      return await Episode.find({ characters: character.id });
    },
  },

  // Find all characters that appears in an episode
  Episode: {
    characters: async (episode: IEpisode) => {
      return await Character.find({ episode: episode.id });
    },
  },
};
