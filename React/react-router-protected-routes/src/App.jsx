import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router-dom";
import { useState } from "react";

/**
 * Protected Routes Demo
 * ---------------------
 * Shows how to restrict certain pages behind an authentication check.
 * This example keeps the "auth state" in memory for simplicity.
 */

function ProtectedRoute({ children, authed }) {
  // If not authenticated, redirect to /login
  return authed ? children : <Navigate to="/login" replace />;
}

function Login({ setAuthed }) {
  return (
    <div style={styles.page}>
      <h2>Login Page</h2>
      <p>Click below to simulate logging in.</p>
      <button onClick={() => setAuthed(true)} style={styles.button}>
        Log In
      </button>
    </div>
  );
}

function Dashboard({ setAuthed }) {
  return (
    <div style={styles.page}>
      <h2>Dashboard (Protected)</h2>
      <p>You can only see this if you're logged in.</p>
      <button onClick={() => setAuthed(false)} style={styles.button}>
        Log Out
      </button>
    </div>
  );
}

function Home() {
  return (
    <div style={styles.page}>
      <h2>Home Page</h2>
      <p>Welcome! Try visiting the Dashboard route.</p>
      <Link to="/dashboard">Go to Dashboard</Link>
    </div>
  );
}

export default function App() {
  const [authed, setAuthed] = useState(false);

  return (
    <BrowserRouter>
      <nav style={styles.nav}>
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/login">Login</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute authed={authed}>
              <Dashboard setAuthed={setAuthed} />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<Login setAuthed={setAuthed} />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

const styles = {
  nav: {
    display: "flex",
    gap: "1rem",
    padding: "1rem",
    background: "#f0f0f0",
    justifyContent: "center"
  },
  page: {
    textAlign: "center",
    marginTop: "40px",
    fontFamily: "system-ui, sans-serif"
  },
  button: {
    padding: "10px 20px",
    marginTop: "20px",
    border: "none",
    borderRadius: 8,
    background: "#007AFF",
    color: "white",
    cursor: "pointer"
  }
};
