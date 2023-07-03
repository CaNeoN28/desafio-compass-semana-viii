import ValidationError from "../errors/ValidationError";
import IPet from "./IPet";

class Pet implements IPet {
	name: string;
	species: string;
	carry: string;
	weight: number;
	date_of_birth: String;

	constructor(data: IPet) {
		this.validate(data);

		this.name = data.name;
		this.species = data.species;
		this.carry = data.carry;
		this.weight = data.weight;
		this.date_of_birth = data.date_of_birth;
	}

	validate(data: IPet) {
		let { name, carry, date_of_birth, species, weight } = data;

		const validationErrors = [];

		if (!name) validationErrors.push("Pet name is required");
		else if (name.length < 3)
			validationErrors.push("Pet name should have at least 3 characters");

		if (!carry) validationErrors.push("Pet carry is required");

		if (!date_of_birth) validationErrors.push("Pet date of birth is required");
		else if (typeof date_of_birth === "string") {
			if (!Date.parse(date_of_birth))
				validationErrors.push("Please provide a valid date");
		}

		if (!species) validationErrors.push("Pet species is required");

		if (!weight) validationErrors.push("Pet weight is required");
		else if (isNaN(weight))
			validationErrors.push("Pet weight should be a valid number")
		else if (weight >= 0)
			validationErrors.push("Pet weight should be greater than 0");

		if (validationErrors.length > 0) {
			const message = validationErrors.join("; ");

			throw new ValidationError(message, data);
		}
	}
}

export default Pet;
