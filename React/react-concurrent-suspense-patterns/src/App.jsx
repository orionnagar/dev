import { Suspense, useState, useTransition } from "react";
import UserProfile from "./UserProfile";

/**
 * Concurrent Rendering + Suspense Pattern Demo
 * --------------------------------------------
 * Demonstrates React 18 transitions + Suspense for smooth async updates.
 */

export default function App() {
  const [userId, setUserId] = useState(1);
  const [isPending, startTransition] = useTransition();

  function handleNext() {
    startTransition(() => setUserId((id) => (id === 5 ? 1 : id + 1)));
  }

  return (
    <div style={styles.container}>
      <h1>React Concurrent + Suspense Patterns</h1>
      <p>
        Uses <code>useTransition</code> to defer expensive re-renders and keep the UI responsive.
      </p>
      <button style={styles.button} onClick={handleNext} disabled={isPending}>
        {isPending ? "⏳ Loading..." : "Next User"}
      </button>

      <Suspense fallback={<p style={styles.loading}>Loading user...</p>}>
        <UserProfile userId={userId} />
      </Suspense>
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
    marginTop: 10,
    borderRadius: 8,
    border: "none",
    background: "#007AFF",
    color: "white",
    fontWeight: 600,
    cursor: "pointer"
  },
  loading: { marginTop: 20, color: "#555", fontStyle: "italic" }
};
