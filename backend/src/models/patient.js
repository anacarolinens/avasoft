const Sequelize = require("sequelize");
const database = require("../database/db");
const User = require("./user");
const { DataTypes } = Sequelize;

const Patient = database.define("patient", {
  id_patient: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  weigth_ini: {
    type: DataTypes.FLOAT,
    allowNull: true,
  },
  height_ini: {
    type: DataTypes.FLOAT,
    allowNull: true,
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: 'id_user',
    },
  },
});

// Associações
Patient.belongsTo(User, { 
  foreignKey: 'user_id',
  as: 'user',
  onDelete: 'CASCADE'  // Excloi cascata
});

User.hasOne(Patient, {
  foreignKey: 'user_id',
  as: 'patient',
  onDelete: 'CASCADE' 
});

module.exports = Patient;
