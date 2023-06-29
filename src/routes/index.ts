import express from "express";
import tutorRouter from "./tutor.routes";

const appRouter = express.Router();

appRouter.use("/tutors/", tutorRouter);

export default appRouter;
