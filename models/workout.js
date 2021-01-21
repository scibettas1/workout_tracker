
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({

    day: {
        type: Date,
        default: Date.now
    },

    exercises: [{
        type: String,
        name: String,
        duration: Number,
        reps: Number,
        weight: Number,
        sets: Number,
        distance: Number
    }],
    totalDuration: {
        type:Number
    }
})

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
