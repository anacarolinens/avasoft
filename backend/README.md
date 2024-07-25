# 📑 Documentação do Backend Avasoft

## 📚 Visão Geral

Este projeto é uma aplicação de sistema backend desenvolvida utilizando Node.js, Sequelize como ORM (Object-Relational Mapper) e PostgreSQL como banco de dados.

## 🗂 Estrutura do Projeto

    backend/
    │
    ├── config/
    |   └── config.js
    ├── src/
    │   ├── controllers/
    |   |   ├── patientController.js
    |   |   ├── professionalController.js
    │   │   └── userController.js
    |   ├── middlewares/
    │   │   └── auth.js
    |   ├── database/
    |   |   ├── connection.js
    |   |   ├── pconnectionWithPromise.js
    │   │   └── db.js
    │   ├── models/
    |   |   ├── assessment.js
    |   |   ├── bmi.js
    |   |   ├── patient.js
    |   |   ├── professional.js
    |   |   ├── user.js
    │   │   └── userRules.js
    │   ├── routes/
    |   |   ├── patientRoute.js
    |   |   ├── professionalRoute.js
    │   │   └── userRoute.js
    │   ├── utils/
    │   ├── app.js
    │   └── server.js
    ├── .env
    ├── .gitignore
    ├── app.js
    ├── env_exemple.env
    ├── package.json
    ├── README.md
    └── server.js   

## Requisitos para rodar localmente

### 🗃 Requisitos iniciais

Antes de começar, certifique-se de ter os seguintes requisitos instalados em seu ambiente de desenvolvimento:

1. IDE de sua preferência
2. Node.js (versão 14.x ou superior)
3. npm (geralmente instalado junto com o Node.js)
4. PostgreSQL (versão 12.x ou superior)
5. Sequelize CLI (instalado globalmente)

### 💻 Instalação

Para configurar o projeto, siga os passos abaixo:

1. Clone o repositório:

    ```bash
    git clone https://github.com/Andisssu/avasoft.git
    cd avasoft
    cd backend
    ```

2. Instale as dependências:

    ```bash
    npm install
    ```

3. Crie uma copia do arquivo `env_exemple.env` e renomei para `.env` com suas credenciais do banco de dados PostgreSQL:

4. Para popular o banco de dados com dados iniciais (opcional):

    ```bash
    npx sequelize-cli db:seed:all
    ```

5. Inicie o servidor:

    ```bash
    npm start
    ```
