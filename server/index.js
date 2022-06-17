const express= require("express");
const { PORT } = require("../config/config");

const server=express();

server.listen(PORT, () => {

    console.log(`app listening on port at ${PORT}`);

});