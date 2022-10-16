import { gql, useQuery } from "@apollo/client";
import { ICharacter, IEpisode } from "types";

export const GET_CHARACTERS = gql`
  query GetCharacters($page: Int) {
    Characters(page: $page) {
      name
      status
      species
      gender
      origin
      location
      image
    }
  }
`;

/**
 *
 * @param page React state in the page number to be fetched
 * @returns
 */
export const useGetCharacters = (page: number) => {
  const { data, loading, error } = useQuery<ICharacter[]>(GET_CHARACTERS, {
    variables: { page },
  });

  return { data, loading, error };
};

export const GET_EPISODES = gql`
  query GetEpisodes($page: Int) {
    Episodes(page: $page) {
      name
      air_date
      episode
      characters
    }
  }
`;

/**
 *
 * @param page React state in the page number to be fetched
 * @returns
 */
export const useGetEpisodes = (page: number) => {
  const { data, loading, error } = useQuery<IEpisode[]>(GET_EPISODES, {
    variables: { page },
  });

  return { data, loading, error };
};
