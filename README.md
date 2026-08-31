# Portfolio

Personal portfolio of **Abdulrhman Salamah** — machine learning, computer vision, agentic AI, and
the software around them. Projects, certificates, and a running status page.

Built with [Astro](https://astro.build) (static output), Tailwind CSS, and markdown content
collections. No client framework: the only JavaScript on the page is the theme toggle and the
project filter.

## Run it locally

```bash
git clone https://github.com/36a5/Portfolio.git
cd Portfolio
bash scripts/setup-repo.sh   # git identity, hooks
npm install
npm run dev
```

| Command | What it does |
| --- | --- |
| `npm run dev` | Development server with live reload |
| `npm run build` | Static build into `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run check` | Type-check content and components |

## Adding content

Every project, certificate and status update is a markdown file under `src/content/`. Nothing is
hard-coded into a page, and the schemas in `src/content.config.ts` validate each file at build
time. The full authoring guide is in **[docs/CONTENT.md](docs/CONTENT.md)**.

```
src/content/projects/      one file per project   -> /projects/<file-name>
src/content/credentials/   certificates and certifications
src/content/now/           dated status entries, newest one wins
src/assets/                images referenced from content, optimised at build
public/                    served as-is: favicon, CV PDF
```

## Deployment

Pushing to `main` builds the site and publishes it to GitHub Pages through
`.github/workflows/deploy.yml`. The site URL and base path are supplied by the Pages configuration
at build time, so moving to a custom domain requires no code change.

## Repository documentation

| Path | What it is |
| --- | --- |
| `AGENTS.md` | Working agreement: conventions, git workflow, documentation protocol |
| `docs/CONTENT.md` | How to add projects, certificates, status entries and the CV |
| `docs/STATE.md` | Where the project stands and what comes next |
| `docs/PROJECT_LOG.md` | Dated log of every change |
| `docs/DECISIONS.md` | Decision records and their reasoning |
| `scripts/` | Repository setup and pre-publish checks |

## License

Not licensed for reuse yet. All rights reserved.
