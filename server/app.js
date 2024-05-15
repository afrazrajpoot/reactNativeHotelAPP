require("dotenv").config();
const express = require("express");
const app = express();
const errorHandler = require("./middelware/errorHandler");
const cors = require("cors");
const userRoute = require("./routes/userRoute");
app.use(cors("*"));
// Define a sample route handler
app.get("/", (req, res) => {
  res.send("Hello, World!");
});
app.use(express.json());

// Define your routes and middleware here...
app.use("/api/v1", userRoute);
app.all("*", (req, res, next) => {
  const err = new Error("Not Found");
  err.status = 404;
  next(err); // Passes the error to the next middleware, which is the error handler
});

// Include the error handler middleware
app.use(errorHandler);

module.exports = app;
