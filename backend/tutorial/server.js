const express = require("express")

const app = express()

const port = 3000

app.set("view engine", "ejs")

app.get("/", (req, res) => {
    console.log("Server is running on port " + port)
    res.render("Index", {text_1: "World!"})
})

const userRouter = require("./routes/users.js")

app.use("/users", userRouter)

app.listen(port)