import { Components } from "swagger-jsdoc";
import { TutorPost, TutorResponse, Login } from "./schemas";
import { bearerAuth } from "./securitySchemes";

const components: Components = {
	schemas: {
		TutorPost,
		TutorResponse,
		Login,
	},
	securitySchemes: {
		bearerAuth,
	},
};

export default components;
