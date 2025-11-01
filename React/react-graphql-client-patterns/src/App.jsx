import { ApolloClient, InMemoryCache, ApolloProvider, gql, useQuery } from "@apollo/client";
import { createClient, Provider as UrqlProvider, useQuery as useUrqlQuery } from "urql";

/**
 * React GraphQL Client Patterns
 * -----------------------------
 * Compares Apollo Client and urql — two common React GraphQL clients.
 * Both handle caching, queries, and declarative UI.
 */

const GRAPHQL_ENDPOINT = "https://countries.trevorblades.com"; // public sample API

// Apollo setup
const apolloClient = new ApolloClient({
  uri: GRAPHQL_ENDPOINT,
  cache: new InMemoryCache()
});

// urql setup
const urqlClient = createClient({ url: GRAPHQL_ENDPOINT });

// Query
const COUNTRY_QUERY = gql`
  query {
    countries(limit: 3) {
      code
      name
      emoji
    }
  }
`;

// Apollo Example
function ApolloExample() {
  const { loading, error, data } = useQuery(COUNTRY_QUERY);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading data</p>;
  return (
    <div style={styles.card}>
      {data.countries.map((c) => (
        <div key={c.code}>{c.emoji} {c.name}</div>
      ))}
    </div>
  );
}

// urql Example
function UrqlExample() {
  const [{ data, fetching, error }] = useUrqlQuery({ query: COUNTRY_QUERY });
  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Error loading data</p>;
  return (
    <div style={styles.card}>
      {data.countries.map((c) => (
        <div key={c.code}>{c.emoji} {c.name}</div>
      ))}
    </div>
  );
}

export default function App() {
  return (
    <div style={styles.container}>
      <h1>React GraphQL Client Patterns</h1>
      <p>Comparing Apollo Client and urql</p>
      <div style={styles.columns}>
        <ApolloProvider client={apolloClient}>
          <section>
            <h2>Apollo Client</h2>
            <ApolloExample />
          </section>
        </ApolloProvider>
        <UrqlProvider value={urqlClient}>
          <section>
            <h2>urql</h2>
            <UrqlExample />
          </section>
        </UrqlProvider>
      </div>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "system-ui, sans-serif",
    maxWidth: 800,
    margin: "40px auto",
    padding: 20,
    border: "1px solid #ccc",
    borderRadius: 12,
    background: "#fefefe"
  },
  columns: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 20
  },
  card: {
    border: "1px solid #ddd",
    borderRadius: 8,
    padding: 12,
    background: "#fafafa"
  }
};
