// Importing Router method from Express.js
const notes = require("express").Router();
// Importing uuid library that generates unique identifiers
const { v4: uuidv4 } = require("uuid");
// Importing File System
const fs = require("fs");

// GET Route for endpoint /api/notes
notes.get("/", (req, res) => {
  // Reading db.json file
  const readNotes = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
  // Returning saved notes as JSON
  res.json(readNotes);
});

// POST Route for endpoint /api/notes
notes.post("/", (req, res) => {
  const { title, text, id } = req.body;
  // Generating unique indentifier
  const generateId = uuidv4();
  // When POST is called, it creates a new object with title, text and unique ID
  const newNote = {
    title,
    text,
    id: generateId,
  };
});
// DELETE Route for endpoint /api/notes
notes.delete("/:id", (req, res) => {
  // Reading db.json file
  const readNotes = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
  // Filtering notes to only show the ones that are not being deleted (don't have the ID of the deleted note)
  const notDeletedNotes = readNotes.filter((note) => note.id !== req.params.id);
  const noteString = JSON.stringify(notDeletedNotes);
  // Saving remaining notes in db.json
  fs.writeFileSync("./db/db.json", noteString);
  // Returning ID of the deleted note
  res.json(`${req.params.id} has been deleted`);
});

// Exporting notes
module.exports = notes;
