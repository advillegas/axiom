"use client";

import Image from "next/image";

import { Badge } from "@/components/ui/badge";
import { useReveal } from "@/lib/use-reveal";
import { useLocale } from "@/i18n/use-locale";
import { PROJECTS, t } from "@/i18n/content";

import { SectionHeader } from "./section-header";

export function Projects() {
  const { locale } = useLocale();
  const headerRef = useReveal<HTMLDivElement>();

  return (
    <section id="projects" className="scroll-mt-20 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div ref={headerRef} className="reveal-up">
          <SectionHeader
            eyebrow={t.projectsEyebrow[locale]}
            title={t.projectsTitle[locale]}
          />
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          {PROJECTS.map((p) => {
            const copy = locale === "en" ? p.en : p.es;
            return (
              <article
                key={p.id}
                className="group relative overflow-hidden rounded-2xl border bg-card transition-shadow hover:shadow-2xl"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={p.image}
                    alt={copy.title}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                  <div className="absolute left-5 top-5">
                    <Badge
                      variant="outline"
                      className="border-white/30 bg-white/10 text-white backdrop-blur"
                    >
                      {copy.tag}
                    </Badge>
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                    <h3 className="font-display text-2xl font-semibold tracking-tight">
                      {copy.title}
                    </h3>
                    <p className="mt-1 font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-white/70">
                      {copy.meta}
                    </p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {copy.body}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
