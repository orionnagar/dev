import { useState, useEffect } from "react";

/**
 * Offscreen Rendering Pattern Demo
 * --------------------------------
 * Pre-renders heavy components hidden via CSS, so reveal is instant.
 */

function HeavyModal() {
  useEffect(() => {
    console.log("🧱 HeavyModal mounted (rendered offscreen)");
  }, []);
  return (
    <div style={styles.modal}>
      <h2>⚡ Pre-rendered Modal</h2>
      <p>This modal was already mounted offscreen for instant reveal.</p>
    </div>
  );
}

export default function App() {
  const [visible, setVisible] = useState(false);

  return (
    <div style={styles.container}>
      <h1>React Offscreen Rendering Pattern</h1>
      <p>Pre-render components offscreen, then reveal without delay.</p>

      <button style={styles.button} onClick={() => setVisible(v => !v)}>
        {visible ? "Hide Modal" : "Show Modal"}
      </button>

      {/* Always mounted but visually hidden when not visible */}
      <div
        style={{
          ...styles.offscreen,
          opacity: visible ? 1 : 0,
          pointerEvents: visible ? "auto" : "none",
          transform: visible ? "translateY(0)" : "translateY(30px)"
        }}
      >
        <HeavyModal />
      </div>
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
    padding: "10px 16px",
    borderRadius: 8,
    border: "none",
    background: "#007AFF",
    color: "white",
    fontWeight: 600,
    cursor: "pointer",
    marginTop: 10
  },
  offscreen: {
    transition: "opacity 0.3s ease, transform 0.3s ease",
    position: "relative",
    marginTop: 40
  },
  modal: {
    border: "1px solid #ddd",
    borderRadius: 8,
    padding: 20,
    background: "#fafafa",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
  }
};
