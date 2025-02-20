const express = require("express");
const path = require("path")

router = express.Router()

router.get('/', (req, res) =>{
    console.log("User opening login subpage");
    res.sendFile(path.join(__dirname, "../../static/login.html"));
})

router.post('/', (req, res) => {
    body = req.body;
    console.log(body);
    const username = req.body["email"];
    const password = req.body["password"];
    res.send("login success!")
    // password-check
})

module.exports = router