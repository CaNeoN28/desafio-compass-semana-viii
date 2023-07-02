const PetPost = {
	type: "object",
	properties: {
		name: { type: "string", example: "Lilo" },
		species: {type : "string", example: "dog"},
		carry: {type: "string", example: "p"},
		weight: {type: "number", example: 20},
		date_of_birth: {type: "string", example: "2020/01/01"}
	},
};

export default PetPost