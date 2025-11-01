# ⚛️ react-context-performance-optimization

### Purpose
Demonstrate how to prevent unnecessary re-renders when using **React Context**.

### Concept
- Split contexts by domain (Theme, User, etc.).  
- Memoize provider values with `useMemo`.  
- Wrap consumers in `React.memo`.  
- Avoid large "God Context" objects that cause everything to re-render.

### Run
npm install  
npm run dev

### Teaching Notes
- Open the console — only `ThemedBox` or `UserPanel` re-render when their context updates.  
- This pattern keeps large dashboards performant.  
- Context selectors (e.g., `use-context-selector`) can further isolate updates.

### 📝 TODO
- [ ] Show context selector example.  
- [ ] Add performance timing comparison vs unoptimized version.  
- [ ] Use React DevTools “Highlight Updates” feature.  
- [ ] Add deep provider tree simulation.

### Key Takeaway
Optimize Context by narrowing scope and stabilizing value references.  
This minimizes wasted renders and keeps UI snappy even at scale.

© 2025 Suresh Nagar · MIT License
