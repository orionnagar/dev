# ⚛️ react-performance-profiler-flamegraph

### Purpose
Demonstrate React's built-in **Profiler API** and how to interpret flamegraphs for render-time analysis.

### Concept
- Wrap expensive components with `<Profiler>`  
- Use `onRender` to log render timing  
- Combine with React DevTools → Profiler tab → Flamegraph view

### Run
npm install  
npm run dev

### Teaching Notes
- Compare `actualDuration` vs `baseDuration` for memoization wins.  
- Look for unnecessary updates triggered by parent state.  
- Pair with `useMemo` and `React.memo` to reduce render cost.  
- Great for debugging slow dashboard widgets or heavy lists.

### 📝 TODO
- [ ] Add multi-component profiling (charts, tables).  
- [ ] Export timings to a CSV for analysis.  
- [ ] Add "Render Count" badge overlay in UI.  
- [ ] Combine with `performance.now()` manual tracing.

### Key Takeaway
Profiling reveals hidden re-renders and wasted work.
Use these metrics to focus optimization where it actually matters.

© 2025 Suresh Nagar · MIT License
