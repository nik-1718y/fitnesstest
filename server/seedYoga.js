// // seedYoga.js
// import mongoose from "mongoose";
// import dotenv from "dotenv";
// import Yoga from "./models/Yoga.js";

// dotenv.config();

// const sampleYogaData = [
//   {
//     title: "Downward Dog",
//     goal: "flexibility",
//     image: "https://example.com/downward-dog.jpg",
//     video: "https://www.youtube.com/embed/0Fx8Z3V8L7g",
//   },
//   {
//     title: "Sun Salutation",
//     goal: "weight loss",
//     image: "https://example.com/sun-salutation.jpg",
//     video: "https://www.youtube.com/embed/73sjpP7Y1BY",
//   },
//   {
//     title: "Child's Pose",
//     goal: "stress relief",
//     image: "https://example.com/child-pose.jpg",
//     video: "https://www.youtube.com/embed/QaV7G9j8xNM",
//   },
// ];

// const seedData = async () => {
//   try {
//     await mongoose.connect(process.env.MONGODB_URL);
//     await Yoga.deleteMany();
//     await Yoga.insertMany(sampleYogaData);
//     console.log("✅ Yoga data seeded successfully");
//     process.exit();
//   } catch (error) {
//     console.error("❌ Error seeding yoga data:", error);
//     process.exit(1);
//   }
// };

// seedData();


// seedYoga.js
import mongoose from "mongoose";
import dotenv from "dotenv";
import Yoga from "./models/Yoga.js";


dotenv.config();


const sampleYogaData = [

  {
    title: "Pull-Ups",
    goal: "arm strength",
    image: "https://www.wikihow.com/images/f/f0/Do-Pullups-Step-15.jpg",
    video: "https://www.youtube.com/embed/eGo4IYlbE5g",
  },
  {
    title: "Push-Ups",
    goal: "chest and arms",
    image: "https://images.pexels.com/photos/176782/pexels-photo-176782.jpeg?cs=srgb&dl=pexels-keiji-yoshiki-31563-176782.jpg&fm=jpg",
    video: "https://www.youtube.com/embed/IODxDxX7oi4",
  },
  {
    title: "Plank",
    goal: "core strength",
    image: "https://www.spotebi.com/wp-content/uploads/2014/10/plank-exercise-illustration.jpg",
    video: "https://www.youtube.com/embed/pSHjTRCQxIw",
  },
  {
    title: "Superman",
    goal: "back strength",
    image: "https://www.shutterstock.com/image-vector/fitness-workout-woman-doing-sports-260nw-1910436412.jpg",
    video: "https://www.youtube.com/embed/z6PJMT2y8GQ",
  },
  {
    title: "Skipping Rope",
    goal: "height increase",
    image: "https://www.stylecraze.com/wp-content/uploads/2014/07/Is-Rope-Jumping-Good-For-Health-Benefits-And-Precautions_1200px.jpg.webp",
    video: "https://www.youtube.com/embed/jZx1gZ8-G9g",
  },
  {
    title: "Wall Stretch",
    goal: "height increase",
    image: "https://www.spotebi.com/wp-content/uploads/2017/08/wall-shoulder-stretch-exercise-illustration-spotebi.jpg",
    video: "https://www.youtube.com/embed/N9xqvZLLsHM",
  },
  {
    title: "Burpees",
    goal: "full body fitness",
    image: "https://staging.fitathome.com/wp-content/uploads/2023/09/burpees-1024x622.jpg",
    video: "https://www.youtube.com/embed/TU8QYVW0gDU",
  },
  {
    title: "Dumbbell Curls",
    goal: "biceps",
    image: "https://www.shutterstock.com/image-vector/man-doing-standing-dumbbell-bicep-260nw-1850250391.jpg",
    video: "https://www.youtube.com/embed/in7PaeYlhrM",
  },

  {
    title: "Lunges",
    goal: "leg strength",
    image: "https://static.vecteezy.com/system/resources/thumbnails/005/580/040/small/woman-doing-front-and-back-lunges-exercise-flat-illustration-isolated-on-white-background-free-vector.jpg",
    video: "https://www.youtube.com/embed/QOVaHwm-Q6U",
  },
  {
    title: "Mountain Climbers",
    goal: "cardio and core",
    image: "https://thumbs.dreamstime.com/b/mountain-climbers-exercise-workout-mountain-climbers-exercise-workout-white-background-vector-illustration-142335339.jpg",
    video: "https://www.youtube.com/embed/cnyTQDSE884",
  },
  
  {
    title: "Deadlifts",
    goal: "back",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSP3ib_ic-R1Y0nZEG9UC-IDtmItvCJZoHaQ&s",
    video: "https://www.youtube.com/embed/op9kVnSso6Q",
  },
  {
    title: "Shoulder Press",
    goal: "shoulders and upper body",
    image: "https://www.shutterstock.com/image-vector/man-doing-overhead-dumbbell-shoulder-260nw-2031950852.jpg",
    video: "https://www.youtube.com/embed/B-aVuyhvLHU",
  },
 
  {
    title: "Bench Press",
    goal: "chest and triceps",
    image: "https://t3.ftcdn.net/jpg/03/88/21/62/360_F_388216207_WWVXeq5k4tnMYfCrVG5qf9IfBswmb7Rx.jpg",
    video: "https://www.youtube.com/embed/gRVjAtPip0Y",
  },
  {
    title: "Leg Raises",
    goal: "lower abs",
    image: "https://t4.ftcdn.net/jpg/02/55/19/97/240_F_255199775_NXJnDHez4FsttE7Gu6S2uahpqzTgRH9f.jpg",
    video: "https://www.youtube.com/embed/JB2oyawG9KI",
  }



];

export const seedData = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    await Yoga.deleteMany();
    await Yoga.insertMany(sampleYogaData);
    console.log("✅ Yoga data seeded successfully");
    process.exit();
  } catch (error) {
    console.error("❌ Error seeding yoga data:", error);
    process.exit(1);
  }
};
