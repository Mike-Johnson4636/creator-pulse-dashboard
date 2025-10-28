# 🧠 Vision Agent Roadmap  
### Evolution Plan for Orion — From Code Partner → UI-Aware Design Agent  

---

## 🎯 Purpose
To extend **Orion** beyond text-based coding support into a *visual intelligence* agent capable of reviewing, critiquing, and improving dashboard UIs in real time — starting with the **Meta-style dashboard ecosystem** (Facebook, Instagram, Threads).

---

## 🧩 Phase 1: Visual Context MVP
**Goal:** Give Orion *eyes* via Playwright MCP.

- Integrate **Playwright MCP** to enable browser control + screenshot capture.
- Automate preview of `localhost:3000` builds for component visual tests.
- Store snapshots in `/tests/screenshots`.
- Establish design heuristics: spacing, color contrast, alignment, accessibility.
- Introduce `orion.md` (Claude.md equivalent) as persistent design-memory file.

✅ *Outcome:* Orion can take screenshots, compare to reference styles, and report visual anomalies.

---

## ⚙️ Phase 2: Agentic Design Reviewer
**Goal:** Enable Orion to critique and iterate on its own UI work.

- Add **orchestration layer** for observe → reflect → adjust → retest loop.
- Use Playwright to load app → capture screenshot → evaluate → patch CSS.
- Create sub-agent `/review` command for targeted layout feedback.
- Log each review iteration in `/logs/orion/visual_reviews.md`.

✅ *Outcome:* Orion becomes a feedback partner — capable of automated “UI code reviews.”

---

## 🧠 Phase 3: Full Design Intelligence
**Goal:** Make Orion a Meta-style UI systems expert.

- Expand heuristics to include typography, responsive grids, and motion.
- Connect to design tokens (`tokens.stylex.js`) for dynamic theme validation.
- Add screenshot diffing between branches (via Git worktrees).
- Build “visual lint” pipeline for PRs (flags spacing/contrast regressions).
- Optional: Link to internal styleguide docs for context enrichment.

✅ *Outcome:* Orion can perform proactive design QA — before human review.

---

## 🔧 Tooling Stack
| Tool | Purpose |
|------|----------|
| Playwright MCP | Enables browser control and screenshot capture |
| Stylex | Meta’s CSS-in-JS framework — baseline for visual tokens |
| Next.js | Runtime for interactive dashboard layouts |
| ESLint + Prettier | Static code analysis & formatting |
| Git Worktrees | Parallel experiments for sub-agent testing |

---

## 🚀 Next Actions
1. Confirm Orion’s environment supports **Playwright MCP** (via VS Code settings).  
2. Create `/docs/orion.md` to store design heuristics + context memory.  
3. Set up a basic “UI Review” test script (`scripts/ui-review.ts`).  
4. Gradually expand Orion’s authority to auto-recommend style changes.  

---

### 💬 Philosophy
> Orion should *learn your taste, not override it.*  
> The goal is partnership — a design reviewer that understands both your code and your aesthetic.
