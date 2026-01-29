import { createContext, useState, useRef } from "react";

const ProgressContext = createContext(null);

export function ProgressProvider({ children }) {
  const [status, setStatus] = useState("Loading");
  const total = useRef(0);
  const doneCount = useRef(0);

  function register(amount = 1) {
    total.current += amount;
    setStatus("Loading");
  }

  function done() {
    doneCount.current += 1;

    if (doneCount.current >= total.current) {
      setStatus("Success");
    }
  }

  const progress = {
    status,
    register,
    done,
  };

  return (
    <ProgressContext.Provider value={progress}>
      {children}
    </ProgressContext.Provider>
  );
}
