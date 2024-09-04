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

// Password reset routes
app.post('/reset-password', userController.resetPasswordRequest);
app.post('/reset-password-confirm', userController.resetPassword);

// define routes professionals
app.get('/professionals', professionalController.getAllProfessionals);
app.get('/professional/:id', professionalController.getProfessionalById);
app.post('/professional', professionalController.createProfessional);
app.put('/professional/:id', professionalController.updateProfessional);
app.delete('/professional/:id', professionalController.deleteProfessional);


// define routes patients
app.get('/patient', patientController.getAllPatients);
app.get('/patient/:id', patientController.getPatientById);
app.post('/patient', patientController.createPatient);
app.put('/patient/:id', patientController.updatePatient);
app.delete('/patient/:id', patientController.deletePatient);




module.exports = app;
