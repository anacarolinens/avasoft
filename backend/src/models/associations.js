const Patient = require("./patient");
const User = require("./user");
const Assessment = require("./assessment");
const Skinfold = require("./skinfold");
const Circumference = require("./circumference");
const Bmi = require("./bmi");

// Associações

// Paciente pertence a um usuário
Patient.belongsTo(User, {
  foreignKey: 'user_id',
  as: 'user',
  onDelete: 'CASCADE',
});

// Usuário tem um paciente
User.hasOne(Patient, {
  foreignKey: 'user_id',
  as: 'patient',
  onDelete: 'CASCADE',
});

// Paciente tem várias avaliações (Assessments)
Patient.hasMany(Assessment, {
  foreignKey: 'id_patient',
  as: 'assessments',
  onDelete: 'CASCADE',
});

// Avaliação pertence a um paciente
Assessment.belongsTo(Patient, {
  foreignKey: 'id_patient',
  as: 'patient',
  onDelete: 'CASCADE',
});

// Avaliação tem uma dobras cutâneas (Skinfold)
Assessment.hasOne(Skinfold, {
  foreignKey: 'id_assessment',
  as: 'skinfold',
  onDelete: 'CASCADE',
});

// Avaliação tem uma circunferência (Circumference)
Assessment.hasOne(Circumference, {
  foreignKey: 'id_assessment',
  as: 'circumference',
  onDelete: 'CASCADE',
});

// Avaliação tem um índice de massa corporal (BMI)
Assessment.hasOne(Bmi, {
  foreignKey: 'id_assessment',
  as: 'bmi',
  onDelete: 'CASCADE',
});

// BMI pertence a uma avaliação
Bmi.belongsTo(Assessment, {
  foreignKey: 'id_assessment',
  as: 'assessment',
  onDelete: 'CASCADE',
});

// Circunferência pertence a uma avaliação
Circumference.belongsTo(Assessment, {
  foreignKey: 'id_assessment',
  as: 'assessment',
  onDelete: 'CASCADE',
});

// Dobras cutâneas pertencem a uma avaliação
Skinfold.belongsTo(Assessment, {
  foreignKey: 'id_assessment',
  as: 'assessment',
  onDelete: 'CASCADE',
});

module.exports = {
  Patient,
  User,
  Assessment,
  Skinfold,
  Circumference,
  Bmi,
};
