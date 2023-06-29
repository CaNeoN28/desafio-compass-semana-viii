import TutorModel from "../models/Tutor.model";

class UserRepository {
  static create = async function (data: any) {
    const tutor = new TutorModel(data)

    await tutor.save()

    const response = await TutorModel.findById(tutor.id).select({password: false})

    return response
  };
}

export default UserRepository;
