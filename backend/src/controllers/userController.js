const crypto = require('crypto');
const nodemailer = require('nodemailer');
const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Patient = require("../models/patient");
const Professional = require("../models/professional");

//Crud all users
exports.getAllUsers = async (req, res, next) => {
  User.findAll()
    .then((users) => {
      res.status(200).json({ users: users });
    })
    .catch((err) => {
      res.status(500).send("Error -> " + err);
    });
};

//Get user by id
exports.getUserById = async (req, res, next) => {
  const userId = req.params.id;
  User.findByPk(userId)
    .then((user) => {
      if (!user) {
        return res.status(404).json({ message: "User Not Found" });
      }
      res.status(200).json({ user: user });
    })
    .catch((err) => {
      res.status(500).json({ message: "Error -> " + err });
    });
};

// Create user and generate token
exports.createUser = async (req, res, next) => {
  const {
    fullName,
    cpf,
    dataNasc,
    gender,
    phone,
    email,
    street,
    number,
    complement,
    district,
    city,
    state,
    cep,
    role,
    userName,
    password,
    confirmPassword,
  } = req.body;
  // Check if passwords match
  if (password !== confirmPassword) {
    return res.status(400).json({ message: "Passwords do not match" });
  }

  try {
    // Generate a salt and hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create the user in the database with the hashed password
    const user = await User.create({
      fullName: fullName,
      cpf: cpf,
      dataNasc: dataNasc,
      gender: gender,
      phone: phone,
      email: email,
      street: street,
      number: number,
      complement: complement,
      district: district,
      city: city,
      state: state,
      cep: cep,
      role: role,
      userName: userName,
      password: hashedPassword,
    });

    // Try to create the associated record based on role
    try {
      if (role === "Paciente") {
        await Patient.create({ user_id: user.id });
      } else if (role === "Profissional") {
        await Professional.create({ user_id: user.id });
      }
    } catch (assocError) {
      // If there's an error creating the associated record, delete the user
      await user.destroy();
      return res.status(500).json({
        message: "Error creating associated record -> " + assocError,
      });
    }

    // Generate authentication token
    const token = jwt.sign(
      { userId: user.id, email: user.email },
      process.env.JWT_SECRET, // Secret key from .env file
      { expiresIn: "1h" } // Token expiration time
    );

    res.status(201).json({
      message: "User created successfully!",
      user: user,
      token: token,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error creating user -> " + error,
    });
  }
};

//Login user
exports.loginUser = async (req, res, next) => {
  const { userName, password } = req.body;

  try {
    // Find the user in the database
    const user = await User.findOne({ where: { userName: userName } });

    if (!user) {
      return res.status(404).json({ message: "User Not Found" });
    }

    // Compare the password with the hash stored in the database
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid Password" });
    }

    // Generate authentication token
    const token = jwt.sign(
      { userId: user.id, userName: user.userName },
      process.env.JWT_SECRET, // Secret key from .env file
      { expiresIn: "1h" } // Token expiration time
    );

    res.status(200).json({
      message: "User logged in successfully!",
      user: user,
      token: token,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error logging in -> " + error,
    });
  }
};

//Update user
exports.updateUser = async (req, res, next) => {
  try {
    const userId = req.params.id;
    const updatedUserData = req.body;

    // Verifica se o usuário existe
    const user = await User.findByPk(userId);

    if (!user) {
      return res.status(404).json({ message: "User Not Found" });
    }

    // Verifica se a senha está no corpo da requisição e gera um hash
    if (updatedUserData.password) {
      const salt = await bcrypt.genSalt(10);
      updatedUserData.password = await bcrypt.hash(
        updatedUserData.password,
        salt
      );
    }

    // Atualiza os dados do usuário
    Object.assign(user, updatedUserData);
    await user.save();

    res.status(200).json({
      message: "User updated successfully!",
      user: user,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error updating user -> " + error,
    });
  }
};

//Delete user
exports.deleteUser = async (req, res, next) => {
  const userId = req.params.id;
  User.findByPk(userId)
    .then((user) => {
      if (!user) {
        return res.status(400).json({
          message: "User Not Found",
        });
      }
      return user.destroy({
        where: {
          id: userId,
        },
      });
    })
    .then(() => {
      res.status(200).json({
        message: "User deleted successfully!",
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: "Error -> " + err,
      });
    });
};

exports.resetPassword = async (req, res, next) => {
  const { resetToken, newPassword, confirmPassword } = req.body;

  if (newPassword !== confirmPassword) {
    return res.status(400).json({ message: "Passwords do not match" });
  }

  try {
    const user = await User.findOne({
      where: {
        resetPasswordToken: resetToken,
      //  passwordResetExpires: {
     //     [Sequelize.Op.gt]: Date.now(), // Check for unexpired token
     //   },
      },
    });

    if (!user) {
      return res.status(400).json({ message: "Invalid or expired reset token" });
    }

    // Hash the new password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(newPassword,   
 salt);

    // Update user password and clear reset token/expires fields
    user.password = hashedPassword;
    user.resetPasswordToken = null;
    user.resetPasswordToken = null;
    await user.save();

    res.status(200).json({ message: "Password reset successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({   
 message: "Error resetting password"   
 });
  }
};

// Adicione esta função ao `userController.js`
exports.resetPasswordRequest = async (req, res, next) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ where: { email: email } });

    if (!user) {
      return res.status(404).json({ message: "User Not Found" });
    }

    // Gerar token e definir data de expiração
    const resetToken = crypto.randomBytes(20).toString('hex');
    user.resetPasswordToken = resetToken;
    user.passwordResetExpires = Date.now() + 3600000; // 1 hora

    await user.save();

    // Configurar e enviar e-mail (o exemplo abaixo é apenas um esqueleto)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });
    console.log("email:",process.env.EMAIL_USER, "senha:",process.env.EMAIL_PASS);
    const mailOptions = {
      to: email,
      from: 'avasoft8@gmail.com',
      subject: 'Password Reset',
      text: `Você solicitou a mudança de senha?\n\n
      http://${req.headers.host}/reset-password-confirm/${resetToken}\n\n
      caso não tenha ignore este e-mail.\n`
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: "Password reset instructions sent to email" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error requesting password reset" });
  }
};

