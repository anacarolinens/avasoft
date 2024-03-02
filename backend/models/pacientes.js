const Sequelize = require('sequelize')
const database = require('../database/db');
const User = require('./user');


const Paciente = database.define('paciente', {
  id_professional: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  peso_inicial: {
    type: Sequelize.FLOAT,
    allowNull: false
  },
  altura_inicial: {
    type: Sequelize.FLOAT,
    allowNull: false,
    unique: true
  },
  id_user: { 
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {         
      model: User,        
      key: 'id'    
    }
  }
});

module.exports = Paciente