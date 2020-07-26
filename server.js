//Express setup
const express = require("express");
const server = express();
let  PORT = process.env.PORT || 8080;

const logger = require("morgan");
server.use(logger("dev"));
const mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workoutsdb", { useNewUrlParser: true });

//Static folder
server.use(express.static("public"));

//Import
const path = require("path");
const db = require("./models/workout-model");
require("./routes/api-routes")(server);
require("./routes/html-routes")(server);

server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
})