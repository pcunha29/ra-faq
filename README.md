# Razão Automóvel

Help center and FAQ for Razão Automóvel — includes a simplified version and a full-featured version with search, categories, and dark mode.

## Stack

- **Next.js 16** (App Router) — React framework with server components and file-based routing
- **Tailwind CSS 4** — utility-first CSS
- **shadcn/ui** (with Base UI) — accessible, composable components (accordion, input, card, button, etc.)
- **Storybook 10** — isolated component development and documentation
- **TypeScript** — static typing
- **Lucide React** — icons

## Getting started

Requires Node.js 18+.

```bash
# install dependencies
npm install

# start the dev server
npm run dev
```

The app will be available at [http://localhost:3000](http://localhost:3000).

## Storybook

To explore components in isolation:

```bash
npm run storybook
```

Opens at [http://localhost:6006](http://localhost:6006). There's a dark mode toggle in the toolbar.

## Production build

```bash
npm run build
npm start
```

## Project structure

```
app/              → pages (layout, home, /simple, /complete)
components/       → reusable components (navbar, FAQ, hero, toggle, etc.)
components/ui/    → shadcn/ui base components
lib/              → utilities and mock data
```
