const express = require("express");
const {OrderFood, DeleteOrderFood} = require("../controllers/posts/OrderFood.js")
const router = express.Router();
const CreateOrder = require("../controllers/orders/CreateOrder.js")

router.post('/order', CreateOrder);
router.put('/post/update/:postId', OrderFood);
router.delete('/post/update/:orderId', DeleteOrderFood);

module.exports = router;