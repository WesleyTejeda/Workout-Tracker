const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        required: "Date is required."
    },
    exercises: [
        {
            type: {
                type: String,
                required: "Type of workout is requried"
            },
            name: {
                type: String,
                required: "Name of workout is required"
            },
            duration: {
                type: Number,
                required: "Duration time is required."
            },
            weight: {
                type: Number
            },
            reps: {
                type: Number
            },
            sets: {
                type: Number
            },
            distance: {
                type: Number
            }
        }
    ]
})

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;