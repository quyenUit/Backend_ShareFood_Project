const express = require("express");
const userController = require("../controllers/users/users.js");
const routes = express.Router();

//======================================//
routes.get("/users/list", userController.getAllUsers);
routes.get("/users/:id", userController.getUserDetail);
routes.get("/users", userController.getUser);
routes.patch("/users/update/:id", userController.updateUser);
routes.delete("/users/delete/:id", userController.deleteUser);
routes.put("users/:id/follow", userController.follow);
routes.put("users/:id/unfollow", userController.unfollow);

module.exports = routes;
