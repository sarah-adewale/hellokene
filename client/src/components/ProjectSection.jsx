import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import PortfolioCard from '../components/PortfolioCard';
import '../styles/ProjectSection.css';

const ProjectsSection = () => {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');
  const [viewMode, setViewMode] = useState('list'); // 'list' or 'grid'
  const tabsContainerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [enlargedIllustration, setEnlargedIllustration] = useState(null);
  
  // API base URL - will be different in development vs production
  const API_BASE_URL = process.env.NODE_ENV === 'production' 
    ? '/api' 
    : 'http://localhost:3001/api';
  
  // Categories for the tabs
  const categories = [
    { id: 'all', label: 'Highlighted Works', icon: 'all-icon' },
    { id: 'growth', label: 'Growth Design', icon: 'growth-icon' },
    { id: 'product', label: 'Product Design', icon: 'product-icon' },
    { id: 'illustrations', label: 'Illustrations', icon: 'illustrations-icon' },
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
        // Initially filter for highlighted projects
        setFilteredProjects(projectsData.filter(project => project.highlighted));
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
        icon: {
          name: 'Website',
          color: '#9D9D9F'
        }
      },
      {
        id: 'smartpathways',
        title: 'Smart Pathways',
        subtitle: 'Guidance and support services for students & professionals migrating to Canada',
        description: 'A platform for sports betting analytics and insights.',
        category: ['Website', 'Business Portfolio'],
        imageUrl: '/images/smart-pathways.svg',
        hoverImageUrl: '/images/smart-pathways-hover.svg',
        gridImageUrl: '/images/smart-pathways-grid.svg',
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
        id: 'illustration1',
        title: 'Nature Series',
        subtitle: 'Digital illustrations',
        imageUrl: '/images/rick-illustration.svg',
        isIllustration: true,
        highlighted: false,
        growthDesign: false,
        productDesign: false
      },
      {
        id: 'illustration2',
        title: 'Tech Icons',
        subtitle: 'Icon set design',
        imageUrl: '/images/floating-light-illustration.svg',
        isIllustration: true,
        highlighted: false,
        growthDesign: false,
        productDesign: false
      },
      {
        id: 'illustration3',
        title: 'Tech Icons',
        subtitle: 'Icon set design',
        imageUrl: '/images/keanu-illustration.svg',
        isIllustration: true,
        highlighted: false,
        growthDesign: false,
        productDesign: false
      },
      {
        id: 'illustration4',
        title: 'Tech Icons',
        subtitle: 'Icon set design',
        imageUrl: '/images/finance-illustration.svg',
        isIllustration: true,
        highlighted: false,
        growthDesign: false,
        productDesign: false
      },
      {
        id: 'illustration5',
        title: 'Tech Icons',
        subtitle: 'Icon set design',
        imageUrl: '/images/illustration2.svg',
        isIllustration: true,
        highlighted: false,
        growthDesign: false,
        productDesign: false
      },{
        id: 'illustration6',
        title: 'Tech Icons',
        subtitle: 'Icon set design',
        imageUrl: '/images/illustration2.svg',
        isIllustration: true,
        highlighted: false,
        growthDesign: false,
        productDesign: false
      }

    ];
    
    setProjects(dummyProjects);
    setFilteredProjects(dummyProjects.filter(project => project.highlighted));
  };
  
  // Filter projects when category changes
  useEffect(() => {
    if (activeCategory === 'all') {
      setFilteredProjects(projects.filter(project => project.highlighted));
      setViewMode('list'); // Reset to list view for highlighted works
    } else if (activeCategory === 'growth') {
      const filtered = projects.filter(project => project.growthDesign);
      setFilteredProjects(filtered);
      setViewMode('list'); // Reset to list view for growth design
    } else if (activeCategory === 'product') {
      const filtered = projects.filter(project => project.productDesign);
      setFilteredProjects(filtered);
      setViewMode('list'); // Reset to list view for product design
    } else if (activeCategory === 'illustrations') {
      const filtered = projects.filter(project => project.isIllustration);
      setFilteredProjects(filtered);
      setViewMode('masonry'); // Set to masonry view for illustrations
    }
  }, [activeCategory, projects]);
  
  // Handle mouse events for horizontal scrolling on mobile
  const handleMouseDown = (e) => {
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
    e.preventDefault();
    const x = e.pageX - tabsContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2; // scroll-fast
    tabsContainerRef.current.scrollLeft = scrollLeft - walk;
  };
  
  // Handle touch events for mobile
  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - tabsContainerRef.current.offsetLeft);
    setScrollLeft(tabsContainerRef.current.scrollLeft);
  };
  
  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - tabsContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    tabsContainerRef.current.scrollLeft = scrollLeft - walk;
  };
  
  const handleTouchEnd = () => {
    setIsDragging(false);
  };
  
  // Get the appropriate icon for each category
  const getCategoryIcon = (categoryId, isActive) => {
    switch(categoryId) {
      case 'all':
        return (
          <p className='emoji-icon'>🌟</p>
        );
      case 'growth':
        return (
          <p className='emoji-icon'>🪴</p>
        );
      case 'product':
        return (
          <p className='emoji-icon'>💎</p>
        );
      case 'illustrations':
        return (
          <p className='emoji-icon'>🎨</p>
        );
      default:
        return null;
    }
  };

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
              {activeCategory === category.id && (
                <span className="category-icon">
                  {getCategoryIcon(category.id, true)}
                </span>
              )}
              <span className="category-label">{category.label}</span>
            </button>
          ))}
        </div>
        
        {/* View mode toggle - hide for illustrations */}
        {activeCategory !== 'illustrations' && (
          <div className="view-mode-toggle">
            <button 
              className={`toggle-button ${viewMode === 'list' ? 'active' : ''}`}
              onClick={() => setViewMode('list')}
              aria-label="List view"
            >
              <svg 
                className="toggle-icon" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
            
            <div className="toggle-divider"></div>
            
            <button 
              className={`toggle-button ${viewMode === 'grid' ? 'active' : ''}`}
              onClick={() => setViewMode('grid')}
              aria-label="Grid view"
            >
              <svg 
                className="toggle-icon" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  d="M4 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1v-4zM14 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z"
                ></path>
              </svg>
            </button>
          </div>
        )}
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
        // Render illustrations masonry layout
        renderIllustrations()
      ) : (
        // Render regular projects list/grid view
        <div 
          className={`projects ${viewMode === 'list' ? 'list-view' : 'grid-view'}`}
          key={viewMode} // Force re-render on view mode change for smoother animation
        >
          {filteredProjects.map((project) => (
            <PortfolioCard 
              key={`${project.id}-${viewMode}`} // Unique key based on both project and view mode
              project={project} 
              viewMode={viewMode}
            />
          ))}
        </div> 
      )}
    </section>
  );
};

export default ProjectsSection;