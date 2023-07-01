import TutorModel from "../models/Tutor.model";

class TutorRepository {
  static create = async function (data: any) {
    const tutor = new TutorModel(data)

		const isFirstUser = !(await TutorModel.findOne())

		if(isFirstUser)
			tutor.role = 'admin'

    await tutor.save()

    const response = await TutorModel.findById(tutor.id).select({password: false})

    return response
  };
	static list = async function () {
		const tutors = await TutorModel.find()

		return tutors
	}
}

export default TutorRepository;
