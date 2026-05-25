"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useReveal } from "@/lib/use-reveal";
import { useLocale } from "@/i18n/use-locale";
import { FAQ, t } from "@/i18n/content";

import { SectionHeader } from "./section-header";

export function Faq() {
  const { locale } = useLocale();
  const headerRef = useReveal<HTMLDivElement>();

  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div ref={headerRef} className="reveal-up">
          <SectionHeader
            eyebrow={t.faqEyebrow[locale]}
            title={t.faqTitle[locale]}
            align="center"
            className="mx-auto"
          />
        </div>

        <Accordion type="single" collapsible className="mt-12 w-full">
          {FAQ.map((q, i) => {
            const copy = locale === "en" ? q.en : q.es;
            return (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-left text-base font-semibold sm:text-lg">
                  {copy.q}
                </AccordionTrigger>
                <AccordionContent className="pr-4 text-base leading-relaxed">
                  {copy.a}
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
    </section>
  );
}
