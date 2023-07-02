import { Operation } from "swagger-jsdoc";

const getTutors: Operation = {
	tags: ["Tutors"],
	responses: {
		200: {
			description: "OK",
			content: {
				"application/json": {
					schema: {
						type: "array",
						items: {
							$ref: "#/components/schemas/TutorResponse",
						},
					},
				},
			},
		},
		401: {
			$ref: "#/components/schemas/_401",
		},
		404: {
			description: "Not found",
			content: {
				"application/json": {
					schema: {
						type: "object",
						properties: {
							message: { type: "string", example: "No tutors found!" },
						},
					},
				},
			},
		},
	},
};

export default getTutors;
