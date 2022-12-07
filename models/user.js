const mongoose = require("mongoose");

const UserDBSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  address: String,
  phone: String,
  lastlogin: Date,
  createdate: Date,
  lname: String,
  active: Boolean,
  phone: String
});

const users = mongoose.model("users", UserDBSchema);

module.exports = users;
