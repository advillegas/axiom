"use client";

import { useLocale } from "@/i18n/use-locale";
import { t } from "@/i18n/content";
import { JURISDICTIONS } from "@/i18n/content";

export function TrustStrip() {
  const { locale } = useLocale();

  return (
    <section
      aria-label={t.trustHeading[locale]}
      className="border-y bg-muted/40"
    >
      <div className="mx-auto w-full max-w-7xl overflow-hidden px-4 py-7 sm:px-6 sm:py-8 lg:px-8">
        <p className="px-2 text-center text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground sm:text-[11px] sm:tracking-[0.22em]">
          {t.trustHeading[locale]}
        </p>
        <div
          aria-hidden
          className="mt-4 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)] sm:mt-5"
        >
          <div className="flex w-max animate-marquee gap-8 whitespace-nowrap pr-8 sm:gap-12 sm:pr-12">
            {[...JURISDICTIONS, ...JURISDICTIONS].map((j, i) => (
              <span
                key={`${j}-${i}`}
                className="font-display text-sm font-medium tracking-tight text-foreground/60 sm:text-base"
              >
                {j}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
