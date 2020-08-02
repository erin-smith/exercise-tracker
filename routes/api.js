const router = require("express").Router();
const mongoose = require("mongoose");
let db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false,
});

//get last workout
router.get("/api/workouts", (req, res) => {
  db.Workout.find({})
    .populate("exercises")
    .then((lastWorkout) => {
      res.json(lastWorkout);
    })
    .catch((err) => {
      res.json(err);
    });
});

//get all Workouts
router.get("/api/workouts/range", (req, res) => {
  db.Workout.find({})
    .then((dbWorkouts) => {
      res.json(dbWorkouts);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.post("/api/workouts", ({ body }, res) => {
  db.Workout.create({ body })
    .then((newOne) => {
      res.json(newOne);
    })
    .catch((err) => {
      res.json(err);
    });
});


//add new exercises to current workout
router.put("/api/workouts/:id", (req, res) => {
  const myId = req.params.id;
  const data = req.body;
  db.Workout.findOneAndUpdate(
    { _id: myId },
    {
      $push: { exercises: data },
      $set: { day: new Date() },
      $inc: { totalDuration: data.duration },
    },
    { new: true }
  )
    .then((workout) => {
      res.json(workout);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;
