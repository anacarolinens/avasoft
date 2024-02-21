const express = require("express");
const router = express.Router();

// Importe suas rotas aqui
const userRoutes = require("./userRoutes");

// Defina suas rotas
router.use("/users", userRoutes);

module.exports = router;
