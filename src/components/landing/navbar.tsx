"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { useLocale } from "@/i18n/use-locale";
import { t } from "@/i18n/content";

import { Logo } from "./logo";
import { ThemeToggle } from "./theme-toggle";
import { LocaleToggle } from "./locale-toggle";

const SECTIONS = [
  { id: "services", key: "navServices" as const },
  { id: "process", key: "navProcess" as const },
  { id: "projects", key: "navProjects" as const },
  { id: "coverage", key: "navCoverage" as const },
  { id: "about", key: "navAbout" as const },
  { id: "contact", key: "navContact" as const },
];

export function Navbar() {
  const { locale } = useLocale();
  const [scrolled, setScrolled] = React.useState(false);
  const [active, setActive] = React.useState<string>("");

  React.useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);

      const offsets = SECTIONS.map((s) => {
        const el = document.getElementById(s.id);
        if (!el) return { id: s.id, top: Number.POSITIVE_INFINITY };
        return { id: s.id, top: Math.abs(el.getBoundingClientRect().top - 120) };
      });
      const closest = offsets.sort((a, b) => a.top - b.top)[0];
      setActive(closest.top < 400 ? closest.id : "");
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border/60 bg-background/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between gap-2 px-4 sm:px-6 lg:px-8">
        <Link
          href="#top"
          className="-ml-1 shrink-0 rounded-md p-1 outline-none focus-visible:ring-2 focus-visible:ring-ring"
          aria-label="Axiom Inspection Services — home"
        >
          <Logo />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {SECTIONS.map((s) => (
            <Link
              key={s.id}
              href={`#${s.id}`}
              data-active={active === s.id}
              className={cn(
                "nav-link rounded-md px-3 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground",
                active === s.id && "text-foreground"
              )}
            >
              {t[s.key][locale]}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-0.5 sm:gap-1.5">
          <Button
            asChild
            variant="ghost"
            size="sm"
            className="hidden gap-2 md:inline-flex"
          >
            <Link href="tel:+15627537047">
              <Phone className="size-4" />
              <span className="hidden xl:inline">{t.callNow[locale]}</span>
              <span className="xl:hidden">(562) 753-7047</span>
            </Link>
          </Button>

          <Button
            asChild
            variant="ghost"
            size="icon"
            aria-label="Call Axiom Inspection Services"
            className="md:hidden"
          >
            <Link href="tel:+15627537047">
              <Phone className="size-4" />
            </Link>
          </Button>

          <LocaleToggle />
          <ThemeToggle />

          <Button
            asChild
            size="sm"
            className="hidden md:inline-flex"
          >
            <Link href="#contact">{t.navCta[locale]}</Link>
          </Button>

          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                aria-label="Open menu"
                className="lg:hidden"
              >
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="flex w-full max-w-sm flex-col p-6 sm:max-w-sm"
            >
              <SheetHeader className="text-left">
                <SheetTitle>
                  <Logo />
                </SheetTitle>
              </SheetHeader>
              <nav className="mt-6 flex flex-col gap-1">
                {SECTIONS.map((s) => (
                  <SheetClose asChild key={s.id}>
                    <Link
                      href={`#${s.id}`}
                      className="rounded-md px-3 py-3 text-base font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                    >
                      {t[s.key][locale]}
                    </Link>
                  </SheetClose>
                ))}
              </nav>
              <div className="mt-auto flex flex-col gap-3 border-t pt-6">
                <SheetClose asChild>
                  <Button asChild size="lg">
                    <Link href="#contact">{t.navCta[locale]}</Link>
                  </Button>
                </SheetClose>
                <Button asChild variant="outline" size="lg">
                  <Link href="tel:+15627537047">
                    <Phone className="size-4" />
                    {t.callNow[locale]}
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
