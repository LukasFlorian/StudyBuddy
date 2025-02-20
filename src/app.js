const express = require("express")
const path = require("path")
const bodyParser = require("body-parser")
require("dotenv").config();
const mongoose = require("mongoose");
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");

// subpages:
const browse = require('./routes/browse')
const homepage = require('./routes/homepage')
const impressum = require('./routes/impressum')
const login = require('./routes/login')
const share = require('./routes/share')
const signup = require('./routes/signup')

const app = express()

// Statische Dokumente bereitstellen (CSS, Bilder)
// app.use(express.static(path.join(__dirname, "../static"))); // HTML-Dateien
app.use("/public", express.static(path.join(__dirname, "../public"))); // Statische Assets (CSS, JS, Images)

// API-Routen für User (Login & Signup)
app.use("/api/users", userRoutes);


const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/yourdatabase";

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

// Middleware
app.use(express.json());
app.use(cors());

// Verbindung zur MongoDB
mongoose
.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log("Verbunden mit MongoDB"))
.catch((err) => console.error("Fehler bei der Verbindung zu MongoDB:", err));

// Chiara muss links anpassen
app.use("/", homepage)
app.use("/browse", browse)
app.use("/login", login)
app.use("/signup", signup)
app.use("/impressum", impressum)
app.use("/share", share)



// Server starten
app.listen(PORT, () => {
  console.log(`Server läuft auf http://localhost:${PORT}`);
});




