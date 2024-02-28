const Professional = require('../models/professional');

// funtion to handle error
function handleError(res, statusCode, message) {
    res.status(statusCode).json({ message: message });
}

// get all professionals
exports.getAllProfessionals = async (req, res, next) => {
    try {
        const professionals = await Professional.findAll();
        res.status(200).json({ professionals: professionals });
    } catch (err) {
        handleError(res, 500, 'Error -> ' + err);
    }
}

// get professional by id
exports.getProfessionalById = async (req, res, next) => {
    try {
        const professionalId = req.params.id;
        const professional = await Professional.findByPk(professionalId);
        if (!professional) {
            return res.status(404).json({ message: 'Professional Not Found' });
        }
        res.status(200).json({ professional: professional });
    } catch (err) {
        handleError(res, 500, 'Error -> ' + err);
    }
}

// create professional  
exports.createProfessional = async (req, res, next) => {
    try {
        const newProfessional = await Professional.create(req.body);
        res.status(200).json({ message: 'Professional created successfully!', professional: newProfessional });
    } catch (err) {
        handleError(res, 500, 'Error -> ' + err);
    }
}

// update professional
exports.updateProfessional = async (req, res, next) => {
    try {
        const professionalId = req.params.id;
        let professional = await Professional.findByPk(professionalId);
        if (!professional) {
            return res.status(404).json({ message: 'Professional Not Found' });
        }
        professional = Object.assign(professional, req.body);
        await professional.save();
        res.status(200).json({ message: 'Professional updated successfully!', professional: professional });
    } catch (err) {
        handleError(res, 500, 'Error -> ' + err);
    }
}

// delete professional
exports.deleteProfessional = async (req, res, next) => {
    try {
        const professionalId = req.params.id;
        const professional = await Professional.findByPk(professionalId);
        if (!professional) {
            return res.status(404).json({ message: 'Professional Not Found' });
        }
        await professional.destroy();
        res.status(200).json({ message: 'Professional deleted successfully!' });
    } catch (err) {
        handleError(res, 500, 'Error -> ' + err);
    }
}

// Login professional
exports.loginProfessional = async (req, res, next) => {
    try {
        const { userName, password } = req.body;
        const professional = await Professional.findOne({ where: { userName, password } });
        if (!professional) {
            return res.status(404).json({ message: 'Professional Not Found' });
        }
        res.status(200).json({ message: 'Professional logged in successfully!', professional: professional });
    } catch (err) {
        handleError(res, 500, 'Error -> ' + err);
    }
}

// Logout professional
exports.logoutProfessional = async (req, res, next) => {
    res.status(200).json({ message: 'Professional logged out successfully!' });
}
