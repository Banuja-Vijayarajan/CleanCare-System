import Complaint from "../models/Complaint.js";

// CREATE
export const createComplaint = async (req, res) => {
  try {
    const complaint = await Complaint.create({
      ...req.body,
      imageBefore: req.file ? req.file.path.replace(/\\/g, "/") : null
    });

    res.status(201).json(complaint);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// READ
export const getComplaints = async (req, res) => {
  try {
    const complaints = await Complaint.find();
    res.json(complaints);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getComplaintById = async (req, res) => {
  try {
    const complaint = await Complaint.findById(req.params.id);
    res.json(complaint);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// UPDATE
export const updateComplaint = async (req, res) => {
  try {
    const updated = await Complaint.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updated);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// DELETE
export const deleteComplaint = async (req, res) => {
  try {
    await Complaint.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};