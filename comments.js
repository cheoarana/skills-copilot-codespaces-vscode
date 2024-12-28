// Create web server
// 1. Import express
// 2. Create a new express app
// 3. Create a new route
// 4. Define a route handler
// 5. Listen on port 3001

// 1. Import express
const express = require("express");
const { randomBytes } = require("crypto");

// 2. Create a new express app
const app = express();

// 3. Create a new route
app.get("/comments", (req, res) => {
  res.send("Comments route");
});

app.post("/comments", (req, res) => {
  res.send("Create a new comment");
});

// 4. Define a route handler
// app.get("/", (req, res) => {
//   res.send("Hi there!");
// });

// app.post("/", (req, res) => {
//   res.send("Post request received");
// });

// 5. Listen on port 3001
app.listen(3001, () => {
  console.log("Listening on port 3001");
});

