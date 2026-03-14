import { useEffect, useState, useRef } from "react";

export function useInView(opt = {}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      { threshold: 0.1, ...opt },
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [opt]);
  return [ref, visible];
}
