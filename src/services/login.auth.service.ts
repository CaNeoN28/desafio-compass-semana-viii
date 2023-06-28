import UnauthorizedError from "../errors/UnauthorizedError";
import AuthRepository from "../repositories/auth.repository";
import { password_match } from "../types/Matches";
import bcrypt from "bcrypt";

class AuthLoginService {
  static handle = async function ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) {
    if (!email || !password)
      throw new UnauthorizedError("Please provide an email and a password");

    if (!password.match(password_match))
      throw new UnauthorizedError("Please provide a valid password");

    const user = await AuthRepository.getUser(email);
    let isPasswordCorrect = false;

    if (user) {
      isPasswordCorrect = await bcrypt.compare(password, user.password);
    }

    if (!isPasswordCorrect)
      throw new UnauthorizedError("Invalid credentials, please try again!");
  };
}

export default AuthLoginService;
