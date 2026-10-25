# Angelo's creative world

A portfolio landing page: pick one of six hand-drawn Angelo characters (Visual Designer, UX Designer, Design Engineer, Motion Designer, Video Editor, Photographer) to open that role's page. Plain HTML, CSS and JS with inline SVG art, so there is no build step.

## Run

```sh
python3 -m http.server 8000
# open http://localhost:8000
```

Roles deep-link by hash: `#visual`, `#ux`, `#engineer`, `#motion`, `#video`, `#photo`.

## Deploy

Serve the folder as static files (GitHub Pages, Netlify, any static host).

## Files

- `index.html`: page structure, the shared head drawing, and the six characters
- `styles.css`: tokens, layout, character paint rules and animations
- `script.js`: colour-offset layers, role view, hash routing, keyboard handling
