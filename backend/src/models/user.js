const Sequelize = require('sequelize')
const database = require('../database/db')
const  USER_ROLES =  require('../models/userRules')

const User = database.define('user', {
  id_user: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  fullname: {
    type: Sequelize.STRING,
    allowNull: false
  },
  cpf: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  dataNasc: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  gender: {
    type: Sequelize.STRING,
    allowNull: false
  },
  phone: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  street: {
      type: Sequelize.STRING,
      allowNull: false,
  },
  number: {
      type: Sequelize.INTEGER,
      allowNull: false,
  },
  complement: {
      type: Sequelize.STRING,
      allowNull: true,
  },
  district: {
      type: Sequelize.STRING,
      allowNull: false,
  },
  city: {
      type: Sequelize.STRING,
      allowNull: false,
  },
  state: {
      type: Sequelize.STRING,
      allowNull: false,
  },
  cep: {
      type: Sequelize.STRING,
      allowNull: false,
  },
  role: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isIn: [USER_ROLES]
    }
  },
  userName: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  }, 
  resetPasswordToken: {
    type: Sequelize.STRING,
    allowNull: true
  },

});

module.exports = User