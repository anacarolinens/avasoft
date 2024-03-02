const Sequelize = require('sequelize');
require('dotenv').config();

const db = new Sequelize(
    process.env.PG_DATABASE,
    process.env.PG_USER,
    process.env.PG_PASSWORD,
    {
        host: process.env.PG_HOST,
        dialect: process.env.PG_DIALECT,
    }
);

// Verifica a autenticação com o banco de dados
db.authenticate()
    .then(() => {
        console.log("Conectado ao banco de dados!");
    })
    .catch((error) => {
        console.error("Conexão com o banco de dados falhou: ", error);
    });

module.exports = db;
