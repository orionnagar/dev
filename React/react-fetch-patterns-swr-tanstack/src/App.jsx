import useSWR from "swr";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";

/**
 * React Fetch Patterns: SWR + TanStack Query
 * ------------------------------------------
 * This demo compares two modern React data-fetching libraries.
 * Both use caching, background revalidation, and request deduping.
 */

const fetcher = (url) => fetch(url).then((res) => res.json());
const queryClient = new QueryClient();

export default function App() {
  return (
    <div style={styles.container}>
      <h1>React Fetch Patterns</h1>
      <p>Comparing SWR and TanStack Query side by side.</p>

      <section style={styles.section}>
        <h2>SWR Example</h2>
        <SWRExample />
      </section>

      <section style={styles.section}>
        <h2>TanStack Query Example</h2>
        <QueryClientProvider client={queryClient}>
          <TanstackExample />
        </QueryClientProvider>
      </section>
    </div>
  );
}

// -------------------- SWR Example --------------------
function SWRExample() {
  const { data, error, isLoading } = useSWR(
    "https://jsonplaceholder.typicode.com/users/1",
    fetcher,
    { refreshInterval: 10000 } // revalidate every 10s
  );

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading data.</p>;

  return (
    <div style={styles.card}>
      <p><strong>{data.name}</strong></p>
      <p>{data.email}</p>
      <p>Auto-refresh every 10s ✅</p>
    </div>
  );
}

// -------------------- TanStack Example --------------------
function TanstackExample() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["user"],
    queryFn: () =>
      fetch("https://jsonplaceholder.typicode.com/users/2").then((r) => r.json()),
    refetchInterval: 10000,
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading data.</p>;

  return (
    <div style={styles.card}>
      <p><strong>{data.name}</strong></p>
      <p>{data.email}</p>
      <p>Auto-refresh every 10s ✅</p>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "system-ui, sans-serif",
    maxWidth: 700,
    margin: "40px auto",
    padding: 20,
    border: "1px solid #ccc",
    borderRadius: 12,
    background: "#fefefe"
  },
  section: { marginBottom: 30 },
  card: {
    padding: 16,
    border: "1px solid #ddd",
    borderRadius: 8,
    background: "#fafafa"
  }
};
