// module imports
const express = require("express");
const path = require("path");

// router instantiation
const router = express.Router();

// login route
router.get('/', (req, res) =>{
    console.log("User opening login subpage");
    res.sendFile(path.join(__dirname, "../../static/login.html"));
});

module.exports = router;