// import express from "express";
// import * as dotenv from "dotenv";
// import cors from "cors";
// import mongoose from "mongoose";
// import UserRoutes from "./routes/User.js";

// dotenv.config();

// const app = express();
// app.use(cors());
// app.use(express.json({ limit: "50mb" }));
// app.use(express.urlencoded({ extended: true })); // for form data

// app.use("/api/user/", UserRoutes);
// // error handler
// app.use((err, req, res, next) => {
//   const status = err.status || 500;
//   const message = err.message || "Something went wrong";
//   return res.status(status).json({
//     success: false,
//     status,
//     message,
//   });
// });

// app.get("/", async (req, res) => {
//   res.status(200).json({
//     message: "Hello developers from GFG",
//   });
// });


// const connectDB = () => {
//   mongoose.set("strictQuery", true);
//   mongoose
//     .connect(process.env.MONGODB_URL)
//     .then(() => console.log("Connected to Mongo DB"))
//     .catch((err) => {
//       console.error("failed to connect with mongo");
//       console.error(err);
//     });
// };

// const startServer = async () => {
//   try {
//     connectDB();
//     app.listen(8080, () => console.log("Server started on port 8080"));
//   } catch (error) {
//     console.log(error);
//   }
// };

// startServer();


import express from "express";
import  dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import UserRoutes from "./routes/User.js";
import { seedData} from "./seedYoga.js";  

dotenv.config();  // Load environment variables

const app = express();
// app.use(cors());
app.use(cors({
  origin: 'https://fitnesstest-4.onrender.com', // allow your frontend URL
  credentials: true, // if you're using cookies or HTTP auth
   methods:["GET","POST","PUT","DELETE"],
}));
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true }));

// Use user routes
// app.use("/api/user", UserRoutes);
app.use("/user", UserRoutes);


// Error handler middleware
app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Something went wrong";
  // console.error(err); // Log the error to the server console
  return res.status(status).json({
    success: false,
    status,
    message,
  });
});

app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello developers from GFG" });
});

const connectDB = () => {
  mongoose.set("strictQuery", true);
  mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => {console.log("Connected to Mongo DB")
      // seedData(); 
    })
    .catch((err) => {
      console.error("Failed to connect with Mongo:", err); // Log more details here
      seedData();  
    });
};

const startServer = async () => {
  try {
    connectDB();
    app.listen(8080, () => console.log("Server started on port 8080"));
  } catch (error) {
    console.error("Error starting the server:", error);
  }
};

startServer();

