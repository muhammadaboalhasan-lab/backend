const mongoose = require("mongoose");

const workoutSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "A workout must have a name"],
  },
  muscleGroup: {
    type: String,
    required: [true, "A workout must have a muscle group"],
    enum: {
      values: [
        "Chest",
        "Back",
        "Shoulders",
        "Biceps",
        "Triceps",
        "Legs",
        "Core",
      ],
      message:
        "Please select a valid muscle group: Chest, Back, Shoulders, Biceps, Triceps, Legs, or Core",
    },
  },
  description: {
    type: String,
    required: [true, "A workout must have a description"],
  },
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
