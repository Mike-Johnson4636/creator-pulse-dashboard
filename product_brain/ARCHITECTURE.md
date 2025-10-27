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
- `src/styles/tokens.stylex.js` → design tokens via `stylex.defineVars`
- `config/` → project-level config, flags
- `product_brain/` → docs like this (how I think, how I prioritize)

## Styling system (important)
- We use StyleX with tokens in `src/styles/tokens.stylex.js`
- Tokens are exported like:
  ```ts
  import * as stylex from '@stylexjs/stylex';

  export const vars = stylex.defineVars({
    bg: '#0b0b0b',
    text: '#eaeaea',
    spaceMd: '12px',
    // ...
  });

## 🧱 Working Baseline (v1)

This baseline represents the first **fully functional Next.js + StyleX + Babel** configuration that successfully rendered without runtime errors.  
Use this setup as the foundation for all future app builds.

---

### ✅ Core Stack
- **Framework:** Next.js 15 (App Router)
- **Compiler:** Babel (SWC disabled)
- **Styling:** StyleX v0.16
- **Language:** TypeScript
- **Module Alias:** `@` → `/src`
- **Runtime:** Node 18+

---

### ⚙️ Key Configuration Highlights

#### 1. `babel.config.js`
Must include:
```js
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['next/babel', '@babel/preset-typescript'],
    plugins: [
      ['@stylexjs/babel-plugin', {
        runtimeInjection: true,
        dev: process.env.NODE_ENV !== 'production',
      }],
      ['module-resolver', {
        alias: { '@': './src' },
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      }],
    ],
  };
};
