const express = require("express");
const bodyParser = require("body-parser");
const db = require("../models");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000; // Define uma porta padrão se a variável de ambiente não estiver definida

// Middleware
app.use(bodyParser.json());

// Defina suas rotas aqui
// Exemplo de rota:
app.get('/', (req, res) => {
  res.send('Olá, mundo!');
});

// Sincronização do modelo do Sequelize com o banco de dados
db.sequelize.sync()
  .then(() => {
    startServer();
  })
  .catch(err => {
    console.error('Erro ao sincronizar o modelo do Sequelize:', err);
  });

// Função para iniciar o servidor
function startServer() {
  app.listen(PORT, () => {
    console.log(`Servidor está rodando na porta ${PORT}`);
  });

  // Tratamento de erros do servidor
  app.on('error', onError);
}

// Tratamento de erros do servidor
function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  const bind = typeof PORT === 'string' ? 'Pipe ' + PORT : 'Port ' + PORT;
}
