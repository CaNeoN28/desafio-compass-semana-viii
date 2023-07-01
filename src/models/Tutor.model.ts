import mongoose from "mongoose";
import bcrypt from "bcrypt";

const TutorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
  date_of_birth: {
    type: Date,
    required: true,
  },
  zip_code: {
    type: String,
    required: true,
  },
	role: {
		type: String,
		enum: ['user', 'admin'],
		default: 'user'
	},
  pets: {
    type: [mongoose.Types.ObjectId],
    ref: "pet",
    default: [],
  },
});

TutorSchema.pre("save", async function () {
  if (!this.isModified("password")) return;

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

const TutorModel = mongoose.model("tutor", TutorSchema);
export default TutorModel;
