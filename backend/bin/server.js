const express = require("express");
const bodyParser = require("body-parser");
const sequelize = require("../database/db");
const User = require("../models/user");

require("dotenv").config();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, DELETE"
    );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

//CRUD routes
app.use("/users", require("../routes/userRoute"));


//error handling
app.use((error, req, res, next) => {
  const status = error.statusCode || 500;
  const message = error.message;
  res.status(status).json({ message: message });
});

//sync database and start server
sequelize
  .sync()
  .then(result => {
    console.log('Database connected')
    app.listen(process.env.PORT || 3000);
  })
  .catch((err) => console.log(err));