const express = require("express");
const userController = require("../controllers/categories/categories.js");
const routes = express.Router();

//======================================//
routes.get("/cats/list", userController.getAllCats);
routes.get("/cats/detail/:id", userController.getCatDetail);
routes.post("/cats/update/:id", userController.updateCats);
routes.delete("/cats/delete/:id", userController.deleteCats);

module.exports = routes;
