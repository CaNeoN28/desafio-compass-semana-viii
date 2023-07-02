import { Operation } from "swagger-jsdoc";

const deleteTutors: Operation = {
	tags: ["Tutors"],
	parameters: [
		{
			name: "id",
			in: "path",
			required: true,
			schema: {
				type: "string",
			},
		},
	],
	responses: {
		204: {
			description: "No content"
		},
		400: {
			description: "Bad request",
			content: {
				"application/json": {
					schema: {
						type: "object",
						properties: {
							message: { type: "string", example: "Please provide a valid Id!" }
						},
					},
				},
			},
		},
		401: {
			$ref: "#/components/schemas/_401"
		},
		403: {
			$ref: "#/components/schemas/_403"
		},
		404: {
			description: "Not found",
			content: {
				"application/json": {
					schema: {
						type: "object",
						properties: {
							message: { type: "string", example: "Tutor not found!" },
						},
					},
				},
			},
		},
	}
};

export default deleteTutors