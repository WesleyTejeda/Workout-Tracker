const db = require("../models/workout-model.js");

module.exports = function(server) {
    //Return last workout
    server.get("/api/workouts", (req, res) => {
        db.Workout.findAll({}).then(data => {
            res.json(data);
        })
    })

    //Receive id of workout and updated data and return json
    server.put("/api/workouts/:id", (req, res) => {
        db.Workout.findOne({})
    })

    //Receive new workout and insert to DB
    server.post("/api/workouts", (req, res) => {
        
    })

    //Return all workouts 
    server.get("/api/workouts/range", (req, res) => {

    })
}