export default function CircuitSVG({ pattern }) {
  if (!pattern?.length) return null;

  const buildPattern = (patterns = []) =>
    patterns.reduce(
      (accum, [x, y], i) => accum + `${i === 0 ? "M" : "L"}${x} ${y}`,
      "",
    );

  const d = buildPattern(pattern);

  return (
    <svg
      viewBox="0 0 93 1300"
      preserveAspectRatio="xMidYMid meet"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="circuit-pathBg"
        vectorEffect="non-scaling-stroke"
        d={d}
      />
      <path className="circuit-path" vectorEffect="non-scaling-stroke" d={d} />
    </svg>
  );
}
