import { useEffect, useRef, useState } from "react";

/**
 * Realtime WebSockets Demo
 * ------------------------
 * Connects to a public echo WebSocket server.
 * Anything you type is sent, echoed back, and displayed live.
 */

const SOCKET_URL = "wss://echo.websocket.org"; // legacy echo server; still works for demos

export default function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const wsRef = useRef(null);

  useEffect(() => {
    const ws = new WebSocket(SOCKET_URL);
    wsRef.current = ws;

    ws.onopen = () => console.log("✅ Connected to WebSocket server");
    ws.onmessage = (event) => {
      const msg = event.data;
      setMessages((prev) => [...prev, { from: "server", text: msg }]);
    };
    ws.onerror = (err) => console.error("WebSocket error:", err);
    ws.onclose = () => console.log("❌ Disconnected from server");

    return () => ws.close();
  }, []);

  function sendMessage(e) {
    e.preventDefault();
    if (!input.trim() || !wsRef.current) return;
    wsRef.current.send(input);
    setMessages((prev) => [...prev, { from: "me", text: input }]);
    setInput("");
  }

  return (
    <div style={styles.container}>
      <h1>React Realtime WebSockets</h1>
      <form onSubmit={sendMessage} style={styles.form}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={styles.input}
          placeholder="Type a message..."
        />
        <button type="submit" style={styles.button}>
          Send
        </button>
      </form>
      <div style={styles.messages}>
        {messages.map((m, i) => (
          <div
            key={i}
            style={{
              ...styles.msg,
              alignSelf: m.from === "me" ? "flex-end" : "flex-start",
              background: m.from === "me" ? "#007AFF" : "#e0e0e0",
              color: m.from === "me" ? "#fff" : "#000"
            }}
          >
            {m.text}
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "system-ui, sans-serif",
    maxWidth: 600,
    margin: "40px auto",
    border: "1px solid #ccc",
    borderRadius: 12,
    padding: 20,
    background: "#fefefe",
    display: "flex",
    flexDirection: "column"
  },
  form: { display: "flex", gap: 8 },
  input: {
    flex: 1,
    padding: 8,
    borderRadius: 6,
    border: "1px solid #ccc"
  },
  button: {
    padding: "8px 16px",
    borderRadius: 8,
    border: "none",
    background: "#007AFF",
    color: "white",
    fontWeight: 600,
    cursor: "pointer"
  },
  messages: {
    display: "flex",
    flexDirection: "column",
    gap: 8,
    marginTop: 20,
    height: 400,
    overflowY: "auto",
    padding: 10,
    border: "1px solid #eee",
    borderRadius: 8,
    background: "#fafafa"
  },
  msg: {
    padding: "8px 12px",
    borderRadius: 10,
    maxWidth: "80%"
  }
};
