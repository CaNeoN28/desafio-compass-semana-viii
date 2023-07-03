import { Types } from "mongoose";
import ITutor from "./ITutor";
import { password_match } from "./Matches";
import ValidationError from "../errors/ValidationError";

class Tutor implements ITutor {
	name: string;
	password?: string;
	phone: string;
	email: string;
	date_of_birth: string;
	zip_code: string;
	pets: { prototype: Types.ObjectId }[];

	constructor(data: ITutor) {
		this.validate(data);

		this.name = data.name;

		if (data.password) this.password = data.password;
		
		this.phone = data.phone;
		(this.email = data.email), (this.date_of_birth = data.date_of_birth);
		this.zip_code = data.zip_code;
		this.pets = data.pets;
	}

	validate(data: ITutor) {
		const validationErrors = [];

		if (!data.date_of_birth) validationErrors.push("Date of birth is required");
		else {
			if (!Date.parse(data.date_of_birth))
				validationErrors.push("Please provide a valid date");
		}

		if (!data.email) validationErrors.push("Email is required");
		else {
			const email = data.email;

			if (!email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/))
				validationErrors.push("Please provide a valid email");
		}

		if (!data.name) validationErrors.push("Name is required");
		else {
			const name = data.name;

			if (name.length < 3)
				validationErrors.push(
					"Please provide a name with at least 3 characters"
				);
		}

		if(data.password) {
			const password = data.password;

			if (!password.match(password_match))
				validationErrors.push(
					"The password should contain at least 8 characters, a number, an uppercase letter and a lowercase letter"
				);
		}

		if (!data.phone) validationErrors.push("Phone is required");
		else {
			const phone = data.phone;

			if (
				!phone.match(
					/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/
				)
			)
				validationErrors.push("Please provide a valid phone number");
		}

		if (!data.zip_code) validationErrors.push("Zip code is required");
		else {
			const zip_code = data.zip_code;

			if (!zip_code.match(/^[0-9]{5,9}$/))
				validationErrors.push("Please provide a valid zipcode");
		}

		if (validationErrors.length > 0) {
			const message = validationErrors.join("; ");
			throw new ValidationError(message, data);
		}
	}
}

export default Tutor