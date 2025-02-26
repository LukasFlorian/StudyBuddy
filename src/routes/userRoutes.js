// module imports
const express = require("express");
const bcrypt = require("bcryptjs");
const User = require("../models/userModel");

// router instantiation
const router = express.Router();

// Signup
router.post('/signup', async (req, res) => {
  try {
    // Destructuring request body
    const { firstName, email, password } = req.body;

    // Making sure body is valid
    if (!firstName || !email || !password) {
      return res.status(400).json({ msg: "All fields are required" });
    }

    // Checking whether an account with this email already exists
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ msg: "User already exists" });
    }

    // Hashing the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Creating a new user based on the model defined in src/models/userModel.js
    user = new User({
      firstName: firstName,
      email,
      password: hashedPassword
    });
    // Saving new user to the database
    await user.save();
    
    // Sending response to the client
    res.status(201).json({ msg: "User registered successfully" });
  } catch (err) {
    // Error handling
    console.error("Signup Error:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Login
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "E-Mail nicht gefunden" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Falsches Passwort" });
    }
    // Saved logged in user in session
    // Sets property req.session.user that saves user information in session and sends cookie to client
    req.session.user = {
      id: user._id,
      firstName: user.firstName,
      email: user.email
    };
    return res.status(200).json({
      message: "Login erfolgreich",
      firstName: user.firstName
    });
  } catch (error) {
    res.status(500).json({ message: "Serverfehler" });
  }
});

// Logout
router.post('/logout', (req, res) => {
  req.session.destroy(err => {
    if (err) {
      console.error("Logout Error:", err);
      return res.status(500).json({ message: "Logout Error" });
    }
    res.clearCookie('connect.sid'); // standard name for session cookie
    res.status(200).json({ message: "Logout erfolgreich" });
  });
});

// request session status (logged in or not)
router.get('/status', (req, res) => {
  if (req.session && req.session.user) {
    return res.status(200).json({
      loggedIn: true,
      user: req.session.user
    });
  } else {
    return res.status(200).json({ loggedIn: false });
  }
});

module.exports = router;
