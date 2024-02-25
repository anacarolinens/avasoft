const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const config = require("../config/config");

const sequelize = new Sequelize(config.development);

const db = {};



db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
