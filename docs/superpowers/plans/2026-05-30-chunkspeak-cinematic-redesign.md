# ChunkSpeak Cinematic Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Turn the current ChunkSpeak static site into a cinematic, high-impact English learning page while preserving existing learning interactions.

**Architecture:** Keep the static architecture and reuse `index.html`, `styles.css`, and `app.js`. Add presentation-oriented markup for the hero, stage panels, and motion hooks, then enhance existing render functions with additional metadata and CSS classes.

**Tech Stack:** HTML, CSS 3D transforms, CSS animations, vanilla JavaScript, IntersectionObserver, localStorage, SpeechSynthesis.

---

### Task 1: Visual Shell And Hero

**Files:**
- Modify: `chunk-speak/index.html`
- Modify: `chunk-speak/styles.css`
- Modify: `chunk-speak/app.js`

- [ ] Replace the current sidebar-first layout with a cinematic shell: fixed top navigation, hero section, orbit phrase stage, learning method, daily mission, module controls, and existing module views.
- [ ] Add CSS variables for dark base, electric accents, glow shadows, and glass surfaces.
- [ ] Add hero orbit cards and animated audio bars.
- [ ] Add JavaScript for pointer glow and scroll reveal classes.

### Task 2: Preserve Learning Interactions

**Files:**
- Modify: `chunk-speak/index.html`
- Modify: `chunk-speak/styles.css`
- Modify: `chunk-speak/app.js`

- [ ] Keep category filtering, search, favorites, mastered state, daily goal, check-in, article scanning, practice modes, and phrase modal.
- [ ] Update count IDs only where needed so existing JavaScript still finds them.
- [ ] Verify modal opening, speaking, favoriting, mastering, scanning, and practice still work.

### Task 3: Responsive Polish And Package

**Files:**
- Modify: `chunk-speak/styles.css`
- Modify: `chunk-speak/chunk-speak-site.zip`

- [ ] Add desktop, tablet, and mobile responsive layouts.
- [ ] Add `prefers-reduced-motion` fallbacks.
- [ ] Run local browser verification.
- [ ] Rebuild the Netlify upload zip.
