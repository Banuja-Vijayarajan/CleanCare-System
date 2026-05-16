import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import complaintRoutes from "./routes/complaintRoutes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// 🔥 MUST connect BEFORE routes are used heavily
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");

    app.listen(5000, () => {
      console.log("Server running on port 5000");
    });
  })
  .catch((err) => {
    console.log("MongoDB connection failed:", err);
  });

// Routes
app.use("/api/complaints", complaintRoutes);