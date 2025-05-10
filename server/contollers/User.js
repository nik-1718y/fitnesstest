<<<<<<< HEAD
// import bcrypt from "bcrypt";
=======
>>>>>>> b5be03e6d64412f8cbb6730f11a52c5740cd1747
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { createError } from "../error.js";
import User from "../models/User.js";
import Workout from "../models/Workout.js";
import Bmi from "../models/Bmi.js";
import Suggestion from "../models/Suggestion.js";

dotenv.config();

export const UserRegister = async (req, res, next) => {
  try {
    const { email, password, name, img } = req.body;

    // Check if the email is in use
    const existingUser = await User.findOne({ email }).exec();
    if (existingUser) {
      return next(createError(409, "Email is already in use."));
    }
    // console.log(hi);
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);

    const user = new User({
      name,
      email,
      password: hashedPassword,
      img,
    });
    const createdUser = await user.save();
    const token = jwt.sign({ id: createdUser._id }, process.env.JWT, {
      expiresIn: "9999 years",
    });
    return res.status(200).json({ token, user });
  } catch (error) {
    return next(error);
  }
};



export const UserLogin = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email: email });
    // Check if user exists
    if (!user) {
      return next(createError(404, "User not found"));
    }
    console.log(user);
    // Check if password is correct
    const isPasswordCorrect = await bcrypt.compareSync(password, user.password);
    if (!isPasswordCorrect) {
      return next(createError(403, "Incorrect password"));
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT, {
      expiresIn: "9999 years",
    });

    return res.status(200).json({ token, user });
  } catch (error) {
    return next(error);
  }
};

export const getUserDashboard = async (req, res, next) => {
  try {
    const userId = req.user?.id;
    const user = await User.findById(userId);
    if (!user) {
      return next(createError(404, "User not found"));
    }

    const currentDateFormatted = new Date();
    const startToday = new Date(
      currentDateFormatted.getFullYear(),
      currentDateFormatted.getMonth(),
      currentDateFormatted.getDate()
    );
    const endToday = new Date(
      currentDateFormatted.getFullYear(),
      currentDateFormatted.getMonth(),
      currentDateFormatted.getDate() + 1
    );

    //calculte total calories burnt
    const totalCaloriesBurnt = await Workout.aggregate([
      { $match: { user: user._id, date: { $gte: startToday, $lt: endToday } } },
      {
        $group: {
          _id: null,
          totalCaloriesBurnt: { $sum: "$caloriesBurned" },
        },
      },
    ]);

    //Calculate total no of workouts
    const totalWorkouts = await Workout.countDocuments({
      user: userId,
      date: { $gte: startToday, $lt: endToday },
    });

    //Calculate average calories burnt per workout
    const avgCaloriesBurntPerWorkout =
      totalCaloriesBurnt.length > 0
        ? totalCaloriesBurnt[0].totalCaloriesBurnt / totalWorkouts
        : 0;

    // Fetch category of workouts
    const categoryCalories = await Workout.aggregate([
      { $match: { user: user._id, date: { $gte: startToday, $lt: endToday } } },
      {
        $group: {
          _id: "$category",
          totalCaloriesBurnt: { $sum: "$caloriesBurned" },
        },
      },
    ]);

    //Format category data for pie chart

    const pieChartData = categoryCalories.map((category, index) => ({
      id: index,
      value: category.totalCaloriesBurnt,
      label: category._id,
    }));

    const weeks = [];
    const caloriesBurnt = [];
    for (let i = 6; i >= 0; i--) {
      const date = new Date(
        currentDateFormatted.getTime() - i * 24 * 60 * 60 * 1000
      );
      weeks.push(`${date.getDate()}th`);

      const startOfDay = new Date(
        date.getFullYear(),
        date.getMonth(),
        date.getDate()
      );
      const endOfDay = new Date(
        date.getFullYear(),
        date.getMonth(),
        date.getDate() + 1
      );

      const weekData = await Workout.aggregate([
        {
          $match: {
            user: user._id,
            date: { $gte: startOfDay, $lt: endOfDay },
          },
        },
        {
          $group: {
            _id: { $dateToString: { format: "%Y-%m-%d", date: "$date" } },
            totalCaloriesBurnt: { $sum: "$caloriesBurned" },
          },
        },
        {
          $sort: { _id: 1 }, // Sort by date in ascending order
        },
      ]);

      caloriesBurnt.push(
        weekData[0]?.totalCaloriesBurnt ? weekData[0]?.totalCaloriesBurnt : 0
      );
    }

    return res.status(200).json({
      totalCaloriesBurnt:
        totalCaloriesBurnt.length > 0
          ? totalCaloriesBurnt[0].totalCaloriesBurnt
          : 0,
      totalWorkouts: totalWorkouts,
      avgCaloriesBurntPerWorkout: avgCaloriesBurntPerWorkout,
      totalWeeksCaloriesBurnt: {
        weeks: weeks,
        caloriesBurned: caloriesBurnt,
      },
      pieChartData: pieChartData,
    });
  } catch (err) {
    next(err);
  }
};

export const getWorkoutsByDate = async (req, res, next) => {
  try {
    const userId = req.user?.id;
    const user = await User.findById(userId);
    let date = req.query.date ? new Date(req.query.date) : new Date();
    if (!user) {
      return next(createError(404, "User not found"));
    }
    const startOfDay = new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate()
    );
    const endOfDay = new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate() + 1
    );

    const todaysWorkouts = await Workout.find({
      userId: userId,
      date: { $gte: startOfDay, $lt: endOfDay },
    });
    const totalCaloriesBurnt = todaysWorkouts.reduce(
      (total, workout) => total + workout.caloriesBurned,
      0
    );

    return res.status(200).json({ todaysWorkouts, totalCaloriesBurnt });
  } catch (err) {
    next(err);
  }
};

export const addWorkout = async (req, res, next) => {
  try {
    const userId = req.user?.id;
    const { workoutString } = req.body;
    if (!workoutString) {
      return next(createError(400, "Workout string is missing"));
    }
    // Split workoutString into lines
    const eachworkout = workoutString.split(";").map((line) => line.trim());
    // Check if any workouts start with "#" to indicate categories
    const categories = eachworkout.filter((line) => line.startsWith("#"));
    if (categories.length === 0) {
      return next(createError(400, "No categories found in workout string"));
    }

    const parsedWorkouts = [];
    let currentCategory = "";
    let count = 0;

    // Loop through each line to parse workout details
    await eachworkout.forEach((line) => {
      count++;
      if (line.startsWith("#")) {
        const parts = line?.split("\n").map((part) => part.trim());
        console.log(parts);
        if (parts.length < 5) {
          return next(
            createError(400, `Workout string is missing for ${count}th workout`)
          );
        }

        // Update current category
        currentCategory = parts[0].substring(1).trim();
        // Extract workout details
        const workoutDetails = parseWorkoutLine(parts);
        if (workoutDetails == null) {
          return next(createError(400, "Please enter in proper format "));
        }

        if (workoutDetails) {
          // Add category to workout details
          workoutDetails.category = currentCategory;
          parsedWorkouts.push(workoutDetails);
        }
      } else {
        return next(
          createError(400, `Workout string is missing for ${count}th workout`)
        );
      }
    });

    // Calculate calories burnt for each workout
    await parsedWorkouts.forEach(async (workout) => {
      workout.caloriesBurned = parseFloat(calculateCaloriesBurnt(workout));
      await Workout.create({ ...workout, user: userId });
    });

    return res.status(201).json({
      message: "Workouts added successfully",
      workouts: parsedWorkouts,
    });
  } catch (err) {
    next(err);
  }
};

// Function to parse workout details from a line
const parseWorkoutLine = (parts) => {
  const details = {};
  console.log(parts);
  if (parts.length >= 5) {
    details.workoutName = parts[1].substring(1).trim();
    details.sets = parseInt(parts[2].split("sets")[0].substring(1).trim());
    details.reps = parseInt(
      parts[2].split("sets")[1].split("reps")[0].substring(1).trim()
    );
    details.weight = parseFloat(parts[3].split("kg")[0].substring(1).trim());
    details.duration = parseFloat(parts[4].split("min")[0].substring(1).trim());
    console.log(details);
    return details;
  }
  return null;
};

// Function to calculate calories burnt for a workout
const calculateCaloriesBurnt = (workoutDetails) => {
  const durationInMinutes = parseInt(workoutDetails.duration);
  const weightInKg = parseInt(workoutDetails.weight);
  const caloriesBurntPerMinute = 5; // Sample value, actual calculation may vary
  return durationInMinutes * caloriesBurntPerMinute * weightInKg;
};




export const addBmi = async (req, res) => {
  try {
    const { height, weight, bmi } = req.body;
    const userId = req.user?.id;  // ✅ comes from verifyToken

    if (!height || !weight || !bmi) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newBmi = await Bmi.create({ userId, height, weight, bmi });
    res.status(201).json({ message: "BMI stored successfully", data: newBmi });
  } catch (error) {
    console.error("Error saving BMI:", error.message);
    res.status(500).json({ message: "Server Error" });
  }
};





// export const getWorkoutSuggestions = async (req, res, next) => {
//   try {
//     const userId = req.user?.id;
//     const user = await User.findById(userId);
//     if (!user) return next(createError(404, "User not found"));

//     const pastWorkouts = await Workout.find({ user: userId }).sort({ date: -1 }).limit(10);

//     const suggestions = [];

//     if (user.goal === "fat loss") {
//       suggestions.push(
//         "30 min HIIT session",
//         "Jump rope 15 min",
//         "Cycling 45 min",
//         "Bodyweight circuit: squats, push-ups, lunges"
//       );
//     } else if (user.goal === "muscle gain") {
//       suggestions.push(
//         "Push Day: Bench press, Shoulder press, Tricep dips",
//         "Pull Day: Deadlift, Pull-ups, Rows",
//         "Leg Day: Squats, Leg press, Lunges"
//       );
//     } else if (user.goal === "endurance") {
//       suggestions.push(
//         "Jogging 45 min",
//         "Swimming 30 min",
//         "Stair climbing 20 min"
//       );
//     } else {
//       suggestions.push("Full-body light workout", "Walk 10,000 steps");
//     }

//     if (user.injuries.includes("knee")) {
//       suggestions.push("Avoid: Squats, running. Try seated workouts.");
//     }

//     // Save suggestion to DB
//     const newSuggestion = new Suggestion({
//       user: user._id,
//       goal: user.goal,
//       suggestions,
//     });
//     await newSuggestion.save();

//     return res.status(200).json({
//       goal: user.goal,
//       suggestions,
//       basedOn: pastWorkouts.length ? "history + goal" : "goal",
//       saved: true,
//     });
//   } catch (err) {
//     next(err);
//   }
// };
 





export const getWorkoutSuggestions = async (req, res, next) => {
  try {
    const userId = req.user?.id; // Extract userId from token or request

    if (!userId) {
      return next(createError(401, "Unauthorized: No user ID found"));
    }

    // Find the user by ID
    const user = await User.findById(userId);
    if (!user) {
      return next(createError(404, "User not found"));
    }

    // Fetch past workouts for the user
    const pastWorkouts = await Workout.find({ user: userId }).sort({ date: -1 }).limit(10);

    const suggestions = [];

    // Determine workout suggestions based on user's goal
    if (user.goal === "fat loss") {
      suggestions.push(
        "30 min HIIT session",
        "Jump rope 15 min",
        "Cycling 45 min",
        "Bodyweight circuit: squats, push-ups, lunges"
      );
    } else if (user.goal === "muscle gain") {
      suggestions.push(
        "Push Day: Bench press, Shoulder press, Tricep dips",
        "Pull Day: Deadlift, Pull-ups, Rows",
        "Leg Day: Squats, Leg press, Lunges"
      );
    } else if (user.goal === "endurance") {
      suggestions.push(
        "Jogging 45 min",
        "Swimming 30 min",
        "Stair climbing 20 min"
      );
    } else {
      suggestions.push("Full-body light workout", "Walk 10,000 steps");
    }

    // Check if user.injuries is an array and includes "knee"
    if (user.injuries && Array.isArray(user.injuries) && user.injuries.includes("knee")) {
      suggestions.push("Avoid: Squats, running. Try seated workouts.");
    }

    // Save suggestion to the database
    const newSuggestion = new Suggestion({
      user: user._id,
      goal: user.goal,
      suggestions,
    });

    await newSuggestion.save();

    return res.status(200).json({
      goal: user.goal,
      suggestions,
      basedOn: pastWorkouts.length ? "history + goal" : "goal",
      saved: true,
    });
  } catch (err) {
    console.error("Error in getWorkoutSuggestions:", err.message);  // Log the error for debugging
    return next(createError(500, "Internal Server Error"));
  }
};


// import Calorie from "../models/Calorie.js";

// export const addCalorie = async (req, res, next) => {
//   try {
//     const newEntry = new Calorie({ ...req.body, user: req.user.id });
//     await newEntry.save();
//     res.status(201).json(newEntry);
//   } catch (err) {
//     next(err);
//   }
// };

// export const getCalories = async (req, res, next) => {
//   try {
//     const entries = await Calorie.find({ user: req.user.id }).sort({ date: -1 });
//     res.status(200).json(entries);
//   } catch (err) {
//     next(err);
//   }
// };




import Calorie from "../models/Calorie.js";

// export const addCalorie = async (req, res, next) => {
//   try {
//     const newEntry = new Calorie({ ...req.body, user: req.user.id });
//     await newEntry.save();
//     res.status(201).json(newEntry);
//   } catch (err) {
//     next(err);
//   }
// };

// export const addCalorie = async (req, res, next) => {
//   try {
//     // Ensure the userId exists
//     const userId = req.user?.id;
//     if (!userId) {
//       return res.status(400).json({ message: "User not authenticated" });
//     }

//     const { food, calories } = req.body;

//     // Validate input fields
//     if (!food || !calories) {
//       return res.status(400).json({ message: "Food and calories are required" });
//     }

//     // Ensure calories is a valid number
//     const calorieValue = Number(calories);
//     if (isNaN(calorieValue)) {
//       return res.status(400).json({ message: "Calories must be a number" });
//     }

//     const today = new Date();
//     today.setHours(0, 0, 0, 0);
//     const tomorrow = new Date(today);
//     tomorrow.setDate(today.getDate() + 1);

//     // Find today's total so far
//     const todayEntries = await Calorie.find({
//       user: userId,
//       date: { $gte: today, $lt: tomorrow },
//     });

//     const existingTotal = todayEntries.reduce((sum, entry) => sum + entry.calories, 0);
//     const newTotal = existingTotal + calorieValue;

//     const newEntry = new Calorie({
//       user: userId,
//       food,
//       calories: calorieValue,
//       totalCalories: newTotal,
//     });

//     await newEntry.save();
//     res.status(201).json({ message: "Calorie added successfully", newEntry });
//   } catch (err) {
//     // Return error response with status and message
//     next(err);
//   }
// };

// import Calorie from "../models/Calorie.js";

export const addCalorie = async (req, res, next) => {
  try {
    const newEntry = new Calorie({ ...req.body, user: req.user.id });
    await newEntry.save();
    res.status(201).json(newEntry);
  } catch (err) {
    next(err);
  }
};

export const getCalories = async (req, res, next) => {
  try {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);

    const entries = await Calorie.find({
      user: req.user.id,
      date: { $gte: today, $lt: tomorrow },
    }).sort({ date: -1 });

    const totalCalories = entries.reduce((sum, item) => sum + item.calories, 0);

    res.status(200).json({ entries, totalCalories });
  } catch (err) {
    next(err);
  }
};




// export const getCalories = async (req, res, next) => {
//   try {
//     const today = new Date();
//     today.setHours(0, 0, 0, 0);
//     const tomorrow = new Date(today);
//     tomorrow.setDate(today.getDate() + 1);

//     const entries = await Calorie.find({
//       user: req.user.id,
//       date: { $gte: today, $lt: tomorrow },
//     }).sort({ date: -1 });

//     const totalCalories = entries.reduce((sum, item) => sum + item.calories, 0);

//     res.status(200).json({ entries, totalCalories });
//   } catch (err) {
//     next(err);
//   }
// };


// controllers/yogaController.js
import Yoga from "../models/Yoga.js";

export const getYogaByGoal = async (req, res) => {
  try {
    const { goal } = req.query;
    const suggestions = await Yoga.find({ goal: { $regex: new RegExp(goal, "i") } });
    res.json(suggestions);
  } catch (err) {
    res.status(500).json({ message: "Server error fetching yoga suggestions." });
  }
};


