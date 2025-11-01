import * as Sentry from "@sentry/react";
import { useState } from "react";

/**
 * Error Logging with Sentry Demo
 * ------------------------------
 * Demonstrates how to initialize Sentry in React,
 * capture runtime errors, and send them to your Sentry project.
 */

Sentry.init({
  dsn: "https://examplePublicKey.ingest.sentry.io/exampleProjectId", // replace with your DSN
  integrations: [new Sentry.BrowserTracing()],
  tracesSampleRate: 1.0
});

function BrokenComponent() {
  throw new Error("💥 Intentional crash — check Sentry dashboard!");
}

export default function App() {
  const [crash, setCrash] = useState(false);

  return (
    <Sentry.ErrorBoundary fallback={<Fallback />}>
      <div style={styles.container}>
        <h1>React Error Logging with Sentry</h1>
        <p>
          Click the button below to trigger a runtime error.  
          The error will be caught and reported to Sentry.
        </p>
        <button style={styles.button} onClick={() => setCrash(true)}>
          Trigger Crash
        </button>
        {crash && <BrokenComponent />}
      </div>
    </Sentry.ErrorBoundary>
  );
}

function Fallback() {
  return (
    <div style={styles.fallback}>
      <h2>Something went wrong 😅</h2>
      <p>This was caught by Sentry’s ErrorBoundary.</p>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "system-ui, sans-serif",
    maxWidth: 600,
    margin: "40px auto",
    textAlign: "center",
    border: "1px solid #ccc",
    borderRadius: 12,
    padding: 20,
    background: "#fefefe"
  },
  button: {
    padding: "10px 16px",
    border: "none",
    borderRadius: 8,
    background: "#dc3545",
    color: "white",
    fontWeight: 600,
    cursor: "pointer"
  },
  fallback: {
    textAlign: "center",
    padding: 40,
    color: "#d00",
    fontFamily: "system-ui, sans-serif"
  }
};
