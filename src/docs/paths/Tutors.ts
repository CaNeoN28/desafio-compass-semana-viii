import { PathItem } from "swagger-jsdoc";

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
		},
	},
};

export default Tutors;
