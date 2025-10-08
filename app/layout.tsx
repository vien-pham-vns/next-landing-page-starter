import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import { cookies } from "next/headers";
import { LocaleProvider } from "@/providers/locale-provider";
import { getDictionary, defaultLocale, type Locale } from "@/lib/i18n";
import GoogleAnalytics from "./google-analytics";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Landing Page | Next.js 15",
  description:
    "A modern, high-performance landing page built with Next.js 15, React 19, and cutting-edge technologies.",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://your-domain.com"
  ),
  openGraph: {
    title: "Landing Page | Next.js 15",
    description:
      "A modern, high-performance landing page built with Next.js 15, React 19, and cutting-edge technologies.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Landing Page | Next.js 15",
    description:
      "A modern, high-performance landing page built with Next.js 15, React 19, and cutting-edge technologies.",
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const locale =
    (cookieStore.get("NEXT_LOCALE")?.value as Locale) || defaultLocale;
  const dict = await getDictionary(locale);

  return (
    <html lang={locale}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LocaleProvider locale={locale} dict={dict}>
          {children}
        </LocaleProvider>
        {process.env.NODE_ENV !== "development" ? (
          <></>
        ) : (
          <>
            <Analytics />
            <GoogleAnalytics />
            <SpeedInsights />
          </>
        )}
      </body>
    </html>
  );
}
