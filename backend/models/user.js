const Sequelize = require('sequelize')
const database = require('../database/db')

const User = database.define('user', {
  id: {
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
  street: {
      type: Sequelize.STRING,
      allowNull: false,
  },
  number: {
      type: Sequelize.STRING,
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

});

module.exports = User