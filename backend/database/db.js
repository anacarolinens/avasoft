const Sequelize = require('sequelize')
require('dotenv').config()

const db = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {   
        host: process.env.DB_HOST,
        dialect: process.env.DB_DIALECT,
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false
            }
        },
    }
)
db.authenticate().then(() => {
    console.log("Conectado ao banco de dados!")
}).catch((error) => {
    console.log("Conexão com banco de dados falhou " + error)
})

module.exports = db