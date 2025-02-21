const express = require("express");
const router = express.Router();
const path = require('path');

router.get("/download", async (req, res) => {
    JSON.stringify(req.body);
    const fileName = req.query.fileName;
    console.log(fileName);
    res.sendFile(path.join(__dirname, "../../../data/documents", fileName));
});

module.exports = router;