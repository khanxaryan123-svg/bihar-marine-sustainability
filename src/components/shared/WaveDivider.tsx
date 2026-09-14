type Variant = "top" | "bottom" | "top-light" | "bottom-light";

type Props = {
  variant?: Variant;
  className?: string;
  waveColor?: string;
  bgColor?: string;
};

const paths: Record<Variant, { d: string; color: string }> = {
  top: {
    d: "M0,64 C180,128 360,0 540,48 C720,96 900,32 1080,72 C1260,112 1440,48 1600,80 L1600,0 L0,0 Z",
    color: "white",
  },
  bottom: {
    d: "M0,0 C180,48 360,0 540,48 C720,96 900,16 1080,56 C1260,96 1440,32 1600,64 L1600,128 L0,128 Z",
    color: "white",
  },
  "top-light": {
    d: "M0,64 C200,120 380,0 560,48 C740,96 920,24 1100,64 C1280,104 1440,48 1600,72 L1600,0 L0,0 Z",
    color: "#F2F7F8",
  },
  "bottom-light": {
    d: "M0,0 C200,48 380,0 560,48 C740,96 920,24 1100,64 C1280,104 1440,48 1600,72 L1600,128 L0,128 Z",
    color: "#F2F7F8",
  },
};

export default function WaveDivider({
  variant = "bottom",
  className = "",
  waveColor,
  bgColor = "transparent",
}: Props) {
  const path = paths[variant];
  const fill = waveColor ?? path.color;

  return (
    <div
      aria-hidden
      className={`pointer-events-none relative left-0 right-0 w-full overflow-hidden leading-none ${className}`}
    >
      <svg
        className="relative block w-full h-[60px] md:h-[96px]"
        viewBox="0 0 1600 128"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {bgColor !== "transparent" && (
          <rect width="1600" height="128" fill={bgColor} />
        )}
        <path d={path.d} fill={fill} />
      </svg>
    </div>
  );
}
