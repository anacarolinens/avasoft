const Sequelize = require('sequelize')
const database = require('../database/db');
const User = require('../models/user');


const Professional = database.define('profissional', {
  id_professional: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  registry_professional: {
    type: Sequelize.STRING,
    allowNull: false
  },
  experience: {
    type: Sequelize.INTEGER,
    allowNull: false,
    unique: true
  }
});

module.exports = Professional