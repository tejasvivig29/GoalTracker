const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");
const {
  getGoals,
  updateGoal,
  deleteGoal,
  createGoal,
} = require("../controllers/goalController");

router.route("/").get(protect, getGoals).post(protect, createGoal);

router.route("/:id").put(protect, updateGoal).delete(protect, deleteGoal);

module.exports = router;
