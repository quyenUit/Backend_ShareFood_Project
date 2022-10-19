const express = require("express");
const morgan = require("morgan");
const app = express();
const port = 3000;

app.use(morgan("combined"));

//routes
app.get("/home", (req, res) => {
  return res.send("Hello World");
});
//
app.listen(port, () =>
  console.log(`Server app listening at http://localhost:${port}`)
);
