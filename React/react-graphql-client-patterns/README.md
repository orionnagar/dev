# ⚛️ react-graphql-client-patterns

### Purpose
Compare two major React GraphQL clients — **Apollo Client** and **urql** — and demonstrate common usage patterns.

### Concept
Both libraries provide:
- Declarative hooks (`useQuery`)
- Automatic caching
- Error/loading state management
- Simple configuration with GraphQL endpoints

### Run
npm install  
npm run dev

### Teaching Notes
- Apollo offers a rich ecosystem (mutations, subscriptions, local state, DevTools).
- urql is lightweight and modular — great for small to medium apps.
- Both use the same GraphQL schema and queries.

### 📝 TODO
- [ ] Add mutation examples (add / update country).
- [ ] Show cache updates and refetching.
- [ ] Demonstrate error boundaries and retries.
- [ ] Compare bundle sizes and performance.

### Key Takeaway
Apollo and urql abstract GraphQL networking into declarative hooks.
Choose based on app complexity: Apollo for enterprise, urql for lean setups.

© 2025 Suresh Nagar · MIT License
