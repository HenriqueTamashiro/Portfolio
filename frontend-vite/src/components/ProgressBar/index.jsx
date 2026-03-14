import { useEffect, useState } from "react";
import { WindowLayout } from "./styled";

export default function ProgressBar({ progress, status }) {
  const [active, setActive] = useState(true);

  useEffect(() => {
    if (status === "Success") {
      const timeout = setTimeout(() => setActive(false), 800);
      return () => clearTimeout(timeout);
    } else if (status === "Loading") {
      setActive(true);
    }
  }, [status]);

  if (!active) return null;
  return (
    <WindowLayout className={status === "Success" ? "hide" : "show"}>
      {status === "error" && <p>Erro ao carregar</p>}

      <div className="progress-bckgr">
        <div
          className="progress-bar"
          style={{
            width: `${progress}%`,

            transition: "width 0.4s linear",
          }}
        />
      </div>
    </WindowLayout>
  );
}
