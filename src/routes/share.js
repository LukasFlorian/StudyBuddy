const express = require("express");
const path = require("path")

router = express.Router()

router.get('/', (req, res) =>{
    console.log("User opening share subpage");
    res.sendFile(path.join(__dirname, "../../static/share.html"));
})

module.exports = router