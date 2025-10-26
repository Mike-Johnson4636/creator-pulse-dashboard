# Creator Pulse Dashboard – Architecture Notes

## What this project is
Creator Pulse Dashboard is a personal build to prove I can design and ship data-facing product surfaces:
- Cross-platform creator feed viewer (TikTok / IG / Threads / X)
- Eventually filters, account groups, and lightweight analytics
- Goal: show I can think like a Data Experience Engineer (data + UX + product sense)

## Stack
- Next.js 15 (App Router)
- TypeScript
- Babel (not Turbopack / SWC) because of StyleX
- StyleX for styling and design tokens (not Tailwind)
- Path alias: `@` should resolve to `src`

## Project layout
- `src/app` → routes/pages (e.g. `page.tsx`, `layout.tsx`)
- `src/components` → UI components (Button, Stack, PostCard)
- `src/styles/tokens.stylex.ts` → design tokens via `stylex.defineVars`
- `config/` → project-level config, flags
- `product_brain/` → docs like this (how I think, how I prioritize)

## Styling system (important)
- We use StyleX with tokens in `src/styles/tokens.stylex.ts`
- Tokens are exported like:
  ```ts
  import * as stylex from '@stylexjs/stylex';

  export const vars = stylex.defineVars({
    bg: '#0b0b0b',
    text: '#eaeaea',
    spaceMd: '12px',
    // ...
  });
