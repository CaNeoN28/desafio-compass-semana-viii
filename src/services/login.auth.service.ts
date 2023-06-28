import UnauthorizedError from "../errors/UnauthorizedError";
import { password_match } from "../types/Matches";

class AuthLoginService {
  static handle = async function ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) {
    if (!email || !password)
      throw new UnauthorizedError("Please provide an email and a password", {
        email,
        password,
      });

    if (!password.match(password_match))
      throw new UnauthorizedError("Please provide a valid password", {
        email,
        password,
      });
  };
}

export default AuthLoginService;
