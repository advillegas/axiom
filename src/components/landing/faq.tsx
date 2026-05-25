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
    <section className="py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div ref={headerRef} className="reveal-up">
          <SectionHeader
            eyebrow={t.faqEyebrow[locale]}
            title={t.faqTitle[locale]}
            align="center"
            className="mx-auto"
          />
        </div>

        <Accordion type="single" collapsible className="mt-8 w-full sm:mt-12">
          {FAQ.map((q, i) => {
            const copy = locale === "en" ? q.en : q.es;
            return (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="py-5 text-left text-[15px] font-semibold sm:text-base lg:text-lg">
                  {copy.q}
                </AccordionTrigger>
                <AccordionContent className="pr-2 text-[15px] leading-relaxed sm:pr-4 sm:text-base">
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
