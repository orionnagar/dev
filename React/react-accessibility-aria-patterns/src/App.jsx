import { useState, useRef, useEffect } from "react";
import FocusTrap from "focus-trap-react";
import "./styles.css";

/**
 * Accessibility & ARIA Patterns Demo
 * ----------------------------------
 * Shows how to make modals and buttons accessible
 * with ARIA attributes, focus trapping, and keyboard controls.
 */

function AccessibleModal({ isOpen, onClose }) {
  const modalRef = useRef(null);

  // Close on ESC
  useEffect(() => {
    function onKeyDown(e) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <FocusTrap>
      <div
        ref={modalRef}
        className="modal-backdrop"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <div className="modal">
          <h2 id="modal-title">Accessible Modal</h2>
          <p>Press <kbd>ESC</kbd> to close or use the button below.</p>
          <button onClick={onClose} className="button">
            Close
          </button>
        </div>
      </div>
    </FocusTrap>
  );
}

export default function App() {
  const [open, setOpen] = useState(false);
  const openButton = useRef();

  // Restore focus to trigger element when modal closes
  useEffect(() => {
    if (!open && openButton.current) openButton.current.focus();
  }, [open]);

  return (
    <div className="container">
      <h1>React Accessibility + ARIA Patterns</h1>
      <p>
        Demonstrates <code>aria-*</code> roles, focus trapping, and keyboard interaction.
      </p>

      <button
        ref={openButton}
        onClick={() => setOpen(true)}
        className="button"
        aria-haspopup="dialog"
        aria-controls="accessible-modal"
      >
        Open Modal
      </button>

      <AccessibleModal isOpen={open} onClose={() => setOpen(false)} />
    </div>
  );
}
