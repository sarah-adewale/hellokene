import React, { useState, useEffect, useLayoutEffect, useRef, useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { setPreviewReturn } from '../config/websitePreviews';
import '../styles/WebsitePreview.css';

// Opens in the mobile view on phones, the desktop view everywhere else
const PHONE_QUERY = '(max-width: 767px)';

const OPEN_DURATION_MS = 550;
const OPEN_EASING = 'cubic-bezier(0.2, 0, 0, 1)';
// A card click older than this is a back/forward visit: no grow animation
const ORIGIN_MAX_AGE_MS = 1000;

// Shown in the desktop view: switches to mobile
const PhoneIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect x="3" y="0" width="10" height="16" rx="1.5" className="wp-icon-fill" />
    <rect x="7" y="2" width="2" height="2" rx="0.5" className="wp-icon-cutout" />
  </svg>
);

// Shown in the mobile view: switches to desktop
const MonitorIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect x="0" y="1" width="16" height="11" rx="1" className="wp-icon-fill" />
    <rect x="0" y="9" width="16" height="1" className="wp-icon-cutout" />
    <rect x="7" y="12" width="2" height="2" className="wp-icon-fill" />
    <rect x="5" y="14" width="6" height="1" className="wp-icon-fill" />
  </svg>
);

const CloseIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <circle cx="8" cy="8" r="8" className="wp-icon-fill" />
    <path d="M5.5 5.5L10.5 10.5M10.5 5.5L5.5 10.5" strokeWidth="1.5" strokeLinecap="round" className="wp-icon-cutout-stroke" />
  </svg>
);

// A website's full-page screenshots in a browser-like frame. The screen
// scrolls; the toolbar switches between the desktop and mobile screenshots
// and closes the preview. Screenshots come from the project's `preview` data.
const WebsitePreviewPage = ({ projectId }) => {
  const { state: navState } = useLocation();
  // Opened from a website card: it passes the project, so the screenshots
  // show at once, and where the card was, for the grow animation
  const [project, setProject] = useState(() =>
    navState?.project?.id === projectId ? navState.project : null
  );
  const [error, setError] = useState(null);
  const [view, setView] = useState(() =>
    window.matchMedia(PHONE_QUERY).matches ? 'mobile' : 'desktop'
  );
  const frameRef = useRef(null);
  const screenRef = useRef(null);
  const navigate = useNavigate();

  // Grow the frame out of the card that was clicked: scaled down to the
  // card's width at the card's position, cropped to its height, then
  // expanding to full size. Pages opened any other way fade and scale in
  // slightly. Runs before the first paint, so the page never shows unanimated.
  useLayoutEffect(() => {
    const frame = frameRef.current;
    if (!frame || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });

    const target = frame.getBoundingClientRect();
    const origin = navState?.origin;
    const fromCard = origin && Date.now() - navState.at < ORIGIN_MAX_AGE_MS;
    let first;
    if (fromCard) {
      const scale = origin.width / target.width;
      const cropBottom = Math.max(0, target.height - origin.height / scale);
      first = {
        transform: `translate(${origin.left - target.left}px, ${origin.top - target.top}px) scale(${scale})`,
        clipPath: `inset(0 0 ${cropBottom}px 0 round ${12 / scale}px)`,
      };
    } else {
      first = { transform: 'scale(0.96)', opacity: 0, clipPath: 'inset(0 0 0 0 round 16px)' };
    }
    const last = { transform: 'none', opacity: 1, clipPath: 'inset(0 0 0 0 round 16px)' };
    const grow = frame.animate([{ opacity: 1, ...first }, last], {
      duration: OPEN_DURATION_MS,
      easing: OPEN_EASING,
    });

    // The footer (rendered by App, below this page) fades in as the frame settles
    const footer = document.querySelector('.footer-container');
    const fade = footer?.animate(
      [{ opacity: 0 }, { opacity: 0, offset: 0.5 }, { opacity: 1 }],
      { duration: OPEN_DURATION_MS + 150, easing: 'ease-out' }
    );
    return () => {
      grow.cancel();
      fade?.cancel();
    };
    // Only on arrival
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Leaving by any route (close, Esc, browser back) takes the homepage back to
  // this website's card
  useEffect(() => { setPreviewReturn(projectId); }, [projectId]);

  useEffect(() => {
    if (project) return undefined;
    let cancelled = false;
    axios.get(`/api/portfolio/${projectId}`)
      .then((response) => { if (!cancelled) setProject(response.data); })
      .catch((err) => {
        console.error('Error fetching website preview:', err);
        if (!cancelled) setError('Failed to load the website preview. Please try again later.');
      });
    return () => { cancelled = true; };
  }, [projectId, project]);

  // Back to wherever the visitor came from, or home if they landed here directly
  const close = useCallback(() => {
    if (window.history.state?.idx > 0) navigate(-1);
    else navigate('/');
  }, [navigate]);

  useEffect(() => {
    const onKeyDown = (e) => { if (e.key === 'Escape') close(); };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [close]);

  const toggleView = () => {
    setView((current) => (current === 'desktop' ? 'mobile' : 'desktop'));
    // Each view starts from the top of its page
    if (screenRef.current) screenRef.current.scrollTop = 0;
  };

  const shot = project?.preview?.[view];
  const nextView = view === 'desktop' ? 'mobile' : 'desktop';

  return (
    <div className="wp-page">
      <div ref={frameRef} className="wp-frame">
        <div className="wp-toolbar">
          <button
            type="button"
            className="wp-tool wp-tool--toggle"
            onClick={toggleView}
            aria-label={`Show ${nextView} view`}
            title={`${nextView === 'mobile' ? 'Mobile' : 'Desktop'} view`}
          >
            {view === 'desktop' ? <PhoneIcon /> : <MonitorIcon />}
          </button>
          <button
            type="button"
            className="wp-tool wp-tool--close"
            onClick={close}
            aria-label="Close preview"
            title="Close"
          >
            <CloseIcon />
          </button>
        </div>

        <div ref={screenRef} className={`wp-screen wp-screen--${view}`}>
          {error && <p className="wp-status">{error}</p>}
          {!error && !project && <p className="wp-status">Loading...</p>}
          {project && !shot && <p className="wp-status">No preview for this website yet.</p>}
          {shot && (
            // `key` swaps in a fresh set of images when the view changes
            <div key={view} className="wp-site" style={{ maxWidth: view === 'mobile' ? shot.width : undefined }}>
              {shot.slices.map((slice, i) => (
                <img
                  key={slice.src}
                  src={slice.src}
                  width={shot.width}
                  height={slice.height}
                  alt={i === 0 ? `${project.title} website, ${view} view` : ''}
                  loading={i === 0 ? 'eager' : 'lazy'}
                  decoding="async"
                  className="wp-slice"
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WebsitePreviewPage;
