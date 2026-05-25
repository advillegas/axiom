"use client";

import * as React from "react";

export type Locale = "en" | "es";

type Ctx = {
  locale: Locale;
  setLocale: (l: Locale) => void;
  toggle: () => void;
};

const LocaleContext = React.createContext<Ctx | null>(null);
const STORAGE_KEY = "axiom-locale";

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = React.useState<Locale>("en");
  const [hydrated, setHydrated] = React.useState(false);

  React.useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY) as Locale | null;
      if (stored === "en" || stored === "es") {
        setLocaleState(stored);
      } else {
        const nav = navigator.language?.toLowerCase() ?? "";
        if (nav.startsWith("es")) setLocaleState("es");
      }
    } catch {
      /* no-op */
    }
    setHydrated(true);
  }, []);

  const setLocale = React.useCallback((l: Locale) => {
    setLocaleState(l);
    try {
      window.localStorage.setItem(STORAGE_KEY, l);
      document.documentElement.lang = l;
    } catch {
      /* no-op */
    }
  }, []);

  const toggle = React.useCallback(() => {
    setLocale(locale === "en" ? "es" : "en");
  }, [locale, setLocale]);

  React.useEffect(() => {
    if (hydrated) document.documentElement.lang = locale;
  }, [hydrated, locale]);

  const value = React.useMemo(
    () => ({ locale, setLocale, toggle }),
    [locale, setLocale, toggle]
  );

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const ctx = React.useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used inside <LocaleProvider>");
  return ctx;
}
