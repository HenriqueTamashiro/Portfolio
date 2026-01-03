import { useEffect, useState } from "react";
import { ScrollTracker } from "./styled";
import { createPortal } from "react-dom";

export default function CircleTracker() {
  const [progress, setProgress] = useState(0);

  const RADIUS = 45;
  const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

  useEffect(() => {
    const handleScroll = () => {
      const userScrolled = window.scrollY;
      const heightArea =
        document.documentElement.scrollHeight -
        /* Altura não visível e visivel:"tudo" */

        document.documentElement.clientHeight;

      /* Altura visível:"atualmente na tela do user" */

      const scrolledPercent = (userScrolled / heightArea) * 100;
      setProgress(Math.min(100, Math.max(0, scrolledPercent)));
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return createPortal(
    <ScrollTracker>
      <div className="scrollCircle">
        <svg width="120" height="120">
          {/* fundo */}
          <circle
            cx="60"
            cy="60"
            r={RADIUS}
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="6"
            fill="none"
          />

          {/* progresso */}
          <circle
            cx="60"
            cy="60"
            r={RADIUS}
            stroke="#00fff0"
            strokeWidth="6"
            fill="none"
            strokeDasharray={CIRCUMFERENCE}
            strokeDashoffset={CIRCUMFERENCE - (progress / 100) * CIRCUMFERENCE}
            strokeLinecap="round"
            style={{
              transition: "stroke-dashoffset 0.2s ease-out",
              transform: "rotate(-90deg)",
              transformOrigin: "50% 50%",
            }}
          />
        </svg>
      </div>
    </ScrollTracker>,
    document.body
  );
}
