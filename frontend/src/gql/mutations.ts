import { gql, useMutation } from "@apollo/client";
import { ICharacter, IEpisode } from "types";

export const SET_CHARACTER_RATING = gql`
  mutation SetCharacterRating($characterId: ID!, $rating: Int!) {
    setCharacterRating(id: $characterId, rating: $rating) {
      id
      name
      rating
    }
  }
`;

export const useSetCharacterRating = (characterId: number) => {
  return useMutation<{ setCharacterRating: ICharacter }>(SET_CHARACTER_RATING, {
    variables: { characterId },
    refetchQueries: ["GetCharacter"],
  });
};

export const SET_EPISODE_RATING = gql`
  mutation SetEpisodeRating($episodeId: ID!, $rating: Int!) {
    setEpisodeRating(id: $episodeId, rating: $rating) {
      id
      name
      rating
    }
  }
`;

export const useSetEpisodeRating = (episodeId: number) => {
  return useMutation<{ setEpisodeRating: IEpisode }>(SET_EPISODE_RATING, {
    variables: { episodeId },
    refetchQueries: ["GetEpisode"],
  });
};
