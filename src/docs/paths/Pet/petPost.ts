import { Operation } from "swagger-jsdoc";

const petPost: Operation = {
	tags: ["Pets"],
	parameters: [{
		name: "tutorId",
		description: "Id of the tutor to insert the pet",
		in: "path",
		required: true
	}],
	responses: {
		201: {

		}
	}
};

export default petPost