import { useState } from "react";
import API from "../services/api";
import "./LoginPage.css";

function LoginPage({ setUser, goToRegister }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    API.post("/auth/login", { username, password })
      .then(res => {
        localStorage.setItem("user", JSON.stringify(res.data));
        setUser(res.data);
      })
      .catch(() => alert("Login failed"));
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>CleanCare Login</h2>

        <input
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={login}>Login</button>

        <p
          style={{
            color: "#ccc",
            cursor: "pointer",
            marginTop: "10px",
            fontSize: "14px"
          }}
          onClick={goToRegister}
        >
          New user? Register here
        </p>
      </div>
    </div>
  );
}

export default LoginPage;