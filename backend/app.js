import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import complaintRoutes from "./routes/complaintRoutes.js";
import authRoutes from "./routes/authRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

// ROUTES 🔥
app.use("/api/complaints", complaintRoutes);
app.use("/api/auth", authRoutes);

// TEST ROUTE
app.get("/test", (req, res) => {
  res.json({ message: "Backend working" });
});

// DB
mongoose.connect("mongodb://127.0.0.1:27017/cleancare")
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

// SERVER
app.listen(5000, () => {
  console.log("Server running on port 5000");
});