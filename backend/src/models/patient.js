const Sequelize = require('sequelize')
const database = require('../database/db');
const User = require('./user');
const { DataTypes } = Sequelize;

const Paciente = database.define('Paciente', {
  id_patient: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  peso_inicial: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  altura_inicial: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  id_user: { 
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {         
      model: User,        
      key: 'id_user'    
    }
  }
});

module.exports = Paciente;