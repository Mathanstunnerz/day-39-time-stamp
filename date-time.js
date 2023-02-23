import * as dotenv from "dotenv";
dotenv.config();

const Timestamp = Date.now();
const path = Math.floor(Timestamp  / 1000.0);
const date = new Date()
const hours  = date.getHours();
const minutes = date.getMinutes();
const second = date.getSeconds();
// console.log(second)
// console.log(minutes)
// console.log(hours)
// http://localhost:5787;
import express from "express";
const app = express();
const PORT = process.env.PORT;
app.get("/", function (request, response) {
  response.send(`current time stamp ${path} , hours ${hours} : minutes ${minutes} : second ${second}`)
});
app.listen(PORT, () => console.log("SERVER CONNECTED"));

