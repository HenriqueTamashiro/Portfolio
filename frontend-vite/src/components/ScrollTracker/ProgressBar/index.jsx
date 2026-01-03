import { useEffect, useRef, useState } from "react";
import { StyledBar } from "./styled";
import { createPortal } from "react-dom";
import { useLocation } from "react-router-dom";

export default function ProgressBar() {
  const [progress, setProgress] = useState(0);
  const [length, setLength] = useState(null);

  const pathLength = useRef(0);

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });

    const handleProgress = () => {
      const userScrolled = window.scrollY;
      const maxScroll =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      if (maxScroll <= 0) {
        setProgress(0);
        return;
      }

      setProgress(Math.min(userScrolled / maxScroll, 1));
    };
    window.addEventListener("scroll", handleProgress);
    handleProgress();
    return () => window.removeEventListener("scroll", handleProgress);
  }, [pathname]);

  useEffect(() => {
    const realLength = pathLength.current.getTotalLength();
    setLength(realLength);
  }, []);
  return createPortal(
    <StyledBar>
      <div className="progress-bar">
        <svg
          className="progress-svg"
          viewBox="0 0 900 10"
          preserveAspectRatio="none"
        >
          <path className="bgBar" d="M0 5 L900 5" />

          <path
            ref={pathLength}
            className="bar"
            d="M0 5 L900 5"
            stroke="url(#progressGradient)"
            strokeDasharray={length}
            strokeDashoffset={length - progress * length}
          />
        </svg>
      </div>
    </StyledBar>,
    document.body
  );
}
