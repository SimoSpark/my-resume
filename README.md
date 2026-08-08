# Mohamed Oukhajou — CV Website

Compact, printable single-page CV website built with **Next.js 14 + TypeScript + Tailwind CSS**.

Inspired by the layout style of [yassirelkhaili.com](https://yassirelkhaili.com/) — dense, readable, professional.

## Features

- EN / DE language toggle
- Dark / Light mode (saved in localStorage)
- Print-to-PDF via browser (Ctrl+P or the PDF button)
- No animations, no cards, no hero — pure CV layout
- Responsive + print-safe

## Project structure

```
src/
├── app/
│   ├── globals.css      ← CSS variables, fonts, print styles
│   ├── layout.tsx
│   └── page.tsx         ← Client wrapper (state: lang, dark)
├── components/
│   └── CV.tsx           ← Entire CV layout (all sections)
└── lib/
    └── data.ts          ← All content in EN + DE
```

## Get started

```bash
npm install
npm run dev
# → http://localhost:3000
```

## Build for production

```bash
npm run build
npm start
```

## Add your photo

In `src/components/CV.tsx`, find the photo block:

```tsx
{/* Replace <img> src with your actual photo path */}
<span>MO</span>
```

Replace the `<span>MO</span>` with:

```tsx
<img src="/photo.jpg" alt="Mohamed Oukhajou" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
```

Then drop your photo at `public/photo.jpg`.

## Customise content

All CV text (both EN and DE) lives in one file:

```
src/lib/data.ts
```

Edit the `en` and `de` objects to update any section.

## Print as PDF

Click the **PDF** button in the top bar, or press `Ctrl+P` / `Cmd+P`.
The toolbar is hidden in print mode (`no-print` class).

For best results: A4, no margins, background graphics ON.
