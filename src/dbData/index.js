import dotenv from "dotenv";
dotenv.config({ path: "../../.env" });

import data from "./data.js";
import mongoose from "mongoose";
import Listings from "../models/listings.js";

console.log("data is ", data[0]);
const Mongo_Url = process.env.Mongo_Atlas_Url;

console.log("url is: ", Mongo_Url);

const mongoConnection = async () => {
  await mongoose.connect(Mongo_Url);
};

mongoConnection()
  .then(() => {
    console.log("connected to mongo");
  })
  .catch((err) => {
    console.log("database connection is failed");
  });

const reInsertData = async () => {
  await Listings.deleteMany({});
  await Listings.insertMany(data);
};

// reInsertData();
