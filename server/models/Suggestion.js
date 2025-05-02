import mongoose from "mongoose";

const suggestionSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    goal: {
      type: String,
      enum: ["fat loss", "muscle gain", "endurance", "general"],
      default: "general",
    },
    suggestions: {
      type: [String],
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Suggestion", suggestionSchema);
