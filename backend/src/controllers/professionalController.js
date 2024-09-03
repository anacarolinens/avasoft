const Professional = require("../models/professional");
const User = require("../models/user");

// List all professionals
exports.getAllProfessionals = async (req, res) => {
  try {
    const professionals = await Professional.findAll({
      include: [
        {
          model: User,
          as: "user",
          where: { role: "Profissional" },
          attributes: ["userName", "email"],
        },
      ],
    });

    res.json(professionals);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching professionals.", error });
  }
};

// Get professional by ID
exports.getProfessionalById = async (req, res) => {
  try {
    const professional = await Professional.findOne({
      where: { id: req.params.id },
      include: [
        {
          model: User,
          as: "user",
          where: { role: "Profissional" },
          attributes: ["userName", "email"],
        },
      ],
    });

    if (!professional) {
      return res.status(404).json({ message: "Professional not found." });
    }
    res.json(professional);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching professional.", error });
  }
};

// Create a professional
exports.createProfessional = async (req, res) => {
  try {
    const {
      userName,
      email,
      password,
      confirmPassword,
      registry_professional,
      experience,
    } = req.body;

    // Validação simples
    if (!userName || !email || !registry_professional) {
      return res.status(400).json({
        message: "userName, email, and registry_professional are required.",
      });
    }
    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Passwords do not match." });
    }

    // Criação do usuário
    const user = await User.create({
      userName,
      email,
      password, // Certifique-se de que o password está sendo tratado corretamente
      role: "Profissional",
    });

    // Criação do registro de profissional associado
    const professional = await Professional.create({
      user_id: user.id,
      registry_professional,
      experience,
    });

    res.status(201).json({
      message: "Professional created successfully!",
      professional,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error creating professional.", error });
  }
};

// Update professional
exports.updateProfessional = async (req, res) => {
  try {
    const { userName, email, registry_professional, experience } = req.body;
    const professionalId = req.params.id;

    const professional = await Professional.findByPk(professionalId, {
      include: [{ model: User, as: "user" }],
    });

    if (!professional) {
      return res.status(404).json({ message: "Professional not found." });
    }

    // Atualiza os dados do usuário e do profissional
    await professional.user.update({ userName, email });
    await professional.update({ registry_professional, experience });

    res.json({ message: "Professional updated successfully!", professional });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error updating professional.", error });
  }
};

// Delete professional
exports.deleteProfessional = async (req, res) => {
  try {
    const professionalId = req.params.id;
    const professional = await Professional.findByPk(professionalId);

    if (!professional) {
      return res.status(404).json({ message: "Professional not found." });
    }

    // Delete the associated user
    await User.destroy({ where: { id: professional.user_id } });

    // Delete the professional record
    await professional.destroy();

    res.json({ message: "Professional deleted successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error deleting professional.", error });
  }
};
