const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({ message: "Get Goals" });
});

router.post("/", (req, res) => {
  res.status(200).json({ message: "Create Goals" });
});

router.put("/:id", (req, res) => {
  res.status(200).json({ message: `Update goal with id ${req.params.id}` });
});

router.delete("/:id", (req, res) => {
  res.status(200).json({ message: `Delete goal with id ${req.params.id}` });
});

module.exports = router;
