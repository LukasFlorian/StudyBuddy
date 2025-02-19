const express = require("express");
const path = require("path")

router = express.Router()

router.get('/', (req, res) =>{
    console.log("User opening homepage");
    res.sendFile(path.join(__dirname, "../../static/homepage.html"));
})

module.exports = router