// Inline SVG flags — emoji flags don't render on Windows desktop browsers.
export type FlagCode = "ee" | "fi" | "gb" | "ru";

export default function Flag({
  code,
  className,
}: {
  code: FlagCode;
  className?: string;
}) {
  const common = {
    className,
    width: "1.4em",
    height: "1em",
    "aria-hidden": true,
    style: { display: "inline-block", verticalAlign: "-0.125em" },
  } as const;

  switch (code) {
    case "ee":
      return (
        <svg {...common} viewBox="0 0 33 21">
          <rect width="33" height="7" fill="#0072CE" />
          <rect y="7" width="33" height="7" fill="#000" />
          <rect y="14" width="33" height="7" fill="#fff" />
        </svg>
      );
    case "fi":
      return (
        <svg {...common} viewBox="0 0 18 11">
          <rect width="18" height="11" fill="#fff" />
          <rect x="5" width="3" height="11" fill="#003580" />
          <rect y="4" width="18" height="3" fill="#003580" />
        </svg>
      );
    case "ru":
      return (
        <svg {...common} viewBox="0 0 9 6">
          <rect width="9" height="2" fill="#fff" />
          <rect y="2" width="9" height="2" fill="#0039A6" />
          <rect y="4" width="9" height="2" fill="#D52B1E" />
        </svg>
      );
    case "gb":
      return (
        <svg {...common} viewBox="0 0 60 30">
          <clipPath id="gb-clip">
            <path d="M0 0h60v30H0z" />
          </clipPath>
          <g clipPath="url(#gb-clip)">
            <path d="M0 0l60 30M60 0L0 30" stroke="#fff" strokeWidth="6" />
            <path
              d="M0 0l60 30M60 0L0 30"
              stroke="#C8102E"
              strokeWidth="2"
            />
            <path d="M30 0v30M0 15h60" stroke="#fff" strokeWidth="10" />
            <path d="M30 0v30M0 15h60" stroke="#C8102E" strokeWidth="6" />
          </g>
        </svg>
      );
  }
}
