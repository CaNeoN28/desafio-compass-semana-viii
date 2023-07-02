import ValidationError from "../errors/ValidationError";
import IPet from "./IPet";

class Pet implements IPet {
	name: string;
	species: string;
	carry: string;
	weight: number;
	date_of_birth: String | Date;

	constructor(data : IPet) {
		this.validate(data)

		this.name = data.name
		this.species = data.species
		this.carry = data.carry
		this.weight = data.weight

		if (typeof data.date_of_birth === 'string')
			this.date_of_birth = new Date(data.date_of_birth)

		else 
			this.date_of_birth = data.date_of_birth
	}

	validate(data: IPet){
		const {name, carry, date_of_birth, species, weight} = data

		const validationErrors = []

		if(!name)
			validationErrors.push("Pet name is required")

		if(!carry)
			validationErrors.push("Pet carry is required")

		if(!date_of_birth)
			validationErrors.push("Pet date of birth is required")

		if(!species)
			validationErrors.push("Pet species is required")

		if(!weight)
			validationErrors.push("Pet weight is required")

		if (validationErrors.length > 0 ){
			const message = validationErrors.join("; ")

			throw new ValidationError(message, data)
		}
	}
}

export default Pet