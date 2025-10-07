# Color Palette Customization Guide

This guide shows you how to customize the color palette for your landing page.

---

## 🎨 Quick Start

All colors are defined in `app/globals.css` using CSS variables. Simply replace the hex colors with your brand colors!

```css
/* app/globals.css */
:root {
  /* Your Brand Colors - Replace these! */
  --primary: #3b82f6;              /* Your main brand color */
  --primary-foreground: #ffffff;   /* Text on primary background */
  --secondary: #64748b;            /* Secondary brand color */
  --secondary-foreground: #ffffff; /* Text on secondary background */

  /* ... more colors below */
}
```

---

## 📋 Color Variables Reference

### Brand Colors
```css
--primary: #3b82f6;              /* Main brand color (buttons, links, accents) */
--primary-foreground: #ffffff;   /* Text on primary color */
--secondary: #64748b;            /* Secondary brand color */
--secondary-foreground: #ffffff; /* Text on secondary color */
```

### Background & Text
```css
--background: #ffffff;    /* Page background */
--foreground: #0f172a;    /* Main text color */
```

### UI Elements
```css
--muted: #f1f5f9;              /* Muted/subtle backgrounds */
--muted-foreground: #64748b;   /* Text on muted backgrounds */
--border: #e2e8f0;             /* Borders, dividers */
--input: #e2e8f0;              /* Input field borders */
--ring: #3b82f6;               /* Focus ring color */
```

### Components
```css
--card: #ffffff;           /* Card backgrounds */
--card-foreground: #0f172a; /* Text on cards */
--popover: #ffffff;        /* Popover/dropdown backgrounds */
--popover-foreground: #0f172a; /* Text on popovers */
```

### Accents
```css
--accent: #f1f5f9;             /* Accent color for highlights */
--accent-foreground: #0f172a;  /* Text on accent color */
--destructive: #ef4444;        /* Error/delete actions */
--destructive-foreground: #ffffff; /* Text on destructive color */
```

### Border Radius
```css
--radius: 0.5rem;  /* Base border radius (8px) */
```

---

## 🎯 Usage in Components

Once defined, use these colors in your components with Tailwind classes:

### Text Colors
```tsx
<h1 className="text-foreground">Main Text</h1>
<p className="text-muted-foreground">Secondary Text</p>
```

### Backgrounds
```tsx
<div className="bg-background">Page Background</div>
<div className="bg-primary text-primary-foreground">Primary Button</div>
<div className="bg-card">Card Component</div>
<div className="bg-muted">Muted Section</div>
```

### Borders
```tsx
<div className="border border-border">With Border</div>
<input className="border-input" />
```

### Buttons
```tsx
<button className="bg-primary text-primary-foreground hover:bg-primary/90">
  Primary Button
</button>

<button className="bg-secondary text-secondary-foreground">
  Secondary Button
</button>

<button className="bg-destructive text-destructive-foreground">
  Delete Button
</button>
```

---

## 🌈 Example Color Palettes

### Blue (Default)
```css
:root {
  --primary: #3b82f6;
  --primary-foreground: #ffffff;
  --secondary: #64748b;
  --secondary-foreground: #ffffff;
}
```

### Green
```css
:root {
  --primary: #10b981;
  --primary-foreground: #ffffff;
  --secondary: #6ee7b7;
  --secondary-foreground: #064e3b;
}
```

### Purple
```css
:root {
  --primary: #8b5cf6;
  --primary-foreground: #ffffff;
  --secondary: #a78bfa;
  --secondary-foreground: #ffffff;
}
```

### Orange
```css
:root {
  --primary: #f97316;
  --primary-foreground: #ffffff;
  --secondary: #fb923c;
  --secondary-foreground: #ffffff;
}
```

### Pink
```css
:root {
  --primary: #ec4899;
  --primary-foreground: #ffffff;
  --secondary: #f472b6;
  --secondary-foreground: #ffffff;
}
```

---

## 🌙 Dark Mode (Optional)

Dark mode is commented out by default. To enable it, uncomment in `globals.css`:

```css
@media (prefers-color-scheme: dark) {
  :root {
    --background: #0f172a;
    --foreground: #f1f5f9;
    --card: #1e293b;
    --card-foreground: #f1f5f9;
    --popover: #1e293b;
    --popover-foreground: #f1f5f9;
    --muted: #334155;
    --muted-foreground: #cbd5e1;
    --border: #334155;
    --input: #334155;
    --accent: #334155;
    --accent-foreground: #f1f5f9;
  }
}
```

---

## 🎨 Color Tools

Use these tools to generate your color palette:

1. **Tailwind Color Palette** - https://tailwindcss.com/docs/customizing-colors
2. **Coolors** - https://coolors.co/
3. **Adobe Color** - https://color.adobe.com/
4. **Realtime Colors** - https://www.realtimecolors.com/

---

## ✅ Customization Checklist

When setting up your brand colors:

- [ ] Replace `--primary` with your brand color
- [ ] Set `--primary-foreground` for text on primary (usually white/black)
- [ ] Choose a complementary `--secondary` color
- [ ] Set `--secondary-foreground` appropriately
- [ ] Adjust `--muted` for subtle backgrounds
- [ ] Update `--border` to match your design
- [ ] Test contrast ratios for accessibility (use https://webaim.org/resources/contrastchecker/)
- [ ] Consider enabling dark mode
- [ ] Test all components with new colors

---

## 🔍 Where Colors Are Used

| Variable | Used In |
|----------|---------|
| `--primary` | Buttons, links, active states, brand highlights |
| `--secondary` | Secondary buttons, alternative accents |
| `--background` | Page background, main content areas |
| `--foreground` | Body text, headings |
| `--muted` | Disabled states, subtle backgrounds |
| `--border` | Dividers, card borders, input borders |
| `--card` | Card components, elevated surfaces |
| `--accent` | Hover states, highlights |
| `--destructive` | Error messages, delete buttons |
| `--ring` | Focus rings on interactive elements |

---

## 📝 Tips

1. **Contrast is Key** - Ensure text is readable on all backgrounds
2. **Consistency** - Use the same colors throughout your app
3. **Accessibility** - Aim for WCAG AA compliance (4.5:1 contrast ratio)
4. **Test on Devices** - Colors look different on phones, tablets, monitors
5. **Use Sparingly** - Too many colors can be overwhelming

---

## 🚀 Next Steps

1. Open `app/globals.css`
2. Find the `:root` section
3. Replace hex values with your brand colors
4. Save and refresh your browser
5. Check all components for proper styling
6. Adjust as needed!
