import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { createContext, useContext, useState } from "react";

/**
 * Auth Context + JWT Flow Demo
 * ----------------------------
 * Demonstrates a client-side auth flow with token handling,
 * login/logout actions, and protected routes using Context.
 */

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [token, setToken] = useState(localStorage.getItem("token"));

  function login(username, password) {
    // Fake login: normally you'd call your backend
    const fakeToken = btoa(`${username}:${Date.now()}`);
    localStorage.setItem("token", fakeToken);
    setToken(fakeToken);
  }

  function logout() {
    localStorage.removeItem("token");
    setToken(null);
  }

  const value = { token, login, logout, authed: !!token };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

function useAuth() {
  return useContext(AuthContext);
}

function ProtectedRoute({ children }) {
  const { authed } = useAuth();
  return authed ? children : <Navigate to="/login" replace />;
}

function LoginPage() {
  const { login } = useAuth();
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    login(data.get("username"), data.get("password"));
  };
  return (
    <div style={styles.page}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input name="username" placeholder="Username" style={styles.input} />
        <input name="password" type="password" placeholder="Password" style={styles.input} />
        <button style={styles.button}>Login</button>
      </form>
    </div>
  );
}

function Dashboard() {
  const { logout, token } = useAuth();
  return (
    <div style={styles.page}>
      <h2>Dashboard</h2>
      <p>You are logged in with token:</p>
      <code style={styles.token}>{token}</code>
      <button onClick={logout} style={styles.button}>Logout</button>
    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<Navigate to="/dashboard" />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

const styles = {
  page: {
    fontFamily: "system-ui, sans-serif",
    maxWidth: 500,
    margin: "60px auto",
    padding: 20,
    border: "1px solid #ccc",
    borderRadius: 12,
    textAlign: "center"
  },
  form: { display: "flex", flexDirection: "column", gap: 10 },
  input: { padding: 8, borderRadius: 6, border: "1px solid #ccc" },
  button: {
    marginTop: 10,
    padding: "8px 16px",
    border: "none",
    borderRadius: 8,
    background: "#007AFF",
    color: "white",
    fontWeight: 600,
    cursor: "pointer"
  },
  token: {
    display: "block",
    margin: "10px auto",
    wordBreak: "break-all",
    fontSize: 12,
    color: "#333"
  }
};
