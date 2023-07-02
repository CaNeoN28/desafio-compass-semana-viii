import express from "express";
import tutorRouter from "./tutor.routes";
import authRouter from "./auth.routes";
import testRouter from "./auth.test.routes";
import petRouter from "./pet.routes";

const appRouter = express.Router();

appRouter.use("/", tutorRouter);
appRouter.use("/pet", petRouter)
appRouter.use("/auth", authRouter);

appRouter.use("/", (req, res) => {
	res.redirect("/api/v1/docs");
});

export default appRouter;
