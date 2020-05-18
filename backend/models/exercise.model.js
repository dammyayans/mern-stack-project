const mongoose = require("mongoose");

const ExerciseShema = mongoose.Schema({
  username: {
    type: String,
    trim: true,
    minLenth: 4,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },

  duration: {
    type: Number,
  },
  date: {
    type: Date,
  },
});

const Exercise = mongoose.model("exercise", ExerciseShema);
module.exports = Exercise;
