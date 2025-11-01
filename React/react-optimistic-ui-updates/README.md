# ⚛️ react-optimistic-ui-updates

### Purpose
Demonstrate **optimistic updates** — updating UI immediately before waiting for the backend to confirm success.

### Concept
1. Save current state (for rollback).  
2. Update UI instantly (optimistic).  
3. Perform async API call.  
4. If failure → rollback to previous state.

### Run
npm install  
npm run dev

### Teaching Notes
- Makes apps feel faster and more responsive.  
- Common in social, chat, and e-commerce UIs.  
- Combine with libraries like React Query or SWR for built-in mutation rollback.

### 📝 TODO
- [ ] Add failure banner component.  
- [ ] Integrate with TanStack `useMutation` for real rollback handling.  
- [ ] Add animation when rollback occurs.  
- [ ] Persist optimistic state in context for multi-component sync.

### Key Takeaway
Optimistic UIs improve perceived performance and user trust.
Just ensure rollback logic is solid for failure cases.

© 2025 Suresh Nagar · MIT License
