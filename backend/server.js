const app = require("./app");
const http = require("http");
const debug = require("debug")("nodestr:server");
require("dotenv").config();
const database = require('./src/database/db');
const User = require('./src/models/user'); // Caminho correto para o arquivo user.js
const Patient = require('./src/models/patient'); 
const Assessment = require('./src/models/assessment'); 
require('./src/models/associations'); 

const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

const server = http.createServer(app);

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

database.sync().then(() => {
  console.log('Database synchronized');
}).catch(error => {
  console.error('Unable to connect to the database:', error);
});

function normalizePort(value) {
  const port = parseInt(value, 10);

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
