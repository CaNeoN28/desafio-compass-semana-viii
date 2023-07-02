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

	}
}

export default Pet