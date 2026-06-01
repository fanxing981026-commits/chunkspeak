# ChunkSpeak Cinematic Redesign Design

## Goal

Redesign the existing ChunkSpeak static website into a visually striking English learning product page. The new page should feel closer to an award-style interactive site while keeping the current practical learning features: phrase library, category filtering, daily check-in, article mining, quick practice, and phrase detail modal.

## Chosen Direction

Use a hybrid of:

- X1 3D Phrase Orbit as the main visual language.
- X3 Audio Wave Stage as the speaking-practice visual layer.

The result should be cool, dynamic, and memorable: floating phrase cards, luminous orbit lines, sound-wave animations, kinetic text, and product panels that feel alive.

## Visual System

The site should use a cinematic dark base with high-contrast accent colors:

- Base: near-black, charcoal, deep ink.
- Text: warm white and muted stone.
- Accents: electric cyan, hot coral, acid yellow, and soft violet glow.
- Surfaces: glass panels, thin visible borders, soft bloom shadows, layered grids.

The design should avoid the current pastel dashboard feeling. It should also avoid becoming a generic sci-fi page: every decorative element must connect to phrases, speaking, listening, or learning progress.

## Page Structure

1. Hero
   - Large English headline: "Speak in chunks, not translations."
   - Short product explanation for Chinese learners.
   - Floating 3D phrase cards around the hero.
   - Orbit rings, pointer glow, and subtle animated particles or grid.
   - Primary action for today's chunks and secondary action for phrase library.

2. Learning Method
   - Three-step narrative: Notice chunks, save chunks, speak chunks.
   - Use animated cards and sound-wave accents instead of static boxes.

3. Daily Practice
   - Keep current daily goal, streak, and progress.
   - Present it as a mission/control panel rather than a soft dashboard card.

4. Phrase Library
   - Keep categories, search, favorites, mastered state, and load more.
   - Make each phrase card feel like a collectible floating object.
   - Add hover tilt, glow, and active category transitions.

5. Article Mining
   - Keep paste-and-scan interaction.
   - Style it like a scanner/editor panel with highlighted phrase detections.

6. Quick Practice
   - Keep type, blank, and choice modes.
   - Add animated feedback states and audio-wave-like progress visuals.

7. Phrase Detail Modal
   - Keep existing content and speech playback.
   - Redesign as a focused immersive learning panel with examples, lens breakdown, and practice.

## Motion

Use modern frontend motion while preserving usability:

- Scroll reveal for major sections.
- Floating/orbiting phrase cards in the hero.
- Pointer-follow glow on desktop.
- Hover tilt on cards.
- Progress bar animations.
- Modal entrance and exit transitions.
- Audio bar animation near speaking or listening areas.
- Respect `prefers-reduced-motion` by reducing continuous motion.

## Image Generation

If images are needed, generate a consistent set in the same visual language:

- Abstract speech-wave background.
- Floating phrase-card collage.
- Article scanning / language mining visual.

Images should be dark cinematic, luminous, high-contrast, and aligned with the accent palette. They should not look like generic stock photos.

## Technical Direction

Keep the project as a deployable static site using the current files:

- `index.html`
- `styles.css`
- `app.js`

Add CDN-loaded libraries only when they clearly improve the visual result. For the strongest effect, use Three.js for the hero orbit scene and plain JavaScript for scroll/hover interactions. The site must still be easy to upload to Netlify as static files.

## Acceptance Criteria

- The first viewport must feel dramatically more impressive than the current page.
- Existing learning functions should still work.
- The page must be responsive on desktop and mobile.
- Text must remain readable and not overlap controls.
- Motion should enhance the learning story without blocking use.
- The final site should be visually closer to a polished award-style product page than to a simple learning dashboard.

## Out of Scope

- Login, payment, backend, or account sync.
- Real AI exercise generation.
- Real human voice audio files.
- Rewriting all phrase content.
