export default function CircuitSVG({ radiusProps, pattern }) {
  if (!pattern?.length) return null;

  const buildPattern = (patterns = []) =>
    patterns.reduce(
      (accum, [x, y], i) => accum + `${i === 0 ? "M" : "L"}${x} ${y}`,
      ""
    );

  const d = buildPattern(pattern);

  return (
    <svg
      viewBox="0 0 100 1300"
      preserveAspectRatio="xMidYMid meet"
      width="100%"
      height="100%"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path className="circuit-path" vectorEffect="non-scaling-stroke" d={d} />
      {pattern.map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r={radiusProps} />
      ))}
    </svg>
  );
}
