# ⚛️ react-error-boundary-retry-pattern

### Purpose
Show how to handle runtime render failures using an **Error Boundary** and offer retry or reset logic.

### Concept
- `componentDidCatch` traps errors in child components.  
- Show a fallback UI to preserve app stability.  
- Provide a retry button to reset error state and re-render safely.

### Run
npm install  
npm run dev

### Teaching Notes
- Toggle the “Trigger Error” button to throw an intentional error.  
- The boundary catches it and shows fallback UI.  
- Press “Retry” to reset the component tree.  
- Combine with logging tools like Sentry for production visibility.

### 📝 TODO
- [ ] Add auto-retry with exponential backoff.  
- [ ] Integrate Sentry capture inside `componentDidCatch`.  
- [ ] Convert to functional pattern using `react-error-boundary` library.  
- [ ] Test async data-fetch failures within boundaries.

### Key Takeaway
Error Boundaries isolate failures to protect the rest of the UI,  
and explicit retry keeps users in control after recoverable crashes.

© 2025 Suresh Nagar · MIT License
