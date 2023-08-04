const express = require("express");
const dotenv = require("dotenv").config();
const router = require("./routes/goalRoutes");
const PORT = process.env.PORT || 5000;

const app = express();

app.use("/api/goals", router);

app.listen(PORT, () => {
  console.log(`Server started on port number on ${PORT}`);
});
