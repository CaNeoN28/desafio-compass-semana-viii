import { Options } from "swagger-jsdoc";
import swaggerDefinition from "./swaggerDefinition";

const swaggerOptions: Options = {
	definition: swaggerDefinition,
	apis: []
};

export default swaggerOptions