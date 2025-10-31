import { useEffect, useState } from "react";

/**
 * useEffect Cleanup Pattern Demo
 * ------------------------------
 * Starts an interval that increments a counter once per second.
 * When the component unmounts, the cleanup stops it, preventing
 * stray timers and memory leaks.
 */

export default function App() {
  const [show, setShow] = useState(true);
  return (
    <div style={styles.container}>
      <h1>React useEffect Cleanup Patterns</h1>
      <p>Toggle the counter on/off to observe cleanup.</p>
      <button style={styles.button} onClick={() => setShow(!show)}>
        {show ? "Unmount Counter" : "Mount Counter"}
      </button>
      {show && <Counter />}
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Mounted → starting interval");
    const id = setInterval(() => setCount((c) => c + 1), 1000);

    // Cleanup
    return () => {
      console.log("Unmounted → clearing interval");
      clearInterval(id);
    };
  }, []);

  return (
    <div style={styles.counterBox}>
      <h2>Count: {count}</h2>
      <p style={styles.note}>(open console to see cleanup logs)</p>
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
    padding: "10px 16px",
    marginBottom: 20,
    borderRadius: 8,
    border: "none",
    background: "#007AFF",
    color: "white",
    fontWeight: 600,
    cursor: "pointer"
  },
  counterBox: {
    padding: 20,
    border: "1px solid #ddd",
    borderRadius: 8,
    textAlign: "center",
    background: "#fff"
  },
  note: { color: "#666", fontSize: 13 }
};
