import { useState, useEffect } from "react";
import ComplaintPage from "./pages/ComplaintPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import AdminPage from "./pages/AdminPage";
import "./App.css";

function App() {
  const [user, setUser] = useState(null);
  const [showRegister, setShowRegister] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("user");
    if (saved) setUser(JSON.parse(saved));
  }, []);

  const handleSetUser = (u) => {
    localStorage.setItem("user", JSON.stringify(u));
    setUser(u);
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  // NOT LOGGED IN
  if (!user) {
    return showRegister ? (
      <RegisterPage
        setUser={handleSetUser}
        goToLogin={() => setShowRegister(false)}
      />
    ) : (
      <LoginPage
        setUser={handleSetUser}
        goToRegister={() => setShowRegister(true)}
      />
    );
  }

  // LOGGED IN
  return (
    <div>
      <div className="topbar">
        <h3>CleanCare</h3>
        <button className="logout-btn" onClick={logout}>
          Logout
        </button>
      </div>

      {user.role === "admin" ? (
        <AdminPage />
      ) : (
        <ComplaintPage user={user} />
      )}
    </div>
  );
}

export default App;