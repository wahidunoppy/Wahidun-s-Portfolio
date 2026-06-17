# SQA Portfolio

A responsive personal portfolio for a Software QA Engineer — dark, terminal-inspired theme
with an animated test-runner hero, project showcase, tabbed experience timeline, animated
skill bars, certifications grid, and a contact form.

## Structure

```
sqa-portfolio/
├── index.html
├── css/            (one file per section, see variables.css for all design tokens)
├── js/             (one file per behavior — navbar, animations, skills, etc.)
└── assets/
    ├── resume.pdf      ← replace with your real resume
    └── images/
```

## Before you deploy — personalize it

Search the project for these and replace with your real info:

- **Name & role** — `index.html`, hero + footer + `<title>`
- *oppy.wahidun@gmail.com** — appears in `index.html` (About card, Contact section)
  and in `js/form.js` / `js/email_links.js` (update the `user` / `domain` constants there too)
- **LinkedIn / GitHub URLs** — Contact section in `index.html`
- **Experience, projects, certifications, skill percentages** — all in `index.html`,
  clearly sectioned with HTML comments (`<!-- ===== PROJECTS ===== -->` etc.)
- **assets/resume.pdf** — swap in your actual resume (the included file is a placeholder)

The contact form currently opens the visitor's email client via a `mailto:` link
(no backend required — works on GitHub Pages). If you'd rather use a form service
like Formspree or Getform, swap the `fetch`/`mailto` logic in `js/form.js` for their endpoint.

## Hosting on GitHub Pages

1. Create a new repo on GitHub (e.g. `sqa-portfolio` or `yourusername.github.io`).
2. Push this folder's contents to the repo root:
   ```bash
   cd sqa-portfolio
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```
3. On GitHub: **Settings → Pages → Build and deployment → Source: Deploy from a branch**,
   pick `main` and `/ (root)`, then save.
4. Your site will be live in a minute or two at:
   - `https://YOUR_USERNAME.github.io/YOUR_REPO/` (normal repo), or
   - `https://YOUR_USERNAME.github.io/` (if the repo is named `YOUR_USERNAME.github.io`)

No build step needed — it's plain HTML/CSS/JS, so GitHub Pages serves it as-is.

## Notes

- Fonts (Space Grotesk, Inter, JetBrains Mono) load from Google Fonts via `<link>` tags in `index.html`.
- Respects `prefers-reduced-motion` (see `css/animations.css`).
- Custom cursor auto-disables on touch devices.
- Tested responsive breakpoints: 1024px (tablet) and 680px (mobile) in `css/responsive.css`.
