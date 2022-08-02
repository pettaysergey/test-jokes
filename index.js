const express = require("express");
const app = express();
const data = require("./data.json");
let port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  console.log("got request");
  res.send(data);
});

app.listen(port, () => {
  console.log("listen");
});
