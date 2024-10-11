const Assessment = require('../models/assessment');
const Patient = require('../models/patient');
const { User } = require('../models/user');

// Get all assessments
exports.getAllAssessments = async (req, res) => {
  try {
    const assessments = await Assessment.findAll();
    res.json(assessments);
  } catch (error) {
    console.error("Error fetching assessments:", error);
    res.status(500).json({ message: "Error fetching assessments.", error: error.message });
  }
};


// Get assessment by id
exports.getAssessmentById = async (req, res) => {
  try {
    const assessment = await Assessment.findOne({
      where: { id_assessment: req.params.id },
      include: [
        {
          model: Patient,
          as: 'patient',
          attributes: ['id_patient', 'weigth_ini', 'height_ini'],
        },
      ],
    });
    if (!assessment) {
      return res.status(404).json({ message: "Assessment not found." });
    }
    res.json(assessment);
  } catch (error) {
    console.error("Error fetching assessment:", error);
    res.status(500).json({ message: "Error fetching assessment.", error: error.message });
  }
};

// Create assessment
exports.createAssessment = async (req, res) => {
  const { id_patient, dataAssessment, peso, altura, cc, cq, peitoral, abdomen, coxa, triceps, suprailiaca } = req.body;

  try {
    // Criação da avaliação
    const assessment = await Assessment.create({
      id_patient,
      dataAssessment,
      peso,
      altura,
      cc,
      cq,
      peitoral, 
      abdomen,
      coxa,
      triceps,
      suprailiaca
    });

    res.status(201).json({ message: "Assessment created successfully!", assessment });
  } catch (error) {
    console.error("Error creating assessment:", error);
    res.status(500).json({ message: "Error creating assessment.", error: error.message });
  }
};

// Update assessment
exports.updateAssessment = async (req, res) => {
  try {
    const assessmentId = req.params.id;
    const assessment = await Assessment.findByPk(assessmentId);

    if (!assessment) {
      return res.status(404).json({ message: "Assessment not found." });
    }

    await assessment.update(req.body);
    res.json({ message: "Assessment updated successfully!", assessment });
  } catch (error) {
    console.error("Error updating assessment:", error);
    res.status(500).json({ message: "Error updating assessment.", error: error.message });
  }
};

// Delete assessment
exports.deleteAssessment = async (req, res) => {
  try {
    const assessmentId = req.params.id;
    const assessment = await Assessment.findByPk(assessmentId);

    if (!assessment) {
      return res.status(404).json({ message: "Assessment not found." });
    }

    await assessment.destroy();
    res.json({ message: "Assessment deleted successfully!" });
  } catch (error) {
    console.error("Error deleting assessment:", error);
    res.status(500).json({ message: "Error deleting assessment.", error: error.message });
  }
};