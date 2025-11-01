import { FixedSizeList as List } from "react-window";
import { useEffect, useRef, useState, useCallback } from "react";

/**
 * Virtualized Infinite Scroll Demo
 * --------------------------------
 * Demonstrates combining react-window with lazy data fetching.
 */

const BATCH_SIZE = 50;

export default function App() {
  const [items, setItems] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const listRef = useRef();

  // Fake fetch simulating backend pagination
  const fetchMore = useCallback(async () => {
    if (!hasMore) return;
    const start = items.length;
    const newItems = Array.from({ length: BATCH_SIZE }, (_, i) => ({
      id: start + i + 1,
      name: `Item ${start + i + 1}`
    }));
    // Simulate latency
    await new Promise((r) => setTimeout(r, 800));
    setItems((prev) => [...prev, ...newItems]);
    if (items.length + BATCH_SIZE >= 1000) setHasMore(false);
  }, [items.length, hasMore]);

  useEffect(() => {
    fetchMore(); // initial load
  }, []);

  const Row = ({ index, style }) => {
    const item = items[index];
    useEffect(() => {
      // If near bottom, load more
      if (index === items.length - 5 && hasMore) fetchMore();
    }, [index, hasMore]);
    return (
      <div style={{ ...style, ...styles.row }}>
        {item ? (
          <span>{item.name}</span>
        ) : (
          <span style={styles.loading}>Loading...</span>
        )}
      </div>
    );
  };

  return (
    <div style={styles.container}>
      <h1>React Virtualized Infinite Scroll</h1>
      <p>Virtualized 1,000 items with lazy loading batches of 50.</p>
      <List
        ref={listRef}
        height={400}
        itemCount={hasMore ? items.length + 1 : items.length}
        itemSize={35}
        width={500}
        style={styles.list}
      >
        {Row}
      </List>
      {!hasMore && <p style={styles.done}>✅ All items loaded</p>}
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "system-ui, sans-serif",
    textAlign: "center",
    margin: "40px auto",
    maxWidth: 540,
    border: "1px solid #ccc",
    borderRadius: 12,
    padding: 20,
    background: "#fefefe"
  },
  list: {
    border: "1px solid #ddd",
    borderRadius: 8,
    marginTop: 10
  },
  row: {
    display: "flex",
    alignItems: "center",
    paddingLeft: 12,
    borderBottom: "1px solid #eee",
    fontSize: 14
  },
  loading: { color: "#777", fontStyle: "italic" },
  done: { marginTop: 10, color: "#2ecc71", fontWeight: 600 }
};
