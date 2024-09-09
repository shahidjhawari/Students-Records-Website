require('dotenv').config();
const express = require("express");
const app = express();
const router = require("./router/user-register-router");
const connection = require("./db/connection");

app.use(express.json());
app.use("/api", router);


const port = process.env.PORT;

app.use("/api", router);

connection().then(app.listen(port, () => {
  console.log("Server is runnig on " + port);
}));