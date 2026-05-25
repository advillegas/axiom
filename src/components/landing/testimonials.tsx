"use client";

import Image from "next/image";
import { Quote } from "lucide-react";

import { useReveal } from "@/lib/use-reveal";
import { useLocale } from "@/i18n/use-locale";
import { TESTIMONIALS, t } from "@/i18n/content";

import { SectionHeader } from "./section-header";

export function Testimonials() {
  const { locale } = useLocale();
  const headerRef = useReveal<HTMLDivElement>();

  return (
    <section className="bg-muted/30 py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div ref={headerRef} className="reveal-up">
          <SectionHeader
            eyebrow={t.testimonialsEyebrow[locale]}
            title={t.testimonialsTitle[locale]}
            align="center"
            className="mx-auto"
          />
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-14 sm:gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((tm) => {
            const copy = locale === "en" ? tm.en : tm.es;
            return (
              <figure
                key={copy.name}
                className="group relative flex h-full flex-col rounded-xl border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl sm:rounded-2xl sm:p-7"
              >
                <Quote
                  aria-hidden
                  className="size-7 text-primary/30 transition-colors group-hover:text-primary/60 sm:size-8"
                />
                <blockquote className="mt-4 text-[15px] leading-relaxed text-foreground sm:text-base">
                  &ldquo;{copy.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t pt-5">
                  <span className="relative size-10 overflow-hidden rounded-full bg-muted">
                    <Image
                      src={tm.image}
                      alt={copy.name}
                      fill
                      sizes="40px"
                      className="object-cover"
                    />
                  </span>
                  <span className="flex flex-col">
                    <span className="font-display text-sm font-semibold">
                      {copy.name}
                    </span>
                    <span className="text-[11px] font-medium uppercase tracking-[0.16em] text-muted-foreground">
                      {tm.role}
                    </span>
                  </span>
                </figcaption>
              </figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}
