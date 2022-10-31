import { ApolloServer } from "apollo-server-express";
import express from "express";
import mongoose from "mongoose";
import { resolvers } from "./resolvers";
import { typeDefs } from "./typeDefs";

let MONGODB_URL = "mongodb://localhost:27017/rickandmorty";

if (process.env.NODE_ENV == "test")
  MONGODB_URL = "mongodb://mongo/rickandmorty";

const PORT = 4000;

const startServer = async () => {
  const app = express();

  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  await server.start();

  server.applyMiddleware({ app });

  await mongoose.connect(MONGODB_URL);

  app.listen({ port: PORT }, () => {
    console.log(
      `Server ready at http://localhost:${PORT}${server.graphqlPath} 🏋️`
    );
  });
};

startServer();
