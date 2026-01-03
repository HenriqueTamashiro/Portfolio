export default function DebugPanel({ progress, totalLength, limit }) {
  const normalized = Math.min(progress, limit) / limit;
  const visible = normalized * totalLength;
  const offset = totalLength - visible;

  return (
    <pre
      style={{
        position: "fixed",
        bottom: "20px",
        left: "20px",
        background: "#111",
        padding: "12px",
        fontSize: "13px",
        color: "#0ff",
        zIndex: 99999,
        lineHeight: "1.4",
      }}
    >
      {`
--Debug da linha central--
progress (%)        = ${progress.toFixed(2)}
limit               = ${limit}
normalized (0..1)   = ${normalized.toFixed(3)}

totalLength (path)  = ${totalLength.toFixed(2)}
visibleLength       = ${visible.toFixed(2)}
strokeDashoffset    = ${offset.toFixed(2)}
`}
    </pre>
  );
}
