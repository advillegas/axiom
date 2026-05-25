import type { Metadata } from "next";
import { Geist, Geist_Mono, Manrope } from "next/font/google";
import { Toaster } from "sonner";

import "./globals.css";

import { ThemeProvider } from "@/components/theme-provider";
import { LocaleProvider } from "@/i18n/use-locale";
import { cn } from "@/lib/utils";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});
const display = Manrope({
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: {
    default:
      "Axiom Inspection Services — Special / Deputy Inspections & Material Testing",
    template: "%s · Axiom Inspection Services",
  },
  description:
    "California IAS-accredited Special / Deputy Inspection agency. Concrete, post-tension, structural steel, masonry, soils, fireproofing, and material testing.",
  metadataBase: new URL("https://goaxiom.com"),
  openGraph: {
    title:
      "Axiom Inspection Services — Special / Deputy Inspections & Material Testing",
    description:
      "Independent, code-compliant inspections delivered with technical rigor across California. Bilingual EN / ES staff.",
    type: "website",
    url: "https://goaxiom.com",
    siteName: "Axiom Inspection Services",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Axiom Inspection Services — Special / Deputy Inspections & Material Testing",
    description:
      "Independent, code-compliant Special Inspections and Material Testing for California construction.",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(geist.variable, geistMono.variable, display.variable)}
    >
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LocaleProvider>
            {children}
            <Toaster position="top-right" richColors />
          </LocaleProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
