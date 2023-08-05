const express = require("express");
const dotenv = require("dotenv").config();
const router = require("./routes/goalRoutes");
const PORT = process.env.PORT || 5000;
const { errorHandler } = require("./middleware/errorMiddleware");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(errorHandler);

app.use("/api/goals", router);

app.listen(PORT, () => {
  console.log(`Server started on port number on ${PORT}`);
});
