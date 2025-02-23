// module imports
const express = require("express");
const path = require("path");

// router instantiation
const router = express.Router();


// Authenticication middleware:
// This middleware is executed before all other routes in this router.
router.use((req, res, next) => {
  if (req.session && req.session.user) {
    // Continue with next() if user is logged in
    next();
  } else {
    // Otherwise redirect to login page
    res.redirect("/login?redirect=share");
  }
});

// Document sharing route
router.get('/', (req, res) => {
    console.log("User opening share subpage");
    res.sendFile(path.join(__dirname, "../../static/share.html"));
});

module.exports = router;