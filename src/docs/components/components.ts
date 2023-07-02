import { Components } from "swagger-jsdoc";
import { TutorPost, TutorResponse, Login, PetPost } from "./schemas";
import { bearerAuth } from "./securitySchemes";
import { response401, response403 } from "./responses";

const components: Components = {
	schemas: {
		TutorPost,
		TutorResponse,
		PetPost,
		Login,
		_401: response401,
		_403: response403
	},
	securitySchemes: {
		bearerAuth,
	},
};

export default components;
