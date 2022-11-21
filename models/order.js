const mongoose = require("mongoose");

const UserDBSchema = new mongoose.Schema({
  orderNumber: Number,
  orderDate: Date,
  transaction: String,
  note: String,
  accepted: Boolean,
});

const orders = mongoose.model("orders", UserDBSchema);

module.exports = orders;
