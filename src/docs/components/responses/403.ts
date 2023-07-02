const response403 = {
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
};

export default response403;
