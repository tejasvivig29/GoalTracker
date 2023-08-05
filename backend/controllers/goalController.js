const asyncHandler = require("express-async-handler");
const goalSchema = require("../model/goalModel");
const userSchema = require("../model/userModel");

const getGoals = asyncHandler(async (req, res) => {
  const goals = await goalSchema.find({ user: req.user.id });
  res.status(200).json(goals);
});

const deleteGoal = asyncHandler(async (req, res) => {
  const goal = await goalSchema.findById(req.params.id);
  if (!goal) {
    res.status(400);
    throw new Error("Goal not found");
  }

  const user = await userSchema.findById(req.user.id);

  if (!user) {
    res.status(401);
    throw new Error("User not found");
  }

  if (goal.user.toString() !== user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }

  await goalSchema.deleteOne({ id: req.params.id });
  res.status(200).json({ id: req.params.id });
});

const updateGoal = asyncHandler(async (req, res) => {
  const goal = await goalSchema.findById(req.params.id);
  if (!goal) {
    res.status(400);
    throw new Error("Goal not found");
  }

  const user = await userSchema.findById(req.user.id);

  if (!user) {
    res.status(401);
    throw new Error("User not found");
  }

  if (goal.user.toString() !== user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }

  const updatedGoal = await goalSchema.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );

  res.status(200).json(updatedGoal);
});

const createGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please enter the text field");
  }

  const goal = await goalSchema.create({
    text: req.body.text,
    user: req.user.id,
  });
  res.status(200).json(goal);
});

module.exports = {
  deleteGoal,
  updateGoal,
  createGoal,
  getGoals,
};
