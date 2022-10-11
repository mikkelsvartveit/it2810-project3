import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type Query {
    characters: [Character!]!
    character(id: ID!): Character
  }

  type Character {
    id: ID!
    name: String!
    status: String!
    species: String!
    type: String!
    gender: String!
    origin: Location!
    location: Location!
    image: String!
  }

  type Location {
    name: String!
  }
`;
