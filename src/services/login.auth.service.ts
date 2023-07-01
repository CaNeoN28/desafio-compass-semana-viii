import UnauthenticatedError from "../errors/UnauthenticatedError";
import AuthRepository from "../repositories/auth.repository";
import { password_match } from "../types/Matches";
import bcrypt from "bcrypt";
import jws from "jsonwebtoken";
import JwtUtils from "../utils/jwt";

class AuthLoginService {
  static handle = async function ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) {
    if (!email || !password)
      throw new UnauthenticatedError("Please provide an email and a password");

    if (!password.match(password_match))
      throw new UnauthenticatedError("Please provide a valid password");

    const user = await AuthRepository.getUser(email);

    let isPasswordCorrect = false;

    if (!user)
      throw new UnauthenticatedError("Invalid credentials, please try again!");

    isPasswordCorrect = await bcrypt.compare(password, user!.password);

    if (!isPasswordCorrect)
      throw new UnauthenticatedError("Invalid credentials, please try again!");

    let token = JwtUtils.generateToken({
      id: user.id,
      email: user.email,
      name: user.name,
			role: user.role
    });

    return token;
  };
}

export default AuthLoginService;
