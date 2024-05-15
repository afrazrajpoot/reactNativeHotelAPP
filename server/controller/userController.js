const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const CustomClass = require("../utils/errorClass");
exports.signupUser = async (req, res, next) => {
  try {
    const { name, username, password } = req.body;
    // console.log(name, username, password);
    if (!name || !password || !username) {
      console.log("no user");
      return next(new CustomClass("all fields are required", 400));
    }
    const user = await User.findOne({ username });
    // console.log(user, "myUser");
    if (user) {
      return next(new CustomClass("user already exists", 400));
      // res.status(400).send("user already exists");
    }

    const newUser = await User.create({
      name,
      password,
      username,
    });
    res.status(201).json({ newUser });
  } catch (err) {
    res.status(500).send(err.message);
  }
};
exports.loginUser = async (req, res, next) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return next(new CustomClass("all fields are required", 400));
    }
    const user = await User.findOne({ username });
    if (!user) {
      return next(new CustomClass("user not found", 404));
    }
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return next(new CustomClass("incorrect password", 400));
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    user.token = token;
    await user.save();
    res.status(200).json({ message: "login successful", token });
  } catch (err) {
    res.status(500).send(err.message);
  }
};
