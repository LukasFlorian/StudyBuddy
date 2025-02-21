const express = require("express");
const path = require("path")

const User = require("../models/userModel")
const Document = require('../models/docModel')

router = express.Router()

router.get('/', (req, res) =>{
    console.log("User opening share subpage");
    res.sendFile(path.join(__dirname, "../../static/share.html"));
})


router.post('/', (req,res) => {
    body = req.body;
    console.log(body);
})

module.exports = router