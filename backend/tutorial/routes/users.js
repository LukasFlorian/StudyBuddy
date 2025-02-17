const express = require('express')
const router = express.Router()

router.get("/", (req, res) => {
    res.send("User List")
})

router.get("/new", (req, res) => {
    res.send("User new form")
})

router.post("/", (req, res) => {
    res.send("Create User")
})



module.exports = router