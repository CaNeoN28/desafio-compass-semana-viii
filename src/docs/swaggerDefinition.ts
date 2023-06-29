import { OAS3Definition } from "swagger-jsdoc";

const swaggerDefinition: OAS3Definition = {
	openapi: "3.0.0",
	info: {
		title: "Vet Clinic API",
		version: "1.0"
	},
	servers: [{
		url: "http://localhost:3000/api/v1",
		description: "Development Environment"
	}]
};

export default swaggerDefinition