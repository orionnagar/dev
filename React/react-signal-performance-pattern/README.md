# ⚛️ react-signal-performance-pattern

### Purpose
Teach fine-grained reactivity in React using **Signals** (`@preact/signals-react`).

### Concept
Signals hold reactive values outside React’s rendering cycle.  
When a signal changes, only the DOM bindings that depend on it update — no component re-render.

### Run
npm install  
npm run dev

### Teaching Notes
- `signal()` creates reactive state outside React.  
- `computed()` derives new signals automatically.  
- Great for dashboards, animation counters, or data feeds.  
- Mixes seamlessly with regular React hooks.

### 📝 TODO
- [ ] Show signals inside nested components.  
- [ ] Combine with React Context for global reactivity.  
- [ ] Compare render counts vs useState.  
- [ ] Add animation counter using requestAnimationFrame.

### Key Takeaway
Signals make React more like a reactive UI engine —  
instant updates with minimal re-render overhead.

© 2025 Suresh Nagar · MIT License
