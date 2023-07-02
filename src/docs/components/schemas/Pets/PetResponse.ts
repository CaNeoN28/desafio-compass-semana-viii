import mongoose from "mongoose";
import PetPost from "./PetPost";

const PetResponse = {
	type: "object",
	properties: {
		...PetPost.properties,
		_id: { type: "string", required: true },
	},
	example: {
		...PetPost.example,
		_id: new mongoose.Types.ObjectId()
	}
};

export default PetResponse;
