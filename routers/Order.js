const express = require("express");
const {OrderFood, DeleteOrderFood, GetOrderFood, GetOrderFoodByOwn} = require("../controllers/posts/OrderFood.js")
const router = express.Router();
const CreateOrder = require("../controllers/orders/CreateOrder.js")

router.post('/order', CreateOrder);
router.get('/order/:userId', GetOrderFood)
router.get("/orders/list/:userPostEmail", GetOrderFoodByOwn);
router.put('/post/update/:postId', OrderFood);
router.delete('/post/update/:orderId', DeleteOrderFood);

module.exports = router;