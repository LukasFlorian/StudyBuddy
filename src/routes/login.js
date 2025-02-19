const express = require("express");
const path = require("path")

router = express.Router()

router.get('/', (req, res) =>{
    console.log("User opening login subpage");
    res.sendFile(path.join(__dirname, "../../static/login.html"));
})

module.exports = router