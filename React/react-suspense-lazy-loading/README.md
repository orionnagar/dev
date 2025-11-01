# ⚛️ react-suspense-lazy-loading

### Purpose
Teach **code splitting and on-demand component loading** with `React.lazy()` and `<Suspense>`.

### Concept
- `React.lazy(() => import(...))` defers module loading until rendered.  
- `<Suspense fallback={...}>` displays UI while the chunk downloads.

### Run
npm install  
npm run dev

### Teaching Notes
- Great for dashboards or rarely-used modals.  
- Keep fallback lightweight for perceived performance.  
- Use route-level Suspense for large apps.

### 📝 TODO
- [ ] Add React-Router lazy routes example.  
- [ ] Simulate multiple chunks + network throttling.  
- [ ] Show error boundary for failed dynamic import.  
- [ ] Measure bundle size savings with vite build.

### Key Takeaway
Lazy loading + Suspense = fast initial load, smooth progressive UX.

© 2025 Suresh Nagar · MIT License
