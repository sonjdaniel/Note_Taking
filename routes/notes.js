const router = require("express").Router();
const path = require("path");
const notes = require("../db/db.json");

router.get("/api/notes", (req, res) => res.json(notes));

module.exports = router;
