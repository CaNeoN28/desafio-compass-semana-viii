import ValidationError from "../errors/ValidationError";
import ITutor from "../types/ITutor";

class CreateUser {
  static handle = async function (data: ITutor) {
    const validationErrors = [];
    if (!data.date_of_birth) validationErrors.push("Date of birth is required");
    if (!data.email) validationErrors.push("Email is required")

    if (validationErrors.length > 0) {
      const message = validationErrors.join(", ");
      throw new ValidationError(message, data);
    }
  };
}

export default CreateUser;
