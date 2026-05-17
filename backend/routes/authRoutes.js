import express from "express";
import User from "../models/User.js";

const router = express.Router();

// REGISTER
router.post("/register", async (req, res) => {
  const user = new User(req.body);
  const saved = await user.save();
  res.json(saved);
});

// LOGIN
router.post("/login", async (req, res) => {
  const user = await User.findOne({
    username: req.body.username,
    password: req.body.password
  });

  if (!user) return res.status(401).json({ message: "Invalid credentials" });

  res.json(user); // simple (no JWT to save time)
});

export default router;