import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

/**
 * Framer Motion Demo
 * ------------------
 * Demonstrates enter/exit animations and simple motion transitions.
 */

export default function App() {
  const [visible, setVisible] = useState(true);

  return (
    <div style={styles.container}>
      <h1>React Animations with Framer Motion</h1>
      <button style={styles.button} onClick={() => setVisible(v => !v)}>
        {visible ? "Hide Box" : "Show Box"}
      </button>

      <AnimatePresence>
        {visible && (
          <motion.div
            key="box"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.5 }}
            style={styles.box}
          />
        )}
      </AnimatePresence>
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
    textAlign: "center"
  },
  button: {
    padding: "10px 16px",
    border: "none",
    borderRadius: 8,
    background: "#007AFF",
    color: "white",
    fontWeight: 600,
    cursor: "pointer",
    marginBottom: 20
  },
  box: {
    width: 100,
    height: 100,
    margin: "20px auto",
    background: "#28a745",
    borderRadius: 12
  }
};
