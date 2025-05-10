// import mongoose from "mongoose";

// const BmiSchema = new mongoose.Schema(
//   {
//     user: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "User",
//       required: true,
//     },
//     category: {
//       type: String,
//       required: true,
//     },
//     Height: {
//       type: Number,
//     },
//     weight: {
//       type: Number,
//     },
//     BMI: {
//       type: Number,
//     },
//     date: {
//       type: Date,
//       default: Date.now,
//     },
//   },
//   { timestamps: true }
// );

// export default mongoose.model("Workout", BmiSchema);
// import mongoose from "mongoose";

// const BMISchema = new mongoose.Schema(
//   {
//     user: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "User",
//       required: true,
//     },
//     height: Number,
//     weight: Number,
//     bmi: Number,
//   },
//   { timestamps: true }
// );

// export default mongoose.model("Bmi", BMISchema);


// models/Bmi.js
// import mongoose from "mongoose";

// const BmiSchema = new mongoose.Schema({
//   height: {
//     type: Number,
//     required: true,
//   },
//   weight: {
//     type: Number,
//     required: true,
//   },
//   bmi: {
//     type: Number,
//     required: true,
//   },
//   createdAt: {
//     type: Date,
//     default: Date.now,
//   },
// });
// export default mongoose.model("Bmi", BmiSchema);
// const Bmi = mongoose.models.Bmi || mongoose.model("Bmi", BmiSchema);
// export default Bmi;


import mongoose from "mongoose";

const bmiSchema = new mongoose.Schema({
  height: { type: Number, required: true },
  weight: { type: Number, required: true },
  bmi: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Bmi = mongoose.models.Bmi || mongoose.model("Bmi", bmiSchema);
export default Bmi;


