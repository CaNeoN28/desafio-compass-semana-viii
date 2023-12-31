import { Operation } from "swagger-jsdoc";
import BaseTutor from "../../components/schemas/Tutor/BaseTutor";

const putTutors: Operation = {
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
		400: {
			description: "Bad request",
			content: {
				"application/json": {
					schema: {
						type: "object",
						properties: {
							message: { type: "string" },
							data: BaseTutor
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
		409: {
			description: "Conflict",
			content: {
				"application/json": {
					schema: {
						type: "object",
						properties: {
							message: { type: "string", example: "Email already in use" },
							data: BaseTutor
						},
					},
				},
			},
		},
	},
};

export default putTutors;
