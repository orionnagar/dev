import { useState } from "react";

/**
 * Error Boundary + Retry Pattern Demo
 * -----------------------------------
 * Demonstrates how to gracefully catch render errors,
 * show fallback UI, and offer retry logic.
 */

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("🚨 Caught by ErrorBoundary:", error, info);
  }

  handleRetry = () => {
    this.setState({ hasError: false });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div style={styles.fallback}>
          <h2>Something went wrong 😅</h2>
          <button style={styles.button} onClick={this.handleRetry}>
            🔄 Retry
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

function BuggyComponent({ trigger }) {
  if (trigger) throw new Error("💥 Simulated component failure!");
  return <p>Everything is running smoothly ✅</p>;
}

export default function App() {
  const [errorOn, setErrorOn] = useState(false);
  return (
    <div style={styles.container}>
      <h1>React Error Boundary + Retry Pattern</h1>
      <p>Toggle the error below to see boundary + retry behavior.</p>

      <button style={styles.button} onClick={() => setErrorOn((e) => !e)}>
        {errorOn ? "Fix Error" : "Trigger Error"}
      </button>

      <ErrorBoundary>
        <BuggyComponent trigger={errorOn} />
      </ErrorBoundary>
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
  fallback: {
    padding: 40,
    background: "#ffeeee",
    border: "1px solid #ffb3b3",
    borderRadius: 12
  },
  button: {
    marginTop: 10,
    padding: "8px 16px",
    border: "none",
    borderRadius: 8,
    background: "#007AFF",
    color: "white",
    fontWeight: 600,
    cursor: "pointer"
  }
};
