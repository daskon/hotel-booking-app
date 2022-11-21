import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema({
  user_name: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  is_admin: {
    type: Boolean,
    default: false,
  },
  status: {
    type: Number,
    default: 0,
  },
},
{timestamps: true}
);

export default mongoose.model("Users", userSchema);