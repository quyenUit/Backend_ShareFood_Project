const express = require("express");
const userController = require("../controllers/orders/orders.js");
const routes = express.Router();

//======================================//
routes.get("/orders/list", userController.getAllOrrders);
routes.get("/orders/detail/:id", userController.getOrderDetail);
routes.post("/orders/update/:id", userController.updateOrder);
routes.delete("/orders/delete/:id", userController.deleteOrder);

module.exports = routes;
