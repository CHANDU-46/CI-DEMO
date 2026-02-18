const express = require("express");
const app = express();
const PORT = 3000;

function add(a, b) {
    return a + b;
}

app.get("/", (req, res) => {
    res.send("CI IS WORKING");
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = add;

