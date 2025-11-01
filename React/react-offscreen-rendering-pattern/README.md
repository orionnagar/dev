# ⚛️ react-offscreen-rendering-pattern

### Purpose
Teach **offscreen rendering** — mounting heavy UI components before they’re visible for instant reveal later.

### Concept
- Keep components **mounted but hidden** using CSS (`opacity:0`, `pointer-events:none`).  
- When shown, they appear instantly (no mount delay).  
- Useful for modals, tooltips, or dashboards needing fast responsiveness.

### Run
npm install  
npm run dev

### Teaching Notes
- Try toggling the modal repeatedly — first reveal is instant since it was pre-rendered.  
- You can also pre-render multiple modals offscreen to amortize cost.  
- Be cautious of memory footprint; mount only what’s truly needed.

### 📝 TODO
- [ ] Integrate with Suspense for data preloading.  
- [ ] Add intersection observer to pre-render when scrolled near viewport.  
- [ ] Combine with React 19 Offscreen API when stable.  
- [ ] Profile mount vs reveal latency.

### Key Takeaway
Pre-render critical UI offscreen to trade a small memory cost for major UX speed gains.

© 2025 Suresh Nagar · MIT License
