// module imports
const express = require("express");
const path = require("path");

// router instantiation
const router = express.Router();

// signup route
router.get('/', (req, res) =>{
    console.log("User opening signup subpage");
    res.sendFile(path.join(__dirname, "../../static/signup.html"));
});

module.exports = router;