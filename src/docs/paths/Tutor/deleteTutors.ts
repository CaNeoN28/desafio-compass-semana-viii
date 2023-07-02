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
		401: {
			description: "Not authenticated",
			content: {
				"application/json": {
					schema: {
						type: "object",
						properties: {
							message: {
								type: "string",
								example: "Please provide a valid token!",
							},
						},
					},
				},
			},
		},
		403: {
			description: "Not authorized",
			content: {
				"application/json": {
					schema: {
						type: "object",
						properties: {
							message: {
								type: "string",
								example: "You are not allowed to perform this action!",
							},
						},
					},
				},
			},
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