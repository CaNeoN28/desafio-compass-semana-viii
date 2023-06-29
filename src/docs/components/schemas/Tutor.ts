import { Schema } from "swagger-jsdoc";

const Tutor: Schema = {
	type: "object",
	properties: {
		name: {
			type: "string",
			required: true,
		},
		password: {
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
		pets:{
			type: "array",
			items: {
				$ref: "#/components/schemas/pet"
			}
		}
	},
};

export default Tutor;
