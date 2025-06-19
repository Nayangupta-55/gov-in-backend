import express from 'express';
import User from '../models/User.js';

const router = express.Router();

router.post('/test', async (req, res) => {
  try {
    const user = new User(req.body); // Create user document
    await user.save();               // Save to MongoDB

    console.log("✅ User saved:", user);
    res.status(201).json({ message: "Registration successful!", user });
  } catch (error) {
    console.error("❌ Error saving user:", error);
    res.status(500).json({ message: "Error saving user data", error });
  }
});




//login bhai sab app hp 
router.post('/login', async (req, res) => {
  const { email, password } = req.body; // Destructure email and password from request body

  try {
    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Check if password matches
    if (user.password !== password) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    console.log("✅ User logged in:", user);
    res.status(200).json({ message: "Login successful!", user });
  } catch (error) {
    console.error("❌ Error logging in:", error);
    res.status(500).json({ message: "Error logging in", error });
  }
});
export default router;
