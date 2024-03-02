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

module.exports = Professional