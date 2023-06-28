import express from "express";
import * as dotenv from "dotenv";
import connectToDB from "./src/config/db.config";

dotenv.config();

const app = express();
const { PORT = 3000 } = process.env;

app.get("/", (req, res) => {
  res.send("Hello world");
});

const start = async () => {
  try {
    await connectToDB();
    app.listen(PORT, () => {
      console.log("Server listening at http://localhost:3000");
    });
  } catch (err) {
    console.log("Something went wrong")
    console.log(err)
  }
};

start();
