const mongoose = require("mongoose");

const UserDBSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  address: String,
  lastlogin: Date,
  createdate: Date,
  active: Boolean,
});

const users = mongoose.model("users", UserDBSchema);

module.exports = users;
