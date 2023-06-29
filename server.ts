import express from "express";
import * as dotenv from "dotenv";
import connectToDB from "./src/config/db.config";
import TutorControler from "./src/controllers/tutor.controller";
import errorsMiddleware from "./src/middlewares/errorsMidlleware";
import AuthController from "./src/controllers/auth.controller";
import appRouter from "./src/routes";

dotenv.config();

const app = express();
const { PORT = 3000 } = process.env;

const tutorController = new TutorControler();

app.use(express.json());
app.use("/api/v1", appRouter);

app.post("/auth/login", AuthController.login);

app.use(errorsMiddleware);

const start = async () => {
	try {
		await connectToDB();
		app.listen(PORT, () => {
			console.log("Server listening at http://localhost:3000");
		});
	} catch (err) {
		console.log("Something went wrong");
		console.log(err);
	}
};

start();
