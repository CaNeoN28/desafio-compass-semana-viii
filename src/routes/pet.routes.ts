import express from "express";
import PetController from "../controllers/pet.controller";
import authMiddleware from "../middlewares/authMiddleware";

const petRouter = express.Router();

petRouter.post("/:tutorId", authMiddleware, PetController.post);

petRouter
	.route("/:petId/tutor/:tutorId")
	.put(authMiddleware, PetController.update)
	.delete(authMiddleware, PetController.delete);

export default petRouter;
