import mongoose from "mongoose";

const eventSchema = new mongoose.Schema(
  {
    ubication: {
      type: String,
      required: true,
    },
    theme: {
      type: String,
      required: true,
    },
    dateInit: {
      type: Date,
      required: true,
    },
    dateEnd: {
      type: Date,
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
      // data: Buffer,
      // contentType: String,
      type: String,
      required: false,
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
