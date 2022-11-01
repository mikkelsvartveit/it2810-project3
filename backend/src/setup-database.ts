// SCRIPT FOR CLEARING AND SETTING UP THE DATABASE

import mongoose from "mongoose";
import { characters, episodes } from "../dataset.json";

let MONGODB_URL = "mongodb://localhost:27017/rickandmorty";

if (process.env.NODE_ENV == "test")
  MONGODB_URL = "mongodb://mongo/rickandmorty";

const setupDatabase = async () => {
  console.log("Initializing database... 🚀");

  await mongoose.connect(MONGODB_URL);

  await mongoose.connection.db.dropDatabase();
  await mongoose.connection.db.createCollection("characters");

  await mongoose.connection.db.collection("characters").insertMany(characters);
  await mongoose.connection.db.collection("episodes").insertMany(episodes);

  await mongoose.connection.close();

  console.log("Database setup complete! 🎉");
};

setupDatabase();
