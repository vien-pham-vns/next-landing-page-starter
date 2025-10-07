"use client";

import { createContext, useContext, ReactNode, useMemo } from "react";
import type { Locale, Dictionary, GetNestedType } from "@/lib/i18n";
import { scopeT } from "@/lib/i18n";

// Type-safe translation function with autocomplete
interface I18nContextType {
  locale: Locale;
  dict: Dictionary;
  t: <P extends string>(scope: P) => GetNestedType<Dictionary, P>;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

interface LocaleProviderProps {
  locale: Locale;
  dict: Dictionary;
  children: ReactNode;
}

export function LocaleProvider({
  locale,
  dict,
  children,
}: LocaleProviderProps) {
  const value = useMemo(() => ({
    locale,
    dict,
    t: <P extends string>(scope: P) => scopeT(dict, scope),
  }), [locale, dict]);

  return (
    <I18nContext.Provider value={value}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (context === undefined) {
    throw new Error("useI18n must be used within a LocaleProvider");
  }
  return context;
}

// Alias for backward compatibility
export const useLocale = useI18n;
