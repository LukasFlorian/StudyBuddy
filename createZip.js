const fs = require('fs');
const path = require('path');
const archiver = require('archiver');

// Zielverzeichnis für die aktualisierten Dateien
const outputDir = path.join(__dirname, 'updatedProject');

// Erstelle das Verzeichnis, falls es noch nicht existiert
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

// Alle aktualisierten Dateien als String-Inhalte
const files = {
  'share.html': `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Share</title>
  <link rel="stylesheet" type="text/css" href="../public/css/style.css" />
  <link rel="icon" type="image/png" href="../public/img/favicon-96x96.png" sizes="96x96" />
  <link rel="icon" type="image/svg+xml" href="../public/img/favicon.svg" />
  <script src="../public/js/navbar.js" defer></script>
  <script src="../public/js/upload.js" defer></script>
</head>
<body>
  <header class="hp-header-container">
    <a href="./homepage" class="logo">
      <img id="logo" src="../public/img/logo.png" alt="Logo">
    </a>
    <nav class="navbar" id="navbar">
      <ul>
        <li class="nav-items"><a id="shareBtn" href="./share">Share</a></li>
        <li class="nav-items"><a href="./browse">Browse</a></li>
        <li class="nav-items" id="userMenu"><a id="loginLink" href="./login">Login</a></li>
      </ul>
    </nav>
  </header>
  <main>
    <section class="introduction">
      <h1>Share your notes by uploading them to our collection.</h1>
    </section>
    <div class="share-container">
      <form id="uploadForm" action="/api/upload" method="post" enctype="multipart/form-data">
        <div class="share-upload-card">
          <label for="title">Title:</label><br>
          <input type="text" id="title" name="docTitle" placeholder="Your title..."/>
        </div>
        <div class="share-upload-card">
          <label for="description">Description:</label><br>
          <input type="text" id="description" name="description" placeholder="A short description of your file, e.g. The Pythagorean Theorem, ..."/>
        </div>
        <div class="share-upload-card">
          <h2>Tags:</h2>
          <p>Please choose the fitting tag for your file.</p>
          <div class="share-card-radio">
            <div>
              <input type="radio" id="tag1" name="tag" value="exercises">
              <label for="tag1">Exercises</label>
            </div>
            <div>
              <input type="radio" id="tag2" name="tag" value="summary">
              <label for="tag2">Summary</label>
            </div>
            <div>
              <input type="radio" id="tag3" name="tag" value="scribbledNotes">
              <label for="tag3">Scribbled Notes</label>
            </div>
          </div>
        </div>
        <div class="share-upload-card">
          <label for="upload">File:</label><br>
          <input type="file" id="upload" name="uploadFile" accept="image/*, application/pdf" />
        </div>
        <div class="share-upload-button">
          <button type="submit" id="uploadBtn" class="hp-button">Share</button>
        </div>
      </form>
    </div>
  </main>
  <footer>
    <h2>Impressum</h2>
    <a href="./impressum">
      <p>About Us</p>
    </a>
  </footer>
</body>
</html>`,

  'impressum.html': `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>About Us</title>
  <link rel="stylesheet" type="text/css" href="../public/css/style.css" />
  <link rel="icon" type="image/png" href="../public/img/favicon-96x96.png" sizes="96x96" />
  <link rel="icon" type="image/svg+xml" href="../public/img/favicon.svg" />
  <script src="../public/js/navbar.js" defer></script>
</head>
<body>
  <header class="hp-header-container">
    <a href="./homepage" class="logo">
      <img id="logo" src="../public/img/logo.png" alt="Logo">
    </a>
    <div class="search">
      <form action="" class="searchbar" method="get">
        <label>
          <input type="text" placeholder="search for notes" name="s">
        </label>
        <button type="submit"> <img src="../public/img/search.png" alt=""> </button>
      </form>
    </div>
    <nav class="navbar" id="navbar">
      <ul>
        <li class="nav-items"><a id="shareBtn" href="./share">Share</a></li>
        <li class="nav-items"><a href="./browse">Browse</a></li>
        <li class="nav-items" id="userMenu"><a id="loginLink" href="./login">Login</a></li>
      </ul>
    </nav>
  </header>
  <main>
    <section class="introduction">
      <h1>About us</h1>
    </section>
    <section class="impressum-container">
      <h2>Legal Notice</h2>
      <p>Provider:<br />Team StudyBuddy<br />Fallenbrunnen 2<br />88045 Friedrichshafen</p>
      <p>Contact:<br />E-Mail: mail@mustermann.de</p>
    </section>
  </main>
  <footer>
    <h2>Impressum</h2>
    <a href="./impressum">
      <p>About Us</p>
    </a>
  </footer>
</body>
</html>`,

  'signup.html': `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Sign Up</title>
  <link rel="stylesheet" type="text/css" href="../public/css/style.css" />
  <link rel="icon" type="image/png" href="../public/img/favicon-96x96.png" sizes="96x96" />
  <link rel="icon" type="image/svg+xml" href="../public/img/favicon.svg" />
  <script type="text/javascript" src="../public/js/validation.js" defer></script>
  <script src="../public/js/navbar.js" defer></script>
</head>
<body>
  <header class="hp-header-container">
    <a href="./homepage" class="logo">
      <img id="logo" src="../public/img/logo.png" alt="Logo">
    </a>
    <nav class="navbar" id="navbar">
      <ul>
        <li class="nav-items"><a id="shareBtn" href="./share">Share</a></li>
        <li class="nav-items"><a href="./browse">Browse</a></li>
        <li class="nav-items" id="userMenu"><a id="loginLink" href="./login">Login</a></li>
      </ul>
    </nav>
  </header>
  <main>
    <div class="signup-container">
      <div class="signup">
        <h1>Sign Up</h1>
        <p id="errorMessage"></p>
        <form id="signupForm">
          <div>
            <label for="firstNameInput">
              <!-- SVG Icon -->
            </label>
            <input required type="text" name="firstName" id="firstNameInput" placeholder="Firstname">
          </div>
          <div>
            <label for="emailInput">
              <!-- SVG Icon -->
            </label>
            <input required type="email" name="email" id="emailInput" placeholder="Email">
          </div>
          <div>
            <label for="passwordInput">
              <!-- SVG Icon -->
            </label>
            <input required type="password" name="password" id="passwordInput" placeholder="Password">
          </div>
          <div>
            <label for="repeatPasswordInput">
              <!-- SVG Icon -->
            </label>
            <input required type="password" name="repeatPassword" id="repeatPasswordInput" placeholder="Repeat Password">
          </div>
          <button type="submit" class="login-button">Sign up</button>
        </form>
        <p>Already have an account? <a href="./login">Login</a></p>
      </div>
    </div>
  </main>
  <footer>
    <h2>Impressum</h2>
    <a href="./impressum">
      <p>About Us</p>
    </a>
  </footer>
</body>
</html>`,

  'homepage.html': `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>StudyBuddy</title>
  <link rel="stylesheet" type="text/css" href="../public/css/style.css" />
  <link rel="icon" type="image/png" href="../public/img/favicon-96x96.png" sizes="96x96" />
  <link rel="icon" type="image/svg+xml" href="../public/img/favicon.svg" />
  <script src="../public/js/navbar.js" defer></script>
</head>
<body>
  <header class="hp-header-container">
    <a href="./homepage" class="logo">
      <img id="logo" src="../public/img/logo.png" alt="Logo">
    </a>
    <nav class="navbar" id="navbar">
      <ul>
        <li class="nav-items"><a id="shareBtn" href="./share">Share</a></li>
        <li class="nav-items"><a href="./browse">Browse</a></li>
        <li class="nav-items" id="userMenu"><a id="loginLink" href="./login">Login</a></li>
      </ul>
    </nav>
  </header>
  <main>
    <section class="introduction">
      <h1>Share your notes with friends, students and learners all over the world.</h1>
    </section>
    <svg class="hp-svg" width="17vw" height="27vw" viewBox="-13 0 148 148" fill="none" xmlns="http://www.w3.org/2000/svg" transform="matrix(-1, 0, 0, 1, 0, 0)rotate(45)" stroke="#ca59c5">
      <!-- SVG content -->
    </svg>
    <section class="hp-main-container">
      <div class="hp-main-cards">
        <button class="hp-button" onclick="window.location.href='./browse';">Browse Notes</button>
        <p>search for notes in our collection</p>
      </div>
      <img src="../public/img/hp_card2.jpeg" alt="" class="hp-main-cards">
      <img src="../public/img/hp_card1.jpeg" alt="" class="hp-main-cards">
      <div class="hp-main-cards">
        <button class="hp-button" onclick="window.location.href='./share';">Share Notes</button>
        <p>share your notes with the world</p>
      </div>
    </section>
  </main>
  <footer>
    <h2>Impressum</h2>
    <a href="./impressum">
      <p>About Us</p>
    </a>
  </footer>
</body>
</html>`,

  'browse.html': `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Browse</title>
  <link rel="stylesheet" type="text/css" href="../public/css/style.css" />
  <link rel="icon" type="image/png" href="../public/img/favicon-96x96.png" sizes="96x96" />
  <link rel="icon" type="image/svg+xml" href="../public/img/favicon.svg" />
  <script src="../public/js/navbar.js" defer></script>
  <script src="../public/js/frontendBrowse.js" defer></script>
</head>
<body>
  <header class="hp-header-container">
    <a href="./homepage" class="logo">
      <img id="logo" src="../public/img/logo.png" alt="Logo" />
    </a>
    <nav class="navbar" id="navbar">
      <ul>
        <li class="nav-items"><a id="shareBtn" href="./share">Share</a></li>
        <li class="nav-items"><a href="./browse">Browse</a></li>
        <li class="nav-items" id="userMenu"><a id="loginLink" href="./login">Login</a></li>
      </ul>
    </nav>
  </header>
  <main>
    <section class="introduction">
      <h1>Browse through our collection.</h1>
    </section>
    <div class="browse-search">
      <form id="searchForm" class="browse-searchbar" method="get" action="#">
        <label>
          <input type="text" placeholder="search for notes" name="searchTerm" required />
        </label>
        <button type="submit" class="browse-searchbar-button">
          <img src="../public/img/search.png" alt="" />
        </button>
      </form>
    </div>
    <div class="browse-container">
      <div class="browse-sidebar">
        <h2>Filter:</h2>
        <div class="browse-filter">
          <div>
            <input type="radio" id="tag1" name="tag" value="exercises" form="searchForm"/>
            <label for="tag1">Exercises</label>
          </div>
          <div>
            <input type="radio" id="tag2" name="tag" value="summary" form="searchForm"/>
            <label for="tag2">Summary</label>
          </div>
          <div>
            <input type="radio" id="tag3" name="tag" value="scribbledNotes" form="searchForm"/>
            <label for="tag3">Scribbled Notes</label>
          </div>
          <button type="submit" id="filterButton" form="searchForm">Apply Filter</button>
        </div>
      </div>
      <div class="browse-main">
        <div class="browse-results">
          <h1>Search results</h1>
        </div>
        <div class="browse-card-container" id="searchResults">
          <div class="browse-grid-container">
            <div class="browse-card">
              <img src="../public/img/browse_placeholder.png" alt="search result">
              <p id="browseCardTitle">Title</p>
              <p id="browseCardDescription">Description</p>
              <p id="browseCardAuthor">Author</p>
            </div>
            <button type="submit" class="download-btn">Download</button>
          </div>
        </div>
      </div>
    </div>
  </main>
  <footer>
    <h2>Impressum</h2>
    <a href="./impressum">
      <p>About Us</p>
    </a>
  </footer>
</body>
</html>`,

  'login.html': `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Login</title>
  <link rel="stylesheet" type="text/css" href="../public/css/style.css" />
  <link rel="icon" type="image/png" href="../public/img/favicon-96x96.png" sizes="96x96" />
  <link rel="icon" type="image/svg+xml" href="../public/img/favicon.svg" />
  <script type="text/javascript" src="../public/js/validation.js" defer></script>
  <script src="../public/js/navbar.js" defer></script>
</head>
<body>
  <header class="hp-header-container">
    <a href="./homepage" class="logo">
      <img id="logo" src="../public/img/logo.png" alt="Logo">
    </a>
    <nav class="navbar" id="navbar">
      <ul>
        <li class="nav-items"><a id="shareBtn" href="./share">Share</a></li>
        <li class="nav-items"><a href="./browse">Browse</a></li>
        <li class="nav-items" id="userMenu"><a id="loginLink" href="./login">Login</a></li>
      </ul>
    </nav>
  </header>
  <main>
    <div class="signup-container">
      <div class="signup">
        <h1>Login</h1>
        <p id="errorMessage"></p>
        <form id="loginForm" method="POST">
          <div>
            <label for="emailInput">
              <!-- SVG Icon -->
            </label>
            <input required type="email" name="email" id="emailInput" placeholder="Email">
          </div>
          <div>
            <label for="passwordInput">
              <!-- SVG Icon -->
            </label>
            <input required type="password" name="password" id="passwordInput" placeholder="Password">
          </div>
          <button type="submit" class="login-button">Login</button>
        </form>
        <p>New? <a href="./signup">Create an account</a></p>
      </div>
    </div>
  </main>
  <footer>
    <h2>Impressum</h2>
    <a href="./impressum">
      <p>About Us</p>
    </a>
  </footer>
</body>
</html>`,

  'uploadRoute.js': `const express = require("express");
const Doc = require("../models/docModel");
const User = require("../models/userModel");
const router = express.Router();

router.post("/", async (req, res) => { 
    try {
        const body = req.body;
        const fileObj = req.files.uploadFile;
        if (!fileObj) {
            return res.status(400).json({ message: "File is missing" });
        }
        const fileBuffer = fileObj.data;
        const fileType = fileObj.mimetype;
        const originalName = fileObj.name;
        
        const title = body.docTitle;
        const description = body.description;
        const tag = body.tag;
        const userId = body.userId;
        
        const user = await User.findById(userId).exec();
        if (!user) {
            return res.status(400).json({ message: "Your User ID does not exist" });
        }
        const uploadDate = new Date();
        const doc = new Doc({
            userId,
            title,
            uploadDate,
            description,
            file: fileBuffer,
            fileType,
            originalName,
            tag,
        });
        await doc.save();
        return res.status(200).json({ message: "Doc saved successfully" });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Server Error" });
    }
});

module.exports = router;`,

  'userRoutes.js': `const express = require("express");
const bcrypt = require("bcryptjs");
const User = require("../models/userModel");
const router = express.Router();

router.post('/signup', async (req, res) => {
  try {
    const { firstName, email, password } = req.body;
    if (!firstName || !email || !password) {
      return res.status(400).json({ msg: "All fields are required" });
    }
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ msg: "User already exists" });
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    user = new User({
      firstName: firstName,
      email,
      password: hashedPassword
    });
    await user.save();
    res.status(201).json({ msg: "User registered successfully" });
  } catch (err) {
    console.error("Signup Error:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
module.exports = router;`,

  'browse.js': `const express = require("express");
const path = require("path");
const Doc = require("../models/docModel");
const User = require("../models/userModel");
const router = express.Router();

router.get('/', async (req, res) => {
  console.log("User opening browse subpage");
  try {
    const { searchTerm, tags } = req.query;
    if (!searchTerm) {
      return res.sendFile(path.join(__dirname, "../../static/browse.html"));
    }
    let query = {
      $or: [
        { title: { $regex: ".*" + searchTerm + ".*", $options: "i" } },
        { description: { $regex: ".*" + searchTerm + ".*", $options: "i" } }
      ]
    };
    if (tags && tags.trim() !== "") {
      query.tag = { $in: tags.split(",").map(t => t.trim()) };
    }
    const matches = await Doc.find(query, {
      userID: 1,
      title: 1,
      uploadDate: 1,
      description: 1,
      tag: 1
    }).exec();
    const populatedMatches = await Doc.populate(matches, {
      path: "userId",
      model: User,
      select: "firstName"
    });
    const documents = populatedMatches.map(doc => ({
      docID: doc._id,
      docTitle: doc.title,
      docDescription: doc.description,
      docTag: doc.tag,
      docAuthor: doc.userId.firstName,
      docDate: doc.uploadDate
    }));
    res.status(200).json({ numDocs: documents.length, documents });
  } catch (err) {
    console.log(err);
    res.status(400).json({ numDocs: 0, documents: [] });
  }
});

router.post("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../../static/browse.html"));
});

router.get("/download", async (req, res) => {
  try {
    const docID = req.query.docID;
    const file = await Doc.findById(docID).exec();
    if (!file) {
      return res.status(400).send("The document you requested does not seem to exist");
    } else {
      res.set({
        "Content-Type": file.fileType,
        "Content-Disposition": \`attachment; filename="\${file.originalName}"\`
      });
      res.status(200).send(file.file);
    }
  } catch (err) {
    console.log(err);
    res.status(400).send("Invalid request");
  }
});
module.exports = router;`,

  'docModel.js': `const mongoose = require("mongoose");
const docSchema = new mongoose.Schema({
  userId: { type: mongoose.Types.ObjectId, required: true },
  title: { type: String, required: true },
  uploadDate: { type: Date, required: true },
  description: { type: String, required: true },
  file: { type: Buffer, required: true },
  fileType: { type: String, required: true },
  originalName: { type: String, required: true },
  tag: { type: String, required: false },
});
module.exports = mongoose.model("Doc", docSchema);`,

  'navbar.js': `document.addEventListener("DOMContentLoaded", () => {
  fetch('/api/users/status', { credentials: 'include' })
    .then(response => response.json())
    .then(data => {
      const navbar = document.getElementById("navbar");
      if (data.loggedIn && navbar) {
        navbar.innerHTML = \`
          <ul>
            <li class="nav-items"><a id="shareBtn" href="./share">Share</a></li>
            <li class="nav-items"><a href="./browse">Browse</a></li>
            <li class="nav-items">Hallo \${data.user.firstName}</li>
            <li class="nav-items" id="logout">Logout</li>
          </ul>
        \`;
        const logoutEl = navbar.querySelector("#logout");
        logoutEl.addEventListener("click", async () => {
          try {
            const res = await fetch('/api/users/logout', {
              method: 'POST',
              credentials: 'include'
            });
            if (res.ok) {
              window.location.href = "/login";
            }
          } catch (error) {
            console.error("Logout Error:", error);
          }
        });
      }
    })
    .catch(err => console.error("Error fetching user status:", err));

  const shareBtn = document.getElementById("shareBtn");
  if (shareBtn) {
    shareBtn.addEventListener("click", async (e) => {
      e.preventDefault();
      try {
        const response = await fetch('/api/users/status', { credentials: 'include' });
        const data = await response.json();
        if (data.loggedIn) {
          window.location.href = "/share";
        } else {
          window.location.href = "/login?redirect=share";
        }
      } catch (error) {
        console.error("Fehler beim Prüfen des Login-Status:", error);
        window.location.href = "/login?redirect=share";
      }
    });
  }
});`,

  'upload.js': `document.getElementById('uploadBtn').addEventListener('click', async function(event) {
  event.preventDefault();
  const documentTitle = document.getElementById('title').value;
  const documentDescription = document.getElementById('description').value;
  const uploadFile = document.getElementById('upload').files[0];
  const selectedTag = document.querySelector('input[name="tag"]:checked');
  if (!selectedTag) {
    alert('Bitte wähle einen Tag aus.');
    return;
  }
  const tag = selectedTag.value;
  try {
    const response = await fetch('/api/users/status');
    const status = await response.json();
    if (status.loggedIn) {
      const userID = status.user.id;
      const formData = new FormData();
      formData.append('docTitle', documentTitle);
      formData.append('description', documentDescription);
      formData.append('uploadFile', uploadFile);
      formData.append('tag', tag);
      formData.append('userId', userID);
      const uploadResponse = await fetch('/api/upload', {
        method: 'POST',
        body: formData
      });
      if (uploadResponse.status === 200) {
        alert('Dokument erfolgreich hochgeladen!');
        document.getElementById('uploadForm').reset();
      } else if (uploadResponse.status === 400) {
        alert('Fehler: User ID nicht gefunden.');
      } else {
        alert('Serverfehler. Bitte versuche es später erneut.');
      }
    } else {
      alert('Du bist nicht eingeloggt.');
    }
  } catch (error) {
    console.error('Fehler:', error);
    alert('Netzwerkfehler. Überprüfe deine Verbindung.');
  }
});`,

  'validation.js': `document.addEventListener('DOMContentLoaded', () => {
  const signupForm = document.getElementById('signupForm');
  const loginForm = document.getElementById('loginForm');
  
  if (signupForm) {
    signupForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const firstName = document.getElementById('firstNameInput').value;
      const email = document.getElementById('emailInput').value;
      const password = document.getElementById('passwordInput').value;
  
      try {
        const res = await fetch('/api/users/signup', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ firstName, email, password })
        });
        const data = await res.json();
        if (res.ok) {
          alert('Registrierung erfolgreich!');
          window.location.href = './login';
        } else {
          alert(\`Fehler: \${data.message}\`);
        }
      } catch (error) {
        alert('Serverfehler!');
        console.error('Fehler beim Signup:', error);
      }
    });
  }
  
  if (loginForm) {
    loginForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const email = document.getElementById('emailInput').value;
      const password = document.getElementById('passwordInput').value;
  
      try {
        const res = await fetch('/api/users/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          credentials: 'include',
          body: JSON.stringify({ email, password })
        });
        const data = await res.json();
        if (res.ok) {
          localStorage.setItem("firstName", data.firstName);
          alert("Login erfolgreich!");
          window.location.href = "./homepage";
        } else {
          alert(\`Fehler: \${data.message}\`);
        }
      } catch (error) {
        alert('Serverfehler!');
        console.error('Fehler beim Login:', error);
      }
    });
  }
});`
};

// Schreibe alle Dateien in das Zielverzeichnis
for (const [filename, content] of Object.entries(files)) {
  const filePath = path.join(outputDir, filename);
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Created ${filename}`);
}

// Erstelle eine ZIP-Datei aus dem erstellten Verzeichnis
const zipFilePath = path.join(__dirname, 'updatedProject.zip');
const output = fs.createWriteStream(zipFilePath);
const archive = archiver('zip', { zlib: { level: 9 } });

output.on('close', () => {
  console.log(`Archive created: ${zipFilePath} (${archive.pointer()} total bytes)`);
});

archive.on('error', (err) => {
  throw err;
});

archive.pipe(output);
archive.directory(outputDir, false);
archive.finalize();
