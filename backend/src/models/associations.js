const Patient = require("./patient");
const User = require("./user");
const Assessment = require("./assessment");

// Associações
Patient.belongsTo(User, {
  foreignKey: 'user_id',
  as: 'user',
  onDelete: 'CASCADE',
});

User.hasOne(Patient, {
  foreignKey: 'user_id',
  as: 'patient',
  onDelete: 'CASCADE',
});

Patient.hasMany(Assessment, {
  foreignKey: 'id_patient',
  as: 'assessments',
  onDelete: 'CASCADE',
});

Assessment.belongsTo(Patient, {
  foreignKey: 'id_patient',
  as: 'patient',
  onDelete: 'CASCADE',
});