import { useState } from "react";

/**
 * Optimistic UI Demo
 * ------------------
 * This simulates a "like" button that updates instantly
 * while pretending to call an API.  If the fake request fails,
 * the UI rolls back automatically.
 */

export default function App() {
  const [likes, setLikes] = useState(10);
  const [pending, setPending] = useState(false);

  async function handleLike() {
    if (pending) return;
    setPending(true);

    // optimistic update first
    const previous = likes;
    setLikes(likes + 1);

    try {
      // simulate network latency + random failure
      await fakeApi();
      console.log("✅ Server confirmed update");
    } catch (err) {
      console.log("❌ API failed, rolling back");
      setLikes(previous); // rollback
    } finally {
      setPending(false);
    }
  }

  return (
    <div style={styles.container}>
      <h1>React Optimistic UI Updates</h1>
      <p>Instantly update UI, rollback if server rejects.</p>
      <button
        onClick={handleLike}
        disabled={pending}
        style={{
          ...styles.button,
          background: pending ? "#aaa" : "#007AFF"
        }}
      >
        👍 Like ({likes})
      </button>
      {pending && <p style={styles.info}>Saving...</p>}
    </div>
  );
}

// simulate API success/failure
function fakeApi() {
  return new Promise((resolve, reject) => {
    const ms = 1200;
    setTimeout(() => {
      Math.random() > 0.3 ? resolve() : reject(new Error("Network error"));
    }, ms);
  });
}

const styles = {
  container: {
    fontFamily: "system-ui, sans-serif",
    textAlign: "center",
    marginTop: 60
  },
  button: {
    padding: "10px 20px",
    border: "none",
    borderRadius: 8,
    color: "white",
    fontSize: 16,
    cursor: "pointer"
  },
  info: { color: "#666", marginTop: 10 }
};
