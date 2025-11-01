import { QueryClient, QueryClientProvider, useQuery } from "@tanstack/react-query";
import axios from "axios";
import "./styles.css";

/**
 * React Query Caching + Refetch Demo
 * ----------------------------------
 * Demonstrates query caching, retry, and background refetch logic
 * using TanStack Query (React Query v5).
 */

// Initialize query client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 2,
      staleTime: 10000,
      refetchOnWindowFocus: true
    }
  }
});

function fetchUsers() {
  return axios.get("https://jsonplaceholder.typicode.com/users?_limit=5").then((res) => res.data);
}

function UsersList() {
  const { data, isLoading, error, refetch, isFetching } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers
  });

  if (isLoading) return <p>⏳ Loading users...</p>;
  if (error) return <p>❌ Error loading data.</p>;

  return (
    <div>
      <h3>👥 Cached Users List</h3>
      {data.map((user) => (
        <div key={user.id} className="user">
          <strong>{user.name}</strong>
          <span>{user.email}</span>
        </div>
      ))}
      <button className="button" onClick={() => refetch()} disabled={isFetching}>
        {isFetching ? "Refreshing..." : "🔄 Manual Refetch"}
      </button>
    </div>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="container">
        <h1>React Query Caching Pattern</h1>
        <p>Data caching, retry, and refetch — simplified.</p>
        <UsersList />
      </div>
    </QueryClientProvider>
  );
}
