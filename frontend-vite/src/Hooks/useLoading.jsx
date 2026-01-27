import { useRef, useState } from "react";

export default function useLoading() {
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState("idle");

  const refProgress = useRef(null);

  const totalRef = useRef(0);
  const doneRef = useRef(0);

  const register = () => {
    totalRef.current += 1;
    console.log("TOTAL", totalRef.current);
  };

  const done = () => {
    doneRef.current += 1;
    console.log("DONE", doneRef.current);

    if (totalRef.current === 0) return;

    const percent = Math.round((doneRef.current / totalRef.current) * 100);

    setProgress((prev) => Math.max(prev, percent));

    if (doneRef.current >= totalRef.current) {
      finish();
    }
  };

  const start = () => {
    clearInterval(refProgress.current);

    totalRef.current = 0;
    doneRef.current = 0;
    setStatus("Loading");
    setProgress(0);

    refProgress.current = setInterval(() => {
      setProgress((valueBefore) =>
        valueBefore >= 75 ? valueBefore : valueBefore + 1,
      );
    }, 200);
  };

  const finish = () => {
    clearInterval(refProgress.current);

    refProgress.current = setInterval(() => {
      setProgress((valueBefore) => {
        if (valueBefore >= 100) {
          clearInterval(refProgress.current);
          setStatus("Success");
          return 100;
        }
        clearInterval(refProgress.current);
        return valueBefore + 25;
      });
    }, 100);
  };

  return { start, finish, register, done, status, progress, setProgress };
}
