import mongoose from "mongoose";

const PetSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		trim: true,
	},
	species: {
		type: String,
		required: true,
		trim: true,
	},
	carry: {
		type: String,
		required: true,
		trim: true,
	},
	weight: {
		type: Number,
		required: true,
	},
	date_of_birth: {
		type: Date,
		required: true
	},
});

const PetModel = mongoose.model("pet", PetSchema)

export default PetModel