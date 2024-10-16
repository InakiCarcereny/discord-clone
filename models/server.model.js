import mongoose from "mongoose";

const serverSchema = new mongoose.Schema(
  {
    tittle: {
      type: String,
      required: true,
    },
    logo: {
      data: Buffer,
      contentType: String,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Server", serverSchema);
