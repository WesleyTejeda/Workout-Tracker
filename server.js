//Express setup
const express = require("express");
const server = express();
let  PORT = process.env.PORT || 8080;

server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
})

//Import
const db = require("./models");
require("./routes/api-routes")(server);
require("./routes/html-routes")(server);
