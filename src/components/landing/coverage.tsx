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
      className="relative scroll-mt-20 overflow-hidden bg-foreground py-24 text-background sm:py-32 dark:bg-card"
    >
      <div aria-hidden className="absolute inset-0 pattern-dots opacity-50" />
      <div
        aria-hidden
        className="absolute -left-32 top-1/3 size-[36rem] -translate-y-1/2 rounded-full bg-primary/15 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div ref={headerRef} className="reveal-up lg:col-span-5">
            <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
              <span className="block h-px w-6 bg-primary/60" />
              {t.coverageEyebrow[locale]}
            </span>
            <h2 className="font-display mt-4 text-balance text-3xl font-semibold leading-[1.1] tracking-tight sm:text-4xl md:text-[2.65rem]">
              {t.coverageTitle[locale]}
            </h2>
            <p className="mt-4 text-pretty text-base leading-relaxed text-background/70 sm:text-lg">
              {t.coverageBody[locale]}
            </p>

            <dl className="mt-10 grid grid-cols-3 gap-6">
              {[
                { v: "12", l: locale === "en" ? "Counties" : "Condados" },
                { v: "<24h", l: locale === "en" ? "Quote turnaround" : "Cotización" },
                { v: "100%", l: locale === "en" ? "Same-day reports" : "Informes diarios" },
              ].map((s) => (
                <div key={s.l}>
                  <dt className="text-[11px] font-medium uppercase tracking-[0.18em] text-background/50">
                    {s.l}
                  </dt>
                  <dd className="font-display mt-1 text-3xl font-semibold tracking-tight">
                    {s.v}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div ref={mapRef} className="reveal-up lg:col-span-7">
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {SERVICE_AREAS.map((area) => (
                <div
                  key={area.en}
                  className="group flex items-center gap-2 rounded-lg border border-background/10 bg-background/5 px-3.5 py-2.5 backdrop-blur transition-colors hover:border-primary/40 hover:bg-primary/10"
                >
                  <MapPin className="size-3.5 shrink-0 text-primary" />
                  <span className="truncate text-sm font-medium text-background/85 group-hover:text-background">
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
