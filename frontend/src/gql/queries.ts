import { gql, useQuery } from "@apollo/client";
import {
  ICharacter,
  ICharacterFilters,
  ICharacterSort,
  IEpisode,
  IEpisodeFilters,
  IEpisodeSort,
} from "types";

export const GET_CHARACTERS = gql`
  query GetCharacters(
    $page: Int!
    $filters: CharacterFilter
    $sort: CharacterSort
  ) {
    characters(page: $page, filters: $filters, sort: $sort) {
      name
      status
      species
      origin {
        name
      }
      gender
      episode {
        air_date
        name
        episode
      }
      image
      id
      location {
        name
      }
    }
  }
`;

/**
 *
 * @param page React state in the page number to be fetched
 * @returns
 */
export const useGetCharacters = (
  page: number,
  filters?: ICharacterFilters,
  sort?: ICharacterSort
) => {
  return useQuery<{ characters: ICharacter[] }>(GET_CHARACTERS, {
    variables: { page, filters, sort },
  });
};

export const GET_EPISODES = gql`
  query GetEpisodes($page: Int!, $filters: EpisodeFilter, $sort: EpisodeSort) {
    episodes(page: $page, filters: $filters, sort: $sort) {
      air_date
      created
      episode
      id
      name
      characters {
        gender
        id
        name
        image
        location {
          name
        }
        species
        status
      }
    }
  }
`;

/**
 *
 * @param page React state in the page number to be fetched
 * @returns
 */
export const useGetEpisodes = (
  page: number,
  filters?: IEpisodeFilters,
  sort?: IEpisodeSort
) => {
  return useQuery<{ episodes: IEpisode[] }>(GET_EPISODES, {
    variables: { page, filters, sort },
  });
};
