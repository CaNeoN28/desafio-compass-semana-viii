import TutorModel from "../models/Tutor.model";

class AuthRepository {
  static getUser = async function (email: string) {
    const user = await TutorModel.findOne({email})

    return user
  };
}

export default AuthRepository