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
    // CHANGED: Destructuring passt jetzt zu den Formularfeldern der browse.html
    const { searchTerm, tag } = req.query;
    console.log("Searchterm:", searchTerm);
    console.log("Tag:", tag);

    // Falls kein Suchbegriff übergeben wurde, HTML-Datei zurückliefern
    if (!searchTerm) {
      return res.sendFile(path.join(__dirname, "../../static/browse.html"));
    }

    // CHANGED: Beide Kriterien in Query-Bedingungen berücksichtigen
    let queryConditions = [];
    
    // Suchbedingung: Titel oder Beschreibung muss den Suchbegriff enthalten
    queryConditions.push({
      $or: [
        { title: { $regex: ".*" + searchTerm + ".*", $options: "i" } },
        { description: { $regex: ".*" + searchTerm + ".*", $options: "i" } }
      ]
    });
    
    // Tag-Bedingung hinzufügen, falls ein Tag ausgewählt wurde
    if (tag && tag.trim() !== "") {
      queryConditions.push({ tag: tag.trim() });
    }
    
    const query = queryConditions.length > 0 ? { $and: queryConditions } : {};

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
router.get("/download", async (req, res) => { // route for downloading the document
  try {
    const docID = req.query.docID;// get the document ID from the query parameter (docID)
    console.log("User requested " + docID);
    const file = await Doc.findById(docID).exec();

    if (!file) {
      return res.status(400).send("The document you requested does not seem to exist");
    } else {
      console.log(file); // log the file object for debugging
      res.set({ // set the response headers
        "Content-Type": file.fileType, // set the content type to the file type of the document
        "Content-Disposition": `attachment; filename="${file.originalName}"` // set the file name for the download file to the original name of the document 
      });
      res.status(200).send(file.file); // send the file buffer as the response
    }
  } catch (err) {
    console.log(err);
    res.status(400).send("Invalid request");
  }
});

module.exports = router;