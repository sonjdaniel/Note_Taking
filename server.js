// Importing Express.js
const express = require("express");
// Importing Node.js path module
const path = require("path");
const app = express();
// Importing index.js
const api = require("./routes/index");
const PORT = process.env.PORT || 3000;

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));
app.use(api);

// GET Route for notes page
app.get("/notes", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/notes.html"))
);

// GET Route for main page (using wildcard)
app.get("/*", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/index.html"))
);

// Server listening on port 3000
app.listen(PORT);
