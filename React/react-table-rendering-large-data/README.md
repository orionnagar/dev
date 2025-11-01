# ⚛️ react-table-rendering-large-data

### Purpose
Show how to efficiently render large tables in React using **windowing** (virtualization).

### Concept
Instead of rendering all rows at once, **react-window** only mounts the rows currently visible in the viewport.
This reduces memory use and improves performance dramatically.

### Run
npm install  
npm run dev

### Teaching Notes
- Virtualization is key for large datasets (10k+ rows).
- react-window is lightweight and simple; react-virtualized is a heavier alternative.
- Each row receives a `style` prop for correct positioning.

### 📝 TODO
- [ ] Add dynamic row heights with `VariableSizeList`.
- [ ] Integrate sorting and filtering.
- [ ] Show virtualization with infinite scrolling.
- [ ] Compare CPU/memory usage vs normal rendering.

### Key Takeaway
Virtualized rendering keeps UI smooth by rendering only what’s visible.

© 2025 Suresh Nagar · MIT License
