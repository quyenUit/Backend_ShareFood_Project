const users = require("../models/user.js");
const bcrypt = require("bcrypt");

const postUserData = async (req, res) => {
  const Username = req.body.username;
  const Password = req.body.password;
  try {
    const findUser = await users.findOne({ username: Username });
    const matchPassword = await bcrypt.compare(Password, findUser.password);
    if (!matchPassword) {
      throw new Error("No User Found");
    } else {
      res.send(findUser);
    }
  } catch (err) {
    res.status(404).send();
  }
};

module.exports = postUserData;
