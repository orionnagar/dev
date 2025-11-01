# ⚛️ react-hooks-usecallback-vs-usememo

### Purpose
Explain the difference between `useCallback` and `useMemo` and how they prevent unnecessary work in React.

### Concept
- **useCallback(fn, deps)** → memoizes a *function reference*  
- **useMemo(calc, deps)** → memoizes a *computed value*

### Run
npm install  
npm run dev

### Teaching Notes
- Open DevTools Console to watch render logs.  
- Clicking **Toggle Theme** should NOT trigger the expensive computation.  
- `useCallback` ensures `compute`'s identity stays stable across renders.

### 📝 TODO
- [ ] Add profiler demo measuring render counts.  
- [ ] Show anti-pattern: inline function without useCallback.  
- [ ] Add TypeScript typings example.  
- [ ] Integrate with React DevTools memoization inspector.

### Key Takeaway
`useCallback` memoizes functions,  
`useMemo` memoizes values — both reduce wasted renders and CPU work.

© 2025 Suresh Nagar · MIT License
