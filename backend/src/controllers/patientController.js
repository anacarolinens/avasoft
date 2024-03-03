const Paciente = require('../models/patient');
const User = require('../models/user');

// Get all pacientes
exports.getAllPatients = async (req, res) => {
    try {
      const patients = await Patient.findAll({
        include: [{
          model: User,
          where: { role: 'Paciente' }, //filter by user type
          attributes: ['username', 'email'] 
        }]
      });
      res.json(patients);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error fetching patients.' });
    }
  };
  

// Get paciente by id
exports.getPatientById = async (req, res) => {
    try {
      const patient = await Patient.findOne({
        where: { id: req.params.id },
        include: [{
          model: User,
          where: { role: 'Paciente' },
          attributes: ['username', 'email'] 
        }]
      });
      if (!patient) {
        return res.status(404).json({ message: 'Patient not found.' });
      }
      res.json(patient);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error fetching patient.' });
    }
};

// Create patient
exports.createPatient = async (req, res) => {
    try {
      const { username, email, peso_inicial, altura_inicial } = req.body;
        
      const user = await User.create({ username, email, role: 'Paciente' });
      const patient = await Patient.create({ user_id: user.id, peso_inicial, altura_inicial });
      
      res.status(201).json({ message: 'Patient created successfully!', patient });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error creating patient.' });
    }
  };
  
  // Update patient    
  exports.updatePatient = async (req, res) => {
    try {
      const { username, email, peso_inicial, altura_inicial } = req.body;
      const patientId = req.params.id;
      
      const patient = await Patient.findByPk(patientId, { include: [{ model: User }] });
  
      if (!patient) {
        return res.status(404).json({ message: 'Patient not found.' });
      }
      
      await patient.User.update({ username, email, role: 'Paciente' });
      await patient.update({ peso_inicial, altura_inicial });
      
      res.json({ message: 'Patient updated successfully!', patient });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error updating patient.' });
    }
  };
  
  // Delete patient    
  exports.deletePatient = async (req, res) => {
    try {
      const patientId = req.params.id;
      const patient = await Patient.findByPk(patientId);
      
      if (!patient) {
        return res.status(404).json({ message: 'Patient not found.' });
      }
      
      await patient.destroy();
      
      res.json({ message: 'Patient deleted successfully!' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error deleting patient.' });
    }
  };
