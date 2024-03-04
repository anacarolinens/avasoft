const User = require('./user');
const Professional = require('../models/professional');
const Patient = require('../models/patient');

User.hasOne(Professional, { as: 'professional', foreignKey: 'id_user' });
Professional.belongsTo(User, { as: 'user', foreignKey: 'id_user' });
Patient.belongsTo(User, { foreignKey: 'id_user' });




module.exports = {
  User,
  Professional,
  Patient
}