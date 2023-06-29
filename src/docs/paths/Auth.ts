import { response } from "express";
import { PathItem } from "swagger-jsdoc";

class Auth {
	static Login: PathItem = {
		post: {
			tags: ["Auth"],
			requestBody: {
				required: true,
				content: {
					"application/json": {
						schema: {
							$ref: "#/components/schemas/Login",
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
								type: "object",
								properties: {
									message: {
										type: "string",
										example: "Logged with sucess!",
									},
									token: {
										type: "string",
									},
								},
							},
						},
					},
				},
			},
		},
	};
}

export default Auth;
