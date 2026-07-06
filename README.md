# Mannmit Rhal — Personal Site

A single-page portfolio. No frameworks, no build step — just three files you can edit directly.

## Files

| File | What it is |
|---|---|
| `index.html` | All the content. Every section is marked with a big `EDIT:` comment banner. |
| `styles.css` | All the styling. Colours and fonts live in the `:root` block at the top. |
| `script.js` | Small interactions (mobile menu, scroll animations). Rarely needs touching. |
| `assets/photos/` | Drop your photos here. |
| `assets/cv/` | Drop your final CV PDF here as `Mannmit-Rhal-CV.pdf`. |

## How to edit common things

**Change any text** — open `index.html`, find the section (search for `EDIT:`), edit the words between the tags.

**Add your photo (About section)** — put a photo in `assets/photos/`, then replace the placeholder:
```html
<!-- Replace this: -->
<div class="photo-slot photo-portrait"> ... </div>
<!-- With this: -->
<img src="assets/photos/me.jpg" alt="Mannmit Rhal">
```

**Add gallery photos (Off the clock section)** — same idea, replace each
`<div class="photo-slot">...</div>` with an `<img src="assets/photos/....jpg" alt="...">`.
Square-ish photos look best; keep 3–6.

**Link your projects to GitHub** — in the Projects section, change `href="#"` on the
"View on GitHub →" links to your real repo URLs.

**Add a new project / job / programme** — copy an existing `<article>` block in that
section, paste it below, and change the text.

**Change the accent colour** — in `styles.css`, edit `--accent` in the `:root` block.
Everything (buttons, links, badges) updates automatically.

**Important before publishing** — the CV file isn't included yet. Export your CV as PDF
(after removing your draft notes!) and save it as `assets/cv/Mannmit-Rhal-CV.pdf`, or the
"Download CV" button will 404.

## Preview locally

```bash
cd mannmit-website
python3 -m http.server 4173
# open http://localhost:4173
```

## Publish for free

Easiest options: [GitHub Pages](https://pages.github.com), [Netlify Drop](https://app.netlify.com/drop)
(drag the folder into the browser), or [Vercel](https://vercel.com). No build settings needed.
