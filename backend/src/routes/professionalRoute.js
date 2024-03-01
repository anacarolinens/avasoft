const express = require("express");
const router = express.Router();
const ProfessionalController = require("../controllers/professionalController");

// CRUD Routes /professionals
router.get("/", ProfessionalController.getAllProfessionals); // /professionals
router.get("/:id", ProfessionalController.getProfessionalById); // /professionals/:id
router.post("/", ProfessionalController.createProfessional); // /professionals
router.put("/:id", ProfessionalController.updateProfessional); // /professionals/:id
router.delete("/:id", ProfessionalController.deleteProfessional); // /professionals/:id

module.exports = router;