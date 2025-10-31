import { useState } from "react";
import { z } from "zod";

/**
 * React Forms + Zod Validation Demo
 * ---------------------------------
 * Demonstrates how to validate form input using a Zod schema
 * and display friendly error messages in real time.
 */

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  age: z.coerce.number().min(18, "Must be 18 or older.")
});

export default function App() {
  const [form, setForm] = useState({ name: "", email: "", age: "" });
  const [errors, setErrors] = useState({});

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const result = schema.safeParse(form);
    if (!result.success) {
      const fieldErrors = {};
      for (const issue of result.error.issues) {
        fieldErrors[issue.path[0]] = issue.message;
      }
      setErrors(fieldErrors);
    } else {
      setErrors({});
      alert("✅ Form submitted successfully!");
      console.log(result.data);
    }
  }

  return (
    <div style={styles.container}>
      <h1>React Forms + Zod Validation</h1>
      <form onSubmit={handleSubmit} style={styles.form}>
        <label style={styles.label}>
          Name
          <input
            style={styles.input}
            name="name"
            value={form.name}
            onChange={handleChange}
          />
          {errors.name && <span style={styles.error}>{errors.name}</span>}
        </label>
        <label style={styles.label}>
          Email
          <input
            style={styles.input}
            name="email"
            value={form.email}
            onChange={handleChange}
          />
          {errors.email && <span style={styles.error}>{errors.email}</span>}
        </label>
        <label style={styles.label}>
          Age
          <input
            style={styles.input}
            name="age"
            value={form.age}
            onChange={handleChange}
          />
          {errors.age && <span style={styles.error}>{errors.age}</span>}
        </label>
        <button style={styles.button} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "system-ui, sans-serif",
    maxWidth: 500,
    margin: "40px auto",
    padding: 20,
    border: "1px solid #ccc",
    borderRadius: 12,
    background: "#fefefe"
  },
  form: { display: "flex", flexDirection: "column", gap: 12 },
  label: { display: "flex", flexDirection: "column", fontWeight: 600 },
  input: {
    padding: 8,
    borderRadius: 6,
    border: "1px solid #ccc",
    fontWeight: 400
  },
  error: { color: "#d00", fontSize: 13, marginTop: 2 },
  button: {
    marginTop: 16,
    padding: "10px 16px",
    border: "none",
    borderRadius: 8,
    background: "#007AFF",
    color: "white",
    cursor: "pointer",
    fontWeight: 600
  }
};
