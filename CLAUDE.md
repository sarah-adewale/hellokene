# CLAUDE.md

Kene's portfolio site. React 19 (CRA + CRACO) frontend, plain CSS with a little Tailwind v3,
deployed to Vercel.

## Commands

```bash
npm run dev        # concurrently: Express on :4000 + CRA on :3000
npm run client     # frontend only (CRA proxies /api → :4000; without the server the
                   # homepage shows "Failed to fetch projects")
npm run server     # Express only
cd client && npm run build   # production build → client/build
```

There are no tests.

## Architecture

```
api/_data/projects.js   THE project data — the only copy (see Data model)
api/portfolio/          Vercel serverless functions — the PRODUCTION API (CommonJS)
  index.js              GET /api/portfolio
  [id].js               GET /api/portfolio/:id
server/                 Express on :4000 — LOCAL DEV ONLY (.vercelignore excludes it)
  server.js → routes/api.js → controllers/portfolio.js → data.js (re-exports api/_data)
client/src/
  App.js                routes: / and /portfolio/:projectId (/portfolio redirects to /)
  context/ThemeContext.js    light/dark → localStorage + data-theme on <html>
  config/links.js       outbound URLs (email, LinkedIn, Medium, resume, Calendly), shared
                        by the hero and footer
  config/articles.js    Medium articles shown in ArticleStack
  pages/                HomePage, CaseStudyPage, caseStudyConfig.js
  components/           Header, Footer, ProjectSection, ArticleStack, ImageModal,
                        ScrollToTop, and the case-study sections
  components/case-study/SectionRegistry.js   maps section name → component
  styles/               theme.css (shared colors) + one CSS file per component
client/public/images/   all image assets, referenced as /images/<name>
```

`vercel.json` rewrites every non-`/api` path to `/index.html` for client-side routing.

## Homepage

- **Hero** (`HomePage.jsx`): "bio" and "experience" views. Desktop switches them with
  keyboard shortcuts (E = experience, R = reset, K = open resume); under 768px tap chips
  replace the shortcuts. Underlined names come from `HERO_LINKS`; an empty URL renders
  plain underlined text instead of a dead link. The cover image flips on click; the four
  floating tool icons come from `SKILL_TOOLS`. `ArticleStack` sits under the cover.
- **Projects** (`ProjectSection.jsx`): four tabs, filtered by flags on each project (see
  Data model). Highlights render as image + text rows, 3 shown then "Show more
  highlights". Projects appear in the order they're listed in `api/_data/projects.js`.
- **Header**: logo, "Tools I've Shipped" dropdown (Text FX link; Nutch AI is a
  non-clickable "Coming Soon" item), and the moon/sun theme toggle. Mobile gets a
  hamburger menu.

## Data model

All project data lives in **`api/_data/projects.js`**. Both Vercel functions and the
local Express server read it, so edit only that file. The leading underscore keeps
Vercel from serving it as a route.

Projects are plain objects with `id`, `title`, `subtitle`, `description`, `category[]`,
`imageUrl`, `hoverImageUrl`, `gridImageUrl`, `readTime`, and either `caseStudyUrl`
(internal) or `projectUrl` (external). An empty `projectUrl` hides the "Visit website"
button. Flags pick the homepage tab:

- no flag → **Highlights** tab (rows)
- `isWebsite: true` → **Websites** tab (uses `mobileImageUrl` under 768px)
- `isBrand: true` → **Logos** tab; `imageUrl` is the greyscale mark, `hoverImageUrl`
  the colour version cross-faded in on hover
- `isIllustration: true` → **Illustrations** masonry tab with a full-screen viewer

`platforms: ["webapp","ios","android","extension","website","ar/vr"]` renders small
platform icons in the case-study header (`Overview.jsx`).

## Case studies

`CaseStudyPage` fetches the project, then reads `client/src/pages/caseStudyConfig.js` for
`sections[]`, `showNextProject`, and `showPreviousProject`. Each name in `sections` is
looked up in `SectionRegistry`. The prev/next buttons form a loop:
180by2 → nutch → pivo → 180by2. Keep it closed when adding or removing a case study.

The section components (`Overview`, `Challenge`, `Solution`, `Results`, `Conclusion`) are
each one large file structured as: a generic fallback for unknown ids, then a separate
JSX block per project id. To add a case study, add its id to the fallback check at the
top of each section it uses, then add its block. `pivo` and `nutch` have
real content; `180by2` is scaffolded with visible `[… placeholder]` copy and TODOs —
don't deploy it until that's replaced. `nutch` and `180by2` share the `nutch-*` styles
at the bottom of `CaseStudy.css`.

## Conventions

- **Theming**: never hardcode a color. Shared colors (`--bg-color`, `--text-color`,
  `--secondary-text`, `--tertiary-text`, `--border-color`, …) are defined once in
  `client/src/styles/theme.css`. A color used by only one component goes in that
  component's own `[data-theme='light']` / `[data-theme='dark']` blocks under a
  component-specific name. Never redefine a shared variable in a component file: every
  stylesheet is global, so the last one loaded would win site-wide. Add new variables
  to both themes. In JSX, read `const { theme } = useTheme()` and swap image sources —
  the established pattern is a `-white` suffix for the light-mode asset.
- **Images**: always reference as `/images/foo.svg` (leading slash).
- **Styling**: component CSS in `client/src/styles/<Component>.css`, imported by the
  component. Tailwind (v3) is barely used: the layout classes in `App.js` and the
  `index.css` `@layer` helpers. `html` is `font-size: 62.5%`, so `1rem` = 10px.
- **Mobile**: many components render separate desktop and mobile markup blocks toggled by
  CSS (`*-mobile` class names) rather than by one responsive layout. Follow whichever
  pattern the surrounding file already uses.

## Gotchas

- Every stylesheet is bundled globally regardless of which component imports it, so
  generic class names (`.read-time`, `.platform-icon`, …) can collide across files.
  Prefer component-prefixed class names.
- A few `font-size: 0.622em` rules (tab labels, case-study prev/next text, Pivo impact
  tags, zoom labels) preserve sizes from a removed global
  `* { font-size: 62.2% }` rule. They render smaller than their parent's declared size on
  purpose; delete the rule to use the parent's size.
- Two image-sharpness fixes are already in place: a global `backface-visibility: hidden`
  and `image-rendering: crisp-edges` were removed from `Home.css` because they forced 1x
  rasterization on retina screens. Don't reintroduce either.
- Tailwind is pinned to v3 on purpose; the config and CSS use v3 syntax.
- Vercel builds with `CI=false` so lint warnings don't fail the build.
