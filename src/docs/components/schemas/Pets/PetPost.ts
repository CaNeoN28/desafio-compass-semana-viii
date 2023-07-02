const PetPost = {
	type: "object",
	properties: {
		name: { type: "string", required: true },
		species: { type: "string", required: true },
		carry: { type: "string", required: true },
		weight: { type: "number", required: true },
		date_of_birth: { type: "string", required: true },
	},
	example: {
		name: "Lilo",
		species: "dog",
		carry: "p",
		weight: 20,
		date_of_birth: "2020/01/01",
	},
};

export default PetPost;
