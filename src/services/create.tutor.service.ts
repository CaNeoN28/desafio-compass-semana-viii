import UniqueFieldError from "../errors/UniqueFieldError";
import ValidationError from "../errors/ValidationError";
import TutorModel from "../models/Tutor.model";
import ITutor from "../types/ITutor";

class CreateUser {
  static handle = async function (data: ITutor) {
    const validatedData: any = {};
    const validationErrors = [];

    if (!data.date_of_birth) validationErrors.push("Date of birth is required");
    else {
      validatedData.date_of_birth = new Date(data.date_of_birth);
      if (!Date.parse(validatedData.date_of_birth))
        validationErrors.push("Please provide a valid date");
    }

    if (!data.email) validationErrors.push("Email is required");
    if (!data.name) validationErrors.push("Name is required");
    if (!data.password) validationErrors.push("Password is required");
    if (!data.phone) validationErrors.push("Phone is required");
    if (!data.zip_code) validationErrors.push("Zip code is required");

    if (validationErrors.length > 0) {
      const message = validationErrors.join(", ");
      throw new ValidationError(message, data);
    }

    const userAlreadyExists = await TutorModel.findOne({ email: data.email });

    if (userAlreadyExists) {
      const message = "Email already in use";
      throw new UniqueFieldError(message, data);
    }

    return validatedData;
  };
}

export default CreateUser;
