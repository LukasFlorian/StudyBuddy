const express = require("express")

const app = express()

const PORT = 3000

// app.set("view engine", "ejs")

app.use(express.static("../html"))


app.get("/", (req, res) => {
    console.log("Here")
    res.render("homepage")
})

app.get("/browse", (req, res) => {
    res.render("browse")
    console.log("Browse page")
})

app.listen(PORT, () => console.log(`Server running on port ${PORT}!`));