import express from "express";
import * as dotenv from "dotenv";
import connectToDB from "./src/config/db.config";
import TutorControler from "./src/controllers/tutor.controller";
import errorsMiddleware from "./src/middlewares/errorsMidlleware";

dotenv.config();

const app = express();
const { PORT = 3000 } = process.env;

const tutorController = new TutorControler();

app.use(express.json());

app.route("/tutor").post(tutorController.post);

app.use(errorsMiddleware);

const start = async () => {
  try {
    await connectToDB();
    app.listen(PORT, () => {
      console.log("Server listening at http://localhost:3000");
    });
  } catch (err) {
    console.log("Something went wrong");
    console.log(err);
  }
};

start();
