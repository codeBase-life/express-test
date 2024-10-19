const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/user", (req, res) => {
  res.send("<h1>hello new user 🙂</h1>");
});

app.get("/login", (req, res) => {
  res.send("<h3>you have now logged in 😉</h3>");
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

module.exports = app;
