import ValidationError from "../errors/ValidationError";
import ITutor from "../types/ITutor";

class CreateUser {
  static handle = async function (data: ITutor) {
    const validationErrors = [];
    if (!data.date_of_birth) validationErrors.push("Date of birth is required");
    if (!data.email) validationErrors.push("Email is required");
    if (!data.name) validationErrors.push("Name is required");
    if (!data.password) validationErrors.push("Password is required");
    if (!data.phone) validationErrors.push("Phone is required");
    if (!data.zip_code) validationErrors.push("Zip code is required");

    if (validationErrors.length > 0) {
      const message = validationErrors.join(", ");
      throw new ValidationError(message, data);
    }
  };
}

export default CreateUser;
