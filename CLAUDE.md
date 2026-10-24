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
  App.js                routes: /, /portfolio/:projectId (/portfolio redirects to /), and
                        one per website preview (/agri-youth,
                        /african-technopreneurs)
  context/ThemeContext.js    light/dark → localStorage + data-theme on <html>
  config/links.js       outbound URLs (email, LinkedIn, Medium, resume, Calendly), shared
                        by the hero and footer
  config/articles.js    Medium articles shown in ArticleStack
  config/websitePreviews.js   routes for website preview pages (see Data model)
  pages/                HomePage, CaseStudyPage, caseStudyConfig.js, WebsitePreviewPage
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
  replace the shortcuts. Gradient-text names come from `HERO_LINKS`; an empty URL renders
  the name in the copy's own colour (`.hero-link--plain`) instead of a dead link. The cover image flips on click; the four
  floating tool icons come from `SKILL_TOOLS`. `ArticleStack` sits under the cover.
- **Projects** (`ProjectSection.jsx`): four tabs, filtered by flags on each project (see
  Data model). Highlights render as image + text rows, 3 shown then "Show more
  highlights". Projects appear in the order they're listed in `api/_data/projects.js`.
- **Header**: logo, "Tools I've Shipped" dropdown (Text FX link; Nutch AI is a
  non-clickable "Coming Soon" item), and the moon/sun theme toggle. Fixed to the top
  at every width; on phones the label shortens to "Tools" and the dropdown spans the
  screen. There is no hamburger menu.

## Data model

All project data lives in **`api/_data/projects.js`**. Both Vercel functions and the
local Express server read it, so edit only that file. The leading underscore keeps
Vercel from serving it as a route.

Projects are plain objects with `id`, `title`, `subtitle`, `description`, `category[]`,
`imageUrl`, `hoverImageUrl`, `gridImageUrl`, `readTime`, and either `caseStudyUrl`
(internal) or `projectUrl` (external). An empty `projectUrl` hides the "Visit website"
button. `waitlist: 'Nutch'` (a product name) adds a "Join waitlist" button that opens
`WaitlistModal`: first name, last name and email, sent to Kene's inbox through FormSubmit
(`WAITLIST_FORM_ENDPOINT` in `config/links.js`; the first submission triggers a one-time
activation email to Kene). Flags pick the homepage tab:

- no flag → **Highlights** tab (rows)
- `isWebsite: true` → **Websites** tab (uses `mobileImageUrl` under 768px)
- `isBrand: true` → **Logos** tab; `imageUrl` is the greyscale mark, `hoverImageUrl`
  the colour version cross-faded in on hover
- `isIllustration: true` → **Illustrations** masonry tab with a full-screen viewer

`showcase: { background, screen }` replaces a highlight's static image with a browser-window
composition (`ProjectShowcase` in `ProjectSection.jsx`): `screen` framed as a window over
`background`, sized in `cqw` so it scales with the card. Use animated WebP rather than GIF
for these (180by2's went from 20MB of GIF to 5.4MB).

`previewUrl` + `preview: { desktop, mobile }` (Agri Youth, African Technopreneurs) make a website card's "Open
website" button open an in-site preview page (`WebsitePreviewPage`) instead of a live site:
the full-page screenshots in a browser-like frame, scrollable, with a toolbar toggle between
desktop and mobile and a close button (Esc also closes). Each view is `{ width, slices:
[{ src, height }] }` — 2x WebP slices stacked top to bottom, sizes in CSS px. Figma exports
of whole pages embed full-size photos (Agri Youth's were 66MB SVGs each), so render them
to PNG with headless Chrome and slice to WebP; never ship the SVGs. To add one, also add
its path to `client/src/config/websitePreviews.js`, which creates the route and hides the
Header on it. The card passes its position and the project in router state, so the frame
grows out of the card (`WebsitePreviewPage`'s layout effect); leaving the preview by any
route reopens the homepage on the Websites tab at that card (`getPreviewReturn`, used by
`ProjectSection` and `ScrollToTop`).

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
top of each section it uses, then add its block. `nutch` uses the `nutch-*` styles
near the bottom of `CaseStudy.css` (180by2's problem section borrows its avatar
hover stack). `180by2` has its own `cs180-*` block at the very end of that file, and
its grey-band tables (validation, results) are the shared `CS180Table` component,
fed `{ heading, cells }` data from each section file.

## Conventions

- **Theming**: never hardcode a color. Shared colors (`--bg-color`, `--text-color`,
  `--secondary-text`, `--tertiary-text`, `--border-color`, …) are defined once in
  `client/src/styles/theme.css`. A color used by only one component goes in that
  component's own `[data-theme='light']` / `[data-theme='dark']` blocks under a
  component-specific name. Never redefine a shared variable in a component file: every
  stylesheet is global, so the last one loaded would win site-wide. Add new variables
  to both themes. In JSX, read `const { theme } = useTheme()` and swap image sources —
  the established pattern is a `-white` suffix for the light-mode asset.
- **Buttons**: primary and secondary buttons (hero, highlights, footer, waitlist form)
  take their colours from the `--btn-primary-*` / `--btn-secondary-*` variables in
  `theme.css`, with a background-colour change on hover. Use those for new buttons.
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
- `html` has `scroll-behavior: smooth` (`Home.css`), so programmatic jumps must pass
  `behavior: 'instant'`. `ScrollToTop` scrolls to the top in a layout effect (before the new
  page paints) and sets `history.scrollRestoration = 'manual'`; the browser's own restore
  would otherwise smooth-scroll after the app has placed the page.
- Two image-sharpness fixes are already in place: a global `backface-visibility: hidden`
  and `image-rendering: crisp-edges` were removed from `Home.css` because they forced 1x
  rasterization on retina screens. Don't reintroduce either.
- Tailwind is pinned to v3 on purpose; the config and CSS use v3 syntax.
- Vercel builds with `CI=false` so lint warnings don't fail the build.
