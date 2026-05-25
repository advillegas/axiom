"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useLocale } from "@/i18n/use-locale";
import { t } from "@/i18n/content";

export function Hero() {
  const { locale } = useLocale();

  return (
    <section
      id="top"
      className="relative isolate overflow-hidden pt-16"
    >
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=2400&q=80"
          alt="Construction worker reviewing structural plans on site"
          priority
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="absolute inset-0 pattern-grid opacity-25" />
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 pb-24 pt-28 sm:px-6 sm:pt-32 lg:grid-cols-12 lg:gap-16 lg:px-8 lg:pb-36 lg:pt-40">
        {/* Left column — copy */}
        <div className="text-white lg:col-span-7">
          <Badge
            variant="outline"
            className="border-white/20 bg-white/10 text-xs font-medium uppercase tracking-[0.18em] text-white/90 backdrop-blur"
          >
            <ShieldCheck className="mr-1.5 size-3.5" />
            {t.heroEyebrow[locale]}
          </Badge>

          <h1 className="font-display mt-6 text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-[4.25rem]">
            {t.heroTitle[locale]}{" "}
            <span className="text-gradient">{t.heroTitleAccent[locale]}</span>
          </h1>

          <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-white/80 sm:text-lg">
            {t.heroBody[locale]}
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Button asChild size="xl" className="group">
              <Link href="#contact">
                {t.heroCta[locale]}
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </Button>
            <Button
              asChild
              size="xl"
              variant="outline"
              className="border-white/30 bg-white/5 text-white backdrop-blur hover:bg-white/15 hover:text-white"
            >
              <Link href="#services">{t.heroCta2[locale]}</Link>
            </Button>
          </div>

          {/* Stats */}
          <dl className="mt-14 grid max-w-xl grid-cols-3 gap-8 border-t border-white/15 pt-8">
            <div>
              <dt className="text-[11px] font-medium uppercase tracking-[0.18em] text-white/60">
                {t.heroStat1[locale]}
              </dt>
              <dd className="font-display mt-1 text-3xl font-semibold tracking-tight">
                40+
              </dd>
            </div>
            <div>
              <dt className="text-[11px] font-medium uppercase tracking-[0.18em] text-white/60">
                {t.heroStat2[locale]}
              </dt>
              <dd className="font-display mt-1 text-3xl font-semibold tracking-tight">
                1,200+
              </dd>
            </div>
            <div>
              <dt className="text-[11px] font-medium uppercase tracking-[0.18em] text-white/60">
                {t.heroStat3[locale]}
              </dt>
              <dd className="font-display mt-1 text-3xl font-semibold tracking-tight">
                12
              </dd>
            </div>
          </dl>
        </div>

        {/* Right column — floating spec card */}
        <div className="relative lg:col-span-5">
          <div className="relative ml-auto w-full max-w-md">
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-[var(--primary)]/40 via-transparent to-[var(--safety)]/30 opacity-60 blur-2xl" />
            <div className="glass relative animate-float rounded-2xl border border-white/15 p-6 shadow-2xl">
              <div className="flex items-center justify-between text-white">
                <span className="font-mono text-[10px] font-medium uppercase tracking-[0.22em] text-white/60">
                  Field Report · #4173
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 px-2 py-0.5 text-[10px] font-medium text-emerald-300">
                  <span className="size-1.5 rounded-full bg-emerald-400" />
                  Approved
                </span>
              </div>
              <div className="mt-5 space-y-3">
                {[
                  { k: "Discipline", v: "Structural Steel · AWS D1.1" },
                  { k: "Inspector", v: "M. Ramírez, ICC SS" },
                  { k: "Date", v: "May 24, 2026" },
                  { k: "Findings", v: "0 non-conforming" },
                  { k: "Samples", v: "12 / 12 PASS" },
                ].map((row) => (
                  <div key={row.k} className="flex items-baseline justify-between gap-4 border-b border-white/10 pb-2 last:border-0 last:pb-0">
                    <span className="text-xs uppercase tracking-wider text-white/50">
                      {row.k}
                    </span>
                    <span className="text-right text-sm font-medium text-white">
                      {row.v}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-5 rounded-lg border border-white/10 bg-white/5 p-3">
                <div className="flex items-center justify-between text-xs text-white/60">
                  <span>Compliance score</span>
                  <span className="font-mono text-white">100%</span>
                </div>
                <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/10">
                  <div className="h-full w-full bg-gradient-to-r from-[var(--primary)] via-[var(--primary)] to-emerald-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade into next section */}
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-background" />
    </section>
  );
}
