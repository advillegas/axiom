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

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 pb-16 pt-24 sm:gap-12 sm:px-6 sm:pb-24 sm:pt-32 lg:grid-cols-12 lg:gap-16 lg:px-8 lg:pb-36 lg:pt-40">
        {/* Left column — copy */}
        <div className="text-white lg:col-span-7">
          <Badge
            variant="outline"
            className="border-white/20 bg-white/10 text-[10px] font-medium uppercase tracking-[0.16em] text-white/90 backdrop-blur sm:text-xs sm:tracking-[0.18em]"
          >
            <ShieldCheck className="mr-1.5 size-3.5" />
            {t.heroEyebrow[locale]}
          </Badge>

          <h1 className="font-display mt-5 text-balance text-[2.25rem] font-semibold leading-[1.05] tracking-tight sm:mt-6 sm:text-5xl md:text-6xl lg:text-[4.25rem]">
            {t.heroTitle[locale]}{" "}
            <span className="text-gradient">{t.heroTitleAccent[locale]}</span>
          </h1>

          <p className="mt-5 max-w-2xl text-pretty text-[15px] leading-relaxed text-white/80 sm:mt-6 sm:text-lg">
            {t.heroBody[locale]}
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:flex-wrap">
            <Button asChild size="xl" className="group w-full sm:w-auto">
              <Link href="#contact">
                {t.heroCta[locale]}
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </Button>
            <Button
              asChild
              size="xl"
              variant="outline"
              className="w-full border-white/30 bg-white/5 text-white backdrop-blur hover:bg-white/15 hover:text-white sm:w-auto"
            >
              <Link href="#services">{t.heroCta2[locale]}</Link>
            </Button>
          </div>

          {/* Stats */}
          <dl className="mt-10 grid max-w-xl grid-cols-3 gap-3 border-t border-white/15 pt-6 sm:mt-14 sm:gap-8 sm:pt-8">
            <Stat label={t.heroStat1[locale]} value="40+" />
            <Stat label={t.heroStat2[locale]} value="1,200+" />
            <Stat label={t.heroStat3[locale]} value="12" />
          </dl>
        </div>

        {/* Right column — floating spec card */}
        <div className="relative lg:col-span-5">
          <div className="relative mx-auto w-full max-w-md lg:ml-auto lg:mr-0">
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-[var(--primary)]/40 via-transparent to-[var(--safety)]/30 opacity-60 blur-2xl" />
            <div className="glass relative animate-float rounded-2xl border border-white/15 p-5 shadow-2xl sm:p-6">
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
                  <div
                    key={row.k}
                    className="flex items-baseline justify-between gap-3 border-b border-white/10 pb-2 last:border-0 last:pb-0"
                  >
                    <span className="text-[11px] uppercase tracking-wider text-white/50 sm:text-xs">
                      {row.k}
                    </span>
                    <span className="min-w-0 truncate text-right text-[13px] font-medium text-white sm:text-sm">
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

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="min-w-0">
      <dt className="text-[10px] font-medium uppercase leading-tight tracking-[0.14em] text-white/60 sm:text-[11px] sm:tracking-[0.18em]">
        {label}
      </dt>
      <dd className="font-display mt-1 text-2xl font-semibold tracking-tight sm:text-3xl">
        {value}
      </dd>
    </div>
  );
}
