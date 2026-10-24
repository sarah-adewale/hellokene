import { useEffect, useLayoutEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getPreviewReturn } from '../config/websitePreviews';


// The app picks the scroll position on every route change (below), so stop the
// browser restoring its own on back/forward, which scrolls smoothly (html has
// scroll-behavior: smooth) after the app has already placed the page.
if ('scrollRestoration' in window.history) window.history.scrollRestoration = 'manual';

function ScrollToTop() {
  const { pathname } = useLocation();
  const [isVisible, setIsVisible] = useState(false);

  // Handle route change - scroll to top before the new page paints, and
  // instantly (html has scroll-behavior: smooth), so the old scroll position
  // never shows on the new page. The homepage handles its own scroll when
  // returning from a website preview (ProjectSection).
  useLayoutEffect(() => {
    if (pathname === '/' && getPreviewReturn()) return;
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  // Handle scroll visibility
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      style={{
        position: 'fixed',
        bottom: '32px',
        right: '32px',
        zIndex: 50,
        opacity: isVisible ? 1 : 0,
        pointerEvents: isVisible ? 'auto' : 'none',
        transform: isVisible ? 'translateY(0)' : 'translateY(8px)',
        transition: 'opacity 0.3s ease, transform 0.3s ease',
        background: 'transparent',
        border: 'none',
        cursor: 'pointer',
        color: 'var(--text-color)',
      }}
    >

      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M24 42C33.9411 42 42 33.9411 42 24C42 14.0589 33.9411 6 24 6C14.0589 6 6 14.0589 6 24C6 33.9411 14.0589 42 24 42Z" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10"/>
<path d="M17.6436 22.8563L23.9998 16.5L30.3561 22.8563" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M24 31.5V16.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>


    </button>
  );
}

export default ScrollToTop;