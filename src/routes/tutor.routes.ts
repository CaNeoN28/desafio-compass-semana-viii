import express from "express";
import TutorControler from "../controllers/tutor.controller";

const tutorRouter = express.Router();
const controller = new TutorControler();

tutorRouter.route("/").post(controller.post);

export default tutorRouter;
