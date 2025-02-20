const express = require("express")
const path = require("path")
const bodyParser = require("body-parser")

// subpages:
const browse = require('./routes/browse')
const homepage = require('./routes/homepage')
const impressum = require('./routes/impressum')
const login = require('./routes/login')
const share = require('./routes/share')
const signup = require('./routes/signup')


const app = express()
const port = 3000

// app.use(express.static("./static/"))

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(express.static("../public/img/"))


// Chiara muss links anpassen
app.use("/", homepage)
app.use("/browse", browse)
app.use("/login", login)
app.use("/signup", signup)
app.use("/impressum", impressum)
app.use("/share", share)
/*
app.get("/", (req, res) => {
    res.send("<h1>Hello World</h1>")
})
*/
app.get('/public/css/style.css', function(req, res) {
    res.sendFile(path.join(__dirname, "../public/css", "style.css"));
});

app.post('/public/img/', function(req, res) {
    console.log(req.body)
    res.sendFile(path.join(__dirname, "../public/img/*"));
});



app.listen(port)

