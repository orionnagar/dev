import { Profiler, useState, useMemo } from "react";

/**
 * React Performance Profiler Demo
 * -------------------------------
 * Uses React.Profiler to measure component render timings,
 * and shows how to interpret them alongside DevTools flamegraph.
 */

function slowComputation(n) {
  // intentionally heavy loop
  let total = 0;
  for (let i = 0; i < 1e6; i++) total += Math.sin(i + n);
  return total;
}

function SlowComponent({ value }) {
  const result = useMemo(() => slowComputation(value), [value]);
  return (
    <div style={styles.child}>
      <p>Computed value: {result.toFixed(2)}</p>
    </div>
  );
}

export default function App() {
  const [count, setCount] = useState(0);

  function onRenderCallback(
    id, // the "id" prop of the Profiler tree that has just committed
    phase, // "mount" or "update"
    actualDuration, // time spent rendering the committed update
    baseDuration, // estimated time without memoization
    startTime,
    commitTime
  ) {
    console.table({
      id,
      phase,
      actualDuration,
      baseDuration,
      startTime,
      commitTime
    });
  }

  return (
    <div style={styles.container}>
      <h1>React Performance Profiler + Flamegraph</h1>
      <p>
        Open DevTools → Profiler tab → Record.  
        Watch this component’s render cost in the console table below.
      </p>
      <button style={styles.button} onClick={() => setCount((c) => c + 1)}>
        Re-render ({count})
      </button>

      <Profiler id="SlowComponent" onRender={onRenderCallback}>
        <SlowComponent value={count} />
      </Profiler>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "system-ui, sans-serif",
    maxWidth: 700,
    margin: "40px auto",
    padding: 20,
    textAlign: "center",
    border: "1px solid #ccc",
    borderRadius: 12,
    background: "#fefefe"
  },
  child: {
    marginTop: 20,
    padding: 10,
    border: "1px solid #ddd",
    borderRadius: 8,
    background: "#fafafa"
  },
  button: {
    padding: "8px 16px",
    borderRadius: 8,
    border: "none",
    background: "#007AFF",
    color: "white",
    fontWeight: 600,
    cursor: "pointer"
  }
};
