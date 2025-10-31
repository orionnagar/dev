# ⚛️ react-context-global-state

### Purpose
Demonstrate how React **Context** allows components to share global state without prop drilling.

### Concept
A Provider component holds shared state.  
Any descendant component can read or update that state via `useContext`.

### Run
npm install  
npm run dev

### Teaching Notes
- Ideal for small, global state (theme, auth, locale).
- Avoid for rapidly changing data (can cause extra renders).
- Combine with custom hooks for clean, reusable access.

### 📝 TODO
- [ ] Add nested consumer components.
- [ ] Add multiple contexts (Theme + Auth) example.
- [ ] Add a performance test with deep trees.
- [ ] TypeScript version with context typing.

### Key Takeaway
Context is React’s built-in mechanism for dependency injection:
wrap once, consume anywhere.
