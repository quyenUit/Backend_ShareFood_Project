const mongoose = require("mongoose");

const UserDBSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  address: String,
  phone: String,
  lastlogin: Date,
  createdate: Date,
  active: Boolean,
  followers: {
    type: Array,
    default: [],
  },
  followings: {
    type: Array,
    default: [],
  },
});

const users = mongoose.model("users", UserDBSchema);

module.exports = users;
