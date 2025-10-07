import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Header from "@/components/Header";
import { serverTranslation } from "@/lib/server-i18n";

/**
 * Generate metadata with translations
 */
export async function generateMetadata(): Promise<Metadata> {
  const { t } = await serverTranslation();
  const hero = t("homePage.hero");

  return {
    title: hero.title,
    description: hero.description,
  };
}

/**
 * Home Page - Default Pattern
 *
 * For pages with only client components:
 * - No need to fetch translations here
 * - Client components use useI18n() hook
 * - Simpler and cleaner
 */
export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Features />
    </main>
  );
}
