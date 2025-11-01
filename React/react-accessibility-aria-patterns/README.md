# ⚛️ react-accessibility-aria-patterns

### Purpose
Show how to build **accessible React components** using ARIA roles, focus trapping, and keyboard navigation.

### Concept
- `aria-*` attributes describe UI roles and relationships.  
- `focus-trap-react` ensures focus stays inside modals or dialogs.  
- Keyboard support (`Tab`, `Escape`) makes apps fully navigable.

### Run
npm install  
npm run dev

### Teaching Notes
- Open DevTools → Accessibility pane → inspect roles and labels.  
- Test navigation using only keyboard (Tab / Shift+Tab / Escape).  
- Screen readers will correctly identify the dialog.  
- Focus returns to the opener after closing modal.

### 📝 TODO
- [ ] Add menu button pattern (`aria-expanded`, `aria-controls`).  
- [ ] Add custom checkbox or toggle with keyboard focus.  
- [ ] Add live region updates (`aria-live`).  
- [ ] Integrate automated a11y testing with axe-core.

### Key Takeaway
Accessibility isn’t optional — ARIA + keyboard patterns make interfaces usable for everyone.

© 2025 Suresh Nagar · MIT License
