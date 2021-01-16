//workout schema

//day

//excercise array
//type
//name
//duration
//reps
//wieght
//sets
//distance

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({

    day: Date,

    excercise: [{
        type: String,
        name: String,
        duration: Number,
        reps: Number,
        weight: Number,
        sets: Number,
        distance: Number
    }]
})

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
