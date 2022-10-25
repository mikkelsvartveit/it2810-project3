import { gql, useQuery } from "@apollo/client";
import { useState } from "react";
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
  filters?: ICharacterFilters,
  sort?: ICharacterSort
) => {
  const [pageNr, setPageNr] = useState(1);
  const queryResult = useQuery<{ characters: ICharacter[] }>(GET_CHARACTERS, {
    variables: { page: pageNr, filters, sort },
  });
  return {
    pageNr,
    setPageNr,
    ...queryResult,
  };
};

export const GET_CHARACTER = gql`
  query GetCharacter($characterId: ID!) {
    character(id: $characterId) {
      name
      status
      species
      gender
      image
      episode {
        name
        episode
      }
      origin {
        name
      }
      location {
        name
      }
    }
  }
`;

export const useGetCharacter = (characterId: number) => {
  return useQuery<{ character: ICharacter }>(GET_CHARACTER, {
    variables: { characterId },
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
  filters?: IEpisodeFilters,
  sort?: IEpisodeSort
) => {
  const [pageNr, setPageNr] = useState(1);
  return {
    pageNr,
    setPageNr,
    ...useQuery<{ episodes: IEpisode[] }>(GET_EPISODES, {
      variables: { page: pageNr, filters, sort },
    }),
  };
};
