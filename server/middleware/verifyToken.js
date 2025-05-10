import jwt from "jsonwebtoken";
import { createError } from "../error.js";

export const verifyToken = async (req, res, next) => {
  try {
    if (!req.headers.authorization) {
      return next(createError(401, "You are not authenticated!"));
    }
    // const token = jwt.sign({username:user.username, role:{name:_role.name, sections:sections_fetched}}, 'secret', {expiresIn : '24h'}, process.env.JWT);
     const token = req.headers.authorization.split(" ")[1];

    if (!token) return next(createError(401, "You are not authenticated"));

    const decode = jwt.verify(token, process.env.JWT);
    req.user = decode;
    return next();
  } catch (err) {
    next(err);
  }
};

// import jwt from "jsonwebtoken";
// import { createError } from "../error.js";
// import dotenv from "dotenv";

// dotenv.config(); // Load env variables

// export const verifyToken = async (req, res, next) => {
//   try {
//     const authHeader = req.headers.authorization;

//     // Check header format
//     if (!authHeader || !authHeader.startsWith("Bearer ")) {
//       return next(createError(401, "You are not authenticated!"));
//     }

//     const token = authHeader.split(" ")[1];
//     const secret = process.env.JWT;

//     // Temporary debug log — remove after fixing
//     console.log("🔐 JWT Secret:", secret);
//     console.log("🪙 Token:", token);

//     if (!secret) {
//       return next(createError(500, "JWT secret is missing in .env file"));
//     }

//     const decoded = jwt.verify(token, secret);
//     req.user = decoded;
//     next();
//   } catch (err) {
//     if (err.name === "JsonWebTokenError") {
//       return next(createError(403, "Invalid token signature"));
//     } else if (err.name === "TokenExpiredError") {
//       return next(createError(403, "Token has expired"));
//     }
//     next(err);
//   }
// };
