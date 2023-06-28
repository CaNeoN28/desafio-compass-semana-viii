import mongoose from "mongoose";

const TutorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  password: {
    type: String,
    select: false,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  email: {
    type:String,
    unique: true,
    trim: true
  },
  date_of_birth: {
    type:Date,
    required: true
  },
  zip_code: {
    type: String,
    required: true
  },
  pets: {
    type: [mongoose.Types.ObjectId],
    ref: 'pet',
    default: []
  }
});

export default mongoose.model('tutor', TutorSchema)
