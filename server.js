const express = require("express");
const app = express();
const server = require("http").Server(app);
app.use(express.json())

server.listen(process.env.PORT || 3030);

var nodemailer = require("nodemailer");
const { request } = require("http");
const transporter = nodemailer.createTransport({
    port:587,
    host:"smtp.gmail.com",
    auth:{
        user:"drsbalupriya@gmail.com",
        pass:"nwbwckdfsacuvwmw"

},
secure:true,


})