import mongoose from "mongoose";
import dataset from "../dataset.json";

const MONGODB_URL = "mongodb://localhost:27017/rickandmorty";

const setupDatabase = async () => {
  console.log("Initializing database... 🚀");

  await mongoose.connect(MONGODB_URL);

  await mongoose.connection.db.dropDatabase();
  await mongoose.connection.db.createCollection("characters");

  await mongoose.connection.db.collection("characters").insertMany(dataset);

  await mongoose.connection.close();

  console.log("Database setup complete! 🎉");
};

setupDatabase();
