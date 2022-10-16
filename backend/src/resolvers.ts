import { Character } from "./models/Character";
import { Episode } from "./models/Episode";
import { ICharacter, IEpisode } from "types";

const PAGE_SIZE = 20;

interface ICharacterFilters {
  name?: string;
  status?: string[];
  species?: string[];
  gender?: string[];
}

interface IEpisodeFilters {
  name?: string;
  season?: string;
  start_date?: string;
  end_date?: string;
}

const mongooseStringContains = (str?: string) => ({
  $regex: str ?? "",
  $options: "i",
});

export const resolvers = {
  Query: {
    characters: async (
      _: unknown,
      { page, filters }: { page: number; filters: ICharacterFilters }
    ) =>
      await Character.find({
        ...filters,
        name: mongooseStringContains(filters?.name),
      })
        .skip((page - 1) * PAGE_SIZE)
        .limit(PAGE_SIZE),

    character: async (_: unknown, { id }: { id: number }) =>
      await Character.findOne({ id }),

    episodes: async (
      _: unknown,
      { page, filters }: { page: number; filters: IEpisodeFilters }
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
  },

  Episode: {
    characters: async (episode: IEpisode) => {
      return await Character.find({ episode: episode.id });
    },
  },
};
