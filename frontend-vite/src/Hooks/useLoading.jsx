import { useRef, useState, useCallback } from "react";

export default function useLoading({ debug = false } = {}) {
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState("idle");

  const refProgress = useRef(null);
  const totalRef = useRef(0);
  const doneRef = useRef(0);
  const startedRef = useRef(false);

  const log = useCallback(
    (...args) => {
      if (debug) {
        console.log("%c[LOADER]", "color:#00c8ff;font-weight:bold", ...args);
      }
    },
    [debug],
  );

  const finish = useCallback(() => {
    log("FINISH requested");

    clearInterval(refProgress.current);

    refProgress.current = setInterval(() => {
      setProgress((v) => {
        if (v >= 100) {
          clearInterval(refProgress.current);
          startedRef.current = false; // 👈 ESSENCIAL
          setStatus("Success");
          log("✔ COMPLETED");
          return 100;
        }
        return v + 25;
      });
    }, 100);
  }, [log]);

  // ✅ FIX + DEBUG
  const register = useCallback(
    (amount = 1, label = "unnamed") => {
      totalRef.current += amount;
      log("REGISTER →", label, "| total =", totalRef.current);
    },
    [log],
  );

  const start = useCallback(() => {
    if (startedRef.current) return;
    startedRef.current = true;

    log("START");
    clearInterval(refProgress.current);

    totalRef.current = 0;
    doneRef.current = 0;

    setStatus("Loading");
    setProgress(0);

    refProgress.current = setInterval(() => {
      setProgress((v) => (v >= 75 ? v : v + 1));
    }, 200);

    setTimeout(() => {
      if (totalRef.current === 0) {
        log("NO REGISTER after delay → finish");
        finish();
      }
    }, 1200);
  }, [log, finish]);

  const done = useCallback(
    (label = "unnamed") => {
      doneRef.current += 1;

      log("DONE →", label, `(${doneRef.current}/${totalRef.current})`);

      if (totalRef.current === 0) return;

      const percent = Math.round((doneRef.current / totalRef.current) * 100);

      setProgress((prev) => Math.max(prev, percent));

      if (doneRef.current >= totalRef.current) {
        finish();
      }
    },
    [finish, log],
  );

  const reset = () => {
    log("RESET");
    clearInterval(refProgress.current);
  };

  const snapshot = () => ({
    total: totalRef.current,
    done: doneRef.current,
    progress,
    status,
  });

  return {
    start,
    finish,
    register,
    reset,
    done,
    status,
    progress,
    snapshot, // 👈 útil pra console.table
  };
}
