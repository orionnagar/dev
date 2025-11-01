import { useMediaQuery } from "./useMediaQuery";
import "./styles.css";

/**
 * Responsive Design Pattern Demo
 * ------------------------------
 * Demonstrates adaptive layout using media queries + hook detection.
 */

export default function App() {
  const isMobile = useMediaQuery("(max-width: 600px)");
  const isTablet = useMediaQuery("(min-width: 601px) and (max-width: 1024px)");
  const isDesktop = useMediaQuery("(min-width: 1025px)");

  return (
    <div className="container">
      <h1>React Responsive Design Patterns</h1>
      <p>Resize your browser to watch layout and style change.</p>

      <div className={`card ${isMobile ? "mobile" : isTablet ? "tablet" : "desktop"}`}>
        <h2>Viewport Info</h2>
        <p>
          Current Layout:{" "}
          <strong>
            {isMobile && "📱 Mobile"}
            {isTablet && "💻 Tablet"}
            {isDesktop && "🖥️ Desktop"}
          </strong>
        </p>
        <p>
          This layout is controlled by CSS media queries *and* dynamically detected by React.
        </p>
      </div>
    </div>
  );
}
