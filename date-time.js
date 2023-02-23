import * as dotenv from "dotenv";
dotenv.config();

const date = Date.now();
const path = Math.floor(date / 1000.0);


// http://localhost:5787;
import express from "express";
const app = express();
const PORT = process.env.PORT;
app.get("/", function (request, response) {
  response.send(`current time stamp ${path} `);
});
app.listen(PORT, () => console.log("SERVER CONNECTED"));
