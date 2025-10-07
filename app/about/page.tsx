import type { Metadata } from "next";
import { serverTranslation } from "@/lib/server-i18n";

/**
 * Generate metadata with translations
 */
export async function generateMetadata(): Promise<Metadata> {
  const { t } = await serverTranslation();
  const nav = t("navigation");
  const home = t("homePage");

  return {
    title: `${nav.about} | Landing Page`,
    description: home.description,
  };
}

export default async function AboutPage() {
  // Get locale, dict, and scoped translation function
  const { locale, t } = await serverTranslation();

  // Get scoped translations
  const nav = t("navigation");
  const home = t("homePage");

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-4">{nav.about}</h1>

      <p className="text-lg text-muted-foreground mb-8">
        Current locale: {locale}
      </p>

      <div className="space-y-4">
        <p>{home.description}</p>

        {/* Access nested translations */}
        <div className="border p-4 rounded-lg">
          <h2 className="font-semibold">Navigation:</h2>
          <ul className="list-disc list-inside">
            <li>{nav.home}</li>
            <li>{nav.about}</li>
            <li>{nav.features}</li>
            <li>{nav.contact}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
