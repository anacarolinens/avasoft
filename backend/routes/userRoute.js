const express = require("express");
const router = express.Router();
const UserController = require("../controllers/userController");

// CRUD Routes /users
router.get("/", UserController.getAllUsers); // /users
router.get("/:id", UserController.getUserById); // /users/:id
router.post("/", UserController.createUser); // /users
router.put("/:userId", UserController.updateUser); // /users/:userId
router.delete("/:userId", UserController.deleteUser);

module.exports = router;
