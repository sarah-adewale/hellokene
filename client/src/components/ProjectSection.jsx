import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import CredentialPopup from './CredentialPopup';
import '../styles/ProjectSection.css';

// The highlights tab opens with a short preview; the rest are behind a button.
const HIGHLIGHTS_PREVIEW_COUNT = 3;

const ProjectsSection = () => {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeCategory, setActiveCategory] = useState('highlights');
  const tabsContainerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [enlargedIllustration, setEnlargedIllustration] = useState(null);
  const [credentialProject, setCredentialProject] = useState(null);
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
    const fetchProjects = async () => {
      try {
        setIsLoading(true);
        setError(null);
        
        // Fetch projects from backend API
        const response = await axios.get(`${API_BASE_URL}/portfolio`);
        const projectsData = response.data;
        
        setProjects(projectsData);
        setFilteredProjects(projectsData.filter(project => (
          !project.isIllustration && !project.isWebsite && !project.isBrand
        )));
        setIsLoading(false);
      } catch (err) {
        console.error('Error fetching projects:', err);
        setError('Failed to fetch projects. Please try again later.');
        setIsLoading(false);
        
        // Fallback to local data in case the API fails
        // This helps during development or if the server is down
        fallbackToLocalData();
      }
    };
    
    fetchProjects();
  }, [API_BASE_URL]);

  // Fallback function to use local data if API fails
  const fallbackToLocalData = () => {
    console.warn('Using fallback local data due to API error');
    // Your existing dummy data as fallback
        const dummyProjects = [
      {
        id: 'nutch',
        title: 'Building Nutch',
        subtitle: 'Designing an AI-native workflow from first principles.',
        description: 'Designing an AI-native workflow from first principles.',
        category: ['AI', 'Browser App'],
        imageUrl: '/images/nutch.svg',
        hoverImageUrl: '/images/nutch-hover.svg',
        gridImageUrl: '/images/nutch-grid.svg',
        readTime: '5 min read',
        caseStudyUrl: '/portfolio/nutch',
        highlighted: true,
        growthDesign: false,
        productDesign: true,
        platforms: ["extension"],
        icon: {
          name: 'Website',
          color: '#9D9D9F'
        }
      },
      {
        id: 'pivo',
        title: 'Pivo',
        subtitle: 'A finance platform, providing credit and business tools to supply chain SMEs.',
        description: 'Designed a mobile banking experience that helps SMEs manage their finances easily.',
        category: ['Web & Mobile Apps', 'Paas'],
        imageUrl: '/images/new-pivo-img.svg',
        hoverImageUrl: '/images/new-pivo-img-hover.svg',
        gridImageUrl: '/images/new-pivo-grid-img.svg',
        readTime: '6 min read',
        caseStudyUrl: '/portfolio/pivo',
        highlighted: true,
        growthDesign: true,
        productDesign: false,
        icon: {
          name: 'Website',
          color: '#9D9D9F'
        }
      },
      {
        id: 'portfolio',
        title: 'Portfolio Refresh',
        subtitle: 'An updated portfolio of work, showing increased aptitude and experience.',
        description: 'Designed and developed a personal portfolio website to showcase my projects.',
        category: ['Website', 'Portfolio'],
        imageUrl: '/images/new-portfolio-img.svg',
        hoverImageUrl: '/images/new-portfolio-img-hover.svg',
        gridImageUrl: '/images/new-portfolio-grid-img.svg',
        readTime: '4 min read',
        caseStudyUrl: '/portfolio/portfolio',
        highlighted: true,
        growthDesign: true,
        productDesign: false,
        isWebsite: true,
        figmaUrl: 'YOUR_FIGMA_URL_HERE',
        icon: {
          name: 'Globe',
          color: '#10B981'
        }
      },
      {
        id: 'liberterra',
        title: 'LiberTerra',
        subtitle: 'A secure platform for property sales & management services in Nigeria and the UK',
        description: 'A secure platform for property sales & management services in Nigeria and the UK',
        category: ['Browser App', 'Real Estate'],
        imageUrl: '/images/new-liberterra-img.svg',
        hoverImageUrl: '/images/new-liberterra-img-hover.svg',
        gridImageUrl: '/images/liberterra-grid.svg',
        readTime: '7 min read',
        caseStudyUrl: '/portfolio/liberterra',
        highlighted: false,
        growthDesign: false,
        productDesign: true,
        isWebsite: true,
        figmaUrl: 'YOUR_FIGMA_URL_HERE',
        icon: {
          name: 'LeafyGreen',
          color: '#84CC16'
        }
      },
      {
        id: 'betweysure',
        title: 'Betweysure',
        subtitle: 'Betweysure is a football forecast & prediction platform for punters and gamblers',
        description: 'A platform for sports betting analytics and insights.',
        category: ['Web', 'Analytics'],
        imageUrl: '/images/new-betweysure-img.svg',
        hoverImageUrl: '/images/new-betweysure-img-hover.svg',
        gridImageUrl: '/images/betweysure-grid.svg',
        readTime: '5 min read',
        projectUrl: 'https://pivo.app',
        highlighted: false,
        growthDesign: false,
        productDesign: true,
        icon: {
          name: 'ChartBar',
          color: '#F59E0B'
        }
      },
      {
        id: 'laundrybasket',
        title: 'Laundry Basket',
        subtitle: 'An order & customer management platform for laundry service in Sedona, Arizona',
        description: 'A platform for sports betting analytics and insights.',
        category: ['Web App', 'Admin Dashboard'],
        imageUrl: '/images/laundry-basket.svg',
        hoverImageUrl: '/images/laundry-basket-hover.svg',
        gridImageUrl: '/images/laundry-basket-grid.svg',
        readTime: '5 min read',
        projectUrl: 'https://pivo.app',
        requiresCredentials: true,
        highlighted: true,
        growthDesign: false,
        productDesign: true,
        icon: {
          name: 'ChartBar',
          color: '#F59E0B'
        }
      },
      {
        id: 'gidigan',
        title: 'Gidigan',
        subtitle: 'An online service creators and professionals can use to buy and sell products & services',
        description: 'Designed a mobile banking experience that helps SMEs manage their finances easily.',
        category: ['Browser App', 'Saas'],
        imageUrl: '/images/gidigan.svg',
        hoverImageUrl: '/images/gidigan-hover.svg',
        gridImageUrl: '/images/gidigan-grid.svg',
        readTime: '6 min read',
        caseStudyUrl: '/portfolio/gidigan',
        highlighted: false,
        growthDesign: false,
        productDesign: true,
        isWebsite: true,
        figmaUrl: 'YOUR_FIGMA_URL_HERE',
        icon: {
          name: 'Website',
          color: '#9D9D9F'
        }
      },
      {
        id: 'tradevu',
        title: 'Tradevu Website',
        category: ['Business Portfolio'],
        imageUrl: '/images/tradevu-website-1.png',
        mobileImageUrl: '/images/tradevu-mobile.svg',
        isWebsite: true,
        projectUrl: 'https://www.tradevu.co',
      },
      {
        id: 'smartpathways-website',
        title: 'Smart Pathways',
        category: ['Business Portfolio'],
        imageUrl: '/images/smartpathways.png',
        mobileImageUrl: '/images/smart-mobile.svg',
        isWebsite: true,
        projectUrl: 'https://smart-pathways.netlify.app/',
      },
      {
        id: 'agri-youth',
        title: 'Agri Youth',
        category: ['Website'],
        imageUrl: '/images/agri-youth.png',
        mobileImageUrl: '/images/AT-mobile.svg',
        isWebsite: true,
      },
      {
        id: 'african-technopreneurs',
        title: 'African Technopreneurs',
        category: ['Website'],
        imageUrl: '/images/african-tech.png',
        mobileImageUrl: '/images/AT2-mobile.svg',
        isWebsite: true,
        projectUrl: 'https://www.africantechno.com/',
      },
      {
        id: 'illustration1',
        title: 'Rick Sanchez',
        imageUrl: '/images/rick-sanchez.svg',
        isIllustration: true,
        highlighted: false,
        growthDesign: false,
        productDesign: false
      },
      {
        id: 'illustration2',
        title: 'smoking kills',
        imageUrl: '/images/smoking-kills1.svg',
        isIllustration: true,
        highlighted: false,
        growthDesign: false,
        productDesign: false
      },
      {
        id: 'illustration3',
        title: 'document parsing',
        imageUrl: '/images/keanu-illustration.svg',
        isIllustration: true,
        highlighted: false,
        growthDesign: false,
        productDesign: false
      },
      {
        id: 'illustration4',
        title: 'platform access',
        imageUrl: '/images/finance-illustration.svg',
        isIllustration: true,
        highlighted: false,
        growthDesign: false,
        productDesign: false
      },
      {
        id: 'pedros-cat',
        title: "Pedro's cat",
        imageUrl: '/images/cat.png',
        isIllustration: true,
        highlighted: false,
        growthDesign: false,
        productDesign: false
      },
      {
        id: 'akame',
        title: 'akame',
        imageUrl: '/images/akame 1.svg',
        isIllustration: true,
        highlighted: false,
        growthDesign: false,
        productDesign: false
      },
      {
        id: 'access-asset',
        title: 'access asset',
        imageUrl: '/images/hand.svg',
        isIllustration: true,
        highlighted: false,
        growthDesign: false,
        productDesign: false
      }

    ];
    
    setProjects(dummyProjects);
    setFilteredProjects(dummyProjects.filter(project => (
      !project.isIllustration && !project.isWebsite && !project.isBrand
    )));
  };
  
  // Filter projects when category changes
  useEffect(() => {
    setShowAllHighlights(false);

    if (activeCategory === 'highlights') {
      setFilteredProjects(projects.filter(project => (
        !project.isIllustration && !project.isWebsite && !project.isBrand
      )));
    } else if (activeCategory === 'websites') {
      setFilteredProjects(projects.filter(project => project.isWebsite));
    } else if (activeCategory === 'brands') {
      setFilteredProjects(projects.filter(project => project.isBrand));
    } else if (activeCategory === 'illustrations') {
      setFilteredProjects(projects.filter(project => project.isIllustration));
    }
  }, [activeCategory, projects]);


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
            <img
              src={project.gridImageUrl || project.imageUrl}
              alt={project.title}
              loading="lazy"
              decoding="async"
            />
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
                project.requiresCredentials ? (
                  <button
                    type="button"
                    className="project-cta project-cta--secondary"
                    onClick={() => setCredentialProject(project)}
                  >
                    Visit website
                  </button>
                ) : (
                  <a
                    className="project-cta project-cta--secondary"
                    href={project.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit website
                  </a>
                )
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

      {/* Demo credentials for the projects that need a login */}
      <CredentialPopup
        isOpen={credentialProject !== null}
        onClose={() => setCredentialProject(null)}
        credentials={{ email: 'demo@test.com', password: 'demo123' }}
        projectUrl={credentialProject?.projectUrl}
      />
    </div>
  );
};

const renderWebsites = () => {
  return (
    <div className="websites-grid">
      {filteredProjects.map((site) => (
        <div key={site.id} className="website-card">
          <picture>
            {site.mobileImageUrl && (
              <source media="(max-width: 767px)" srcSet={site.mobileImageUrl} />
            )}
            <img src={site.imageUrl} alt={site.title} className="website-card-img" />
          </picture>
          <a
            href={site.projectUrl || undefined}
            target={site.projectUrl ? '_blank' : undefined}
            rel={site.projectUrl ? 'noopener noreferrer' : undefined}
            className="view-prototype-btn"
            onClick={(e) => { if (!site.projectUrl) e.preventDefault(); e.stopPropagation(); }}
          >
            Open website
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 4.5H19.5V9" stroke="#FCFCFC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M14.25 9.75L19.5 4.5" stroke="#FCFCFC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M9 19.5H4.5V15" stroke="#FCFCFC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M9.75 14.25L4.5 19.5" stroke="#FCFCFC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
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
    </section>
  );
};

export default ProjectsSection;