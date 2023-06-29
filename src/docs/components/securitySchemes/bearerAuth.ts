import {SecurityScheme} from "swagger-jsdoc";

const bearerAuth: SecurityScheme = {
	type: 'http',
	scheme: 'bearer',
	bearerFormat: "JWT"
}

export default bearerAuth