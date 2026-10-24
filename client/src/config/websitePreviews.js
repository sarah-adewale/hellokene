// Pages that show a website's full-page screenshots in a resizable frame
// (WebsitePreviewPage). App.js makes a route for each, and Header hides itself
// on them, since the frame's own toolbar has the close button.
// The project's `previewUrl` in api/_data/projects.js must match `path`.
export const WEBSITE_PREVIEWS = [
  { path: '/agri-youth', projectId: 'agri-youth' },
  { path: '/african-technopreneurs', projectId: 'african-technopreneurs' },
];

export const isWebsitePreviewPath = (pathname) =>
  WEBSITE_PREVIEWS.some((preview) => preview.path === pathname.replace(/\/+$/, ''));

// Opening a preview records its project, so the next homepage visit (close
// button, Esc or browser back) reopens on the Websites tab at that card.
// The homepage clears it once used. It has to be set before leaving: React
// renders the incoming page before the outgoing one's cleanup runs.
let previewReturn = null;

export const setPreviewReturn = (projectId) => { previewReturn = projectId; };
export const getPreviewReturn = () => previewReturn;
export const clearPreviewReturn = () => { previewReturn = null; };
