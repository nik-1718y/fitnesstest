import mongoose from "mongoose";

const CalorieSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  food: { type: String, required: true },
  calories: { type: Number, required: true },
  date: { type: Date, default: Date.now },
});

export default mongoose.model("Calorie", CalorieSchema);



// const CalorieSchema = new mongoose.Schema({
//   user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
//   food: { type: String, required: true },
//   calories: { type: Number, required: true },
//   totalCalories: { type: Number, default: 0 }, // <-- new field
//   date: { type: Date, default: Date.now },
// });

