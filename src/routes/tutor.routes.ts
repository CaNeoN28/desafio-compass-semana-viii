import express from "express";
import TutorControler from "../controllers/tutor.controller";
import authMiddleware from "../middlewares/authMiddleware";

const tutorRouter = express.Router();
const controller = new TutorControler();

tutorRouter
	.post("/tutor", controller.post)

tutorRouter
	.get("/tutors", authMiddleware, controller.get);

tutorRouter
	.route("/tutor/:id")
	.put(authMiddleware, controller.put)
	.delete(authMiddleware, controller.delete);

export default tutorRouter;
