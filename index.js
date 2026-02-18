const express = require("express");
const app = express();

function add(a, b) {
  return a + b;
}

app.get("/", (req, res) => {
  res.send("CI IS WORKING");
});

if (require.main === module) {
  app.listen(3000, () => {
    console.log("Server running on port 3000");
  });
}

module.exports = add;
