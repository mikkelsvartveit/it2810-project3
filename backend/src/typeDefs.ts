import { gql } from "apollo-server-express";

export const typeDefs = gql`
  input CharacterFilter {
    name: String
    status: [String]
    species: [String]
    gender: [String]
  }

  input EpisodeFilter {
    name: String
    season: String
    start_date: String
    end_date: String
  }

  input CharacterSort {
    name: String
    rating: String
  }

  input EpisodeSort {
    name: String
    rating: String
  }

  type Query {
    """
    Get all characters
    """
    characters(
      page: Int
      filters: CharacterFilter
      sort: CharacterSort
    ): [Character!]!

    """
    Get a character from ID
    """
    character(id: ID!): Character

    """
    Get all episodes
    """
    episodes(page: Int, filters: EpisodeFilter, sort: EpisodeSort): [Episode!]!

    """
    Get episode by ID
    """
    episode(id: ID!): Episode
  }
  type Mutation {
    setCharacterRating(id: ID!, rating: Int!): Character
    setEpisodeRating(id: ID!, rating: Int!): Episode
  }
  type Character {
    """
    Character ID
    """
    id: ID!

    """
    Character name
    """
    name: String!

    """
    Character status, dead / alive
    """
    status: String!

    """
    Species
    """
    species: String!

    """
    Type, subtype of species?
    eks: Catperson, parasite, birdperson
    """
    type: String!

    """
    Gender
    """
    gender: String!

    """
    Origin
    """
    origin: Location!

    """
    Last known location
    """
    location: Location!

    """
    Image of character
    """
    image: String!

    """
    Episodes the character is in
    """
    episode: [Episode]

    """
    Rating of character
    """
    rating: Int
  }

  type Location {
    name: String!
  }
  type Episode {
    """
    Episode ID.
    """
    id: ID!

    """
    Episode name.
    """
    name: String!

    """
    Episode Ait date.
    """
    air_date: String!

    """
    Season and episode code
    Eks: S01E01
    """
    episode: String!

    """
    List of characters in episode.
    """
    characters: [Character]

    """
    Creation time in RickandMortyAPI database.
    """
    created: String!
    """
    Rating of episode
    """
    rating: Int
  }
`;
