// module imports

const express = require("express");
const path = require("path");
const Doc = require("../models/docModel");
const User = require("../models/userModel");

// router instantiation
const router = express.Router();

/*
GET-Request for document search:
- Client sends GET-request with the search term and (optional) tags as query
- Response is JSON in format { numDocs: number, documents: [ { docID, docTitle, docDescription, docTag, docAuthor, docDate, ... }, ... ] }
*/
router.get('/', async (req, res) => {
  console.log("User opening browse subpage");
  try {
    // Destructuring of query parameters
    const { searchTerm, tags } = req.query;
    console.log("Searchterm:", searchTerm);
    console.log("Tags:", tags);

    // Return HTML page if no search term was given
    if (!searchTerm) {
      return res.sendFile(path.join(__dirname, "../../static/browse.html"));
    }


    // Base query for search term (document is a match if titel or description contains search term)
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

    // Only checking if tag matches if tag is given
    if (tags && tags.trim() !== "") {
      query.tag = { $in: tags.split(",").map(t => t.trim()) };
    }

    // Find all matching documents and projecting relevant information
    const matches = await Doc.find(query, {
      userID: 1,
      title: 1,
      uploadDate: 1,
      description: 1,
      tag: 1
    }).exec();

    // Populate with user info
    const populatedMatches = await Doc.populate(matches, {
      path: "userID",
      model: User,
      select: "firstName"
    });

    // Mapping onto format expected by frontend
    const documents = populatedMatches.map(doc => ({
      docID: doc._id,
      docTitle: doc.title,
      docDescription: doc.description,
      docTag: doc.tag,
      docAuthor: doc.userID.firstName,
      docDate: doc.uploadDate
    }));

    console.log("Matching documents:", populatedMatches);
    // sending response back to client
    res.status(200).json({ numDocs: documents.length, documents });
  } catch (err) {
    // error handling
    console.log(err);
    res.status(400).json({ numDocs: 0, documents: [] });
  }
});

/*
POST request for serving browse page
- reason for using POST instead of GET to serve the page is that the GET response is already in use for sending the matching documents
- Since each request only allows one HTTP response and because HTML and JSON can't be sent in the same response, we need to use POST to serve the page
- Better solution would have been to use a template engine like ejs or pug to serve the page, so that the template engine can render the HTML with the matching document
- Reason this wasn't done: Frontend had already been set up using HTML, thus using POST for serving the page was the faster way to implement this feature
*/
router.post("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../../static/browse.html"));
});

/*
GET request for downloading a document:
- Client sends GET request with docID as query parameter
- If the document exists, the file-buffer with appropriate headers is returned (download will be triggered)
- Otherwise, status 400 is returned
Route: /browse/download
*/
router.get("/download", async (req, res) => {
  try {
    // Use of the docID as a query parameter 
    const docID = req.query.docID;
    console.log("User requested " + docID);

    // Find the document with the given ID
    const file = await Doc.findById(docID).exec();

    // Checking if the document exists
    if (!file) {
      // If the document does not exist, return a status code of 400
      return res.status(400).send("The document you requested does not seem to exist");
    } else {
      // If the document exists, send it to the client
      console.log(file);
      // Configuring the response headers
      res.set({
        "Content-Type": "file.fileType", // "application/octet-stream" becomes "file.fileType" to get the file type
        "Content-Disposition": `attachment; filename="${file.originalName}"` // original filename
      });

      // Sending the file to the client
      res.status(200).send(file.file);
    }
  } catch (err) {
    // Error handling
    console.log(err);
    res.status(400).send("Invalid request");
  }
});

module.exports = router;