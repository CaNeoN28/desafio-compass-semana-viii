import mongoose from "mongoose";
import BaseTutor from "./BaseTutor";

const TutorResponse = {
	type: "object",
	properties: {
		_id: {
			type: "string",
		},
		...BaseTutor.properties,
	},
	example: {
		...BaseTutor.example,
		_id: new mongoose.Types.ObjectId()
	}
};

export default TutorResponse;
