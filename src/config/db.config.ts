import mongoose from "mongoose";
import * as dotenv from "dotenv";

dotenv.config();

async function connectToDB() {
  const { MONGO_URL } = process.env;

  await mongoose.connect(MONGO_URL!, {});
}

export default connectToDB;
