import { useEffect, useState } from "react";

export default function PageWrapper({ children, progress }) {
  const [load, setLoad] = useState(false);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setLoad(true);
    }, 300);
    return () => clearTimeout(timeOut);
  }, []);
  return (
    <div className={progress.status === "Success" ? "show" : "hide"}>
      {children}
    </div>
  );
}
