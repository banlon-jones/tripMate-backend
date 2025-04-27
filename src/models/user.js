import mongoose from "mongoose";

const user = new mongoose.Schema({
  uid:{
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  photoUrl: {
    type: String,
  },
  roles: {
    type: Array,
    enum: ["user", "admin"],
    default: ["user"],
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  updated_at: {
    type: Date,
    default: Date.now,
  },
})

export default mongoose.model("User", user);
