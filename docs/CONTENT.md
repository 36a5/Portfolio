# Adding content

Every visible thing on the site is a markdown file under `src/content/`. Nothing is hard-coded in
a page. The schemas in `src/content.config.ts` validate each file at build time, so a typo in a
field name fails the build instead of shipping a broken card.

Run `npm run dev` and open the printed URL while editing; the page reloads on save.

---

## Add a project

Create `src/content/projects/<slug>.md`. The file name becomes the URL:
`src/content/projects/my-thing.md` → `/projects/my-thing`.

```markdown
---
title: "Project name"
summary: "One or two sentences. This is what shows on the card."
status: completed          # completed | in-progress | archived
startDate: 2026-01-15
endDate: 2026-03-02        # omit while the project is ongoing
role: "What you did on it"
team:
  - "Abdulrhman Salamah"
  - "Team mate name"
languages: ["Python"]
tools: ["PyTorch", "OpenCV"]
tags: ["Computer Vision"]
featured: false            # true puts it on the home page
draft: false               # true hides it from the published site
cover: ../../assets/projects/my-thing/cover.png
coverAlt: "What the cover image shows"
gallery:
  - src: ../../assets/projects/my-thing/screen-1.png
    alt: "The detection view"
links:
  - label: "Repository"
    url: "https://github.com/36a5/my-thing"
---

Everything below the front matter is the project page body. Use `##` headings, lists, code blocks
and links normally.
```

Only `title`, `summary` and `startDate` are required. Everything else has a sensible default.

### Images

Put images in `src/assets/projects/<slug>/` and reference them with a relative path, as above.
They are resized, converted and hashed at build time. A project with no `cover` gets a generated
gradient card instead, so the grid never looks broken.

Images placed in `public/` are served as-is with no optimisation — use that only for files that
must keep their exact name, such as a CV PDF.

---

## Add a certificate or certification

Copy `src/content/credentials/template.md`, rename it, fill it in, and set `draft: false`.

- `kind: certification` — a formal credential (cloud certification, professional body).
- `kind: certificate` — a course, workshop or training completion.

Scans of the certificate go in `src/assets/credentials/` and are referenced with `image:`.

---

## Update the "Now" page

Add a new file in `src/content/now/` named after the date, for example `2026-11-04.md`. The newest
entry by `date` becomes the current status on the home page and at the top of `/now`; older
entries drop into the history list below it.

```markdown
---
date: 2026-11-04
headline: "One sentence on where things stand."
studying: ["A course, a subject"]
building: ["A project"]
learning: ["A tool or a skill"]
openToWork: true
---

Optional longer paragraphs.
```

---

## Add the CV

1. Put the PDF at `public/cv/`, for example `public/cv/abdulrhman-salamah-cv.pdf`.
2. Set `cvFile: 'abdulrhman-salamah-cv.pdf'` in `src/data/site.ts`.

The download buttons on the home and about pages appear automatically once that field is set.

---

## Identity, links and navigation

`src/data/site.ts` holds the name, role, tagline, location, email, social links and the navigation
order. Change it there and every page follows.

---

## Commands

```bash
npm install       # once per clone
npm run dev       # local development server
npm run build     # production build into dist/
npm run preview   # serve the production build locally
npm run check     # type-check content and components
```
