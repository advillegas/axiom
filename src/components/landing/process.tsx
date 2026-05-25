"use client";

import { useReveal } from "@/lib/use-reveal";
import { useLocale } from "@/i18n/use-locale";
import { PROCESS, t } from "@/i18n/content";

import { SectionHeader } from "./section-header";

export function Process() {
  const { locale } = useLocale();
  const headerRef = useReveal<HTMLDivElement>();

  return (
    <section
      id="process"
      className="relative scroll-mt-20 overflow-hidden bg-muted/30 py-24 sm:py-32"
    >
      <div aria-hidden className="absolute inset-0 pattern-grid opacity-40" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div ref={headerRef} className="reveal-up">
          <SectionHeader
            eyebrow={t.processEyebrow[locale]}
            title={t.processTitle[locale]}
          />
        </div>

        <ol className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border bg-border md:grid-cols-2 lg:grid-cols-4">
          {PROCESS.map((p, idx) => {
            const copy = locale === "en" ? p.en : p.es;
            return (
              <li
                key={p.n}
                className="group relative bg-card p-7 transition-colors hover:bg-card/80"
              >
                <div className="flex items-baseline justify-between">
                  <span className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                    Step {p.n}
                  </span>
                  <span className="font-display text-5xl font-semibold leading-none text-primary/15 transition-colors group-hover:text-primary/30">
                    {p.n}
                  </span>
                </div>
                <h3 className="font-display mt-6 text-xl font-semibold tracking-tight">
                  {copy.t}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {copy.b}
                </p>
                {idx < PROCESS.length - 1 && (
                  <span
                    aria-hidden
                    className="absolute right-0 top-1/2 hidden h-px w-6 -translate-y-1/2 bg-gradient-to-r from-border to-primary/40 lg:block"
                  />
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
