const orders = require("../../models/order.js");
const bcrypt = require("bcrypt");

// get api all order

const getAllOrrders = async (req, res) => {
  try {
    const data = await orders.find();
    res.json(data)
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

// get api order detail
const getOrderDetail = async (req, res) => {
  try {
    const data = await users.findById(req.params.id);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

// update api order by id
const updateOrder = async (req, res) => {
  try {
    const id = req.params.id;
    const updateData = req.body;
    const options = { new: true };
    const result = await users.findByIdAndUpdate(id, updateData, options);
    res.send(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// delete api user by id
const deleteOrder = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await users.findByIdAndDelete(id);
    res.send(`User with id ${data.id} has been deleted...`);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { getAllOrrders, getOrderDetail, updateOrder, deleteOrder };
