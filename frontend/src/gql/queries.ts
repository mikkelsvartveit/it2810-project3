import { gql, useMutation, useQuery, useReactiveVar } from "@apollo/client";
import { useEffect, useState } from "react";
import { ICharacter, IEpisode } from "types";
import {
  activeCharacterFilterNameVar,
  activeCharacterFilterVar,
  activeCharacterSortVar,
  activeEpisodeFilterNameVar,
  activeEpisodeFilterVar,
  activeEpisodeSortVar,
} from "./cache";

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
export const useGetCharacters = () => {
  const [pageNr, setPageNr] = useState(1);
  const filter = useReactiveVar(activeCharacterFilterVar);
  const name = useReactiveVar(activeCharacterFilterNameVar);
  const sort = useReactiveVar(activeCharacterSortVar);

  const filters = name ? { ...filter, name } : filter;
  const queryResult = useQuery<{ characters: ICharacter[] }>(GET_CHARACTERS, {
    variables: { page: pageNr, filters, sort },
  });

  useEffect(() => {
    setPageNr(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter, name, sort]);

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
      rating
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
export const useGetEpisodes = () => {
  const [pageNr, setPageNr] = useState(1);
  const episodeFilter = useReactiveVar(activeEpisodeFilterVar);
  const filterName = useReactiveVar(activeEpisodeFilterNameVar);
  const sort = useReactiveVar(activeEpisodeSortVar);

  const filters = filterName
    ? { ...episodeFilter, name: filterName }
    : episodeFilter;

  // Reset search results when filter or sort changes
  useEffect(() => {
    setPageNr(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterName, episodeFilter, sort]);

  return {
    pageNr,
    setPageNr,
    ...useQuery<{ episodes: IEpisode[] }>(GET_EPISODES, {
      variables: { page: pageNr, filters, sort },
    }),
  };
};

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

export const useSetEpisodeRating = (episodeId: number, rating: number) => {
  return useMutation<{ setEpisodeRating: IEpisode }>(SET_EPISODE_RATING, {
    variables: { episodeId, rating },
  });
};
