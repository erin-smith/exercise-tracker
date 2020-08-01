const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExerciseSchema = new Schema ({
            type: {
              type: String,
            required: "Please select the type of workout."
            },
            name: {
            type: String,
            trim: true,
            required: "You must name your Exercize"
          },
          distance: {
            type: Number
          },
          duration: {
            type: Number,
            required: "Please enter the number of minutes you did this activity."
          },
          weight: {
            type: Number
          },
          reps: {
            type: Number
          },
          sets: {
            type: Number
          }
        });

  const WorkoutSchema = new Schema({
          day: Date,
          totalDuration: Number,
          exercises: [ExerciseSchema]
          });

      //WorkoutSchema.methods.setTotalDuration = function() {
         // let duration = 0;
         // this.exercises.forEach(exercise => {
         ///   duration += exercise.duration;
         // });
         // this.totalDuration = duration;
          //console.log(this.totalDuration);
       // }

    const Workout = mongoose.model("Workout", WorkoutSchema);

    module.exports = Workout;