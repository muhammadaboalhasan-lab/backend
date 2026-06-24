const mongoose = require("mongoose");

const workoutSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: [1, "A workout must have a muscle group"],
    maxlength: [20, "A workout must have a muscle group"],
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
    minlength: [1, "A workout must have a description"],
    maxlength: [200, "A workout must have a description"],
    required: [true, "A workout must have a description"],
  },
});

workoutSchema.set("toJSON", {
  getters: true,
  versionKey: false,
  transform: function (doc, ret) {
    delete ret._id;
  },
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
