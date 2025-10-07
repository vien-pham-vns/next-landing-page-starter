# Page Templates

Copy-paste these templates when creating new pages.

---

## 🎯 Template 1: Client-Only Page with Metadata

Use this when your page only has client components.

```tsx
// app/YOUR_PAGE/page.tsx
import type { Metadata } from "next";
import { serverTranslation } from "@/lib/server-i18n";

/**
 * Generate metadata with translations
 */
export async function generateMetadata(): Promise<Metadata> {
  const { t } = await serverTranslation();
  const pageContent = t("yourPage"); // Adjust scope

  return {
    title: pageContent.title,
    description: pageContent.description,
    openGraph: {
      title: pageContent.title,
      description: pageContent.description,
    },
  };
}

/**
 * Your Page Component
 */
export default function YourPage() {
  return (
    <main className="min-h-screen">
      {/* Your client components here */}
      {/* They will use useI18n() internally */}
    </main>
  );
}
```

---

## 🎯 Template 2: Server Component Page

Use this when you need server-side rendering with translations.

```tsx
// app/YOUR_PAGE/page.tsx
import type { Metadata } from "next";
import { serverTranslation } from "@/lib/server-i18n";

/**
 * Generate metadata with translations
 */
export async function generateMetadata(): Promise<Metadata> {
  const { t } = await serverTranslation();
  const pageContent = t("yourPage");

  return {
    title: pageContent.title,
    description: pageContent.description,
  };
}

/**
 * Server Component Page
 */
export default async function YourPage() {
  const { t, locale } = await serverTranslation();

  // Get scoped translations
  const content = t("yourPage");
  const nav = t("navigation");

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-4">
        {content.title}
      </h1>

      <p className="text-lg text-muted-foreground">
        {content.description}
      </p>

      {/* Add more content */}
    </div>
  );
}
```

---

## 🎯 Template 3: Mixed Page (Server + Client)

Use this when you mix server and client components.

```tsx
// app/YOUR_PAGE/page.tsx
import type { Metadata } from "next";
import { serverTranslation } from "@/lib/server-i18n";
import YourClientComponent from "./YourClientComponent";

/**
 * Generate metadata
 */
export async function generateMetadata(): Promise<Metadata> {
  const { t } = await serverTranslation();
  const content = t("yourPage");

  return {
    title: content.title,
    description: content.description,
  };
}

/**
 * Page with mixed components
 */
export default async function YourPage() {
  const { t } = await serverTranslation();
  const content = t("yourPage");

  return (
    <div className="container mx-auto">
      {/* Server-rendered header */}
      <h1>{content.title}</h1>

      {/* Client component with its own translations */}
      <YourClientComponent />
    </div>
  );
}
```

```tsx
// app/YOUR_PAGE/YourClientComponent.tsx
'use client';

import { useI18n } from '@/providers/locale-provider';

export default function YourClientComponent() {
  const { t } = useI18n();
  const content = t('yourPage.section');

  return (
    <div>
      <h2>{content.heading}</h2>
      <p>{content.text}</p>
    </div>
  );
}
```

---

## 📝 Checklist for New Pages

When creating a new page:

- [ ] Add `generateMetadata()` for SEO
- [ ] Import `serverTranslation` if using server components
- [ ] Import `useI18n` in client components
- [ ] Add translations to `messages/en.json` and `messages/th.json`
- [ ] Use proper scope: `t('yourPage.section')`
- [ ] Add TypeScript types if needed

---

## 🎨 Translation File Structure

When adding a new page, update your translation files:

```json
// messages/en.json
{
  "yourPage": {
    "title": "Your Page Title",
    "description": "Page description for SEO",
    "section": {
      "heading": "Section Heading",
      "text": "Section content"
    }
  }
}
```

```json
// messages/th.json
{
  "yourPage": {
    "title": "ชื่อหน้าของคุณ",
    "description": "คำอธิบายหน้าสำหรับ SEO",
    "section": {
      "heading": "หัวข้อส่วน",
      "text": "เนื้อหาส่วน"
    }
  }
}
```

---

## ✅ Best Practices

1. **Always add metadata** - Good for SEO and social sharing
2. **Use scoped translations** - `t('page.section')` instead of deeply nested access
3. **Keep translations organized** - One top-level key per page
4. **Server components for SEO** - Use when you need metadata/SSR
5. **Client components for interactivity** - Use for forms, animations, etc.
