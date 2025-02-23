// Module imports
const express = require("express");
const Doc = require("../models/docModel");
const User = require("../models/userModel");

// router instantiation
const router = express.Router();



/*
Upload POST-Request logic:
- Client sends post request to api/upload with documentTitle, userID and the tags in the Body
- Server responds:
	200 in case of a successful upload
	400 in case of an invalid userID
	500 otherwise
*/
router.post("/", async (req, res) => { 
    try {
        const body = req.body;
        
        const fileObj = req.files.uploadFile; // express-fileupload for file handling
        // Making sure file was sent
        if (!fileObj) {
            return res.status(400).json({ message: "File is missing" });
        }
        // Destructuring into file contents and metadata
        const fileBuffer = fileObj.data;
        const fileType = fileObj.mimetype;
        const originalName = fileObj.name;
        
        // Destructuring request body
        const title = body.docTitle;
        const description = body.description;
        const tag = body.tag;
        const userID = body.userID;
        
        // Checking if user exists
        const user = await User.findById(userID).exec();
        if (!user) {
            return res.status(400).json({ message: "Your User ID does not exist" });
        }

        // Creating new document
        const uploadDate = new Date();
        const doc = new Doc({
            userID,
            title,
            uploadDate,
            description,
            file: fileBuffer,
            fileType,
            originalName,
            tag,
        });

        // Saving document to database
        await doc.save();
        return res.status(200).json({ message: "Doc saved successfully" });
    } catch (err) {
        // Error handling
        console.log(err);
        res.status(500).json({ message: "Server Error" });
    }
});

module.exports = router;