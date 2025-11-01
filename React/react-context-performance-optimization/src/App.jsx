import { createContext, useContext, useMemo, useState, memo } from "react";

/**
 * React Context Performance Optimization Demo
 * -------------------------------------------
 * Demonstrates avoiding full re-renders of consumers when only part of context changes.
 */

const ThemeContext = createContext();
const UserContext = createContext();

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");
  const value = useMemo(() => ({ theme, toggle: () => setTheme(t => (t === "light" ? "dark" : "light")) }), [theme]);
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

function UserProvider({ children }) {
  const [user, setUser] = useState({ name: "Suresh", role: "Architect" });
  const value = useMemo(() => ({ user, setUser }), [user]);
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

// Only re-renders when theme changes
const ThemedBox = memo(function ThemedBox() {
  const { theme, toggle } = useContext(ThemeContext);
  console.log("🎨 ThemedBox render");
  return (
    <div style={{ ...styles.box, background: theme === "light" ? "#fff" : "#333", color: theme === "light" ? "#000" : "#fff" }}>
      <p>Current theme: {theme}</p>
      <button onClick={toggle} style={styles.button}>Toggle Theme</button>
    </div>
  );
});

// Only re-renders when user changes
const UserPanel = memo(function UserPanel() {
  const { user, setUser } = useContext(UserContext);
  console.log("👤 UserPanel render");
  return (
    <div style={styles.box}>
      <p>User: {user.name}</p>
      <p>Role: {user.role}</p>
      <button
        onClick={() => setUser(u => ({ ...u, role: u.role === "Architect" ? "Engineer" : "Architect" }))}
        style={styles.button}
      >
        Toggle Role
      </button>
    </div>
  );
});

export default function App() {
  console.log("🧠 App render");
  return (
    <ThemeProvider>
      <UserProvider>
        <div style={styles.container}>
          <h1>React Context Performance Optimization</h1>
          <p>Open the console — see only specific components re-render when their context changes.</p>
          <ThemedBox />
          <UserPanel />
        </div>
      </UserProvider>
    </ThemeProvider>
  );
}

const styles = {
  container: {
    fontFamily: "system-ui, sans-serif",
    textAlign: "center",
    maxWidth: 600,
    margin: "40px auto",
    border: "1px solid #ccc",
    borderRadius: 12,
    padding: 20,
    background: "#fefefe"
  },
  box: {
    border: "1px solid #ddd",
    borderRadius: 8,
    padding: 10,
    marginTop: 20
  },
  button: {
    padding: "8px 16px",
    border: "none",
    borderRadius: 8,
    background: "#007AFF",
    color: "white",
    cursor: "pointer"
  }
};
