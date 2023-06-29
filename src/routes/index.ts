import express from "express";
import tutorRouter from "./tutor.routes";
import authRouter from "./auth.routes";

const appRouter = express.Router();

appRouter.use("/tutors", tutorRouter);
appRouter.use("/auth", authRouter)

appRouter.use("/", (req, res) => {
	res.redirect("/docs");
});

export default appRouter;
