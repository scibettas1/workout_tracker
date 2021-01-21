
//most of the logic goes here
//similar to what we've done in the past, but with mongo syntax
//create, find, update, delete, etc


const db = require("../models");

  // switched "function" to fat arrow => (updated syntax)

  module.exports = function (app) {

  app.get("/api/workouts", (req, res) => {
    console.log("hello!!")
    //res.json({});
    db.Workouts.find({})
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.json(err);
      });
  });

  app.put("/api/workouts/:id", (req, res) => {
    db.Workouts.findOneAndUpdate(
      { _id: req.params.id },
      {
        $inc: { totalDuration: req.body.duration },
        $push: { workouts: req.body }
      },
      { new: true })
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.json(err);
      });
  });

  app.post("/api/workouts", ({ body }, res) => {
    db.Workouts.create(body)
      .then((dbWorkout => {
        res.json(dbWorkout);
      })).catch(err => {
        res.json(err);
      });
  });

app.get("/api/workouts/range", (req, res) => {
        db.Workouts.find({})
        .then(dbWorkout => {
            res.json(dbWorkout);
        }).catch(err => {
            res.json(err);
        });

    });


  }
