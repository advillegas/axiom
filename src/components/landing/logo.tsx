import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  showWordmark?: boolean;
};

/**
 * Axiom mark — a stylised "A" inside a steel-blue chevron with a
 * safety-orange compass accent. Pure SVG, scales cleanly.
 */
export function Logo({ className, showWordmark = true }: Props) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <svg
        width="36"
        height="36"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="shrink-0"
      >
        <defs>
          <linearGradient id="axiom-mark" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="oklch(0.42 0.13 245)" />
            <stop offset="100%" stopColor="oklch(0.62 0.16 245)" />
          </linearGradient>
        </defs>
        <rect
          x="2"
          y="2"
          width="36"
          height="36"
          rx="9"
          fill="url(#axiom-mark)"
        />
        <path
          d="M11 28 L20 11 L29 28 M14.5 22 H25.5"
          stroke="white"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <circle cx="32.5" cy="9.5" r="2.5" fill="oklch(0.78 0.18 55)" />
      </svg>
      {showWordmark && (
        <span className="flex flex-col leading-none">
          <span className="font-display text-lg font-semibold tracking-tight text-foreground">
            AXIOM
          </span>
          <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
            Inspection Services
          </span>
        </span>
      )}
    </span>
  );
}
