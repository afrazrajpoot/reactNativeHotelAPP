const jwt = require("jsonwebtoken");
const User = require("../models/User"); // Replace with your user model path

const authMiddleware = async (req, res, next) => {
  try {
    const token =
      req.headers.authorization && req.headers.authorization.split(" ")[1]; // Extract token from authorization header

    if (!token) {
      return res.status(401).json({ message: "Unauthorized" }); // Unauthorized if no token
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET); // Verify token using secret
    const user = await User.findById(decoded.userId); // Fetch user from DB

    if (!user) {
      return res.status(401).json({ message: "Invalid token" }); // Invalid if user not found
    }

    req.user = user; // Attach user object to the request
    next(); // Proceed to next middleware/route handler
  } catch (err) {
    console.error(err); // Log errors for debugging
    return res.status(500).json({ message: "Internal server error" }); // Handle errors gracefully
  }
};

module.exports = authMiddleware;
