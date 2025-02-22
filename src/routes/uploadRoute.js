const express = require("express");

const router = express.Router();
const Document = require("../models/docModel");
const User = require("../models/userModel");



/*
POST-Request für Upload:
•⁠  ⁠User schickt bei Button-Klick POST-Request an api/documents/upload mit documentTitle, userID und den Tags im Body
•⁠  ⁠⁠Ich schicke dir dann eine Meldung mit status
		200, wenn es geklappt hat
		400, wenn ich die userID nicht finden sollte (dürfte zwar nicht passieren, aber wäre der einzige nicht-serverseitige Fehler, der mir einfällt)
		500 sonst

auf Route /api/upload
*/
router.post("/", async (req, res) => {
    try {
        const file = req.files.file;
        const body = req.body;
        const title = body.docTitle;
        const description = body.description;
        const exercises = body.exercises;
        const summary = body.summary;
        const scribbledNotes = body.scribbledNotes;
        const userID = body.userID;
        const user = await User.findById(userID).exec();
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