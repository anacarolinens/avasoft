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
});

Patient.associate = function () {
  Patient.belongsTo(User, { foreignKey: "user_id", as: "user" });
  Patient.hasMany(Bmi, { foreignKey: "id_patient", as: "bmi" });
};

module.exports = Patient;
