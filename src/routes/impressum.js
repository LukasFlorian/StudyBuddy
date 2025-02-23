// module imports
const express = require("express");
const path = require("path");

// router instantiation
const router = express.Router();

// Impressum route
router.get('/', (req, res) =>{
    console.log("User opening impressum subpage");
    res.sendFile(path.join(__dirname, "../../static/impressum.html"));
});

module.exports = router;