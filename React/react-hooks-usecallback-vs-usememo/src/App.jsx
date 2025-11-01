import { memo, useCallback, useMemo, useState } from "react";

/**
 * useCallback vs useMemo Demo
 * ---------------------------
 * Shows how to memoize functions and computed values
 * to prevent unnecessary child re-renders.
 */

const ExpensiveChild = memo(function ExpensiveChild({ compute, count }) {
  console.log("🔁 Child re-rendered");
  const result = compute(count);
  return (
    <div style={styles.child}>
      <p>Expensive computation result: <strong>{result}</strong></p>
    </div>
  );
});

export default function App() {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState("light");

  // useCallback memoizes the function reference
  const compute = useCallback(
    (n) => {
      console.log("⚙️ Computing...");
      let sum = 0;
      for (let i = 0; i < 1e7; i++) sum += i * n; // simulate heavy work
      return sum.toString().slice(0, 10);
    },
    [] // stable identity
  );

  // useMemo memoizes a derived value
  const doubled = useMemo(() => count * 2, [count]);

  return (
    <div
      style={{
        ...styles.container,
        background: theme === "light" ? "#fefefe" : "#222",
        color: theme === "light" ? "#000" : "#fff"
      }}
    >
      <h1>React useCallback vs useMemo</h1>
      <p>Open console to watch re-renders and computation logs.</p>
      <button style={styles.button} onClick={() => setCount((c) => c + 1)}>
        Increment Count ({count})
      </button>
      <button style={styles.button} onClick={() => setTheme((t) => (t === "light" ? "dark" : "light"))}>
        Toggle Theme
      </button>
      <p>Doubled value (useMemo): {doubled}</p>
      <ExpensiveChild compute={compute} count={count} />
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "system-ui, sans-serif",
    maxWidth: 600,
    margin: "40px auto",
    border: "1px solid #ccc",
    borderRadius: 12,
    padding: 20,
    textAlign: "center"
  },
  button: {
    padding: "8px 16px",
    margin: "6px",
    borderRadius: 8,
    border: "none",
    background: "#007AFF",
    color: "white",
    cursor: "pointer"
  },
  child: {
    marginTop: 20,
    padding: 10,
    border: "1px solid #ddd",
    borderRadius: 8
  }
};
