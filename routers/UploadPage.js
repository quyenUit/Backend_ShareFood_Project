const express = require("express");
const uploadFood = require("../controllers/posts/uploadFood.js");
const router = express.Router();


router.post('/uploadpost', uploadFood);

module.exports = router;