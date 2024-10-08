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
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("User", userSchema);
