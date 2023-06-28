import mongoose from "mongoose";
import * as dotenv from "dotenv";

dotenv.config();

function connectToDB() {
  const { MONGO_URL = "" } = process.env;

  try {
    mongoose.connect(MONGO_URL, {});
    console.log("Sucessfully connected to the database!")
  } catch (_err) {
    console.log("It was not possible to connect to the database");
  }
}

export default connectToDB