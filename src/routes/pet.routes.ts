import express from "express";
import PetController from "../controllers/pet.controller";
import authMiddleware from "../middlewares/authMiddleware";

const petRouter = express.Router();

petRouter.post("/:tutorId", authMiddleware, PetController.post)

export default petRouter;
