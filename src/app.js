require("dotenv").config();
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const session = require('express-session');

// Routes:
const browse = require('./routes/browse')
const homepage = require('./routes/homepage')
const impressum = require('./routes/impressum')
const login = require('./routes/login')
const share = require('./routes/share')
const signup = require('./routes/signup')
const userRoutes = require("./routes/userRoutes");
const docRoutes = require("./routes/uploadRoute")

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Middleware
app.use(express.json());
app.use(cors({
  origin: "http://localhost:3000",
  credentials: true
}));

// Session-Management – WICHTIG: Das muss VOR den Routeneinbindungen stehen!
app.use(session({
  secret: 'deinGeheimerSchluessel', // Wähle einen sicheren Schlüssel!
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false } // In der Entwicklung; in Produktion auf true setzen (bei HTTPS)
}));

// Statische Dokumente bereitstellen (CSS, Bilder)
app.use("/public", express.static(path.join(__dirname, "../public")));

// API-Routen für User (Login & Signup)
app.use("/api/users", userRoutes);
app.use("/api/upload", docRoutes);

// Routen für Subpages
app.use("/", homepage);
app.use("/browse", browse);
app.use("/login", login);
app.use("/signup", signup);
app.use("/impressum", impressum);
app.use("/share", share);

const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/StudyBuddy";

// Verbindung zur MongoDB
mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Verbunden mit MongoDB"))
  .catch((err) => console.error("Fehler bei der Verbindung zu MongoDB:", err));

// Server starten
app.listen(PORT, () => {
  console.log(`Server läuft auf http://localhost:${PORT}`);
});
