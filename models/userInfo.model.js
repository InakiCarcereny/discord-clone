import mongoose from "mongoose";

const userInfoSchema = new mongoose.Schema(
  {
    nickname: {
      type: String,
      requiered: false,
    },
    avatar: {
      // data: Buffer,
      // contentType: String,
      type: String,
      requiered: false,
    },
    banner: {
      // data: Buffer,
      // contentType: String,
      type: String,
      requiered: false,
    },
    description: {
      type: String,
      requiered: false,
    },
    state: {
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
