const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day:{
        default: Date.now,
        type: Date
    },
    exercises: [{
        type: {
            type: String,
            trim: true,
            required: "type is Required: resistance or cardio?",
        },

        name: {
            type: String,
            trim: true,
            required: "name is Required"
        },

        duration: {
            type: Number,
            required: true

        },

        weight: {
            type: Number,
            required: true
        },
        reps: {
            type: Number,
            required: true
        },

        sets: {
            type: Number,
            required: true
        },

        distance: {
            type: Number,
            required: true
        }
    }]
});



const Workout = mongoose.model("workouts", workoutSchema);

module.exports = {Workout};
