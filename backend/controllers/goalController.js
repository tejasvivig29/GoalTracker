const getGoals = async (req, res) => {
  res.status(200).json({ message: "Get Goals" });
};

const deleteGoal = async (req, res) => {
  res.status(200).json({ message: `Deleted goal with id ${req.params.id}` });
};

const updateGoal = async (req, res) => {
  res.status(200).json({ message: `Updated goal with id ${req.params.id}` });
};

const createGoal = (req, res) => {
  if (!req.body.text) {
    throw new Error("Please enter the text field");
  }
};

module.exports = {
  deleteGoal,
  updateGoal,
  createGoal,
  getGoals,
};
