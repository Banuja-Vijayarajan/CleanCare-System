import mongoose from "mongoose";

const complaintSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: String,
  location: String,
  imageBefore: String,
  imageAfter: String,
  status: {
    type: String,
    enum: ["pending", "in-progress", "completed"],
    default: "pending"
  },
  createdBy: String,
  assignedTo: {
  type: String,
  default: null
}
}, {
  timestamps: true
});

const Complaint = mongoose.model("Complaint", complaintSchema);

export default Complaint;