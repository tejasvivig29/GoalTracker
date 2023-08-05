const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: {
      trype: String,
      required: [true, "Please add a name"],
    },
    email: {
      trype: String,
      required: [true, "Please add a name"],
      unique: true,
    },
    password: {
      trype: String,
      required: [true, "Please add a name"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
