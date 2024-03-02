const express = require("express");
const app = express();
const cors = require('cors')
const bodyParser = require("body-parser");
const userController = require('./src/controllers/userController');

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// define routes users
app.post('/login', userController.loginUser);
app.post('/register', userController.createUser);
app.get('/users', userController.getAllUsers);
app.get('/users/:id', userController.getUserById);
app.put('/users/:id', userController.updateUser);
app.delete('/users/:id', userController.deleteUser);


module.exports = app;
