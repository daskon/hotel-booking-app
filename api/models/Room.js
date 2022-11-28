import mongoose from 'mongoose';
const { Schema } = mongoose;

const roomSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  max_people: {
    type: Number,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  room_numbers: [{
    number: Number,
    unavailable_on: {type: [Date]},
  }],
},
{timestamps: true}
);

export default mongoose.model("Rooms", roomSchema);