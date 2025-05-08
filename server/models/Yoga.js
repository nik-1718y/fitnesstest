// models/Yoga.js
import mongoose from "mongoose";

const yogaSchema = new mongoose.Schema({
  title: { type: String, required: true },
  goal: { type: String, required: true },
  image: { type: String, required: true },
  video: { type: String, required: true },
});

export default mongoose.model("Yoga", yogaSchema);
