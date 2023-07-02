import express from "express";
import PetController from "../controllers/pet.controller";

const petRouter = express.Router();

petRouter.post("/:tutorId", PetController.post)

export default petRouter;
