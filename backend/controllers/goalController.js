const getGoals = (req, res) => {
  res.status(200).json({ message: "Get Goals" });
};

const deleteGoal = (req, res) => {
  res.status(200).json({ message: `Deleted goal with id ${req.params.id}` });
};

const updateGoal = (req, res) => {
  res.status(200).json({ message: `Updated goal with id ${req.params.id}` });
};

const createGoal = (req, res) => {
  res.status(200).json({ message: "Goal Created" });
};

module.exports = {
  deleteGoal,
  updateGoal,
  createGoal,
  getGoals,
};
