const mongoose = require("mongoose");

const UserDBSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
});

const users = mongoose.model("users", UserDBSchema);

module.exports = users;
