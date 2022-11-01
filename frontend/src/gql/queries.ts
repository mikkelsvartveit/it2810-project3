import { gql, useQuery, useReactiveVar } from "@apollo/client";
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
    $pageSize: Int
    $filters: CharacterFilter
    $sort: CharacterSort
  ) {
    characters(
      page: $page
      pageSize: $pageSize
      filters: $filters
      sort: $sort
    ) {
      name
      status
      species
      origin {
        name
      }
      gender
      image
      id
      rating
      episodeCount
    }
  }
`;

export const useGetCharacters = (pageSize: number) => {
  const [pageNr, setPageNr] = useState(1);
  const [isLastPage, setIsLastPage] = useState(true);
  const filter = useReactiveVar(activeCharacterFilterVar);
  const name = useReactiveVar(activeCharacterFilterNameVar);
  const sort = useReactiveVar(activeCharacterSortVar);

  const filters = name ? { ...filter, name } : filter;
  const queryResult = useQuery<{ characters: ICharacter[] }>(GET_CHARACTERS, {
    variables: { page: 1, pageSize, filters, sort },
  });

  useEffect(() => {
    setPageNr(1);
    setIsLastPage(false);
  }, [filter, pageSize, name, sort]);

  return {
    pageNr,
    setPageNr,
    isLastPage,
    setIsLastPage,
    ...queryResult,
  };
};

export const GET_CHARACTER = gql`
  query GetCharacter($characterId: ID!) {
    character(id: $characterId) {
      name
      status
      species
      type
      gender
      image
      episode {
        id
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
  query GetEpisodes(
    $page: Int!
    $pageSize: Int
    $filters: EpisodeFilter
    $sort: EpisodeSort
  ) {
    episodes(page: $page, pageSize: $pageSize, filters: $filters, sort: $sort) {
      air_date
      episode
      id
      name
      rating
      characterCount
    }
  }
`;

export const useGetEpisodes = (pageSize: number) => {
  const [pageNr, setPageNr] = useState(1);
  const [isLastPage, setIsLastPage] = useState(false);
  const episodeFilter = useReactiveVar(activeEpisodeFilterVar);
  const filterName = useReactiveVar(activeEpisodeFilterNameVar);
  const sort = useReactiveVar(activeEpisodeSortVar);

  const filters = filterName
    ? { ...episodeFilter, name: filterName }
    : episodeFilter;

  // Reset search results when filter or sort changes
  useEffect(() => {
    setPageNr(1);
    setIsLastPage(false);
  }, [filterName, pageSize, episodeFilter, sort]);

  return {
    pageNr,
    setPageNr,
    isLastPage,
    setIsLastPage,
    ...useQuery<{ episodes: IEpisode[] }>(GET_EPISODES, {
      variables: { page: 1, pageSize, filters, sort },
    }),
  };
};

export const GET_EPISODE = gql`
  query GetEpisode($episodeId: ID!) {
    episode(id: $episodeId) {
      air_date
      created
      episode
      id
      name
      characters {
        id
        name
        image
      }
      rating
    }
  }
`;

export const useGetEpisode = (episodeId: number) => {
  return useQuery<{ episode: IEpisode }>(GET_EPISODE, {
    variables: { episodeId },
  });
};
