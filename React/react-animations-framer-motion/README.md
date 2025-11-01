# ⚛️ react-animations-framer-motion

### Purpose
Demonstrate how to create enter/exit animations in React using **Framer Motion**.

### Concept
Framer Motion lets you declaratively describe animations:
```jsx
<motion.div initial={{opacity:0}} animate={{opacity:1}} />
```
No manual DOM manipulation or CSS keyframes required.

### Run
npm install  
npm run dev

### Teaching Notes
- `AnimatePresence` handles exit animations on unmount.
- Transitions can be chained, spring-based, or sequenced.
- Works great for modals, route transitions, and feedback UI.

### 📝 TODO
- [ ] Add multiple boxes with staggered animation.
- [ ] Add spring physics example.
- [ ] Add hover / tap interaction variants.
- [ ] Show usage with layout transitions.

### Key Takeaway
Framer Motion abstracts animation timing, easing, and orchestration
into a clean, declarative API that feels native to React.

© 2025 Suresh Nagar · MIT License
