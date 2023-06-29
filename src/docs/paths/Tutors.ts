import { PathItem } from "swagger-jsdoc";
import BaseTutor from "../components/schemas/Tutor/BaseTutor";

const Tutors: PathItem = {
	post: {
		tags: ["Tutors"],
		requestBody: {
			required: true,
			content: {
				"application/json": {
					schema: {
						$ref: "#/components/schemas/TutorPost",
					},
				},
			},
		},
		responses: {
			200: {
				description: "OK",
				content: {
					"application/json": {
						schema: {
							$ref: "#/components/schemas/TutorResponse",
						},
					},
				},
			},
			409: {
				description: "Conflict",
				content: {
					"application/json": {
						schema: {
							type: "object",
							properties: {
								message: {
									type: "string",
									example: "Email already in use",
								},
								data: BaseTutor,
							},
						},
					},
				},
			},
		},
	},
};

export default Tutors;
