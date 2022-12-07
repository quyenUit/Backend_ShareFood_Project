//---------------------------> Import <-----------------------//
const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const signup = require("./routers/Login.js");
const register = require("./routers/Register.js");
const uploadpost = require("./routers/UploadPage.js");
const getPost = require("./routers/PostList.js");
const getOrder = require("./routers/Order.js")
const usersInfo = require("./routers/users.js");
const foodsInfo = require("./routers/foods.js");
const ordersInfo = require("./routers/orders.js");
const catsInfo = require("./routers/categories.js");
const followUsers = require("./routers/follow.js");
//---------------------------> Express <-----------------------//
const app = express();
require("dotenv").config();
app.use(bodyParser.json({ limit: "30mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "30mb" }));
app.use("/", cors());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization "
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATH, DELETE");
  next();
});

//-----------------------------> Mongoose <--------------------------//
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true });

//------------------------------> Post <-----------------------------//
app.use(signup);
app.use(register);
app.use(uploadpost);
app.use(getPost);
app.use(getOrder);
app.use(usersInfo);
app.use(foodsInfo);
app.use(ordersInfo);
app.use(catsInfo);
app.use(followUsers);
//---------------------------> Set up PORT <-------------------------//
let port = process.env.PORT;
if (port == null || port == "") {
  port = 3001;
}

//---------------------------> ListenPort <--------------------------//
app.listen(port, () => {
  console.log("Server is running on port 3001");
});
