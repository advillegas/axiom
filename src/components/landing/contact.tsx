"use client";

import * as React from "react";
import Link from "next/link";
import { Mail, MapPin, Phone, Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useReveal } from "@/lib/use-reveal";
import { useLocale } from "@/i18n/use-locale";
import { t } from "@/i18n/content";

import { SectionHeader } from "./section-header";

type Status = "idle" | "sending" | "sent" | "error";

export function Contact() {
  const { locale } = useLocale();
  const formRef = useReveal<HTMLDivElement>();
  const detailsRef = useReveal<HTMLDivElement>();

  const [status, setStatus] = React.useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    try {
      // No backend wired in — simulate optimistic UI.
      await new Promise((r) => setTimeout(r, 900));
      setStatus("sent");
      (e.target as HTMLFormElement).reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="scroll-mt-20 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left: Header + contact details */}
          <div ref={detailsRef} className="reveal-up lg:col-span-5">
            <SectionHeader
              eyebrow={t.contactEyebrow[locale]}
              title={t.contactTitle[locale]}
              body={t.contactBody[locale]}
            />

            <div className="mt-10 space-y-5">
              <ContactRow
                icon={<Phone className="size-5" />}
                label={locale === "en" ? "Call" : "Llamar"}
                value="(562) 753-7047"
                href="tel:+15627537047"
              />
              <ContactRow
                icon={<Mail className="size-5" />}
                label="Email"
                value="admin@goaxiom.com"
                href="mailto:admin@goaxiom.com"
              />
              <ContactRow
                icon={<MapPin className="size-5" />}
                label={locale === "en" ? "Service Area" : "Área de servicio"}
                value={
                  locale === "en"
                    ? "California — statewide field coverage"
                    : "California — cobertura estatal"
                }
              />
            </div>

            <div className="mt-10 rounded-xl border bg-muted/40 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                {locale === "en" ? "Hours" : "Horario"}
              </p>
              <p className="mt-2 text-sm text-foreground">
                {locale === "en"
                  ? "Mon – Fri  ·  6:00 AM – 6:00 PM"
                  : "Lun – Vie  ·  6:00 AM – 6:00 PM"}
              </p>
              <p className="text-sm text-muted-foreground">
                {locale === "en"
                  ? "Emergency response by appointment."
                  : "Respuesta de emergencia con cita previa."}
              </p>
            </div>
          </div>

          {/* Right: Form */}
          <div
            ref={formRef}
            className="reveal-up rounded-2xl border bg-card p-6 shadow-xl sm:p-8 lg:col-span-7 lg:p-10"
          >
            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <Field label={t.formName[locale]} name="name" required />
              <Field label={t.formEmail[locale]} name="email" type="email" required />
              <Field label={t.formPhone[locale]} name="phone" type="tel" required />
              <Field label={t.formCompany[locale]} name="company" />

              <div className="sm:col-span-2">
                <Field label={t.formProject[locale]} name="project" />
              </div>

              <div className="sm:col-span-2">
                <Label htmlFor="message" className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                  {t.formMessage[locale]}
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder={t.formMessagePh[locale]}
                  className="mt-1.5"
                />
              </div>

              <div className="sm:col-span-2 flex flex-col-reverse items-stretch gap-4 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-xs text-muted-foreground">
                  {locale === "en"
                    ? "By submitting you agree to be contacted about your project."
                    : "Al enviar, aceptas ser contactado sobre tu proyecto."}
                </p>
                <Button
                  type="submit"
                  size="lg"
                  disabled={status === "sending"}
                  className="min-w-44"
                >
                  {status === "sending" ? (
                    <>{t.formSending[locale]}</>
                  ) : (
                    <>
                      {t.formSend[locale]}
                      <Send className="size-4" />
                    </>
                  )}
                </Button>
              </div>

              {status === "sent" && (
                <p className="sm:col-span-2 rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm font-medium text-emerald-700 dark:text-emerald-400">
                  {t.formSuccess[locale]}
                </p>
              )}
              {status === "error" && (
                <p className="sm:col-span-2 rounded-lg border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm font-medium text-destructive">
                  {t.formError[locale]}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <Label
        htmlFor={name}
        className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground"
      >
        {label}
        {required && <span className="ml-1 text-primary">*</span>}
      </Label>
      <Input id={name} name={name} type={type} required={required} className="mt-1.5" />
    </div>
  );
}

function ContactRow({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const inner = (
    <>
      <span className="inline-flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
        {icon}
      </span>
      <span className="flex flex-col">
        <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
          {label}
        </span>
        <span className="text-base font-medium text-foreground">{value}</span>
      </span>
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        className="-mx-3 flex items-center gap-4 rounded-lg px-3 py-2 transition-colors hover:bg-muted"
      >
        {inner}
      </Link>
    );
  }
  return <div className="-mx-3 flex items-center gap-4 rounded-lg px-3 py-2">{inner}</div>;
}
