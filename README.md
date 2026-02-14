# simon-cole-site

Minimal writing-first personal website built with Astro and deployed to GitHub Pages.

## Stack

- Astro (static-first site generator)
- Markdown content collections for writing + research
- Plain CSS for the visual style
- GitHub Actions for Pages deployment

## Local development

Use Node.js 20+.

```bash
npm install
npm run dev
```

Then open the local URL Astro prints in your terminal.

## Build

```bash
npm run build
npm run preview
```

## Content structure

- `src/pages/index.astro`: landing page (bio + quick links)
- `src/pages/research/index.astro`: research list page
- `src/pages/bookshelf.astro`: bookshelf page
- `src/content/research/*.md`: research notes

## Deploy to GitHub Pages

1. Push to `main`.
2. In GitHub repo settings, open **Pages**.
3. Set Source to **GitHub Actions**.
4. The workflow at `.github/workflows/deploy.yml` builds and deploys automatically.

The workflow auto-detects whether this is a project site (`/<repo>/`) or a user site (`/`).
