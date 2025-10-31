# ⚛️ react-state-machine-usereducer

### Purpose
Show how `useReducer` models predictable state transitions and enforces valid flows through a component.

### Concept
Each UI mode (idle, running, finished) is a **state**.
Each user action (START, TICK, FINISH, RESET) is an **event**.
The reducer defines which transitions are legal.

### Run
npm install  
npm run dev

### Teaching Notes
- Centralizes complex UI logic in one pure function.
- Enables time-travel debugging and clear transition maps.
- Works well for async or multi-step workflows.

### 📝 TODO
- [ ] Add async example with `setTimeout` dispatching `FINISH`.
- [ ] Draw a diagram of the finite-state transitions.
- [ ] Add Jest tests verifying transitions.
- [ ] Add TypeScript enums for state and actions.

### Key Takeaway
`useReducer` makes component behavior explicit and reliable.  
It’s the simplest way to think in **state machines** inside React.

© 2025 Suresh Nagar · MIT License
