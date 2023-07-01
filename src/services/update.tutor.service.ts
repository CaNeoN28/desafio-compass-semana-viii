import ValidationError from "../errors/ValidationError";
import TutorRepository from "../repositories/tutor.repository";
import ITutor from "../types/ITutor";
import { password_match } from "../types/Matches";

class UpdateTutor {
	static update = async function (data: ITutor) {
		const validatedData: any = {};
		const validationErrors = [];

		if (!data.date_of_birth) validationErrors.push("Date of birth is required");
		else {
			validatedData.date_of_birth = new Date(data.date_of_birth);
			if (!Date.parse(validatedData.date_of_birth))
				validationErrors.push("Please provide a valid date");
		}

		if (!data.email) validationErrors.push("Email is required");
		else {
			const email = data.email;

			if (!email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/))
				validationErrors.push("Please provide a valid email");

			validatedData.email = email;
		}

		if (!data.name) validationErrors.push("Name is required");
		else {
			const name = data.name;

			if (name.length < 3)
				validationErrors.push(
					"Please provide a name with at least 3 characters"
				);

			validatedData.name = name;
		}

		if (!data.password) validationErrors.push("Password is required");
		else {
			const password = data.password;

			if (!password.match(password_match))
				validationErrors.push(
					"The password should contain at least 8 characters, a number, an uppercase letter and a lowercase letter"
				);

			validatedData.password = password;
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

			validatedData.phone = phone;
		}

		if (!data.zip_code) validationErrors.push("Zip code is required");
		else {
			const zip_code = data.zip_code;

			if (!zip_code.match(/^[0-9]{5,9}$/))
				validationErrors.push("Please provide a valid zipcode");

			validatedData.zip_code = zip_code;
		}

		if (validationErrors.length > 0) {
			const message = validationErrors.join("; ");
			throw new ValidationError(message, data);
		}

		validatedData._id = data._id

		const tutor = TutorRepository.update(validatedData);

		return tutor;
	};
}

export default UpdateTutor