import { cn } from "@/lib/utils";

export function SignalMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={cn("size-7", className)}
      aria-hidden="true"
    >
      <rect width="32" height="32" rx="7" className="fill-surface" />
      <path
        d="M4 16 C8 16 8 8 12 8 S16 24 20 24 S24 16 28 16"
        fill="none"
        className="stroke-primary"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Waveform({ className }: { className?: string }) {
  const points = Array.from({ length: 96 }, (_, i) => {
    const x = (i / 95) * 640;
    const y =
      48 +
      Math.sin(i * 0.28) * 22 +
      Math.sin(i * 0.09) * 8 +
      Math.sin(i * 0.7) * 3;
    return `${x.toFixed(1)},${y.toFixed(1)}`;
  }).join(" ");

  return (
    <svg
      viewBox="0 0 640 96"
      className={cn("w-full text-primary", className)}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <line
        x1="0"
        y1="48"
        x2="640"
        y2="48"
        className="wave-grid stroke-border"
        strokeWidth="1"
      />
      <polyline
        points={points}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
        strokeLinecap="round"
        className="wave-trace"
      />
    </svg>
  );
}
