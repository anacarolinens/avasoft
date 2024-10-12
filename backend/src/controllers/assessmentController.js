const Assessment = require('../models/assessment');
const Patient = require('../models/patient');
const Circumference = require('../models/circumference');
const Skinfold = require('../models/skinfold');
const Bmi = require('../models/bmi');
const AssessmentService = require('../services/assessmentService');

// Get all assessments with associated data
exports.getAllAssessments = async (req, res) => {
  try {
    const assessments = await Assessment.findAll({
      include: [
        {
          model: Patient,
          as: 'patient',
          attributes: ['id_patient', 'weigth_ini', 'height_ini'],
        },
        {
          model: Circumference,
          as: 'circumference',
        },
        {
          model: Skinfold,
          as: 'skinfold',
        },
        {
          model: Bmi,
          as: 'bmi',
        },
      ],
    });
    res.json(assessments);
  } catch (error) {
    console.error("Error fetching assessments:", error);
    res.status(500).json({ message: "Error fetching assessments.", error: error.message });
  }
};

// Get assessment by id with associated data
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
        {
          model: Circumference,
          as: 'circumference',
          attributes: ['id_assessment', 'neck', 'thorax','shoulderBlade', 'waist', 'abdomen', 'hip', 'leftWrist', 'rightWrist', 'leftArm', 'rightArm', 'leftContractedArm', 'rightContractedArm', 'leftForearm', 'rightForearm', 'leftGlutealThigh', 'rightGlutealThigh', 'leftMedialThigh', 'rightMedialThigh', 'leftLeg', 'rightLeg', 'leftAncke', 'rightAncke' ],
        },
        {
          model: Skinfold,
          as: 'skinfold',
          attributes: ['id_assessment' ,'triceps', 'axillary', 'abdominal','thigh', 'calf','subscapular', 'suprailiac', 'pectoral', 'bicep'],
        },
        {
          model: Bmi,
          as: 'bmi',
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

// Create assessment with related data
exports.createAssessment = async (req, res) => {
    const { id_patient, assessmentDate, weight, height, dateRecorded,circumferenceData, skinfoldData, method, gender, age } = req.body;
  
    if (!assessmentDate || !method) {
      return res.status(400).json({ message: "assessmentDate and method are required." });
    }
  
    try {
      // Create assessment
      const assessment = await Assessment.create({
        id_patient,
        assessmentDate,
        weight,
        height,
        method,
        dateRecorded,
      });
  
      // Create related circumference and skinfold records
      if (circumferenceData) {
        await Circumference.create({
          ...circumferenceData,
          id_assessment: assessment.id_assessment,
        });
      }
  
      if (skinfoldData) {
        await Skinfold.create({
          ...skinfoldData,
          id_assessment: assessment.id_assessment,
        });
      }
  
      // Process BMI and body fat percentage
      const assessmentData = {
        dateRecorded: assessment.assessmentDate,
        weight,
        height,
        skinfolds: skinfoldData,
        method,
        id_assessment: assessment.id_assessment,
        gender,
        age,
      };
      
      const processedData = await AssessmentService (assessmentData);
  
      res.status(201).json({ message: "Assessment created successfully!", assessment, processedData });
    } catch (error) {
      console.error("Error creating assessment:", error);
      res.status(500).json({ message: "Error creating assessment.", error: error.message });
    }
  };

// Update assessment with related data
exports.updateAssessment = async (req, res) => {
  try {
    const assessmentId = req.params.id;
    const { circumferenceData, skinfoldData, method, gender, age } = req.body;

    const assessment = await Assessment.findByPk(assessmentId);
    if (!assessment) {
      return res.status(404).json({ message: "Assessment not found." });
    }

    await assessment.update(req.body);

    // Update related circumference and skinfold records
    if (circumferenceData) {
      await Circumference.update(circumferenceData, { where: { id_assessment: assessmentId } });
    }

    if (skinfoldData) {
      await Skinfold.update(skinfoldData, { where: { id_assessment: assessmentId } });
    }

    // Reprocess BMI and body fat percentage if method and data are provided
    if (method && gender && age) {
      const assessmentData = {
        dateRecorded: assessment.dateRecorded,
        weight: assessment.weight,
        height: assessment.height,
        skinfolds: skinfoldData,
        method,
        id_assessment: assessmentId,
        gender,
        age,
      };
      
      await AssessmentService(assessmentData);
    }

    res.json({ message: "Assessment updated successfully!", assessment });
  } catch (error) {
    console.error("Error updating assessment:", error);
    res.status(500).json({ message: "Error updating assessment.", error: error.message });
  }
};

// Delete assessment with related data
exports.deleteAssessment = async (req, res) => {
  try {
    const assessmentId = req.params.id;
    const assessment = await Assessment.findByPk(assessmentId);

    if (!assessment) {
      return res.status(404).json({ message: "Assessment not found." });
    }

    // Delete related records
    await Circumference.destroy({ where: { id_assessment: assessmentId } });
    await Skinfold.destroy({ where: { id_assessment: assessmentId } });
    await Bmi.destroy({ where: { id_assessment: assessmentId } });

    // Delete assessment
    await assessment.destroy();

    res.json({ message: "Assessment and related records deleted successfully!" });
  } catch (error) {
    console.error("Error deleting assessment:", error);
    res.status(500).json({ message: "Error deleting assessment.", error: error.message });
  }
};
