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
    else {
      const email = data.email

      if(!email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/))
        validationErrors.push("Please provide a valid email")

      validatedData.email = email
    }

    if (!data.name) validationErrors.push("Name is required");
    else{
      const name = data.name

      if(name.length < 3)
        validationErrors.push("Please provide a name with at least 3 characters")

      validatedData.name = name
    }

    if (!data.password) validationErrors.push("Password is required");
    else{
      const password = data.password

      if(!password.match(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[A-Za-z\d]{8,}$/))
        validationErrors.push("The password should contain at least 8 characters, a number, an uppercase letter and a lowercase letter")

      validatedData.password = password
    }
    if (!data.phone) validationErrors.push("Phone is required");
    if (!data.zip_code) validationErrors.push("Zip code is required");

    if (validationErrors.length > 0) {
      const message = validationErrors.join("; ");
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
