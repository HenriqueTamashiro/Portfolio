export default function CircuitSVG({ radiusProps }) {
  const radius = radiusProps;
  return (
    <svg
      width="120"
      height="800"
      viewBox="0 0 100 1300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="
        M60 0
        L60 120
        L20 160
        L20 300
        L60 340
        L60 500
        L100 540
        L100 700
        L60 760
        L60 900
        L20 940
        L20 1020
        L -20 1100
        L -20 1240
        L 0 1300
       
      "
        className="circuit-path"
      />

      <circle cx="60" cy="4" r={radius} />
      <circle cx="60" cy="120" r={radius} />
      <circle cx="20" cy="160" r={radius} />
      <circle cx="20" cy="300" r={radius} />
      <circle cx="60" cy="340" r={radius} />
      <circle cx="60" cy="500" r={radius} />
      <circle cx="100" cy="540" r={radius} />
      <circle cx="100" cy="700" r={radius} />
      <circle cx="60" cy="760" r={radius} />
      <circle cx="60" cy="900" r={radius} />
      <circle cx="20" cy="940" r={radius} />
      <circle cx="20" cy="1020" r={radius} />
      <circle cx="-20" cy="1100" r={radius} />
      <circle cx="-20" cy="1240" r={radius} />
      <circle cx="0" cy="1300" r={radius} />
    </svg>
  );
}
