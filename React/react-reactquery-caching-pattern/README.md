# ⚛️ react-reactquery-caching-pattern

### Purpose
Teach modern **data fetching and caching** using **TanStack Query (React Query)**.

### Concept
- Data fetched once is cached and reused.  
- Automatic background refresh when stale.  
- Retries on failure and window focus refetch.  
- Declarative loading, error, and refetch states.

### Run
npm install  
npm run dev

### Teaching Notes
- Open DevTools → Network tab: data loads once, then from cache.  
- Click “Manual Refetch” to trigger background fetch.  
- Refresh page within 10 seconds — note the cache still serves data instantly.  
- Use `staleTime` and `cacheTime` for fine control.

### 📝 TODO
- [ ] Add mutation example for POST/PUT updates.  
- [ ] Integrate DevTools via `@tanstack/react-query-devtools`.  
- [ ] Show stale vs fresh query behavior with timers.  
- [ ] Combine with Suspense for async rendering.

### Key Takeaway
React Query abstracts away manual caching logic and provides battle-tested data management for scalable frontends.

© 2025 Suresh Nagar · MIT License
