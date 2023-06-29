import { Application } from "express";
import swaggerJSDoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'
import swaggerOptions from "./swaggerOptions";

export default function swaggerSetup(app: Application){
	const swaggerDoc = swaggerJSDoc(swaggerOptions)
	app.use("/api/v1/docs", swaggerUi.serve, swaggerUi.setup(swaggerDoc))
}