# Plan: "Welcome to Angelo's creative world" landing page

## Context
Angelo wants a portfolio landing page that shows off a jack-of-all-trades designer personality. Centered headline "Welcome to Angelo's creative world" in friendly type, with "choose character" below it and six selectable characters (Visual Designer, UX Designer, Design Engineer, Motion Designer, Video Editor, Photographer). Characters should follow the style of the reference photo (Blume kombucha cans): quirky hand-drawn flat illustration, thick wobbly black outlines, one flat accent colour per character, slightly offset/misregistered colour fill, long limbs, funny story-telling poses, minimal dot-eyes and big noses.

The repo (`angelojoywork-sys/portfolio---exploration`, branch `claude/busy-edison-8rqrj9`) is empty, so this is a from-scratch build.

## Decisions (confirmed with user)
- Plain HTML/CSS/JS, inline SVG characters, no build step.
- One "Angelo" character (same face, hair, build) in six roles via outfit, prop and pose.
- Click opens a placeholder section per role (title + "work coming soon").
- Playful motion level; honours `prefers-reduced-motion`.

## Files
- `index.html` — page structure, headline, "choose character" copy, six character buttons, role-detail view, inline SVG `<symbol>`s.
- `styles.css` — tokens on `:root`, layout, type, animations, dark-mode-safe palette.
- `script.js` — selection/detail view logic, hover/idle behaviours, hash routing (`#visual`, `#ux`, ...), keyboard handling.
- `README.md` — short run/deploy note.

## Design
- **Type:** Fredoka (headline, friendly rounded) + a hand-feel accent for "choose character" (e.g. Caveat or Gaegu), body in DM Sans, loaded from Google Fonts with system fallbacks.
- **Palette** (from reference): warm paper background `#EFEDE8`, ink `#1A1A1A`, accents yellow `#F2C230`, green `#7DBF4B`, red `#E4554B`, plus blue `#4C7BE0`, orange `#F28A3C`, pink/violet `#B26BD6`. Each character owns one accent; its fill is drawn offset a few px from the outline for the print-misregistration look.
- **Layout:** full-viewport centered column. Headline centered, "choose character" below, then a responsive grid of the six characters (6 across desktop, 3x2 tablet, 2x3 phone), each with a role label. Generous spacing, 16px gutters on mobile, no horizontal scroll.
- **Characters (all Angelo, distinct pose + prop):**
  1. Visual Designer — holding a giant brush/pen, splash of colour (yellow).
  2. UX Designer — peering through a magnifier at a tiny wireframe, sticky notes (green).
  3. Design Engineer — hunched over a laptop with `</>` bubble, wrench in pocket (blue).
  4. Motion Designer — mid-bounce / stretched limbs with motion arcs and a play-head (pink/violet).
  5. Video Editor — headphones on, dragging a film strip like a scarf, scissors (red).
  6. Photographer — camera held up to one eye, strap around neck, flash star (orange).
- **Interaction (playful):** staggered pop-in on load; idle bob with per-character delay; hover = wiggle + prop animates + label gets underline squiggle; click = squash-and-stretch then transition to the role view; role view shows the character large, role title, "Work coming soon", and a "back to all characters" control. Characters are real `<button>`s with `aria-label`, visible focus ring, Enter/Space support; reduced-motion disables idle/wiggle and swaps transitions for fades.

## Implementation steps
1. Scaffold `index.html` / `styles.css` / `script.js`; set up tokens, fonts, layout and headline.
2. Draw the shared Angelo base (head, hair, nose, dot eyes, torso, limbs) as an SVG `<symbol>` with stroke-linejoin round, wobbly paths and an offset fill layer.
3. Compose the six variants (outfit colour, prop, pose) from the base; tune until each reads clearly at ~180px.
4. Add animations (CSS keyframes, per-character custom properties) and reduced-motion handling.
5. Add role-detail view, hash routing and back navigation, keyboard/focus management.
6. Responsive pass at 360, 768, 1280 widths; contrast and a11y check.

## Verification
- Serve locally (`python3 -m http.server`) and screenshot with the pre-installed Playwright/Chromium at 360, 768 and 1280 px; review each of the six characters up close.
- Confirm: headline exact text "Welcome to Angelo's creative world" centered, "choose character" below it, six distinct characters, click opens the right role view and back works, hash URLs deep-link, Tab/Enter/Space work, no horizontal scroll, `prefers-reduced-motion` emulation disables idle motion, no console errors.
- Commit to `claude/busy-edison-8rqrj9` and push (no PR unless asked).

## Open item for after build
Characters will be my interpretation of Angelo (I don't know their look). After first render I'll ask for tweaks to hair, skin tone, glasses/beard etc.
