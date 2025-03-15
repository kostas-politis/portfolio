export default function ProfileBorder({
  width = '350',
  className,
}: {
  width?: string;
  color?: string;
  className?: string;
}) {
  return (
    <svg
      className={className}
      width={width}
      height={width}
      viewBox="0 0 100 100"
    >
      <circle
        r="49.2"
        cx="50"
        cy="50"
        stroke="var(--accent)"
        strokeWidth="0.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="transparent"
        strokeDasharray="3 24 18.4 5"
      >
        <animate
          id="forward-stroke"
          attributeName="stroke-dasharray"
          begin="0s; backward-stroke.end + 1s"
          dur="20s"
          fill="freeze"
          calcMode="spline"
          values="3 24 5 5; 3.2 5 18.4 14.4; 0.8 50 4.4 4.4;"
          keyTimes="0;0.5;1"
          keySplines="0.42 0 0.58 1; 0.42 0 0.58 1"
        />
        <animate
          id="backward-stroke"
          attributeName="stroke-dasharray"
          begin="forward-stroke.end + 1s"
          dur="20s"
          fill="freeze"
          calcMode="spline"
          values="0.8 50 4.4 4.4; 3.2 5 18.4 14.4; 3 24 5 5;"
          keyTimes="0;0.5;1"
          keySplines="0.42 0 0.58 1; 0.42 0 0.58 1"
        />
        <animateTransform
          id="forward-rotate"
          attributeName="transform"
          begin="0s; backward-rotate.end + 1s"
          type="rotate"
          dur="20s"
          fill="freeze"
          calcMode="spline"
          values="0 50 50; 360 50 50"
          keyTimes="0;1"
          keySplines="0.42 0 0.58 1"
        />
        <animateTransform
          id="backward-rotate"
          attributeName="transform"
          begin="forward-rotate.end + 1s"
          dur="20s"
          fill="freeze"
          type="rotate"
          calcMode="spline"
          values="360 50 50; 0 50 50"
          keyTimes="0;1"
          keySplines="0.42 0 0.58 1"
        />
      </circle>
    </svg>
  );
}
