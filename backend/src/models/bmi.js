const Sequelize = require('sequelize')
const database = require('../database/db');

const Bmi = database.define('bmi', {
    id_bmi: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    bmi_value: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    id_patient: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
        model: 'patient',
        key: 'id_patient'
        }
    }
    });