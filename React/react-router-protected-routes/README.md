# ⚛️ react-router-protected-routes

### Purpose
Demonstrate how to protect routes in React using React Router and conditional rendering.

### Concept
Wrap sensitive routes in a component (`ProtectedRoute`) that checks authentication state.
If not authenticated, redirect the user to a login page.

### Run
npm install  
npm run dev

### Teaching Notes
- This example uses in-memory `useState` for auth — replace it with real logic later.
- `Navigate` handles redirection cleanly in React Router v6+.
- Context or Redux can provide global auth state across the app.

### 📝 TODO
- [ ] Add persistent auth via Context or localStorage.
- [ ] Add role-based access control example.
- [ ] Add visual feedback for unauthorized access.
- [ ] Integrate with backend JWT verification.

### Key Takeaway
Protecting routes is just conditional rendering at the router level.
`<ProtectedRoute>` abstracts that pattern for reuse.

© 2025 Suresh Nagar · MIT License
