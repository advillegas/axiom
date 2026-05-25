"use client";

import { MapPin } from "lucide-react";

import { useReveal } from "@/lib/use-reveal";
import { useLocale } from "@/i18n/use-locale";
import { SERVICE_AREAS, t } from "@/i18n/content";

import { SectionHeader } from "./section-header";

export function Coverage() {
  const { locale } = useLocale();
  const headerRef = useReveal<HTMLDivElement>();
  const mapRef = useReveal<HTMLDivElement>();

  return (
    <section
      id="coverage"
      className="relative scroll-mt-20 overflow-hidden bg-foreground py-16 text-background sm:py-24 lg:py-32 dark:bg-card"
    >
      <div aria-hidden className="absolute inset-0 pattern-dots opacity-50" />
      <div
        aria-hidden
        className="absolute -left-32 top-1/3 size-[36rem] -translate-y-1/2 rounded-full bg-primary/15 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:gap-12 lg:grid-cols-12 lg:gap-16">
          <div ref={headerRef} className="reveal-up lg:col-span-5">
            <span className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-primary sm:text-[11px] sm:tracking-[0.22em]">
              <span className="block h-px w-6 bg-primary/60" />
              {t.coverageEyebrow[locale]}
            </span>
            <h2 className="font-display mt-3 text-balance text-[1.75rem] font-semibold leading-[1.1] tracking-tight sm:mt-4 sm:text-3xl md:text-4xl lg:text-[2.65rem]">
              {t.coverageTitle[locale]}
            </h2>
            <p className="mt-3 text-pretty text-[15px] leading-relaxed text-background/70 sm:mt-4 sm:text-base lg:text-lg">
              {t.coverageBody[locale]}
            </p>

            <dl className="mt-8 grid grid-cols-3 gap-3 sm:mt-10 sm:gap-6">
              {[
                { v: "12", l: locale === "en" ? "Counties" : "Condados" },
                { v: "<24h", l: locale === "en" ? "Quote turnaround" : "Cotización" },
                { v: "100%", l: locale === "en" ? "Same-day reports" : "Informes diarios" },
              ].map((s) => (
                <div key={s.l} className="min-w-0">
                  <dt className="text-[10px] font-medium uppercase leading-tight tracking-[0.14em] text-background/50 sm:text-[11px] sm:tracking-[0.18em]">
                    {s.l}
                  </dt>
                  <dd className="font-display mt-1 text-2xl font-semibold tracking-tight sm:text-3xl">
                    {s.v}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div ref={mapRef} className="reveal-up lg:col-span-7">
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3">
              {SERVICE_AREAS.map((area) => (
                <div
                  key={area.en}
                  className="group flex min-w-0 items-center gap-2 rounded-lg border border-background/10 bg-background/5 px-3 py-2.5 backdrop-blur transition-colors hover:border-primary/40 hover:bg-primary/10 sm:px-3.5"
                >
                  <MapPin className="size-3.5 shrink-0 text-primary" />
                  <span className="truncate text-[13px] font-medium text-background/85 group-hover:text-background sm:text-sm">
                    {locale === "en" ? area.en : area.es}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
