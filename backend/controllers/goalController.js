const asyncHandler = require("express-async-handler");

const getGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get Goals" });
});

const deleteGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Deleted goal with id ${req.params.id}` });
});

const updateGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Updated goal with id ${req.params.id}` });
});

const createGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please enter the text field");
  }
});

module.exports = {
  deleteGoal,
  updateGoal,
  createGoal,
  getGoals,
};
