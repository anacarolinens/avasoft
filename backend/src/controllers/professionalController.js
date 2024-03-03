const Profissional = require('../models/professional');
const User = require('../models/user');

//list all professionals
exports.getAllProfessionals = async (req, res) => {
    try {
      const professionals = await Professional.findAll({
        include: [{
          model: User,
          where: { role: 'Profissional' }, // filter by user type
          attributes: ['username', 'email'] 
        }]
      });
      res.json(professionals);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error fetching professionals.' });
    }
};

//get professional by id
exports.getProfessionalById = async (req, res) => {
    try {
      const professional = await Professional.findOne({
        where: { id: req.params.id },
        include: [{
          model: User,
          where: { role: 'Profissional' }, 
          attributes: ['username', 'email'] 
        }]
      });
      if (!professional) {
        return res.status(404).json({ message: 'Professional not found.' });
      }
      res.json(professional);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error fetching professional.' });
    }
};

//create a professional
exports.createProfessional = async (req, res) => {
    try {
      const { name, email, especialidade } = req.body;
      // Crie o usuário primeiro, depois o profissional
      const user = await User.create({ username: name, email: email, role: 'Profissional' });
      const professional = await Professional.create({ user_id: user.id, especialidade });
      res.status(201).json({ message: 'Professional created successfully!', professional });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error creating professional.' });
    }
  };
  
//update professional
  exports.updateProfessional = async (req, res) => {
    try {
      const { name, email, especialidade } = req.body;
      const professionalId = req.params.id;
      const professional = await Professional.findByPk(professionalId, {
        include: [{ model: User }]
      });
      if (!professional) {
        return res.status(404).json({ message: 'Professional not found.' });
      }
      // Atualize os dados do usuário e do profissional
      await professional.User.update({ username: name, email: email });
      await professional.update({ especialidade });
      res.json({ message: 'Professional updated successfully!', professional });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error updating professional.' });
    }
  };

  //delete professional
  exports.deleteProfessional = async (req, res) => {
    try {
      const professionalId = req.params.id;
      const professional = await Professional.findByPk(professionalId);
      if (!professional) {
        return res.status(404).json({ message: 'Professional not found.' });
      }
      await professional.destroy();
      res.json({ message: 'Professional deleted successfully!' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error deleting professional.' });
    }
  };