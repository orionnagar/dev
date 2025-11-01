import { useMachine } from "@xstate/react";
import { createMachine } from "xstate";

/**
 * XState Finite State Machine Demo
 * --------------------------------
 * Models a simple async request: idle → loading → success/error.
 */

const fetchMachine = createMachine({
  id: "fetcher",
  initial: "idle",
  states: {
    idle: {
      on: { FETCH: "loading" }
    },
    loading: {
      invoke: {
        id: "getData",
        src: "fetchData",
        onDone: { target: "success", actions: "setData" },
        onError: { target: "error" }
      }
    },
    success: { on: { RESET: "idle" } },
    error: { on: { RETRY: "loading" } }
  }
});

export default function App() {
  const [state, send] = useMachine(fetchMachine, {
    services: {
      fetchData: async () => {
        // fake delay
        await new Promise((r) => setTimeout(r, 1500));
        if (Math.random() < 0.7) return { message: "Fetched OK" };
        throw new Error("Random failure");
      }
    },
    actions: {
      setData: (ctx, event) => console.log("✅ Data received:", event.data)
    }
  });

  return (
    <div style={styles.container}>
      <h1>React State Machine (XState Pattern)</h1>
      <p>Current state: <strong>{state.value}</strong></p>

      {state.matches("idle") && (
        <button style={styles.button} onClick={() => send("FETCH")}>
          🚀 Fetch Data
        </button>
      )}

      {state.matches("loading") && <p style={styles.loading}>Loading...</p>}

      {state.matches("success") && (
        <>
          <p style={styles.success}>✅ Success!</p>
          <button style={styles.button} onClick={() => send("RESET")}>
            Reset
          </button>
        </>
      )}

      {state.matches("error") && (
        <>
          <p style={styles.error}>❌ Error occurred.</p>
          <button style={styles.button} onClick={() => send("RETRY")}>
            Retry
          </button>
        </>
      )}
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "system-ui, sans-serif",
    textAlign: "center",
    margin: "40px auto",
    maxWidth: 600,
    border: "1px solid #ccc",
    borderRadius: 12,
    padding: 20,
    background: "#fefefe"
  },
  button: {
    padding: "8px 16px",
    borderRadius: 8,
    border: "none",
    background: "#007AFF",
    color: "white",
    fontWeight: 600,
    cursor: "pointer",
    marginTop: 10
  },
  loading: { color: "#999" },
  success: { color: "#27ae60", fontWeight: 600 },
  error: { color: "#e74c3c", fontWeight: 600 }
};
