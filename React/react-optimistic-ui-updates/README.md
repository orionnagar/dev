# ⚛️ react-optimistic-ui-updates

### Purpose
Demonstrate **optimistic UI updates** with rollback on failure using React Query mutations.

### Concept
- Update the UI instantly before awaiting server confirmation.  
- Keep a snapshot (`onMutate`) to restore if the network call fails.  
- Roll back on `onError`, confirm on `onSuccess`.

### Run
npm install  
npm run dev

### Teaching Notes
- Press **Add Todo** — a new item appears instantly.  
- Occasionally the fake API fails (20% chance).  
- Observe rollback behavior restoring previous state.  
- Provides illusion of instant response while maintaining data integrity.

### 📝 TODO
- [ ] Add delete + update optimistic flows.  
- [ ] Visualize rollback animation.  
- [ ] Integrate real REST or GraphQL API.  
- [ ] Combine with toast notifications for user feedback.

### Key Takeaway
Optimistic updates dramatically improve perceived speed while keeping data consistent and safe.

© 2025 Suresh Nagar · MIT License
