# Landing Page Project

This Next.js 15 landing page project is fully configured and production-ready.

---

## ✅ Build Status

**Build: SUCCESS** - All TypeScript/ESLint errors resolved.

```
Route (app)                         Size  First Load JS
┌ ƒ /                            48.8 kB         165 kB
├ ƒ /_not-found                      0 B         116 kB
└ ƒ /about                           0 B         116 kB
+ First Load JS shared by all     122 kB
```

---

## 🚀 Tech Stack

### Core Framework

- **Next.js 15.5.4** with App Router and Turbopack
- **React 19.1.1** with Server Components (RSC)
- **TypeScript 5** with strict mode

### Styling & UI

- **Tailwind CSS v4** (latest) with `@theme inline` syntax
- **shadcn/ui** component library (Button component included)
- **Framer Motion** for animations
- **Geist Font** (sans + mono)

### Performance & Analytics

- **Vercel Analytics** for user analytics
- **Vercel Speed Insights** for performance monitoring
- **Image Optimization** (AVIF/WebP formats)
- **Security Headers** (X-Frame-Options, CSP, etc.)

### Internationalization

- **Custom i18n** (cookie-based, simpler than next-intl)
- **Cookie-based locale detection** via `NEXT_LOCALE` cookie
- **Type-safe translations** with autocomplete support
- **Languages**: Thai (default at `/`) and English (`/en` via cookie)

---

## 📁 Project Structure

```
landing-page/
├── app/
│   ├── layout.tsx           # Root layout with i18n provider
│   ├── page.tsx             # Home page (page server, client components)
│   └── about/
│       └── page.tsx         # About page (all server component example)
├── components/
│   ├── ui/
│   │   └── button.tsx       # shadcn/ui Button component
│   ├── Header.tsx           # Header with navigation
│   ├── Hero.tsx             # Hero section with Framer Motion
│   ├── Features.tsx         # Features showcase
│   └── LanguageSwitcher.tsx # Language toggle (EN/TH)
├── lib/
│   ├── i18n.ts              # Core i18n utilities and types
│   ├── server-i18n.ts       # Server-side translation helpers
│   └── utils.ts             # Utility functions
├── messages/
│   ├── en.json              # English translations
│   └── th.json              # Thai translations (default)
├── providers/
│   └── locale-provider.tsx  # Client-side i18n context
├── app/globals.css          # Simplified CSS with color variables
├── next.config.ts           # Next.js configuration
├── tailwind.config.ts       # Tailwind CSS v4 configuration
├── tsconfig.json            # TypeScript configuration
├── TRANSLATION_GUIDE.md     # Complete i18n usage guide
├── PAGE_TEMPLATE.md         # Copy-paste templates for new pages
├── COLORS_GUIDE.md          # Color customization guide
└── PROJECT_SUMMARY.md       # This file
```

---

## 🎨 Key Features

### 1. Custom i18n System

- **Cookie-based** locale switching (no URL complexity)
- **Type-safe** translations with autocomplete
- **Scoped translations** via `scopeT()` function
- **Server & Client** translation helpers

**Client Components:**

```tsx
"use client";
import { useI18n } from "@/providers/locale-provider";

export default function Hero() {
  const { t } = useI18n();
  const hero = t("homePage.hero");
  return <h1>{hero.title}</h1>;
}
```

**Server Components:**

```tsx
import { serverTranslation } from "@/lib/server-i18n";

export default async function Page() {
  const { t } = await serverTranslation();
  const content = t("homePage");
  return <h1>{content.title}</h1>;
}
```

### 2. Clean Color System

- **Customizable CSS variables** in `globals.css`
- **Simplified from shadcn defaults** (no OKLCH, no sidebar/chart vars)
- **Clear hex colors** with inline comments
- **Tailwind v4 integration** via `@theme inline`
- See `COLORS_GUIDE.md` for full customization examples

### 3. Reusable Page Templates

See `PAGE_TEMPLATE.md` for three ready-to-use patterns:

- **Client-only pages** with metadata
- **Server component pages** with RSC
- **Mixed pages** (server + client components)

### 4. Performance Optimization

- **Image formats**: AVIF/WebP
- **Compression** enabled
- **Package optimization** for lucide-react and framer-motion
- **Security headers** configured
- **Turbopack** for fast builds

---

## 🛠️ Development Commands

```bash
# Start development server
npm run dev

# Build for production (verified working ✅)
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

---

## 📚 Documentation Files

All guides are complete and ready for reference:

1. **TRANSLATION_GUIDE.md** - Complete i18n usage guide

   - Client component patterns
   - Server component patterns with metadata
   - Mixed component patterns
   - API routes and server actions
   - Best practices

2. **PAGE_TEMPLATE.md** - Copy-paste templates

   - Client-only page template
   - Server component template
   - Mixed (server + client) template
   - Checklist for new pages

3. **COLORS_GUIDE.md** - Color customization
   - Quick start guide
   - Color variables reference
   - Example color palettes (Blue, Green, Purple, Orange, Pink)
   - Dark mode (optional)
   - Usage in components
   - Customization checklist

---

## 🎯 Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

### 3. Customize Colors

Open `app/globals.css` and replace the hex colors in the `:root` section:

```css
:root {
  --primary: #3b82f6; /* Your brand color */
  --primary-foreground: #ffffff;
  --secondary: #64748b;
  /* ... */
}
```

### 4. Add Translations

Edit `messages/en.json` and `messages/th.json`:

```json
{
  "yourPage": {
    "title": "Your Page Title",
    "description": "Page description"
  }
}
```

### 5. Create New Pages

Use templates from `PAGE_TEMPLATE.md` to create new pages with proper i18n and metadata.

---

## 📋 What's Included

✅ Next.js 15.5.4 with React 19.1.1
✅ Tailwind CSS v4 with shadcn/ui
✅ Custom cookie-based i18n (Thai/English)
✅ Type-safe translations with autocomplete
✅ Framer Motion animations
✅ Vercel Analytics + Speed Insights
✅ Image optimization (AVIF/WebP)
✅ Security headers
✅ Clean color system (easy customization)
✅ Comprehensive documentation
✅ Page templates for rapid development
✅ Server & Client component examples
✅ Metadata generation for SEO
✅ Production build verified ✅

---

## 🎓 Usage Patterns

### Creating a New Page

1. Copy a template from `PAGE_TEMPLATE.md`
2. Add translations to `messages/en.json` and `messages/th.json`
3. Use `generateMetadata()` for SEO
4. Use `useI18n()` in client components
5. Use `serverTranslation()` in server components

### Language Switching

The `LanguageSwitcher` component is already configured:

- Sets `NEXT_LOCALE` cookie
- Refreshes page to apply new locale
- Works globally across all pages

### Customizing Colors

See `COLORS_GUIDE.md` for:

- Quick color replacement
- Example palettes
- Dark mode setup
- Accessibility tips

---

## 🚦 Next Steps

This project is **production-ready** and ready for development. You can:

1. **Customize colors** in `app/globals.css`
2. **Add content** to `messages/en.json` and `messages/th.json`
3. **Create new pages** using templates in `PAGE_TEMPLATE.md`
4. **Add more components** following the existing patterns
5. **Fly to moon** with zero-config deployment

---

## 📞 Need Help?

- **Translation Guide**: See `TRANSLATION_GUIDE.md`
- **Page Templates**: See `PAGE_TEMPLATE.md`
- **Color Customization**: See `COLORS_GUIDE.md`
- **Next.js Docs**: https://nextjs.org/docs
- **Tailwind CSS v4**: https://tailwindcss.com/docs
- **shadcn/ui**: https://ui.shadcn.com

---

**Status**: ✅ **PRODUCTION READY**

Build verified, all errors fixed, documentation complete. Ready for landing page development!
