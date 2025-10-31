import { createContext, useContext, useState } from "react";

/**
 * React Context – Global State Demo
 * ---------------------------------
 * Shows how Context provides shared state to any component
 * without passing props manually through the tree.
 */

const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => setTheme(t => (t === "light" ? "dark" : "light"));
  const value = { theme, toggleTheme };
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

function useTheme() {
  return useContext(ThemeContext);
}

function Toolbar() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div
      style={{
        background: theme === "light" ? "#fff" : "#222",
        color: theme === "light" ? "#222" : "#fff",
        padding: 20,
        borderRadius: 8,
        textAlign: "center"
      }}
    >
      <p>Current theme: <strong>{theme}</strong></p>
      <button onClick={toggleTheme} style={styles.button}>
        Toggle Theme
      </button>
    </div>
  );
}

export default function App() {
  return (
    <div style={styles.container}>
      <h1>React Context Global State</h1>
      <p>This demo shares a theme between components via Context.</p>
      <ThemeProvider>
        <Toolbar />
      </ThemeProvider>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "system-ui, sans-serif",
    maxWidth: 600,
    margin: "40px auto",
    padding: 20,
    border: "1px solid #ccc",
    borderRadius: 12,
    background: "#fefefe"
  },
  button: {
    marginTop: 10,
    padding: "8px 16px",
    borderRadius: 8,
    border: "none",
    background: "#007AFF",
    color: "white",
    fontWeight: 600,
    cursor: "pointer"
  }
};
