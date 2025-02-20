const express = require("express");
const path = require("path")
const bodyParser = require("body-parser")

router = express.Router()

router.use(bodyParser.urlencoded({
    extended: true
}));
router.use(bodyParser.json());

router.get('/', (req, res) =>{
    console.log("User opening homepage");
    console.log(req.body);
    res.sendFile(path.join(__dirname, "../../static/homepage.html"));
})
router.get('/homepage', (req, res) =>{
    console.log("User opening homepage");
    res.sendFile(path.join(__dirname, "../../static/homepage.html"));
})

module.exports = router