# ⚛️ react-auth-context-jwt-flow

### Purpose
Teach how to build a simple authentication flow using **React Context** and JWT-style token persistence.

### Concept
1. Store token in localStorage.  
2. Provide login/logout through Context.  
3. Use a ProtectedRoute to guard private routes.  
4. Redirect to login when unauthenticated.

### Run
npm install  
npm run dev

### Teaching Notes
- This demo uses a fake token generator (`btoa`) for clarity.  
- In production, the token comes from an API response.  
- Always validate tokens server-side before trusting them.

### 📝 TODO
- [ ] Add token expiry check and auto logout.  
- [ ] Replace fake login with API call.  
- [ ] Add user roles and permissions.  
- [ ] Implement refresh tokens with silent renewal.

### Key Takeaway
Auth flows are just state machines:
login → store token → access protected routes → logout.

© 2025 Suresh Nagar · MIT License
