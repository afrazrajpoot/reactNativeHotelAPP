const express = require("express");
const router = express.Router();
const { signupUser, loginUser } = require("../controller/userController");
router.route("/signup").post(signupUser);
router.route("/login").post(loginUser);
module.exports = router;
