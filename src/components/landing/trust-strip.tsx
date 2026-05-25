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
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <p className="text-center text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
          {t.trustHeading[locale]}
        </p>
        <div className="mt-5 overflow-hidden">
          <div className="flex w-max animate-marquee gap-12 whitespace-nowrap pr-12">
            {[...JURISDICTIONS, ...JURISDICTIONS].map((j, i) => (
              <span
                key={`${j}-${i}`}
                className="font-display text-base font-medium tracking-tight text-foreground/60"
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
