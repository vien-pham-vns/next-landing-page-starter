# Translation Usage Guide

This guide shows you how to use translations in different scenarios.

## 📁 File Structure

```
lib/
├── i18n.ts           # Core i18n utilities
└── server-i18n.ts    # Server-side helpers

providers/
└── locale-provider.tsx  # Client context provider

messages/
├── en.json           # English translations
└── th.json           # Thai translations
```

---

## 🎯 Quick Reference

### Client Components
```tsx
'use client';
import { useI18n } from '@/providers/locale-provider';

export default function MyComponent() {
  const { t, dict, locale } = useI18n();
  const hero = t('homePage.hero');

  return <h1>{hero.title}</h1>;
}
```

### Server Components
```tsx
import { serverTranslation } from '@/lib/server-i18n';

export default async function MyPage() {
  const { t, dict, locale } = await serverTranslation();
  const hero = t('homePage.hero');

  return <h1>{hero.title}</h1>;
}
```

---

## 📖 Detailed Usage

### Pattern 1: Client Component (Recommended for Interactive UIs)

```tsx
'use client';

import { useI18n } from '@/providers/locale-provider';
import { Button } from '@/components/ui/button';

export default function Hero() {
  // Get i18n context
  const { t, dict, locale } = useI18n();

  // Option 1: Scoped translations (recommended)
  const hero = t('homePage.hero');

  return (
    <section>
      <h1>{hero.title}</h1>
      <p>{hero.description}</p>
      <Button>{hero.getStarted}</Button>

      {/* Option 2: Direct dictionary access */}
      <p>{dict.homePage.hero.learnMore}</p>

      {/* Current locale */}
      <span>Language: {locale}</span>
    </section>
  );
}
```

---

### Pattern 2: Server Component with Metadata (Recommended for SEO)

```tsx
import type { Metadata } from 'next';
import { serverTranslation } from '@/lib/server-i18n';

// Generate metadata with translations (important for SEO!)
export async function generateMetadata(): Promise<Metadata> {
  const { t } = await serverTranslation();
  const hero = t('homePage.hero');
  const nav = t('navigation');

  return {
    title: hero.title,
    description: hero.description,
    // Add more metadata as needed
    openGraph: {
      title: hero.title,
      description: hero.description,
    },
  };
}

export default async function AboutPage() {
  const { t, locale } = await serverTranslation();
  const nav = t('navigation');

  return (
    <div>
      <h1>{nav.about}</h1>
      <p>Current locale: {locale}</p>
    </div>
  );
}
```

---

### Pattern 3: Mixed Page (Server + Client Components)

```tsx
// app/products/page.tsx (Server Component)
import { serverTranslation } from '@/lib/server-i18n';
import ProductList from './ProductList'; // Client Component

export default async function ProductsPage() {
  const { t } = await serverTranslation();
  const nav = t('navigation');

  return (
    <div>
      {/* Server-rendered content */}
      <h1>{nav.products}</h1>

      {/* Client component with its own translations */}
      <ProductList />
    </div>
  );
}
```

```tsx
// app/products/ProductList.tsx (Client Component)
'use client';

import { useI18n } from '@/providers/locale-provider';

export default function ProductList() {
  const { t } = useI18n();
  const products = t('products');

  return <div>{products.title}</div>;
}
```

---

### Pattern 4: Server Actions

```tsx
'use server';

import { serverTranslation } from '@/lib/server-i18n';

export async function submitForm(formData: FormData) {
  const { t, locale } = await serverTranslation();
  const messages = t('messages');

  // Use translations in server actions
  return {
    success: true,
    message: messages.success,
    locale,
  };
}
```

---

### Pattern 5: API Routes

```tsx
import { NextRequest } from 'next/server';
import { getLocale, getDictionary, scopeT } from '@/lib/server-i18n';

export async function GET(request: NextRequest) {
  const locale = await getLocale();
  const dict = await getDictionary(locale);
  const messages = scopeT(dict, 'api.messages');

  return Response.json({
    locale,
    message: messages.welcome,
  });
}
```

---

## 🛠️ Available Helpers

### Client-Side (Hook)
```tsx
const { t, dict, locale } = useI18n();
```
- `t(scope)` - Get scoped translations
- `dict` - Full dictionary object
- `locale` - Current locale ('en' | 'th')

### Server-Side (Async)
```tsx
const { t, dict, locale } = await serverTranslation();
```
- Same API as client, but async
- Use in Server Components, Server Actions, API Routes

### Individual Helpers
```tsx
import { getLocale, getDict, getScopedDict } from '@/lib/server-i18n';

const locale = await getLocale();              // Get current locale
const dict = await getDict();                  // Get full dictionary
const hero = await getScopedDict('homePage.hero'); // Get scoped dict
```

---

## 📝 Best Practices

### ✅ DO

1. **Use scoped translations** for cleaner code:
   ```tsx
   const hero = t('homePage.hero');
   return <h1>{hero.title}</h1>;
   ```

2. **Use client components** for interactive UIs:
   ```tsx
   'use client';
   const { t } = useI18n();
   ```

3. **Use server components** for SEO and metadata:
   ```tsx
   export async function generateMetadata() {
     const { t } = await serverTranslation();
   }
   ```

### ❌ DON'T

1. **Don't fetch translations** in client-only pages:
   ```tsx
   // ❌ Bad - unnecessary
   export default function Page() {
     const dict = await getDict(); // Error: can't use await
   }

   // ✅ Good - just use components
   export default function Page() {
     return <Hero />; // Hero uses useI18n()
   }
   ```

2. **Don't use cookies directly** - use helpers:
   ```tsx
   // ❌ Bad
   const locale = (await cookies()).get('NEXT_LOCALE')?.value;

   // ✅ Good
   const locale = await getLocale();
   ```

---

## 🎨 Example Pages

See these files for complete examples:
- `app/page.tsx` - Client components only (simple)
- `app/about/page.tsx` - Server component with translations

---

## 🔄 Language Switching

The `LanguageSwitcher` component handles locale changes:
- Sets cookie: `NEXT_LOCALE`
- Refreshes page to apply new locale
- Works globally across all pages

No need to handle this manually in your pages!
