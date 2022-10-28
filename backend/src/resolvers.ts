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

const PAGE_SIZE = 18;

const mongooseStringContains = (str?: string) => ({
  $regex: str ?? "",
  $options: "i",
});

export const resolvers = {
  Mutation: {
    setCharacterRating: async (
      _: unknown,
      { id, rating }: { id: number; rating: number }
    ) => {
      const character = await Character.findOne({ id });
      if (!character) {
        throw new Error("Character not found");
      }
      character.rating = rating;
      await character.save();
      return character;
    },
    setEpisodeRating: async (
      _: unknown,
      { id, rating }: { id: number; rating: number }
    ) => {
      const episode = await Episode.findOne({ id });
      if (!episode) {
        throw new Error("Episode not found");
      }
      episode.rating = rating;
      await episode.save();
      return episode;
    },
  },
  Query: {
    characters: async (
      _: unknown,
      {
        page,
        filters,
        sort,
      }: { page: number; filters: ICharacterFilters; sort: ICharacterSort }
    ) =>
      await Character.find({
        ...filters,
        name: mongooseStringContains(filters?.name),
      })
        .sort({ ...sort, _id: 1 } ?? { _id: 1 })
        .skip((page - 1) * PAGE_SIZE)
        .limit(PAGE_SIZE),

    character: async (_: unknown, { id }: { id: number }) =>
      await Character.findOne({ id }),

    episodes: async (
      _: unknown,
      {
        page,
        filters,
        sort,
      }: { page: number; filters: IEpisodeFilters; sort: IEpisodeSort }
    ) => {
      return await Episode.find({
        name: mongooseStringContains(filters?.name),
        episode: mongooseStringContains(filters?.season),
        $where: `(${!filters?.start_date} || (new Date(this.air_date).getTime() >= new Date("${
          filters?.start_date
        }").getTime())) && (${!filters?.end_date} || (new Date(this.air_date).getTime() <= new Date("${
          filters?.end_date
        }").getTime()))`,
      })
        .sort(sort ?? {})
        .skip((page - 1) * PAGE_SIZE)
        .limit(PAGE_SIZE);
    },

    episode: async (_: unknown, { id }: { id: number }) =>
      await Episode.findOne({ id }),
  },
  Character: {
    episode: async (character: ICharacter) => {
      return await Episode.find({ characters: character.id });
    },

    episode_count: async (character: ICharacter) => {
      return await Episode.countDocuments({ characters: character.id });
    },
  },

  Episode: {
    characters: async (episode: IEpisode) => {
      return await Character.find({ episode: episode.id });
    },

    character_count: async (episode: IEpisode) => {
      return await Character.countDocuments({ episode: episode.id });
    },
  },
};
