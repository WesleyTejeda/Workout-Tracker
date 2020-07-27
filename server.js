//Express setup
const express = require("express");
const server = express();
let  PORT = process.env.PORT || 8080;

const logger = require("morgan");
const mongoose = require("mongoose");
const mongojs = require("mongojs");
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });

// server.use(logger("dev"));
server.use(express.urlencoded({ extended: true }));
server.use(express.json());

//Static folder
server.use(express.static("public"));

//Import
const path = require("path");
const db = require("./models");
require("./routes/api-routes")(server);
require("./routes/html-routes")(server);

server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
})