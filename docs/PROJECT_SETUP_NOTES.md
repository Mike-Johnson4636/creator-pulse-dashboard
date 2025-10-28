# 🧰 Project Setup Notes
_Compiled by Mike J — shared lessons and quick references for future projects._

---

## 🗓️ Entry: Working Baseline – Creator Pulse Dashboard (v1)
**Date:** October 2025  
**Stack:** Next.js 15 · TypeScript · StyleX · Babel · Vercel (local)

---

### ✅ Confirmed Working Conditions
- Dev server runs with `npm run dev` (no Turbopack)
- `.babelrc` present, SWC disabled automatically
- StyleX `.stylex.js` file compiles correctly
- Imports resolve through alias `@/*`
- `tokens.stylex.js` lives in `src/styles/`
- Folder structure rooted at `src/` (not `app/`)
- Node ≥ 18.x

---

### ⚠️ Common Pitfalls + Fixes

| # | Issue | Root Cause | Fix |
|:-:|:------|:-----------|:----|
| 1 | **Runtime 500** | Missing default export | Ensure every component has `export default function …` |
| 2 | **Invalid element type** | Undefined or circular import | Verify file path and extension |
| 3 | **StyleX “border not supported”** | Shorthand `border` property | Use `borderWidth / borderStyle / borderColor` instead |
| 4 | **Could not resolve tokens** | Wrong file extension or import path | Must end in `.stylex.js` and be imported with explicit `.js` |
| 5 | **Turbopack conflict** | Babel + Turbopack not compatible | Remove `--turbopack`; run plain `next dev` |
| 6 | **Alias not resolving** | Misaligned Babel + TypeScript config | Add `module-resolver` plugin + `paths` mapping in `tsconfig.json` |
| 7 | **Missing .next manifest** | Cache corruption | `rm -rf .next && npm run dev` |
| 8 | **@babel/preset-typescript missing** | Plugin not installed | `npm i -D @babel/preset-typescript` |

---

### 🧭 Lessons Learned
- Always verify that **StyleX files end with `.stylex.js`** before debugging imports.  
- **Avoid Turbopack** until Babel support matures.  
- Keep **Babel + TS + Next** configurations documented together.  
- If anything breaks without code change, start with:  
  ```bash
  rm -rf .next node_modules && npm install && npm run dev
