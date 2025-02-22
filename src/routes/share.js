const express = require("express");
const path = require("path");

const User = require("../models/userModel");
const Document = require('../models/docModel');

const router = express.Router();

// Authentifizierungs-Middleware: 
// Diese Middleware wird vor allen weiteren Routen in diesem Router ausgeführt.
router.use((req, res, next) => {
  if (req.session && req.session.user) {
    // Wenn der Nutzer eingeloggt ist, wird mit next() fortgefahren
    next();
  } else {
    // Wenn nicht, wird der Nutzer zur Login-Seite umgeleitet.
    res.redirect("/login?redirect=share");
  }
});

router.get('/', (req, res) => {
    console.log("User opening share subpage");
    res.sendFile(path.join(__dirname, "../../static/share.html"));
});

module.exports = router;