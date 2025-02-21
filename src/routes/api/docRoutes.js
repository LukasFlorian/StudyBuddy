const express = require("express");

const router = express.Router();
const Document = require("../../models/docModel");
const User = require("../../models/userModel");
/*
Upload:
•⁠  ⁠User schickt bei Button-Klick POST-Request an api/documents/upload mit documentTitle, userID und den Tags im Body
•⁠  ⁠⁠Ich schicke dir dann eine Meldung mit status
		200, wenn es geklappt hat
		400, wenn ich die userID nicht finden sollte (dürfte zwar nicht passieren, aber wäre der einzige nicht-serverseitige Fehler, der mir einfällt)
		500 sonst

Download:
•⁠  ⁠User schickt eine GET-Request mit documentID als Query
•⁠  ⁠⁠Antwort ist Status 200 und direkt die Datei (Fenster mit Datei öffnet sich), wenn es sie gibt
•⁠  ⁠⁠Ansonsten Status 400, wenn es die Datei nicht gibt

Dokumenten-Suche
•⁠  ⁠User schickt GET-Request mit Suchbegriff und Tags als Query
•⁠  ⁠⁠Antwort ist Status 200 und Dokumentinfos im Format {“numDocs”: numDocs, “documents”: [document attributes docID, docTitle, docDescription, docTag, docAuthor, docDate]}, wenn es das Dokument gibt
•⁠  ⁠⁠Status 200 und numDocs = 0 und documents = [] wenn es keine Ergebnisse gibt
•⁠  ⁠⁠Status 400 für invalide Request
*/


/*
GET-Request für Download:
•⁠  ⁠User schickt eine GET-Request mit documentID als Query
•⁠  ⁠⁠Antwort ist Status 200 und direkt die Datei (Fenster mit Datei öffnet sich), wenn es sie gibt
•⁠  ⁠⁠Ansonsten Status 400, wenn es die Datei nicht gibt
*/
router.get("/download", async (req, res) => {
    try {
        JSON.stringify(req.body);
        const docID = req.query.docID;
        console.log(docID);
        const file = await Document.findById(docID).exec();
    
        if (!file) {
            return res.status(400).send("The document you requested does not seem to exist");
        }
        else {
            console.log(file);
            res.status(200).sendFile(file.file);
        }
    } catch (err) {
        console.log(err);
        return res.status(400).send("Invalid request");
    }
});

/*
POST-Request für Upload:
•⁠  ⁠User schickt bei Button-Klick POST-Request an api/documents/upload mit documentTitle, userID und den Tags im Body
•⁠  ⁠⁠Ich schicke dir dann eine Meldung mit status
		200, wenn es geklappt hat
		400, wenn ich die userID nicht finden sollte (dürfte zwar nicht passieren, aber wäre der einzige nicht-serverseitige Fehler, der mir einfällt)
		500 sonst
*/
router.post("/upload", async (req, res) => {
    try {
        const file = req.files.file;
        const body = req.body;
        const title = body.docTitle;
        const description = body.description;
        const exercises = body.exercises;
        const summary = body.summary;
        const scribbledNotes = body.scribbledNotes;
        const userID = body.userID;
        const user = await User.findById(userID);
        if (!user) {
            return res.status(400).json({ message: "Your User ID does not exist" });
        } else {
            const uploadDate = new Date();
            const doc = new Document({
                userID,
                title,
                uploadDate,
                description,
                file,
                exercises,
                summary,
                scribbledNotes
            });
            await doc.save();
            return res.status(200).json( { message: "Document saved successfully" });
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Server Error" });
    }
})


module.exports = router;