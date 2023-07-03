import express from "express";
import * as dotenv from "dotenv";
import connectToDB from "./src/config/db.config";
import TutorControler from "./src/controllers/tutor.controller";
import errorsMiddleware from "./src/middlewares/errorsMidlleware";
import AuthController from "./src/controllers/auth.controller";
import appRouter from "./src/routes";
import swaggerSetup from "./src/docs/swaggerSetup";

dotenv.config();

const app = express();
const { PORT = 3000 } = process.env;

swaggerSetup(app)

app.use(express.json());
app.use("/api/v1", appRouter);

app.use("/", (req, res) => {
	res.status(404).send("Not found")
})

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
