const mongoose = require("mongoose");

const UserDBSchema = new mongoose.Schema({
  orderNumber: Number,
  orderDate: {
    type: Date,
    default: Date.now
  },
  userId: String,
  userPostEmail: String,
  postId: String,
  note: String,
  status: String,
});

const orders = mongoose.model("orders", UserDBSchema);

module.exports = orders;
