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
    episodeCount: String
  }

  input EpisodeSort {
    name: String
    rating: String
    characterCount: String
  }

  type Query {
    """
    Get multiple characters
    """
    characters(
      page: Int
      pageSize: Int
      filters: CharacterFilter
      sort: CharacterSort
    ): [Character!]!

    """
    Get character by ID
    """
    character(id: ID!): Character

    """
    Get multiple episodes
    """
    episodes(
      page: Int
      pageSize: Int
      filters: EpisodeFilter
      sort: EpisodeSort
    ): [Episode!]!

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
    Character status (dead/alive/unknown)
    """
    status: String!

    """
    Species
    """
    species: String!

    """
    Type (subtype of species)
    ex: dog, parasite, birdperson
    """
    type: String!

    """
    Gender
    """
    gender: String!

    """
    Planet which the character is from
    """
    origin: Location!

    """
    Last known location
    """
    location: Location!

    """
    URL to image of character
    """
    image: String!

    """
    List of episodes the character is in
    """
    episode: [Episode]

    """
    Number of episodes the character is in
    """
    episodeCount: Int!

    """
    Rating (out of 5) for character
    """
    rating: Int
  }

  type Episode {
    """
    Episode ID
    """
    id: ID!

    """
    Episode name.
    """
    name: String!

    """
    Date when the episode first aired
    """
    air_date: String!

    """
    Season and episode code
    Format: S01E01
    """
    episode: String!

    """
    List of characters in episode.
    """
    characters: [Character]

    """
    Number of characters in episode
    """
    characterCount: Int!

    """
    Creation time in the RickandMortyAPI database.
    """
    created: String!

    """
    Rating (out of 5) for episode
    """
    rating: Int
  }

  type Location {
    """
    Name of the location
    """
    name: String!
  }
`;
