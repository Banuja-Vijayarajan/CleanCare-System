import { useEffect, useState } from "react";
import API from "../services/api";

function AdminPage() {
  const [complaints, setComplaints] = useState([]);

  const fetchData = () => {
    API.get("/complaints").then(res => setComplaints(res.data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const updateStatus = (id, status) => {
    API.put(`/complaints/${id}/status`, { status }).then(fetchData);
  };

  const assign = (id) => {
    const name = prompt("Assign staff:");
    if (!name) return;

    API.put(`/complaints/${id}/assign`, {
      assignedTo: name
    }).then(fetchData);
  };

  const del = (id) => {
    API.delete(`/complaints/${id}`).then(fetchData);
  };

  return (
    <div className="container">
      <h2 className="title">Admin Dashboard</h2>

      <div className="card-container">
        {complaints.map(c => (
          <div className="card" key={c._id}>
            <h3>{c.title}</h3>
            <p>{c.description}</p>
            <p>{c.location}</p>

            <p><strong>Status:</strong> {c.status}</p>
            <p><strong>Assigned:</strong> {c.assignedTo || "None"}</p>

            <select
              value={c.status}
              onChange={(e) => updateStatus(c._id, e.target.value)}
            >
              <option value="pending">Pending</option>
              <option value="in-progress">In Progress</option>
              <option value="completed">Completed</option>
            </select>

            <br /><br />
            <button onClick={() => assign(c._id)}>Assign</button>
            <button onClick={() => del(c._id)} style={{marginLeft:"10px"}}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminPage;