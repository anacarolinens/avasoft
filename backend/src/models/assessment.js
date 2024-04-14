const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Patient = require('./patient');
const Professional = require('./professional');

const Assessment = sequelize.define('assessment', {
  id_assessment: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  dataAssessment: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  id_patient: { 
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {         
      model: Patient,        
      key: 'id_patient'    
    },
  },
  id_professional: { 
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {         
      model: Professional,        
      key: 'id_professional'    
    }
  }
});

module.exports = Assessment;