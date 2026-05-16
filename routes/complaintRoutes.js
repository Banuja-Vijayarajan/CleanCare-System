import express from "express";
import upload from "../middleware/upload.js";

import {
  createComplaint,
  getComplaints,
  getComplaintById,
  updateComplaint,
  deleteComplaint
} from "../controllers/complaintController.js";

const router = express.Router();

// 👇 add image upload here
router.post("/", upload.single("image"), createComplaint);

router.get("/", getComplaints);
router.get("/:id", getComplaintById);
router.put("/:id", updateComplaint);
router.delete("/:id", deleteComplaint);

export default router;