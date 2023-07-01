import express from "express";
import TutorControler from "../controllers/tutor.controller";
import authMiddleware from "../middlewares/authMiddleware";

const tutorRouter = express.Router();
const controller = new TutorControler();

tutorRouter.route("/").post(controller.post).get(authMiddleware ,controller.get);

tutorRouter.route("/:id").put(authMiddleware, controller.put)

export default tutorRouter;
