const mongoose = require("mongoose");

const UserDBSchema = new mongoose.Schema({
  catname: String,
  file: String,
});

const category = mongoose.model("category", UserDBSchema);

module.exports = category;
