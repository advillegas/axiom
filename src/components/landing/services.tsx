"use client";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useReveal } from "@/lib/use-reveal";
import { useLocale } from "@/i18n/use-locale";
import { SERVICES, t } from "@/i18n/content";

import { SectionHeader } from "./section-header";
import { ServiceIcon } from "./service-icon";

export function Services() {
  const { locale } = useLocale();
  const headerRef = useReveal<HTMLDivElement>();
  const ctaRef = useReveal<HTMLDivElement>();

  return (
    <section id="services" className="relative scroll-mt-20 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div ref={headerRef} className="reveal-up flex flex-col items-start gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeader
            eyebrow={t.servicesEyebrow[locale]}
            title={t.servicesTitle[locale]}
            body={t.servicesBody[locale]}
          />
          <Button asChild variant="outline" className="shrink-0">
            <Link href="#contact">
              {t.servicesAll[locale]}
              <ArrowUpRight className="size-4" />
            </Link>
          </Button>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, idx) => {
            const copy = locale === "en" ? s.en : s.es;
            return (
              <Card
                key={s.id}
                className="group relative overflow-hidden border-border/60 bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10"
              >
                <div
                  aria-hidden
                  className="absolute right-0 top-0 size-32 translate-x-1/3 -translate-y-1/3 rounded-full bg-primary/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                />
                <CardHeader className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <ServiceIcon k={s.iconKey} />
                    </span>
                    <span className="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <CardTitle className="font-display text-xl font-semibold tracking-tight">
                    {copy.title}
                  </CardTitle>
                  <CardDescription className="text-sm leading-relaxed">
                    {copy.blurb}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-1.5">
                  {copy.bullets.map((b) => (
                    <div
                      key={b}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <span className="size-1 rounded-full bg-primary/70" />
                      <span>{b}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Unsure callout */}
        <div
          ref={ctaRef}
          className="reveal-up mt-16 overflow-hidden rounded-2xl border bg-gradient-to-br from-primary/5 via-card to-card p-8 sm:p-10 lg:p-12"
        >
          <div className="grid gap-8 lg:grid-cols-3 lg:items-center">
            <div className="lg:col-span-2">
              <Badge variant="steel">{t.servicesEyebrow[locale]}</Badge>
              <h3 className="font-display mt-3 text-balance text-2xl font-semibold tracking-tight sm:text-3xl">
                {t.servicesUnsure[locale]}
              </h3>
              <p className="mt-3 max-w-xl text-base text-muted-foreground">
                {t.servicesUnsureBody[locale]}
              </p>
            </div>
            <div className="lg:justify-self-end">
              <Button size="lg" asChild>
                <Link href="#contact">
                  {t.servicesUnsureCta[locale]}
                  <ArrowUpRight className="size-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
