"use client";

import { Languages } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useLocale } from "@/i18n/use-locale";

export function LocaleToggle() {
  const { locale, toggle } = useLocale();
  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggle}
      aria-label="Toggle language"
      className="gap-2 rounded-full px-3"
    >
      <Languages className="size-4" />
      <span className="font-mono text-xs font-semibold uppercase tracking-widest">
        {locale}
      </span>
    </Button>
  );
}
