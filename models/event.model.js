import mongoose from "mongoose";

const eventSchema = new mongoose.Schema(
  {
    theme: {
      type: String,
      required: true,
    },
    dateInit: {
      type: String,
      required: true,
    },
    dateEnd: {
      type: String,
      required: true,
    },
    timeInit: {
      type: String,
      required: true,
    },
    timeEnd: {
      type: String,
      required: true,
    },
    frequency: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    logo: {
      data: Buffer,
      contentType: String,
    },
    server: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Server",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Event", eventSchema);
