const BaseTutor = {
	properties: {
		name: {
			type: "string",
			required: true,
		},
		phone: {
			type: "string",
			required: true,
		},
		email: {
			type: "string",
			required: true,
			unique: true,
		},
		date_of_birth: {
			type: "string",
			required: true,
		},
		zip_code: {
			type: "string",
			required: true,
		},
		pets: {
			type: "array",
			items: {
				$ref: "#/components/schemas/PetResponse",
			},
		},
	},
	example: {
		name: "Carlos",
		phone: "556999999999",
		email: "carlosfelipe@outlook.com",
		date_of_birth: "2004/02/28",
		zip_code: "88888888",
		pets: []
	}
}

export default BaseTutor