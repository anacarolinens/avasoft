<<<<<<< Updated upstream:backend/bin/server.js
const express = require("express");
const bodyParser = require("body-parser");
const sequelize = require("../database/db");
const User = require("../models/user");
const Professional = require("../models/professional");

=======
const app = require("./app");
const http = require("http");
const debug = require("debug")("nodestr:server");
>>>>>>> Stashed changes:backend/server.js
require("dotenv").config();

const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

const server = http.createServer(app);

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

<<<<<<< Updated upstream:backend/bin/server.js
//CRUD routes
app.use("/users", require("../routes/userRoute"));
app.use("/professionals", require("../routes/professionalRoute"));
=======
function normalizePort(value) {
  const port = parseInt(value, 10);
>>>>>>> Stashed changes:backend/server.js

  if (isNaN(port)) {
    return value;
  }

  if (port >= 0) {
    return port;
  }
  return false;
}

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  const bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

function onListening() {
  const addr = server.address();
  const bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);
}
