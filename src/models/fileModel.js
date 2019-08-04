import mongoose from "mongoose";

const fileSchema = new mongoose.Schema(
  {
    originalname: {
      type: String,
      required: true,
      trim: true
    },
    filename: {
      type: String,
      required: true,
      trim: true
    },
    mimetype: {
      type: String,
      required: true,
      trim: true
    },
    size: {
      type: Number,
      required: true,
      trim: true
    },
    share: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Share"
    }
  },
  {
    timestamps: true
  }
);

export default mongoose.model("File", fileSchema);
