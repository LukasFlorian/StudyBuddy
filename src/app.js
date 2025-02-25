// Importing external modules and namespaces:
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const session = require('express-session');
const fileUpload = require("express-fileupload");


// Importing internally designed routes:
// Subpages:
const browse = require('./routes/browse');
const homepage = require('./routes/homepage');
const impressum = require('./routes/impressum');
const login = require('./routes/login');
const share = require('./routes/share');
const signup = require('./routes/signup');
// API routes:
const userRoutes = require("./routes/userRoutes");
const docRoutes = require("./routes/uploadRoute");

// App as express instance
const app = express();
// Environment variables:
const PORT = 3000;  // Port for the app to run on
const MONGO_URI = "mongodb://localhost:27017/StudyBuddy";  // MongoDB URI

// Middleware

app.use(express.json());
app.use(fileUpload()); // Required for file upload

// Session Management – IMPORTANT: Must come BEFORE route integrations
app.use(session({
  secret: 'porsche911', // Choosing a secure key
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false } // False in development, for HTTPS production -> set to true (however, this project relies solely on HTTP for the sake of implicity)
}));

// Routing for serving static files (CSS + Images; not HTML since user should not always be allowed to access all subpages without restrictions)
app.use("/public", express.static(path.join(__dirname, "../public")));

// API route for user management (login, singup)
app.use("/api/users", userRoutes);
// API route for document upload
app.use("/api/upload", docRoutes);

// Routes for subpages
app.use("/", homepage);
app.use("/browse", browse);
app.use("/login", login);
app.use("/signup", signup);
app.use("/impressum", impressum);
app.use("/share", share);


// Establishing MongoDB connection
mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Verbunden mit MongoDB"))
  .catch((err) => console.error("Fehler bei der Verbindung zu MongoDB:", err));

// Starting up server
app.listen(PORT, () => {
  console.log(`Server läuft auf http://localhost:${PORT}`);
});
