import { useEffect, useState } from "react";
import API from "../services/api";
import "./ComplaintPage.css";

function ComplaintPage({ user }) {
  const [complaints, setComplaints] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");

  // FETCH DATA
  const fetchData = () => {
    API.get("/complaints")
      .then(res => {
        // show only student's complaints
        const filtered = res.data.filter(
          c => c.createdBy === user.username
        );
        setComplaints(filtered);
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    fetchData();
  }, []);

  // CREATE COMPLAINT
  const submit = (e) => {
    e.preventDefault();

    API.post("/complaints", {
      title,
      description,
      location,
      createdBy: user.username
    })
      .then(() => {
        setTitle("");
        setDescription("");
        setLocation("");
        fetchData();
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="container">
      <h2 className="title">CleanCare Requests</h2>

      {/* FORM */}
      <form onSubmit={submit} className="form">
        <input
          placeholder="Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
          required
        />

        <input
          placeholder="Description"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />

        <input
          placeholder="Location"
          value={location}
          onChange={e => setLocation(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>

      {/* LIST */}
      <div className="card-container">
        {complaints.length === 0 ? (
          <p className="empty">No complaints found</p>
        ) : (
          complaints.map(c => (
            <div className="card" key={c._id}>
              <h3>{c.title}</h3>
              <p>{c.description}</p>
              <p>{c.location}</p>

              <p>
                <strong>Status:</strong> {c.status}
              </p>

              {c.assignedTo && (
                <p>
                  <strong>Assigned to:</strong> {c.assignedTo}
                </p>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default ComplaintPage;