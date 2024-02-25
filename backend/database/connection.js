const mysql = require('mysql2')
require('dotenv').config({ path:'./.env'})

const connection = mysql.createConnection(process.env.DB_URL);

module.exports = connection