import BaseTutor from "./BaseTutor";

const TutorResponse = {
	type: "object",
	properties: {
		_id: {
			type: "string",
		},
		...BaseTutor.properties,
	},
};

export default TutorResponse;
