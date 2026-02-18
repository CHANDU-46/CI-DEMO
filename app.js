const express = require("express");
const app = express();

function add(a, b) {
  return a + b;
}

app.get("/", (req, res) => {
  res.send("CI IS WORKING");
});

module.exports = { app, add };
