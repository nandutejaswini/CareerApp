const express = require('express');
const bcrypt = require('bcryptjs');
const router = express.Router();
const User = require('../models/user'); // Adjust the path if necessary

// User Registration
router.post('/register', async (req, res) => {
  try {
    // Hash the password
    const hashedPassword = await bcrypt.hash(req.body.password, 8);
    // Create a new user with the hashed password
    const newUser = new User({
      ...req.body,
      password: hashedPassword,
    });
    await newUser.save();
    res.status(201).send({ user: newUser._id });
  } catch (error) {
    res.status(400).send(error);
  }
});

// User Login
router.post('/login', async (req, res) => {
  try {
    // Find the user by email
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(404).send({ error: "User not found" });
    }
    // Compare the submitted password with the stored hashed password
    const isMatch = await bcrypt.compare(req.body.password, user.password);
    if (!isMatch) {
      return res.status(400).send({ error: "Invalid credentials" });
    }
    // Login successful - for now, just return a success message
    // In a real application, you might return a JWT token here
    res.status(200).send({ message: "Login successful", user: user._id });
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
