import express from "express";
import Complaint from "../models/Complaint.js";

const router = express.Router();

// CREATE
router.post("/", async (req, res) => {
  const saved = await new Complaint(req.body).save();
  res.json(saved);
});

// GET ALL
router.get("/", async (req, res) => {
  const data = await Complaint.find();
  res.json(data);
});

// UPDATE STATUS
router.put("/:id/status", async (req, res) => {
  const updated = await Complaint.findByIdAndUpdate(
    req.params.id,
    { status: req.body.status },
    { new: true }
  );
  res.json(updated);
});

// ASSIGN STAFF 
router.put("/:id/assign", async (req, res) => {
  const updated = await Complaint.findByIdAndUpdate(
    req.params.id,
    { assignedTo: req.body.assignedTo },
    { new: true }
  );
  res.json(updated);
});

// DELETE
router.delete("/:id", async (req, res) => {
  await Complaint.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
});

export default router;