import { PathItem } from "swagger-jsdoc";

const Tutors: PathItem = {
	post: {
		tags: ["Tutors"],
		requestBody: {
			required: true,
			content: {
				"application/json": {
					schema: {
						$ref: "#/components/schemas/Tutor",
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
							$ref: "#/components/schemas/Tutor",
						},
					},
				},
			},
		},
	},
};

export default Tutors;
