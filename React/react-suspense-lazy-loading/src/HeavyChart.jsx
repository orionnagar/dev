/**
 * HeavyChart Component (simulated heavy module)
 * ---------------------------------------------
 * Represents a code-split component loaded lazily via React.lazy.
 * We simulate load cost with a delay.
 */
import { useEffect } from "react";

export default function HeavyChart() {
  useEffect(() => {
    console.log("📊 HeavyChart mounted (lazy-loaded chunk)");
  }, []);

  return (
    <div style={styles.box}>
      <h2>📈 Lazy-Loaded Chart</h2>
      <p>This component was code-split and loaded on demand.</p>
    </div>
  );
}

const styles = {
  box: {
    marginTop: 30,
    padding: 20,
    borderRadius: 8,
    border: "1px solid #ddd",
    background: "#fafafa"
  }
};
