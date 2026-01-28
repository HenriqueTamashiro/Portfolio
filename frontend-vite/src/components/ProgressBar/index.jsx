import { useEffect, useState } from "react";
import { WindowLayout } from "./styled";

export default function ProgressBar({ progress, status }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (status === "Success") {
      const timeout = setTimeout(() => setVisible(false), 400);
      return () => clearTimeout(timeout);
    } else {
      setVisible(true);
    }
  }, [status]);

  if (!visible) return null;

  return (
    <WindowLayout>
      <div className={`bar-wrapper ${status === "Success" ? "hide" : "show"}`}>
        <div className="progress-bckgr">
          <div className="progress-bar" style={{ width: `${progress}%` }} />
        </div>
      </div>
    </WindowLayout>
  );
}
