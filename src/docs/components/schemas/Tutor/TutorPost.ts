import { Schema } from "swagger-jsdoc";
import BaseTutor from "./BaseTutor";

const TutorPost: Schema = {
	type: "object",
	properties: {
		...BaseTutor.properties,
		password: {
			type: "string",
			required: true,
		},
	},
	example: {
		...BaseTutor.example,
		password: "12345678Asdf"
	}
};

export default TutorPost;
