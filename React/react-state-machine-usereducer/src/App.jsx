import { useReducer } from "react";

/**
 * useReducer State Machine Demo
 * -----------------------------
 * This demonstrates how `useReducer` can explicitly model
 * finite states and valid transitions for UI logic.
 *
 * States:  idle → running → finished → idle
 * Actions: START, TICK, FINISH, RESET
 */

const initialState = { status: "idle", count: 0 };

function reducer(state, action) {
  switch (state.status) {
    case "idle":
      if (action.type === "START") return { ...state, status: "running", count: 0 };
      break;
    case "running":
      if (action.type === "TICK") return { ...state, count: state.count + 1 };
      if (action.type === "FINISH") return { ...state, status: "finished" };
      break;
    case "finished":
      if (action.type === "RESET") return { ...state, status: "idle", count: 0 };
      break;
    default:
      return state;
  }
  return state;
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div style={styles.container}>
      <h1>React useReducer State Machine</h1>
      <p>Status: <strong>{state.status}</strong></p>
      <p>Count: {state.count}</p>
      <div style={styles.buttons}>
        {state.status === "idle" && (
          <button style={styles.start} onClick={() => dispatch({ type: "START" })}>
            Start
          </button>
        )}
        {state.status === "running" && (
          <>
            <button style={styles.action} onClick={() => dispatch({ type: "TICK" })}>
              Tick
            </button>
            <button style={styles.stop} onClick={() => dispatch({ type: "FINISH" })}>
              Finish
            </button>
          </>
        )}
        {state.status === "finished" && (
          <button style={styles.reset} onClick={() => dispatch({ type: "RESET" })}>
            Reset
          </button>
        )}
      </div>
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
    background: "#fefefe",
    textAlign: "center"
  },
  buttons: { display: "flex", gap: 10, justifyContent: "center", marginTop: 20 },
  start: {
    padding: "10px 20px",
    border: "none",
    borderRadius: 8,
    background: "#28a745",
    color: "white",
    cursor: "pointer"
  },
  action: {
    padding: "10px 20px",
    border: "none",
    borderRadius: 8,
    background: "#007AFF",
    color: "white",
    cursor: "pointer"
  },
  stop: {
    padding: "10px 20px",
    border: "none",
    borderRadius: 8,
    background: "#dc3545",
    color: "white",
    cursor: "pointer"
  },
  reset: {
    padding: "10px 20px",
    border: "none",
    borderRadius: 8,
    background: "#6c757d",
    color: "white",
    cursor: "pointer"
  }
};
