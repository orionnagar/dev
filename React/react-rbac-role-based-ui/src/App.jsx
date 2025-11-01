import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router-dom";
import { createContext, useContext, useState } from "react";

/**
 * Role-Based Access Control (RBAC) Demo
 * -------------------------------------
 * Builds on the JWT/Context flow to include roles and protected components.
 */

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  function login(username, role) {
    const fakeUser = { username, role };
    localStorage.setItem("user", JSON.stringify(fakeUser));
    setUser(fakeUser);
  }

  function logout() {
    localStorage.removeItem("user");
    setUser(null);
  }

  const value = { user, login, logout, authed: !!user };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

function useAuth() {
  return useContext(AuthContext);
}

function ProtectedRoute({ roles, children }) {
  const { user } = useAuth();
  if (!user) return <Navigate to="/login" replace />;
  if (roles && !roles.includes(user.role)) {
    return (
      <div style={styles.page}>
        <h2>Access Denied</h2>
        <p>You do not have permission to view this page.</p>
        <Link to="/dashboard">Back to Dashboard</Link>
      </div>
    );
  }
  return children;
}

function LoginPage() {
  const { login } = useAuth();
  function handleLogin(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    login(data.get("username"), data.get("role"));
  }
  return (
    <div style={styles.page}>
      <h2>Login</h2>
      <form onSubmit={handleLogin} style={styles.form}>
        <input name="username" placeholder="Username" style={styles.input} />
        <select name="role" style={styles.input}>
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
        <button style={styles.button}>Login</button>
      </form>
    </div>
  );
}

function Dashboard() {
  const { user, logout } = useAuth();
  return (
    <div style={styles.page}>
      <h2>Dashboard</h2>
      <p>Welcome, <strong>{user.username}</strong>!</p>
      <p>Your role: <strong>{user.role}</strong></p>
      <div style={{ marginTop: 20 }}>
        <Link to="/admin">Go to Admin Panel</Link>
      </div>
      <button onClick={logout} style={styles.button}>Logout</button>
    </div>
  );
}

function AdminPanel() {
  return (
    <div style={styles.page}>
      <h2>Admin Panel</h2>
      <p>Only admins can see this page.</p>
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
          <Route
            path="/admin"
            element={
              <ProtectedRoute roles={["admin"]}>
                <AdminPanel />
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
  }
};
