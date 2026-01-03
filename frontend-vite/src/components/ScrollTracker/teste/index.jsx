import { useEffect, useRef, useState } from "react";
import { ScrollTracker } from "./styled";
import { createPortal } from "react-dom";

export default function CircleTracker() {
  const [progress, setProgress] = useState(0);
  const [lengths, setLengths] = useState({
    center: 0,
    right: 0,
    left: 0,
  });
  const centerRef = useRef(null);
  const rightRef = useRef(null);
  const leftRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const userScrolled = window.scrollY;
      const heightArea =
        document.documentElement.scrollHeight -
        /* Altura não visível e visivel:"tudo" */

        document.documentElement.clientHeight;

      /* Altura visível:"atualmente na tela do user" */

      setProgress(Math.min(100, (userScrolled / heightArea) * 100));
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setLengths({
      center: centerRef.current.getTotalLength(),
      right: rightRef.current.getTotalLength(),
      left: leftRef.current.getTotalLength(),
    });
  }, []);
  return createPortal(
    <ScrollTracker>
      <div className="scrollCircle">
        <svg width="120" height="120">
          {/* fundo */}
          <path
            d="M 60 20 L 60 100"
            stroke="rgb(61, 61, 61)"
            strokeWidth="6"
            strokeLinecap="round"
          />
          <path
            d="M 60 100 L 40 60"
            stroke="rgb(61, 61, 61)"
            strokeWidth="6"
            strokeLinecap="round"
          />
          <path
            d="M 60 100 L 80 60"
            stroke="rgb(61, 61, 61)"
            strokeWidth="6"
            strokeLinecap="round"
          />

          {/* progresso */}
          <path
            ref={centerRef}
            d="M 60 20 L 60 100"
            stroke="#003f86"
            strokeWidth="6"
            fill="none"
            strokeDasharray={lengths.center}
            strokeDashoffset={
              lengths.center - (Math.min(progress, 60) / 60) * lengths.center
            }
            strokeLinecap="round"
          />

          <path
            ref={leftRef}
            d="M 60 100 L 40 60"
            stroke="#00fff0"
            strokeWidth="6"
            fill="none"
            strokeDasharray={lengths.left}
            strokeDashoffset={
              progress < 60
                ? lengths.left
                : lengths.left - ((progress - 60) / 40) * lengths.left
            }
            strokeLinecap="round"
          />

          <path
            ref={rightRef}
            d="M 60 100 L 80 60"
            stroke="#00fff0"
            strokeWidth="6"
            fill="none"
            strokeDasharray={lengths.right}
            strokeDashoffset={
              progress < 60
                ? lengths.right
                : lengths.right - ((progress - 60) / 40) * lengths.right
            }
            strokeLinecap="round"
          />
        </svg>
      </div>
    </ScrollTracker>,
    document.body
  );
}
