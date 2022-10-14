import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type Query {
    """
    Get all characters
    """
    characters: [Character!]!

    """
    Get a character from ID
    """
    character(id: ID!): Character

    """
    Get all episodes
    """
    episodes: [Episode!]!

    """
    Get episode by ID
    """
    episode(id: ID!): Episode
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
  }
`;
