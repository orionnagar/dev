# ⚛️ react-virtualized-infinite-scroll

### Purpose
Show how to handle **massive datasets** efficiently by combining virtualization with incremental loading.

### Concept
- `react-window` only renders visible rows.  
- Fetch more items when the user nears the end of the list.  
- Smooth scrolling even with thousands of records.

### Run
npm install  
npm run dev

### Teaching Notes
- Observe that scrolling is always smooth — only ~10–15 rows exist in the DOM.  
- Change `BATCH_SIZE` or item count to experiment.  
- Replace fake fetch with a paginated API for production use.

### 📝 TODO
- [ ] Add a “Load More” button as manual fallback.  
- [ ] Integrate intersection observer instead of index trigger.  
- [ ] Show a spinner while fetching.  
- [ ] Combine with React Query for cached pagination.

### Key Takeaway
Virtualization + incremental fetch = infinite scalability with zero lag.

© 2025 Suresh Nagar · MIT License
