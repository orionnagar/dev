# ⚛️ react-error-logging-sentry

### Purpose
Show how to capture and monitor production errors in React using **Sentry**.

### Concept
1. Initialize Sentry with your project DSN.  
2. Wrap your app in `<Sentry.ErrorBoundary>`.  
3. Trigger and capture unhandled exceptions.

### Run
npm install  
npm run dev

### Teaching Notes
- Replace the fake DSN in `App.jsx` with your real Sentry DSN.  
- You’ll see errors logged in the Sentry dashboard when the crash is triggered.  
- The ErrorBoundary fallback ensures UI doesn’t completely break.

### 📝 TODO
- [ ] Add performance tracing example (`BrowserTracing`).  
- [ ] Add environment tagging (dev, prod).  
- [ ] Capture handled errors with `Sentry.captureException()`.  
- [ ] Add Redux or context instrumentation.

### Key Takeaway
Sentry provides real-time visibility into frontend errors,  
allowing faster debugging and user issue triage.

© 2025 Suresh Nagar · MIT License
