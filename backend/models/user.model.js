const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 4,
    },
  },
  { timestamps: true }
);
const User = mongoose.model("exercise_users", UserSchema);
module.exports = User;
