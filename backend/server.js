const express = require("express");
const dotenv = require("dotenv").config();
const router = require("./routes/goalRoutes");
const userRouter = require("./routes/userRoutes");
const PORT = process.env.PORT || 5000;
const colors = require("colors");
const { connectDB } = require("./config/db");
const { errorHandler } = require("./middleware/errorMiddleware");

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(errorHandler);

app.use("/api/goals", router);
app.use("/api/users", userRouter);

app.listen(PORT, () => {
  console.log(`Server started on port number on ${PORT}`);
});
