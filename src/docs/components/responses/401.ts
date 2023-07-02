const response401 = {
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
}

export default response401