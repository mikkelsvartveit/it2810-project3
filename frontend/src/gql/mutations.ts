import { gql, useMutation } from "@apollo/client";
import { Character, Episode } from "types";

export const RATE_CHARACTER = gql`
  mutation RateCharacter($id: ID!, $rating: Int!) {
    RateCharacter(id: $id, rating: $rating) {
      id
      name
      status
      species
      rating
    }
  }
`;

/**
 * @param idState React state in the id of the character to be rate
 * @param ratingState React state in the rating of the character to be rate
 * @returns
 */
export const useRateCharacter = (idState: number, ratingState: number) => {
  const [rateCharacter, { data, loading, error }] = useMutation<
    Character,
    { id: number; rating: number }
  >(RATE_CHARACTER, {
    variables: { id: idState, rating: ratingState },
  });

  return { rateCharacter, data, loading, error };
};

export const RATE_EPISODE = gql`
  mutation RateEpisode($id: ID!, $rating: Int!) {
    RateEpisode(id: $id, rating: $rating) {
      id
      name
      air_date
      episode
      rating
    }
  }
`;

/**
 * @param idState React state in the id of the episode to be rate
 *  @param ratingState React state in the rating of the episode to be rate
 * @returns
 * */
export const useRateEpisode = (idState: number, ratingState: number) => {
  const [rateEpisode, { data, loading, error }] = useMutation<
    Episode,
    { id: number; rating: number }
  >(RATE_EPISODE, {
    variables: { id: idState, rating: ratingState },
  });

  return { rateEpisode, data, loading, error };
};
