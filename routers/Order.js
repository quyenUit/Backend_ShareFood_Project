const express = require("express");
const OrderFood = require("../controllers/posts/OrderFood.js")
const router = express.Router();


router.put('/post/update/:postId', OrderFood);

module.exports = router;