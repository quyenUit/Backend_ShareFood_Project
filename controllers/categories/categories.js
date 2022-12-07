const users = require("../../models/categories.js");
const bcrypt = require("bcrypt");

// get api all categories
const getAllCats = async (req, res) => {
  try {
    const data = await users.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

// get api categories detail
const getCatDetail = async (req, res) => {
  try {
    const data = await users.findById(req.params.id);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

// update api categories by id
const updateCats = async (req, res) => {
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

// delete api categories by id
const deleteCats = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await users.findByIdAndDelete(id);
    res.send(`User with id ${data.id} has been deleted...`);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { getAllCats, getCatDetail, updateCats, deleteCats };
