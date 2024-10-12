import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      requiered: true,
      unique: true,
    },
    password: {
      type: String,
      requiered: true,
    },
    email: {
      type: String,
      requiered: true,
      unique: true,
    },
    name: {
      type: String,
      requiered: true,
    },
    day: {
      type: String,
      requiered: true,
    },
    month: {
      type: String,
      requiered: true,
    },
    year: {
      type: String,
      requiered: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("User", userSchema);
