const express = require('express');
const app = express();
const path = require("path")
const bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());


app.get('', (req, res) => {
    res.sendFile(path.join(__dirname, "./buttons.html"));
});


app.post('', (req, res) => {
    const data = req.body;
    console.log(data);
    if (data["button"] === "Button 1") {
        res.send("1");
    } else if (data["button"] === "Button 0") {
        res.send("0");
    }
    else {
        //
    }
});


app.listen(3000)