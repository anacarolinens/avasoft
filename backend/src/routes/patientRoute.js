const express = require('express');
const router = express.Router();
const ProfessionalController = require('../controllers/patientController');

// CRUD Routes /pacientes
router.get('/', ProfessionalController.getAllPatients); // GET /pacientes
router.get('/:id', ProfessionalController.getPatientById); // GET /pacientes/:id
router.post('/', ProfessionalController.createPatient); // POST /pacientes
router.put('/:id', ProfessionalController.updatePatient); // PUT /pacientes/:id
router.delete('/:id', ProfessionalController.deletePatient); // DELETE /pacientes/:id


module.exports = router;
