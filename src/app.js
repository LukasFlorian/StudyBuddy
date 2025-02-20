require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const userRoutes = require("./routes/userRoutes");

const app = express();
const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/yourdatabase";

// Middleware
app.use(express.json());
app.use(cors());

// Verbindung zur MongoDB
mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Verbunden mit MongoDB"))
  .catch((err) => console.error("Fehler bei der Verbindung zu MongoDB:", err));
  

// Statische Dateien bereitstellen (HTML, CSS, Bilder)
app.use(express.static(path.join(__dirname, "../static"))); // HTML-Dateien
app.use("/public", express.static(path.join(__dirname, "../public"))); // Statische Assets (CSS, JS, Images)

// API-Routen für User (Login & Signup)
app.use("/api/users", userRoutes);

// Standardroute für die Startseite (Homepage)
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../static/homepage.html"));
});

// Server starten
app.listen(PORT, () => {
  console.log(`Server läuft auf http://localhost:${PORT}`);
});
