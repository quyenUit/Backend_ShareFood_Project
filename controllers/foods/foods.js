const users = require("../../models/post.js");
const bcrypt = require("bcrypt");

// get api all foods
const getAllFoods = async (req, res) => {
  try {
    const data = await users.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

// get api foods detail
const getFoodDetail = async (req, res) => {
  try {
    const data = await users.findById(req.params.id);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

// update api food by id
const updateFood = async (req, res) => {
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

// delete api food by id
const deleteFood = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await users.findByIdAndDelete(id);
    res.send(`User with id ${data.id} has been deleted...`);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { getAllFoods, getFoodDetail, updateFood, deleteFood };
