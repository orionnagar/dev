import { FixedSizeList as List } from "react-window";
import { useMemo } from "react";

/**
 * Large Data Rendering Demo
 * --------------------------
 * Shows how to render tens of thousands of rows efficiently
 * using windowing (only the visible items are mounted).
 */

export default function App() {
  // Generate fake data once
  const data = useMemo(
    () =>
      Array.from({ length: 20000 }, (_, i) => ({
        id: i + 1,
        name: `User ${i + 1}`,
        email: `user${i + 1}@example.com`,
      })),
    []
  );

  const Row = ({ index, style }) => {
    const item = data[index];
    return (
      <div style={{ ...style, ...styles.row }}>
        <span style={styles.cell}>{item.id}</span>
        <span style={styles.cell}>{item.name}</span>
        <span style={styles.cell}>{item.email}</span>
      </div>
    );
  };

  return (
    <div style={styles.container}>
      <h1>Large Data Table Rendering</h1>
      <p>
        Using <code>react-window</code> to render 20,000 rows efficiently.
      </p>
      <div style={styles.tableHeader}>
        <strong>ID</strong>
        <strong>Name</strong>
        <strong>Email</strong>
      </div>
      <List
        height={400}
        itemCount={data.length}
        itemSize={35}
        width={600}
        style={styles.list}
      >
        {Row}
      </List>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "system-ui, sans-serif",
    maxWidth: 640,
    margin: "40px auto",
    padding: 20,
    border: "1px solid #ccc",
    borderRadius: 12,
    background: "#fefefe",
  },
  list: { border: "1px solid #ddd", borderRadius: 8 },
  row: {
    display: "flex",
    justifyContent: "space-between",
    padding: "6px 12px",
    borderBottom: "1px solid #eee",
    fontSize: 14,
  },
  tableHeader: {
    display: "flex",
    justifyContent: "space-between",
    padding: "8px 12px",
    fontWeight: 600,
    background: "#f5f5f5",
    borderRadius: "8px 8px 0 0",
  },
  cell: { width: 180, textAlign: "left" },
};
