const express = require('express');
const router = express.Router();
const assessmentController = require('../controllers/assessmentController');

// CRUD Routes /assessments
router.get('/', assessmentController.getAllAssessments); // GET /assessments
router.get('/:id', assessmentController.getAssessment); // GET /assessments/:id
router.post('/', assessmentController.createAssessment); // POST /assessments
router.put('/:id', assessmentController.updateAssessment); // PUT /assessments/:id
router.delete('/:id', assessmentController.deleteAssessment); // DELETE /assessments/:id

module.exports = router;