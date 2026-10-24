import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/ProjectSection.css';
import WaitlistModal from './WaitlistModal';
import { getPreviewReturn, clearPreviewReturn } from '../config/websitePreviews';

// The highlights tab opens with a short preview; the rest are behind a button.
const HIGHLIGHTS_PREVIEW_COUNT = 3;

// Projects from the API, kept for the session so returning to the homepage
// renders the list straight away (needed to land back on a website card).
let projectsCache = null;

const filterProjects = (category, projects) => {
  if (category === 'websites') return projects.filter(project => project.isWebsite);
  if (category === 'brands') return projects.filter(project => project.isBrand);
  if (category === 'illustrations') return projects.filter(project => project.isIllustration);
  return projects.filter(project => (
    !project.isIllustration && !project.isWebsite && !project.isBrand
  ));
};

// Scrolls the window so `el` sits centred below the fixed header, or just
// under it if it's taller than the space.
const scrollToCard = (el) => {
  const rect = el.getBoundingClientRect();
  const header = document.querySelector('.site-header')?.offsetHeight || 0;
  const space = window.innerHeight - header;
  const offset = rect.height < space ? header + (space - rect.height) / 2 : header + 16;
  window.scrollTo({ top: window.scrollY + rect.top - offset, behavior: 'instant' });
};

// A screen recording framed as a browser window over an animated background,
// for projects with `showcase: { background, screen }` in their data.
const ProjectShowcase = ({ showcase, title }) => (
  <div className="showcase" role="img" aria-label={title}>
    <img className="showcase-bg" src={showcase.background} alt="" loading="lazy" decoding="async" />
    <div className="showcase-window">
      <span className="showcase-dots" aria-hidden="true">
        <span /><span /><span />
      </span>
      <div className="showcase-screen">
        <img src={showcase.screen} alt="" loading="lazy" decoding="async" />
      </div>
    </div>
  </div>
);

// sRGB channel (0-255) to linear light, per the WCAG luminance formula
const toLinear = (c) => {
  const v = c / 255;
  return v <= 0.04045 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4;
};

// Share (0-1) of the pixels behind `el` in `img` that are near-white, using
// WCAG relative luminance. Returns 0 if it can't be measured (some SVGs block
// pixel reads), which keeps the default white button.
const lightShareBehind = (img, el) => {
  const ir = img.getBoundingClientRect();
  const er = el.getBoundingClientRect();
  if (!ir.width || !er.width || !img.naturalWidth) return 0;
  const sx = img.naturalWidth / ir.width;
  const sy = img.naturalHeight / ir.height;
  const canvas = document.createElement('canvas');
  canvas.width = 32;
  canvas.height = 8;
  const ctx = canvas.getContext('2d', { willReadFrequently: true });
  try {
    ctx.drawImage(
      img,
      (er.left - ir.left) * sx, (er.top - ir.top) * sy, er.width * sx, er.height * sy,
      0, 0, canvas.width, canvas.height,
    );
    const px = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
    let light = 0;
    for (let i = 0; i < px.length; i += 4) {
      const luminance = 0.2126 * toLinear(px[i]) + 0.7152 * toLinear(px[i + 1]) + 0.0722 * toLinear(px[i + 2]);
      if (luminance > 0.5) light += 1;
    }
    return light / (px.length / 4);
  } catch {
    return 0;
  }
};

// A website screenshot with an "Open website" button. The button is white on
// glass; when a noticeable part of the screenshot behind it is white (e.g. a
// white website) it switches to its dark, frosted version. Colourful or dark
// backgrounds keep the original. Rechecked on resize, since the button moves
// to the bottom of the card on mobile.
// Measured: dark and colourful sites have 0-2% near-white pixels behind the
// button, white sites 30% and up.
const WebsiteCard = ({ site }) => {
  const cardRef = useRef(null);
  const imgRef = useRef(null);
  const navigate = useNavigate();
  const btnRef = useRef(null);
  const [onLight, setOnLight] = useState(false);

  useEffect(() => {
    const img = imgRef.current;
    let frame;
    const check = () => {
      if (img.complete) setOnLight(lightShareBehind(img, btnRef.current) > 0.15);
    };
    const schedule = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(check);
    };
    img.addEventListener('load', schedule);
    window.addEventListener('resize', schedule, { passive: true });
    schedule();
    return () => {
      cancelAnimationFrame(frame);
      img.removeEventListener('load', schedule);
      window.removeEventListener('resize', schedule);
    };
  }, []);

  const btnClass = `view-prototype-btn ${onLight ? 'view-prototype-btn--on-light' : ''}`;

  // Start loading the top of the preview the visitor is about to open
  const preloadPreview = () => {
    const view = window.matchMedia('(max-width: 767px)').matches ? 'mobile' : 'desktop';
    const first = site.preview?.[view]?.slices[0];
    if (first) new Image().src = first.src;
  };
  const btnContent = (
    <>
      Open website
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 4.5H19.5V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14.25 9.75L19.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9 19.5H4.5V15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9.75 14.25L4.5 19.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </>
  );

  return (
    <div ref={cardRef} className="website-card" data-website-id={site.id}>
      <picture>
        {site.mobileImageUrl && (
          <source media="(max-width: 767px)" srcSet={site.mobileImageUrl} />
        )}
        <img ref={imgRef} src={site.imageUrl} alt={site.title} className="website-card-img" />
      </picture>
      {/* `previewUrl` opens the framed in-site preview; otherwise the live site */}
      {site.previewUrl ? (
        <Link
          ref={btnRef}
          to={site.previewUrl}
          className={btnClass}
          onPointerEnter={preloadPreview}
          onFocus={preloadPreview}
          onClick={(e) => {
            e.stopPropagation();
            // Let modified clicks (new tab etc.) behave like a normal link
            if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
            e.preventDefault();
            // The preview page grows its frame out of this card's position,
            // and shows the project without waiting for the API
            const { left, top, width, height } = cardRef.current.getBoundingClientRect();
            navigate(site.previewUrl, {
              state: { project: site, origin: { left, top, width, height }, at: Date.now() },
            });
          }}
        >
          {btnContent}
        </Link>
      ) : (
        <a
          ref={btnRef}
          href={site.projectUrl || undefined}
          target={site.projectUrl ? '_blank' : undefined}
          rel={site.projectUrl ? 'noopener noreferrer' : undefined}
          className={btnClass}
          onClick={(e) => { if (!site.projectUrl) e.preventDefault(); e.stopPropagation(); }}
        >
          {btnContent}
        </a>
      )}
    </div>
  );
};

const ProjectsSection = () => {
  // Coming back from a website preview: reopen on the Websites tab at its card
  const [returnToWebsite] = useState(getPreviewReturn);
  const returnedRef = useRef(false);
  const stopReturnRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState(returnToWebsite ? 'websites' : 'highlights');
  const [projects, setProjects] = useState(projectsCache || []);
  const [filteredProjects, setFilteredProjects] = useState(() =>
    filterProjects(activeCategory, projectsCache || [])
  );
  const [isLoading, setIsLoading] = useState(!projectsCache);
  const [error, setError] = useState(null);
  // Product whose waitlist popup is open, or null
  const [waitlistFor, setWaitlistFor] = useState(null);
  const tabsContainerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [enlargedIllustration, setEnlargedIllustration] = useState(null);
  const [showAllHighlights, setShowAllHighlights] = useState(false);
  
  const API_BASE_URL = '/api';
  
  // Categories for the tabs
  const categories = [
    { id: 'highlights', label: 'Highlights', icon: '✨' },
    { id: 'websites', label: 'Websites', icon: '🖥️' },
    { id: 'brands', label: 'Logos', icon: '🎭' },
    { id: 'illustrations', label: 'Illustrations', icon: '🎨' },
  ];
  
  useEffect(() => {
    if (projectsCache) return;
    const fetchProjects = async () => {
      try {
        setIsLoading(true);
        setError(null);
        
        // Fetch projects from backend API
        const response = await axios.get(`${API_BASE_URL}/portfolio`);
        const projectsData = response.data;
        
        projectsCache = projectsData;
        setProjects(projectsData);
        setIsLoading(false);
      } catch (err) {
        console.error('Error fetching projects:', err);
        setError('Failed to fetch projects. Please try again later.');
        setIsLoading(false);
      }
    };

    fetchProjects();
  }, [API_BASE_URL]);

  // Filter projects when category changes
  useEffect(() => {
    setShowAllHighlights(false);
    setFilteredProjects(filterProjects(activeCategory, projects));
  }, [activeCategory, projects]);

  // Land back on the website card the visitor opened, before the page paints.
  // Images above it can still be loading and push it down, so keep it in
  // place as the page settles, until the visitor scrolls themselves.
  useLayoutEffect(() => {
    if (!returnToWebsite || returnedRef.current) return;
    const card = document.querySelector(`[data-website-id="${returnToWebsite}"]`);
    if (!card) return;
    returnedRef.current = true;
    scrollToCard(card);

    const observer = new ResizeObserver(() => scrollToCard(card));
    observer.observe(document.body);
    const stop = () => {
      observer.disconnect();
      clearTimeout(timer);
      window.removeEventListener('wheel', stop);
      window.removeEventListener('touchstart', stop);
      window.removeEventListener('keydown', stop);
    };
    const timer = setTimeout(stop, 2000);
    window.addEventListener('wheel', stop, { passive: true });
    window.addEventListener('touchstart', stop, { passive: true });
    window.addEventListener('keydown', stop);
    stopReturnRef.current = stop;
  }, [returnToWebsite, filteredProjects]);

  useEffect(() => {
    // Used: later homepage visits start at the top as usual
    if (returnToWebsite) clearPreviewReturn();
    return () => stopReturnRef.current?.();
  }, [returnToWebsite]);


// Handle mouse events for horizontal scrolling on mobile - FIXED VERSION
const handleMouseDown = (e) => {
  // Only enable dragging on the tabs container, not the whole page
  if (!tabsContainerRef.current.contains(e.target)) return;
  
  setIsDragging(true);
  setStartX(e.pageX - tabsContainerRef.current.offsetLeft);
  setScrollLeft(tabsContainerRef.current.scrollLeft);
};

const handleMouseLeave = () => {
  setIsDragging(false);
};

const handleMouseUp = () => {
  setIsDragging(false);
};

const handleMouseMove = (e) => {
  if (!isDragging) return;
  
  // REMOVED e.preventDefault() - this was blocking smooth scroll!
  const x = e.pageX - tabsContainerRef.current.offsetLeft;
  const walk = (x - startX) * 2;
  tabsContainerRef.current.scrollLeft = scrollLeft - walk;
};

// Handle touch events for mobile - FIXED VERSION
const handleTouchStart = (e) => {
  // Only enable dragging on the tabs container
  if (!tabsContainerRef.current.contains(e.target)) return;
  
  setIsDragging(true);
  setStartX(e.touches[0].pageX - tabsContainerRef.current.offsetLeft);
  setScrollLeft(tabsContainerRef.current.scrollLeft);
};

const handleTouchMove = (e) => {
  if (!isDragging) return;
  
  // REMOVED e.preventDefault() - this was blocking smooth scroll!
  const x = e.touches[0].pageX - tabsContainerRef.current.offsetLeft;
  const walk = (x - startX) * 2;
  tabsContainerRef.current.scrollLeft = scrollLeft - walk;
};

const handleTouchEnd = () => {
  setIsDragging(false);
};
  // Get the appropriate icon for each category


  // Render illustrations in masonry layout
  const openEnlargedView = (illustration) => {
    setEnlargedIllustration(illustration);
    // Prevent body scrolling when modal is open
    document.body.style.overflow = 'hidden';
  };
  
  const closeEnlargedView = () => {
    setEnlargedIllustration(null);
    // Restore body scrolling
    document.body.style.overflow = 'auto';
  };

// Handle ESC key to close enlarged view
useEffect(() => {
  const handleKeyDown = (e) => {
    if (e.key === 'Escape' && enlargedIllustration) {
      closeEnlargedView();
    }
  };
  
  window.addEventListener('keydown', handleKeyDown);
  return () => {
    window.removeEventListener('keydown', handleKeyDown);
  };
}, [enlargedIllustration]);

const renderBrands = () => {
  return (
    <div className="brands-grid">
      {filteredProjects.map((brand) => {
        // The base mark is greyscale; hovering cross-fades to the brand's
        // colour version.
        const logo = (
          <span className="brand-logo-stack">
            <img
              className="brand-logo brand-logo--base"
              src={brand.imageUrl}
              alt={brand.title}
              loading="lazy"
              decoding="async"
            />
            {brand.hoverImageUrl && (
              <img
                className="brand-logo brand-logo--hover"
                src={brand.hoverImageUrl}
                alt=""
                aria-hidden="true"
                loading="lazy"
                decoding="async"
              />
            )}
          </span>
        );
        return (
          <div key={brand.id} className="brand-item">
            {brand.projectUrl ? (
              <a href={brand.projectUrl} target="_blank" rel="noopener noreferrer">
                {logo}
              </a>
            ) : logo}
          </div>
        );
      })}
    </div>
  );
};

const renderHighlights = () => {
  const visible = showAllHighlights
    ? filteredProjects
    : filteredProjects.slice(0, HIGHLIGHTS_PREVIEW_COUNT);
  const hasMore = filteredProjects.length > visible.length;

  return (
    <div className="project-rows">
      {visible.map((project) => (
        <article key={project.id} className="project-row">
          <div className="project-row-media">
            {project.showcase ? (
              <ProjectShowcase showcase={project.showcase} title={project.title} />
            ) : (
              <img
                src={project.gridImageUrl || project.imageUrl}
                alt={project.title}
                loading="lazy"
                decoding="async"
              />
            )}
          </div>

          <div className="project-row-body">
            <h3 className="project-row-title">{project.title}</h3>
            {project.subtitle && (
              <p className="project-row-subtitle">{project.subtitle}</p>
            )}
            {project.readTime && project.readTime !== '--' && (
              <p className="project-row-readtime">{project.readTime}</p>
            )}

            <div className="project-row-actions">
              {project.caseStudyUrl && (
                <Link className="project-cta project-cta--primary" to={project.caseStudyUrl}>
                  Read Case Study
                </Link>
              )}
              {project.projectUrl && (
                <a
                  className="project-cta project-cta--secondary"
                  href={project.projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit website
                </a>
              )}
              {project.waitlist && (
                <button
                  type="button"
                  className="project-cta project-cta--secondary"
                  onClick={() => setWaitlistFor(project.waitlist)}
                >
                  Join waitlist
                </button>
              )}
            </div>
          </div>
        </article>
      ))}

      {hasMore && (
        <div className="show-more-wrap">
          <button
            type="button"
            className="show-more-button"
            onClick={() => setShowAllHighlights(true)}
          >
            Show more highlights
          </button>
        </div>
      )}
    </div>
  );
};

const renderWebsites = () => {
  return (
    <div className="websites-grid">
      {filteredProjects.map((site) => (
        <WebsiteCard key={site.id} site={site} />
      ))}
    </div>
  );
};

const renderIllustrations = () => {
  return (
    <>
      <div className="illustrations-masonry">
        {filteredProjects.map((illustration) => (
          <div 
            key={illustration.id} 
            className="illustration-item"
            onClick={() => openEnlargedView(illustration)}
          >
            <img src={illustration.imageUrl} alt={illustration.title} />
            <div className="illustration-overlay">
              <h3>{illustration.title}</h3>
              <p>{illustration.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
      
      {/* Full-screen Enlarged View Modal */}
      <div className={`enlarged-view ${enlargedIllustration ? 'active' : ''}`} onClick={closeEnlargedView}>
        {enlargedIllustration && (
          <div className="enlarged-image-container" onClick={(e) => e.stopPropagation()}>
            <img 
              src={enlargedIllustration.imageUrl} 
              alt={enlargedIllustration.title} 
              className="enlarged-image"
            />
            <div className="close-button" onClick={closeEnlargedView}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

  return (
    <section className="projects-section">
      
      <div className="projects-controls">
        {/* Category tabs */}
        <div 
          className="tabs-container"
          ref={tabsContainerRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {categories.map((category) => (
            <button
              key={category.id}
              className={`tab-button ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
            >
              {activeCategory === category.id && category.icon && (
                <span className="category-icon">
                  <span className="emoji-icon">{category.icon}</span>
                </span>
              )}
              <span className="category-label">{category.label}</span>
            </button>
          ))}
        </div>
      </div>
      
      {isLoading ? (
        <div className="loading-spinner">
          <svg 
            className="spinner" 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24"
          >
            <circle 
              className="opacity-25" 
              cx="12" 
              cy="12" 
              r="10" 
              stroke="currentColor" 
              strokeWidth="4"
            ></circle>
            <path 
              className="opacity-75" 
              fill="currentColor" 
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        </div>
      ) : error ? (
        <div className="error-state">
          <p>{error}</p>
          <button 
            className="retry-button"
            onClick={() => window.location.reload()}
          >
            Try Again
          </button>
        </div>
      ) : filteredProjects.length === 0 ? (
        <div className="empty-state">
          <p>No projects in this category yet.</p>
        </div>
      ) : activeCategory === 'illustrations' ? (
        renderIllustrations()
      ) : activeCategory === 'websites' ? (
        renderWebsites()
      ) : activeCategory === 'brands' ? (
        renderBrands()
      ) : (
        renderHighlights()
      )}
      <WaitlistModal
        isOpen={waitlistFor !== null}
        product={waitlistFor || ''}
        onClose={() => setWaitlistFor(null)}
      />
    </section>
  );
};

export default ProjectsSection;