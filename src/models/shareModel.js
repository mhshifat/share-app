import mongoose from "mongoose";

const shareSchema = new mongoose.Schema(
  {
    to: {
      type: String,
      required: [true, "Reciever email is required!"],
      trim: true
    },
    from: {
      type: String,
      required: [true, "Sender email is required!"],
      trim: true
    },
    message: {
      type: String,
      trim: true
    },
    files: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "File"
      }
    ]
  },
  {
    timestamps: true
  }
);

export default mongoose.model("Share", shareSchema);
