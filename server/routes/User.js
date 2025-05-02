import express from "express";
import { addBmi, addWorkout, getUserDashboard, getWorkoutsByDate, UserLogin, UserRegister,getWorkoutSuggestions } from "../contollers/User.js";
import { verifyToken } from "../middleware/verifyToken.js";
// import {
// //   UserLogin,
//   UserRegister,
// //   addWorkout,
// //   getUserDashboard,
// //   getWorkoutsByDate,
// } from "../controllers/User.js";
// import { verifyToken } from "../middleware/verifyToken.js";

const router = express.Router();

router.post("/signup", UserRegister);
router.post("/signin", UserLogin);

router.get("/dashboard",verifyToken,getUserDashboard);
router.get("/workout", verifyToken, getWorkoutsByDate);
router.post("/workout", verifyToken, addWorkout);
router.post("/contact", verifyToken, addBmi);
router.get("/workoutsuggestions", verifyToken, getWorkoutSuggestions);

export default router;