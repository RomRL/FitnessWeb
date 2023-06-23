import jwt from "jsonwebtoken";
import { config } from "dotenv";

//validate thata the user is logged in and has a valid token
//Config env variables
config();
//Validate token -> validate that the user is logged in and has a valid token
//Only logged in users can access the routes that use this middleware
export const validateToken = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    console.log("Access denied, no token provided");
    return res
      .status(401)
      .json({ message: "Access denied, no token provided" });
  }
  try {
    //remove the "Bearer " from the token
    const tokenWithoutBearer = token.split(" ")[1];
    const enc = process.env.SECRET_KEY;
    if (tokenWithoutBearer === "null") {
      console.log("Access denied, no token provided");
      return res
        .status(401)
        .json({ message: "Access denied, no token provided" });
    }
    //verify that the token is valid
    const verified = jwt.verify(tokenWithoutBearer, enc);
    req.user = verified;
    next();
  } catch (error) {
    console.log("Invalid token provided by user id : ", req.user.id);
    res.status(400).json({ message: "Invalid token" });
  }
};
