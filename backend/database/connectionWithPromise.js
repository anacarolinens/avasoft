const mysql = require('mysql2/promise')
require('dotenv').config({ path:'./.env'})

const connectionWithPromise = mysql.createPool(process.env.DB_URL);

module.exports = connectionWithPromise