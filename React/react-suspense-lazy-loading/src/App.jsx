import { Suspense, lazy, useState } from "react";

/**
 * React Suspense + Lazy Loading Demo
 * ----------------------------------
 * Demonstrates dynamic imports for route- or feature-level
 * code splitting with loading fallbacks.
 */

// dynamically imported component
const HeavyChart = lazy(() => import("./HeavyChart.jsx"));

export default function App() {
  const [showChart, setShowChart] = useState(false);

  return (
    <div style={styles.container}>
      <h1>React Suspense + Lazy Loading</h1>
      <p>
        Code is loaded only when needed. Open DevTools → Network → check the new
        chunk when the chart loads.
      </p>
      <button style={styles.button} onClick={() => setShowChart((s) => !s)}>
        {showChart ? "Hide Chart" : "Load Chart"}
      </button>

      <Suspense fallback={<p style={styles.loading}>⏳ Loading chart...</p>}>
        {showChart && <HeavyChart />}
      </Suspense>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "system-ui, sans-serif",
    textAlign: "center",
    margin: "40px auto",
    maxWidth: 700,
    padding: 20,
    border: "1px solid #ccc",
    borderRadius: 12,
    background: "#fefefe"
  },
  button: {
    padding: "10px 16px",
    border: "none",
    borderRadius: 8,
    background: "#007AFF",
    color: "white",
    fontWeight: 600,
    cursor: "pointer",
    marginTop: 10
  },
  loading: { marginTop: 20, fontStyle: "italic", color: "#777" }
};
