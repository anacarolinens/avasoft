const Sequelize = require("sequelize");
const database = require("../database/db");
const { DataTypes } = Sequelize;

const Assessment = database.define('assessment', {
  id_assessment: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  dataAssessment: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  peso: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  altura: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  cc: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  cq: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  peitoral: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  abdomen: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  coxa: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  triceps: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  suprailiaca: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  id_patient: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = Assessment;