const express = require("express");
const router = express.Router();
const {
  getGoals,
  updateGoal,
  deleteGoal,
  createGoal,
} = require("../controllers/goalController");

router.route("/").get(getGoals).post(createGoal);

router.route("/:id").put(updateGoal).delete(deleteGoal);

module.exports = router;
