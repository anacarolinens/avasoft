const express = require("express");
const app = express();
const cors = require('cors')
const bodyParser = require("body-parser");
const userController = require('./src/controllers/userController');
const professionalController = require('./src/controllers/professionalController');
const patientController = require('./src/controllers/patientController');

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

// define routes professionals
app.get('/professionals', professionalController.getAllProfessionals);
app.get('/professionals/:id', professionalController.getProfessionalById);
app.post('/professionals', professionalController.createProfessional);
app.put('/professionals/:id', professionalController.updateProfessional);
app.delete('/professionals/:id', professionalController.deleteProfessional);


// define routes patients
app.get('/patients', patientController.getAllPatients);
app.get('/patients/:id', patientController.getPatientById);
app.post('/patients', patientController.createPatient);
app.put('/patients/:id', patientController.updatePatient);
app.delete('/patients/:id', patientController.deletePatient);




module.exports = app;
