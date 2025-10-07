"use client";

import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { Button } from "@/components/ui/button";
import { Languages } from "lucide-react";
import { type Locale } from "@/lib/i18n";
import { useLocale } from "@/providers/locale-provider";

export default function LanguageSwitcher() {
  const { locale: currentLocale } = useLocale();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  function handleLocaleChange(newLocale: Locale) {
    // Set cookie for locale preference
    document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000; SameSite=Lax`;

    startTransition(() => {
      // Refresh to apply new locale
      router.refresh();
    });
  }

  return (
    <div className="fixed top-4 right-4 z-50">
      <div className="flex gap-2 bg-card/80 backdrop-blur-sm p-2 rounded-lg border border-border shadow-lg">
        <Button
          variant={currentLocale === "en" ? "default" : "ghost"}
          size="sm"
          onClick={() => handleLocaleChange("en")}
          disabled={isPending}
          className="gap-2"
        >
          <Languages className="h-4 w-4" />
          EN
        </Button>
        <Button
          variant={currentLocale === "th" ? "default" : "ghost"}
          size="sm"
          onClick={() => handleLocaleChange("th")}
          disabled={isPending}
          className="gap-2"
        >
          <Languages className="h-4 w-4" />
          TH
        </Button>
      </div>
    </div>
  );
}
