# ⚛️ react-rbac-role-based-ui

### Purpose
Demonstrate **Role-Based Access Control (RBAC)** in React using Context and route guards.

### Concept
1. Store user and role in Context.  
2. Protect routes and components based on allowed roles.  
3. Redirect unauthorized users to a friendly message.

### Run
npm install  
npm run dev

### Teaching Notes
- Uses localStorage to persist role-based session.  
- Roles can be admin, user, viewer, etc.  
- `ProtectedRoute` checks both auth and role permissions.

### 📝 TODO
- [ ] Add granular component-level RBAC (`<Can role="admin" />`).  
- [ ] Sync roles from server claims in JWT.  
- [ ] Add menu visibility filtering based on permissions.  
- [ ] Add testing suite to verify access logic.

### Key Takeaway
RBAC lets you build secure and flexible UIs by mapping user roles to route access and UI visibility.

© 2025 Suresh Nagar · MIT License
