# CLAUDE.md

Kene's portfolio site. React 19 (CRA + CRACO) frontend, Tailwind + plain CSS, deployed to Vercel.

## Commands

```bash
npm run dev        # concurrently: Express on :4000 + CRA on :3000
npm run client     # frontend only (CRA proxies /api → :4000)
npm run server     # Express only
cd client && npm run build   # production build → client/build
```

There are no tests (`client/src/App.test.js` is the untouched CRA stub).

## Architecture

```
api/portfolio/       Vercel serverless functions — the PRODUCTION API
  index.js           GET /api/portfolio
  [id].js            GET /api/portfolio/:id
server/              Express on :4000 — LOCAL DEV ONLY (.vercelignore excludes it)
  server.js → routes/api.js → controllers/portfolio.js → data.js
client/src/
  App.js             routes: / , /portfolio , /portfolio/:projectId
  context/ThemeContext.js    light/dark → localStorage + data-theme on <html>
  pages/             HomePage, PortfolioPage, CaseStudyPage
  components/        Header, Footer, ProjectSection, PortfolioCard, CredentialPopup,
                     ImageModal, ScrollToTop, and the case-study sections
  components/case-study/SectionRegistry.js   maps section name → component
  styles/            one CSS file per component
client/public/images/   all image assets, referenced as /images/<name>
```

`vercel.json` rewrites every non-`/api` path to `/index.html` for client-side routing.

## Data model

Projects are plain objects with `id`, `title`, `subtitle`, `description`, `category[]`,
`imageUrl`, `hoverImageUrl`, `gridImageUrl`, `readTime`, and either `caseStudyUrl`
(internal) or `projectUrl` (external). Three boolean flags drive the homepage tabs:

- neither flag → **Apps** tab
- `isWebsite: true` → **Websites** tab (uses `mobileImageUrl` under 768px)
- `isIllustration: true` → **Illustrations** masonry tab

`platforms: ["webapp","ios","android","extension","website","ar/vr"]` renders the small
platform icons. `requiresCredentials` is informational; the demo-login popup is actually
triggered by a hardcoded `project.id === 'laundrybasket'` check in `PortfolioCard.jsx`.

### ⚠️ Project data is duplicated in three files

Adding or editing a project means updating **all three**:

1. `api/portfolio/index.js`   — most current (18 projects)
2. `api/portfolio/[id].js`    — stale: missing the 4 website entries, still has the old
                                `illustration1–6` titles
3. `server/data.js`           — dev only; missing `smartpathways-website`

Consolidating these into one shared module is the highest-value refactor available.

## Case studies

`CaseStudyPage` fetches the project, then reads **`client/src/pages/caseStudyConfig.js`**
(note: `client/src/config/caseStudyConfig.js` is dead and out of date — ignore it) for
`sections[]`, `showNextProject`, and `showPreviousProject`. Each name in `sections` is
looked up in `SectionRegistry`.

The section components (`Overview`, `Challenge`, `Solution`, `Results`, `Conclusion`) are
each one large file structured as: a generic fallback for unknown ids, then a separate
JSX block per project id. Only `pivo`, `portfolio`, and `nutch` have real content.
`nutch` styles are namespaced `nutch-*` and live at the bottom of `CaseStudy.css`
(from ~line 2134).

## Conventions

- **Theming**: never hardcode a color. Each CSS file declares its own
  `[data-theme='light']` / `[data-theme='dark']` variable block at the top; add new
  variables to both. In JSX, read `const { theme } = useTheme()` and swap image sources —
  the established pattern is a `-white` suffix for the light-mode asset.
- **Images**: always reference as `/images/foo.svg` (leading slash). `HomePage.jsx` still
  has some `./images/...` that only work because that page sits at `/`; don't copy it.
- **Styling**: component CSS in `client/src/styles/<Component>.css`, imported by the
  component. Tailwind utilities are available but only lightly used (mostly
  `PortfolioPage.jsx` and the `index.css` `@layer` helpers).
- **Mobile**: many components render separate desktop and mobile markup blocks toggled by
  CSS (`*-mobile` class names) rather than by one responsive layout. Follow whichever
  pattern the surrounding file already uses.

## Gotchas

- Local dev and production read **different** data files, so a project can appear in one
  and not the other.
- `client/src/components/ProjectIcon.jsx` has no export and is imported nowhere — dead.
- Two image-sharpness fixes are already in place: a global `backface-visibility: hidden`
  and `image-rendering: crisp-edges` were removed from `Home.css` because they forced 1x
  rasterization on retina screens. Don't reintroduce either.
- Vercel builds with `CI=false` so lint warnings don't fail the build.
- `cursor-agent.txt` at the repo root is an unrelated leftover file.
