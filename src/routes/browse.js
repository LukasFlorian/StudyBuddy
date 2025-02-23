const express = require("express");
const path = require("path");
const Doc = require("../models/docModel");
const User = require("../models/userModel");

const router = express.Router();

/*
GET-Request für Suche
• User schickt GET-Request mit Suchbegriff und (optional) Tags als Query
• Wenn kein Suchbegriff vorhanden ist, wird die HTML-Seite (browse.html) zurückgegeben
• Ansonsten wird JSON im Format { numDocs: number, documents: [ { docID, docTitle, docDescription, docTag, docAuthor, docDate } ] } zurückgegeben
*/
router.get('/', async (req, res) => {
  console.log("User opening browse subpage");
  try {
    // Destructuring der Query-Parameter
    const { searchTerm, tags } = req.query;
    console.log("Searchterm:", searchTerm);
    console.log("Tags:", tags);

    // Falls kein Suchbegriff übergeben wurde, HTML-Datei zurückliefern
    if (!searchTerm) {
      return res.sendFile(path.join(__dirname, "../../static/browse.html"));
    }

    // Basis-Query für den Suchbegriff (im Titel oder in der Beschreibung)
    let query = {
      $or: [
        {
          title: {
            $regex: ".*" + searchTerm + ".*",
            $options: "i"
          }
        },
        {
          description: {
            $regex: ".*" + searchTerm + ".*",
            $options: "i"
          }
        }
      ]
    };

    // Tag-Bedingung nur hinzufügen, wenn auch Tags übergeben werden
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

    // Populate: Ergänze die User-Information (firstName)
    const populatedMatches = await Doc.populate(matches, {
      path: "userID",
      model: User,
      select: "firstName"
    });

    // Mapping auf das von frontend erwartete Format
    const documents = populatedMatches.map(doc => ({
      docID: doc._id,
      docTitle: doc.title,
      docDescription: doc.description,
      docTag: doc.tag,
      docAuthor: doc.userID.firstName,
      docDate: doc.uploadDate
    }));

    console.log("Matching documents:", populatedMatches);
    res.status(200).json({ numDocs: documents.length, documents });
  } catch (err) {
    console.log(err);
    res.status(400).json({ numDocs: 0, documents: [] });
  }
});

// Bei POST-Requests wird die Browse-HTML-Seite geliefert
router.post("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../../static/browse.html"));
});

/*
GET-Request für Download:
• User schickt GET-Request mit docID als Query-Parameter
• Falls das Dokument existiert, wird der Datei-Buffer mit passenden Headern zurückgegeben (Download wird ausgelöst)
• Andernfalls wird Status 400 zurückgegeben
Route: /browse/download
*/
router.get("/download", async (req, res) => {
  try {
    // Abfrage und Verwendung von "docID" als Query-Parameter 
    const docID = req.query.docID;
    console.log("User requested " + docID);
    const file = await Doc.findById(docID).exec();

    if (!file) {
      return res.status(400).send("The document you requested does not seem to exist");
    } else {
      console.log(file);
      // Header setzen, um den Download auszulösen
      res.set({
        "Content-Type": "file.fileType", /*"application/octet-stream" wird zu "file.fileType" geändert, um den fileTyp aufzurrufen*/
        "Content-Disposition": `attachment; filename="${file.originalName}"` // originaler Dateiname
      });
      res.status(200).send(file.file);
    }
  } catch (err) {
    console.log(err);
    res.status(400).send("Invalid request");
  }
});

module.exports = router;