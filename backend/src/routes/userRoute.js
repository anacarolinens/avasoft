const express = require("express");
const router = express.Router();
const UserController = require("../controllers/userController");

// CRUD Routes /users
router.get("/", UserController.getAllUsers); // GET /users
router.get("/:id", UserController.getUserById); // GET /users/:id
router.post("/", UserController.createUser); // POST /users
router.post("/login", UserController.loginUser); // POST /users/login
router.put("/:id", UserController.updateUser); // PUT /users/:id
router.delete("/:id", UserController.deleteUser); // DELETE /users/:id

module.exports = router;
