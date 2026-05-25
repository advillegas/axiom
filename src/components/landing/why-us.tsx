"use client";

import Image from "next/image";
import { Badge as BadgeIcon, Clock4, Headphones, ShieldCheck } from "lucide-react";

import { useReveal } from "@/lib/use-reveal";
import { useLocale } from "@/i18n/use-locale";
import { PILLARS, t } from "@/i18n/content";

import { SectionHeader } from "./section-header";

const ICONS: Record<(typeof PILLARS)[number]["iconKey"], React.ComponentType<{ className?: string }>> = {
  shield: ShieldCheck,
  clock: Clock4,
  badge: BadgeIcon,
  headset: Headphones,
};

export function WhyUs() {
  const { locale } = useLocale();
  const headerRef = useReveal<HTMLDivElement>();
  const imgRef = useReveal<HTMLDivElement>();

  return (
    <section id="about" className="scroll-mt-20 py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:gap-12 lg:grid-cols-12 lg:gap-16">
          <div ref={headerRef} className="reveal-up lg:col-span-5">
            <SectionHeader
              eyebrow={t.whyEyebrow[locale]}
              title={t.whyTitle[locale]}
              body={t.missionBody[locale]}
            />

            <ul className="mt-7 space-y-3 sm:mt-10">
              <li className="flex gap-3 text-sm leading-relaxed text-foreground sm:text-[15px]">
                <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                {t.missionPoint1[locale]}
              </li>
              <li className="flex gap-3 text-sm leading-relaxed text-foreground sm:text-[15px]">
                <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                {t.missionPoint2[locale]}
              </li>
              <li className="flex gap-3 text-sm leading-relaxed text-foreground sm:text-[15px]">
                <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                {t.missionPoint3[locale]}
              </li>
            </ul>
          </div>

          <div ref={imgRef} className="reveal-up relative lg:col-span-7">
            <div className="relative aspect-[5/4] overflow-hidden rounded-xl border shadow-2xl sm:rounded-2xl">
              <Image
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1800&q=80"
                alt="Inspector reviewing structural plans on a job site"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden w-72 rounded-xl border bg-card p-5 shadow-xl sm:block">
              <p className="font-display text-sm font-medium leading-snug text-foreground">
                &ldquo;Technical rigor. Responsive staff. Projects delivered with confidence.&rdquo;
              </p>
              <div className="mt-3 flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-primary" />
                <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  Axiom Inspection Services
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Pillars */}
        <div className="mt-14 grid grid-cols-1 gap-3 sm:mt-20 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
          {PILLARS.map((pl) => {
            const Icon = ICONS[pl.iconKey];
            const copy = locale === "en" ? pl.en : pl.es;
            return (
              <div
                key={pl.iconKey}
                className="rounded-xl border bg-card p-5 transition-shadow hover:shadow-lg sm:p-6"
              >
                <span className="inline-flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="size-5" />
                </span>
                <h3 className="font-display mt-4 text-base font-semibold tracking-tight sm:text-lg">
                  {copy.t}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {copy.b}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
