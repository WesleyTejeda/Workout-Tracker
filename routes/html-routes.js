const path = require("path");
module.exports = function(server) {
    //return index html
    server.get("/", (req, res) => {
        res.sendFile(path.join(__dirname+"/../public/index.html"));
    })

    //return exercise html
    server.get("/exercise", (req, res) => {
        res.sendFile(path.join(__dirname+"/../public/exercise.html"));
    })

    //return stats html
    server.get("/stats", (req, res) => {
        res.sendFile(path.join(__dirname+"/../public/stats.html"));
    })
}