//Express setup
const express = require("express");
const server = express();
let  PORT = process.env.PORT || 8080;

server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
})

//Static folder
server.use(express.static("public"));

//Import
const path = require("path");
const db = require("./models/workout-model");
require("./routes/api-routes")(server);
require("./routes/html-routes")(server);
