import mongoose from "mongoose";

const userInfoSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      requiered: false,
    },
    nickname: {
      type: String,
      requiered: false,
    },
    avatar: {
      data: Buffer,
      contentType: String,
    },
    banner: {
      data: Buffer,
      contentType: String,
    },
    description: {
      type: String,
      requiered: false,
    },
    state: {
      type: String,
      requiered: false,
    },
    primaryColor: {
      type: String,
      requiered: false,
    },
    secondaryColor: {
      type: String,
      requiered: false,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      requiered: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("UserInfo", userInfoSchema);
