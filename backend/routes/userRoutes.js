const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  getMe,
} = require("../controllers/userController");

const { protect } = require("../middleware/authMiddleware.js");

router.post("/", registerUser);

router.post("/login", loginUser);

router.get("/getUser", protect, getMe);

module.exports = router;
