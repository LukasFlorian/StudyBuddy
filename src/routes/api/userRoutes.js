const express = require("express");
const bcrypt = require("bcryptjs");
const User = require("../../models/userModel");

const router = express.Router();

// Signup (Registrierung)
router.post('/signup', async (req, res) => {
  try {
    const { firstname, email, password } = req.body;

    if (!firstname || !email || !password) {
      return res.status(400).json({ msg: "All fields are required" });
    }

    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ msg: "User already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    user = new User({
      firstName: firstname,
      email,
      password: hashedPassword
    });

    await user.save();
    res.status(201).json({ msg: "User registered successfully" });

  } catch (err) {
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

    // Beispiel: Wenn du den "firstname" aus userModel zurückgeben willst:
    const firstname = user.firstName;
    const userID = user._id;

    // Oder du willst nur das Email-Präfix (alles vor dem "@"):
    const emailPrefix = email.split("@")[0];

    return res.status(200).json({
      message: "Login erfolgreich",
      firstname: firstname,
      userID: userID,
    });
  } catch (error) {
    res.status(500).json({ message: "Serverfehler" });
  }
});


module.exports = router;
