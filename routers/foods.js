const express = require("express");
const userController = require("../controllers/foods/foods.js");
const routes = express.Router();

//======================================//
routes.get("/foods/list", userController.getAllFoods);
routes.get("/foods/detail/:id", userController.getFoodDetail);
routes.post("/foods/update/:id", userController.updateFood);
routes.delete("/foods/delete/:id", userController.deleteFood);
routes.put("/foods/:id", userController.updateFoodInAdmin);
module.exports = routes;
