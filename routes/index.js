const express = require("express");
// Import modular router for /notes
const notesRouter = require("./notes");

const app = express();
// Using notes router with /api/notes endpoint added
app.use("/api/notes", notesRouter);

module.exports = app;
