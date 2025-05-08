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
// import LogoImg from "../utils/Images/Logo.png";


dotenv.config();

const sampleYogaData = [
  {
    title: "Downward Dog",
    goal: "flexibility",
    image: "https://example.com/downward-dog.jpg",
    video: "https://www.youtube.com/embed/0Fx8Z3V8L7g",
  },
  
    {
        title: "Sun Salutation",
        goal: "weight loss",
        // image: "https://www.artofliving.org/sites/www.artofliving.org/files/styles/original_image/public/wysiwyg_imageupload/SaluteToSun-Yoga.jp
        image: "https://thumbs.dreamstime.com/b/big-smile-emoticon-26256350.jpg",
        video: "https://www.youtube.com/embed/OQ6NfFIr2jw"

      },
  {
    title: "Child's Pose",
    goal: "stress relief",
    image: "https://example.com/child-pose.jpg",
    video: "https://www.youtube.com/embed/QaV7G9j8xNM",
  },
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
