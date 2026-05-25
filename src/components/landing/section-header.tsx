import { cn } from "@/lib/utils";

type Props = {
  eyebrow: string;
  title: string;
  body?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  body,
  align = "left",
  className,
}: Props) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      <span className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-primary sm:text-[11px] sm:tracking-[0.22em]">
        <span className="block h-px w-6 bg-primary/60" />
        {eyebrow}
      </span>
      <h2 className="font-display mt-3 text-balance text-[1.75rem] font-semibold leading-[1.1] tracking-tight text-foreground sm:mt-4 sm:text-3xl md:text-4xl lg:text-[2.65rem]">
        {title}
      </h2>
      {body && (
        <p className="mt-3 text-pretty text-[15px] leading-relaxed text-muted-foreground sm:mt-4 sm:text-base lg:text-lg">
          {body}
        </p>
      )}
    </div>
  );
}
