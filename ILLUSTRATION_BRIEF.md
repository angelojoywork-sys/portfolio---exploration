# Illustration brief: Angelo's six characters

Use this to generate (or commission) the six characters for the landing page. Same person, six roles.

## Workflow

1. Fill in the **Who is Angelo** block below (hair, skin tone, glasses, beard, build). The more specific, the more consistent.
2. Generate **one** character first (Visual Designer is a good start). Iterate until the style feels right.
3. Use that image as a **character reference and style reference** for the other five:
   - Midjourney: `--cref <image url> --sref <image url>`
   - Adobe Firefly: Style Reference + Composition off
   - Recraft: pick or upload the style, keep the same seed/style ID
4. Generate on a **plain flat white or light background**, full body, centred, roughly 1200px tall.
5. Remove the background (remove.bg, Photoshop, Firefly, Recraft) and export transparent files.
6. If you want crisp vector files, run them through Recraft vectorize or Illustrator Image Trace and clean up.

## Shared style prompt (paste at the start of every prompt)

> Quirky hand-drawn flat illustration of a full-body character, thick wobbly black outline like a marker or brush pen, one single flat accent colour for the clothing and props plus a pale skin tone, the colour fill slightly offset from the outline like a misregistered risograph print, long skinny limbs, minimal dot eyes, big expressive nose, funny story-telling pose, naive indie packaging illustration style, plain flat white background, no shadows, no gradients, no texture, no text, centred, full body visible

Optional negatives: `3D, realistic, gradient, shading, photo, text, watermark, extra fingers, multiple characters, cropped`

## Who is Angelo (fill this in)

> The same character in every image: [hair: e.g. short messy black hair] [skin tone] [glasses? beard? none] [build: e.g. tall and lanky], dot eyes, big nose, small mouth.

## The six characters

Append the accent colour and the scene to the shared style prompt.

| File | Role | Accent | Scene |
| --- | --- | --- | --- |
| `visual` | Visual Designer | yellow `#F2C230` | Holding a giant paintbrush taller than himself, flicking colourful paint splashes, one foot kicked up, proud grin. |
| `ux` | UX Designer | green `#7DBF4B` | Peering through a huge magnifying glass at a tiny wireframe card, sticky notes stuck on his shirt and floating around. |
| `engineer` | Design Engineer | blue `#4C7BE0` | Hunched over a laptop on his knees, a speech bubble with `</>` above, a wrench sticking out of his back pocket. |
| `motion` | Motion Designer | violet `#B26BD6` | Mid-bounce with stretched squash-and-stretch limbs, dotted motion arcs trailing behind, a small play-button icon floating nearby. |
| `video` | Video Editor | red `#E4554B` | Headphones on, wrapped in a long film strip like a scarf, holding oversized scissors ready to cut. |
| `photo` | Photographer | orange `#F28A3C` | Camera held up to one eye, strap around his neck, a flash burst star popping beside him, leaning back to get the shot. |

## Delivery spec

- Files: `assets/characters/visual`, `ux`, `engineer`, `motion`, `video`, `photo` with extension `.svg`, `.webp` or `.png`
- Transparent background
- Same canvas size for all six (for example 1000 x 1200) with feet on the same baseline and similar character height
- At least 800px wide for raster files

When the files are in place, ask Claude to wire them into the page.
