// module imports
const express = require("express");
const path = require("path");

// router instantiation
const router = express.Router();

// homepage route
router.get('/', (req, res) =>{
    console.log("User opening homepage");
    console.log(req.body);
    res.sendFile(path.join(__dirname, "../../static/homepage.html"));
});

// alternative homepage route
router.get('/homepage', (req, res) =>{
    console.log("User opening homepage");
    res.sendFile(path.join(__dirname, "../../static/homepage.html"));
});

module.exports = router;