import express from "express";
import tutorRouter from "./tutor.routes";

const appRouter = express.Router();

appRouter.use("/tutors/", tutorRouter);

appRouter.use("/", (req, res) => {
	res.redirect("/docs");
});

export default appRouter;
