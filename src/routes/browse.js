const express = require("express");
const path = require("path");
const Doc = require("../models/docModel");
const User = require("../models/userModel");

const router = express.Router();

/*
GET-Request für Suche
• User schickt GET-Request mit Suchbegriff und Tags als Query
• Antwort ist Status 200 und Dokumentinfos im Format {"numDocs": numDocs, "documents": [...]}
• Falls keine Ergebnisse gefunden werden, wird numDocs = 0 und documents = []
• Status 400 für invalide Request

Route: /browse
*/
router.get('/', async (req, res) => {
    console.log("User opening browse subpage");
    try {
        const { searchTerm, tags } = req.query;
        console.log("Searchterm:", searchTerm);
        console.log("Tags:", tags);

        var matches = await Doc.find({
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
            ],
            tag: {
                $in: tags
            }
        }, {
            userID: 1,
            title: 1,
            uploadDate: 1,
            description: 1,
            tag: 1
        }).exec();

        // Populate user information based on userID in the matches array
        const populatedMatches = await Doc.populate(matches, {
            path: "userID",
            model: User,
            select: "firstName"
        });

        console.log(matches);
        res.status(200).json(populatedMatches);
    } catch (err) {
        console.log(err);
        res.status(400).json({ numDocs: 0, documents: [] });
    }
});

router.post("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../../static/browse.html"));
});

/*
GET-Request für Download:
- User schickt eine GET-Request mit documentID als Query
- Antwort ist Status 200 und direkt die Datei (sofern vorhanden)
- Andernfalls Status 400, wenn die Datei nicht existiert

Route: /browse/download
*/
router.get("/download", async (req, res) => {
    try {
        const docID = req.query.docID;
        console.log("User requested " + docID);
        const file = await Doc.findById(docID).exec();

        if (!file) {
            return res.status(400).send("The document you requested does not seem to exist");
        } else {
            console.log(file);
            // Falls file.file als Buffer gespeichert ist, musst du evtl. Header setzen und den Buffer senden:
            res.set({
              "Content-Type": "application/octet-stream",
              "Content-Disposition": `attachment; filename="${file.title || "document"}"`
            });
            res.status(200).send(file.file);
        }
    } catch (err) {
        console.log(err);
        return res.status(400).send("Invalid request");
    }
});

module.exports = router;