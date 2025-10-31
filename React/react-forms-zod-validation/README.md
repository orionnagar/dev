# ⚛️ react-forms-zod-validation

### Purpose
Demonstrate schema-based form validation in React using **Zod**.

### Concept
Zod defines a validation schema describing valid input.
You parse form data against that schema to produce clean error messages.

### Run
npm install  
npm run dev

### Teaching Notes
- Zod works client- or server-side; it returns rich error info.
- `safeParse()` lets you branch cleanly on success vs. error.
- `z.coerce.number()` converts strings from inputs to numbers before validation.

### 📝 TODO
- [ ] Add live validation on blur or on change.
- [ ] Show nested object validation example.
- [ ] Integrate with React Hook Form.
- [ ] Add TypeScript typings with `z.infer`.

### Key Takeaway
Schema-based validation centralizes all your form rules
and ensures consistency between front end and back end.

© 2025 Suresh Nagar · MIT License
