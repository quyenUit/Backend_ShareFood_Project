const express = require("express");
const postList = require("../controllers/posts/postList.js");
const router = express.Router();

router.get('/post', postList);

module.exports = router;