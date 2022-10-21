import { gql, useQuery } from "@apollo/client";
import { ICharacter, ICharacterFilters, ICharacterSort, IEpisode } from "types";

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
  query GetEpisodes {
    episodes {
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
export const useGetEpisodes = (page: number) => {
  return useQuery<{ episodes: IEpisode[] }>(
    GET_EPISODES /* , {
    variables: { page },
  } */
  );
};
