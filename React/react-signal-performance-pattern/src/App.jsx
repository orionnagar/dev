import { signal, computed } from "@preact/signals-react";
import { useEffect } from "react";

/**
 * Signals Performance Pattern Demo
 * --------------------------------
 * Demonstrates fine-grained reactivity in React using signals.
 * Only the parts of the UI that depend on a signal re-render.
 */

// define reactive state outside components
const count = signal(0);
const double = computed(() => count.value * 2);

export default function App() {
  useEffect(() => {
    console.log("🔁 App re-rendered");
  });

  return (
    <div style={styles.container}>
      <h1>React Signals Performance Pattern</h1>
      <p>
        Signals update only the reactive DOM bindings, not the entire component.
      </p>

      <div style={styles.box}>
        <p>Count: {count}</p>
        <p>Double (computed): {double}</p>
      </div>

      <button style={styles.button} onClick={() => count.value++}>
        Increment
      </button>
      <button style={styles.button} onClick={() => count.value--}>
        Decrement
      </button>
    </div>
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
  button: {
    margin: "6px",
    padding: "10px 16px",
    border: "none",
    borderRadius: 8,
    background: "#007AFF",
    color: "white",
    fontWeight: 600,
    cursor: "pointer"
  },
  box: {
    margin: "20px auto",
    border: "1px solid #eee",
    borderRadius: 8,
    padding: 10,
    width: 240
  }
};
