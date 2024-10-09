import mongoose from "mongoose";

const serverSchema = new mongoose.Schema(
  {
    tittle: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: false,
    },
    logo: {
      // data: Buffer,
      // contentType: String,
      type: String,
      required: false,
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
