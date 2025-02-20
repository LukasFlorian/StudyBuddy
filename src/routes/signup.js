const express = require("express");
const path = require("path")

router = express.Router()

router.get('/', (req, res) =>{
    console.log("User opening signup subpage");
    res.sendFile(path.join(__dirname, "../../static/signup.html"));
})

module.exports = router