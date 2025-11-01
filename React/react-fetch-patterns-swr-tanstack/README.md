# ⚛️ react-fetch-patterns-swr-tanstack

### Purpose
Demonstrate two modern approaches for React data fetching:
**SWR** and **TanStack Query (React Query).**

### Concept
Both libraries implement:
- Request deduplication
- Cache-first reads
- Background revalidation
- Declarative async state (`isLoading`, `error`, `data`)

### Run
npm install  
npm run dev

### Teaching Notes
- **SWR** is lightweight and ideal for small apps or static data.
- **TanStack Query** adds mutations, pagination, and prefetching for complex UIs.
- Use `QueryClientProvider` to share cache across your app.

### 📝 TODO
- [ ] Add mutation example (POST / PATCH).
- [ ] Add error retries and exponential backoff.
- [ ] Visualize stale-while-revalidate flow with timestamps.
- [ ] Integrate both under one unified data service layer.

### Key Takeaway
SWR and TanStack Query abstract the messy parts of async fetching,
turning your UI into pure declarative state updates.

© 2025 Suresh Nagar · MIT License
