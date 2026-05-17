import { useState } from "react";
import API from "../services/api";
import "./LoginPage.css";

function RegisterPage({ setUser, goToLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const register = () => {
    API.post("/auth/register", {
      username,
      password,
      role: "student"
    })
      .then(() => {
        alert("Registered successfully!");
        goToLogin(); // 👈 THIS FIXES YOUR ISSUE
      })
      .catch(() => alert("Registration failed"));
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Register</h2>

        <input
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={register}>Register</button>

        <p
          style={{ color: "#ccc", cursor: "pointer", marginTop: "10px" }}
          onClick={goToLogin}
        >
          Already have an account? Login
        </p>
      </div>
    </div>
  );
}

export default RegisterPage;