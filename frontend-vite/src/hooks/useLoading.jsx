import { useRef, useState } from "react";

import { useCallback } from "react";

export default function useLoading() {
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState("idle");

  const pendingIds = useRef(new Set());
  const totalRef = useRef(0);

  const register = useCallback((...ids) => {
    ids.forEach((id) => {
      if (pendingIds.current.has(id)) return;
      pendingIds.current.add(id);
      totalRef.current += 1;
    });
  }, []);

  const done = useCallback((id) => {
    if (!pendingIds.current.has(id)) return;

    pendingIds.current.delete(id);

    const completed = totalRef.current - pendingIds.current.size;

    const percent = Math.round((completed / totalRef.current) * 100);

    setProgress(percent);

    if (pendingIds.current.size === 0) {
      setStatus("Success");
    }
  }, []);

  const start = useCallback(() => {
    setProgress(0);
    setStatus("Loading");
  }, []);

  const reset = useCallback(() => {
    pendingIds.current.clear();
    totalRef.current = 0;
    setProgress(0);
    setStatus("idle");
  }, []);

  return {
    reset,
    start,
    register,
    done,
    progress,
    status,
  };
}
