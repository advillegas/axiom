"use client";

import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

import { useLocale } from "@/i18n/use-locale";
import { t } from "@/i18n/content";

import { Logo } from "./logo";

export function Footer() {
  const { locale } = useLocale();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t bg-card">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Logo />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
              {t.footerTagline[locale]}
            </p>
            <p className="mt-3 text-xs text-muted-foreground">
              {locale === "en"
                ? "Hablamos Español. EN/ES field staff available statewide."
                : "Hablamos Español. Personal de campo EN/ES en todo el estado."}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 lg:col-span-7 lg:grid-cols-3">
            <div>
              <h4 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-foreground">
                {locale === "en" ? "Explore" : "Explorar"}
              </h4>
              <ul className="mt-4 space-y-2.5 text-sm">
                <FooterLink href="#services" label={t.navServices[locale]} />
                <FooterLink href="#process" label={t.navProcess[locale]} />
                <FooterLink href="#projects" label={t.navProjects[locale]} />
                <FooterLink href="#coverage" label={t.navCoverage[locale]} />
                <FooterLink href="#about" label={t.navAbout[locale]} />
              </ul>
            </div>
            <div>
              <h4 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-foreground">
                {locale === "en" ? "Disciplines" : "Disciplinas"}
              </h4>
              <ul className="mt-4 space-y-2.5 text-sm">
                <li className="text-muted-foreground">
                  {locale === "en" ? "Reinforced Concrete" : "Concreto Reforzado"}
                </li>
                <li className="text-muted-foreground">
                  {locale === "en" ? "Structural Steel & Welding" : "Acero & Soldadura"}
                </li>
                <li className="text-muted-foreground">
                  {locale === "en" ? "Post-Tension" : "Postensado"}
                </li>
                <li className="text-muted-foreground">
                  {locale === "en" ? "Soils & Geotechnical" : "Suelos y Geotécnico"}
                </li>
                <li className="text-muted-foreground">
                  {locale === "en" ? "Material Testing Lab" : "Laboratorio de Pruebas"}
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-foreground">
                {locale === "en" ? "Contact" : "Contacto"}
              </h4>
              <ul className="mt-4 space-y-3 text-sm">
                <li>
                  <Link
                    href="tel:+15627537047"
                    className="group inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <Phone className="size-4 text-primary" />
                    (562) 753-7047
                  </Link>
                </li>
                <li>
                  <Link
                    href="mailto:admin@goaxiom.com"
                    className="group inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <Mail className="size-4 text-primary" />
                    admin@goaxiom.com
                  </Link>
                </li>
                <li className="inline-flex items-center gap-2 text-muted-foreground">
                  <MapPin className="size-4 text-primary" />
                  {locale === "en" ? "Southern California" : "Sur de California"}
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <p>
            © {year} Axiom Inspection Services, Inc. {t.footerRights[locale]}
          </p>
          <p className="font-mono">
            Built on the{" "}
            <Link
              href="https://github.com/neroai-com/design"
              className="underline-offset-2 hover:text-foreground hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              Nero Design System
            </Link>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ href, label }: { href: string; label: string }) {
  return (
    <li>
      <Link
        href={href}
        className="text-muted-foreground transition-colors hover:text-foreground"
      >
        {label}
      </Link>
    </li>
  );
}
