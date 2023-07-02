import mongoose from "mongoose";
import PetPost from "./PetPost";

const PetResponse = {
	type: "object",
	properties: {
		...PetPost.properties,
		_id: { type: "string", example: new mongoose.Types.ObjectId() },
	},
};

export default PetResponse;
