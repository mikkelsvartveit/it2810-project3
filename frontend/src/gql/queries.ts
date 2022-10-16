import { gql, useQuery } from "@apollo/client";
import { ICharacter, IEpisode } from "types";

export const GET_CHARACTERS = gql`
  query GetCharacters {
    characters {
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
export const useGetCharacters = (page: number) => {
  return useQuery<{ characters: ICharacter[] }>(
    GET_CHARACTERS /* , {
    variables: { page },
  } */
  );
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
