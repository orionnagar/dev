import { QueryClient, QueryClientProvider, useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import "./styles.css";

/**
 * Optimistic UI Updates Demo
 * --------------------------
 * Instantly updates UI before network response, then confirms or rolls back.
 */

const queryClient = new QueryClient();

function fakeServerUpdate(newTodo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // 20% chance of simulated failure
      Math.random() > 0.2 ? resolve(newTodo) : reject(new Error("Server error!"));
    }, 1000);
  });
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TodoList />
    </QueryClientProvider>
  );
}

function TodoList() {
  const queryClient = useQueryClient();
  const [todos, setTodos] = useState([{ id: 1, text: "Learn React" }, { id: 2, text: "Ship Projects" }]);

  const mutation = useMutation({
    mutationFn: fakeServerUpdate,
    onMutate: async (newTodo) => {
      await queryClient.cancelQueries({ queryKey: ["todos"] });
      const previous = [...todos];
      setTodos((old) => [...old, newTodo]);
      return { previous };
    },
    onError: (err, newTodo, context) => {
      console.warn("❌ Rollback due to:", err.message);
      setTodos(context.previous);
    },
    onSuccess: () => console.log("✅ Server confirmed update"),
    onSettled: () => queryClient.invalidateQueries({ queryKey: ["todos"] })
  });

  const handleAdd = () => {
    const newTodo = { id: Date.now(), text: "New Todo " + Date.now().toString().slice(-4) };
    mutation.mutate(newTodo);
  };

  return (
    <div className="container">
      <h1>React Optimistic UI Updates</h1>
      <p>Instant feedback + rollback safety for async actions.</p>

      <button className="button" onClick={handleAdd} disabled={mutation.isPending}>
        {mutation.isPending ? "⏳ Adding..." : "➕ Add Todo"}
      </button>

      <ul className="list">
        {todos.map((t) => (
          <li key={t.id} className="item">
            {t.text}
          </li>
        ))}
      </ul>

      {mutation.isError && <p className="error">Server failed — reverted change.</p>}
    </div>
  );
}
