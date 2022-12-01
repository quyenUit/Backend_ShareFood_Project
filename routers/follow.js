const express = require("express");
const userController = require("../controllers/follow/follow.js");
const routes = express.Router();

//======================================//
routes.patch("/follow", userController.follow);
routes.patch("/unfollow", userController.unfollow);

module.exports = routes;
