const express = require("express");
const userController = require("../controllers/users/users.js");
const routes = express.Router();

//======================================//
routes.get("/users/list", userController.getAllUsers);
routes.get("/users/detail/:id", userController.getUserDetail);
routes.post("/users/update/:id", userController.updateUser);
routes.delete("/users/delete/:id", userController.deleteUser);

module.exports = routes;
