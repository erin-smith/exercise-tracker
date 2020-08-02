const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExerciseSchema = new Schema ({
              type: String,
            name: String,
          distance: Number,
          duration: Number,
          weight: Number,
          reps: Number,
          sets: Number
        });

  const WorkoutSchema = new Schema({
          day: Date,
          totalDuration: Number,
          exercises: [ExerciseSchema]
          });

  
    const Workout = mongoose.model("Workout", WorkoutSchema);

    module.exports = Workout;