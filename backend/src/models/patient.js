const Sequelize = require('sequelize')
const database = require('../database/db');
const User = require('./user');
const { DataTypes } = Sequelize;

const Patient = database.define('patient', {
  id_patient: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  weigth_ini: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  height_ini: {
    type: DataTypes.FLOAT,
    allowNull: false,
  }
});

Patient.associate = function(models) {
  Patient.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
};

module.exports = Patient;