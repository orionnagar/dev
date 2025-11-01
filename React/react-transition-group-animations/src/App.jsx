import { CSSTransition, TransitionGroup } from "react-transition-group";
import { useState } from "react";
import "./styles.css";

/**
 * react-transition-group Animations Demo
 * -------------------------------------
 * Demonstrates enter and exit animations using CSSTransition and TransitionGroup.
 */

export default function App() {
  const [items, setItems] = useState(["One", "Two", "Three"]);

  function addItem() {
    setItems((prev) => [...prev, `Item ${prev.length + 1}`]);
  }

  function removeItem(i) {
    setItems((prev) => prev.filter((_, idx) => idx !== i));
  }

  return (
    <div className="container">
      <h1>React Transition Group Animations</h1>
      <p>Add or remove items and watch smooth transitions.</p>
      <button className="button" onClick={addItem}>
        ➕ Add Item
      </button>
      <TransitionGroup className="list">
        {items.map((item, i) => (
          <CSSTransition key={item} timeout={300} classNames="fade">
            <div className="item">
              {item}
              <button className="remove" onClick={() => removeItem(i)}>
                ✖
              </button>
            </div>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
}
