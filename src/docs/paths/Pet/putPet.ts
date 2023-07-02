import { Operation } from "swagger-jsdoc";

const putPet: Operation = {
	tags: ["Pets"],
	parameters: [{
		name: "tutorId",
		description: "Id of the tutor to insert the pet",
		in: "path",
		required: true
	}, {
		name: "petId",
		description: "The id of the pet to update",
		in: "path",
		required: true
	}],
	requestBody: {
		content: {
			"application/json": {
				schema: {
					$ref: "#/components/schemas/PetPost"
				}
			}
		}
	},
	responses: {
		201: {
			description: "Created",
			content: {
				"application/json": {
					schema: {
						$ref: "#/components/schemas/PetResponse",
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
							message: {
								type: "string",
							},
							data: {
								$ref : "#/components/schemas/PetPost"
							},
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
							message: {
								type: "string",
							},
						},
					},
				},
			}
		}
	}
}

export default putPet