import API from "./api";

export const getComplaints = () => API.get("/complaints");
export const createComplaint = (data) => API.post("/complaints", data);
export const deleteComplaint = (id) => API.delete(`/complaints/${id}`);