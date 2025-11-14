import { useEffect, useState } from "react";

export default function PageWrapper({ children }) {
  const [load, setLoad] = useState(false);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setLoad(true);
    }, 300);
    return () => clearTimeout(timeOut);
  }, []);
  return <div className={load ? "page-active" : "page"}>{children}</div>;
}
