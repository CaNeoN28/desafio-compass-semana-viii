import TutorRepository from "../repositories/tutor.repository"

class ListTutors {
	static list = async function () {
		const response = await TutorRepository.list()

		return response;
	}
}

export default ListTutors