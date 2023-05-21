const router = require("express").Router();
const path = require("path");
// const path = require('path');
const notes = require("../db/db.json");
const { v4: uuidv4 } = require("uuid");
const fs = require("fs");

router.get("/api/notes", (req, res) => res.json(notes));

router.post("/api/notes", (req, res) => {
  const { title, text } = req.body;

  const newNote = {
    title,
    text,
    // id: uuidv4(),
  };

  const noteString = JSON.stringify(newNote);

  fs.appendFile(notes, noteString, (err) =>
    err ? console.error(err) : console.log("Done")
  );
});

module.exports = router;
