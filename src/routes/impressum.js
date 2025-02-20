const express = require("express");
const path = require("path")

router = express.Router()

router.get('/', (req, res) =>{
    console.log("User opening impressum subpage");
    res.sendFile(path.join(__dirname, "../../static/impressum.html"));
})

module.exports = router