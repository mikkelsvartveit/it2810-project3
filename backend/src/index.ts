import path from "path";
import { ApolloServer } from "apollo-server-express";
import express from "express";
import mongoose from "mongoose";
import { resolvers } from "./resolvers";
import { typeDefs } from "./typeDefs";
import { Request, Response } from "express";

let MONGODB_URL =
  process.env.MONGODB_URL || "mongodb://localhost:27017/rickandmorty";

// Use different MongoDB URL when running in GitLab CI
if (process.env.NODE_ENV == "test")
  MONGODB_URL = "mongodb://mongo/rickandmorty";

const PORT = process.env.PORT || 4000;

const startServer = async () => {
  const app = express();

  app.use("/", express.static(path.resolve("public")));

  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  await server.start();

  server.applyMiddleware({ app });

  // Redirect other routes to index.html to let Svelte handle routing
  app.get("*", (req: Request, res: Response) => {
    res.sendFile(path.resolve(__dirname, "../public", "index.html"));
  });

  await mongoose.connect(MONGODB_URL);

  app.listen({ port: PORT }, () => {
    console.log(
      `Server ready at http://localhost:${PORT}${server.graphqlPath} 🏋️`
    );
  });
};

startServer();
