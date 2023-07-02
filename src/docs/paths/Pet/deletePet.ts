import { Operation } from "swagger-jsdoc";

const deletePet: Operation = {
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

export default deletePet