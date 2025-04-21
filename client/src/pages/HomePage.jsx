import React, { useState, useEffect } from 'react';
import '../styles/Home.css';
import { useTheme } from '../context/ThemeContext';
import ProjectsSection from '../components/ProjectSection';

const HomePage = () => {
  const [activeTab, setActiveTab] = useState('bio');
  const [hoverIcon, setHoverIcon] = useState(null);
  const [activeIcon, setActiveIcon] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const { theme } = useTheme();

  // Check if device is mobile
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Check on initial load
    checkIfMobile();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkIfMobile);
    
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  useEffect(() => {
    // Only add keyboard event listener for desktop
    if (!isMobile) {
      const handleKeyPress = (event) => {
        const key = event.key.toLowerCase();
        
        if (key === 'r') {
          setActiveTab('bio');
        } else if (key === 'e') {
          setActiveTab('experience');
        } else if (key === 's') {
          setActiveTab('skills');
        }
      };
      
      document.addEventListener('keydown', handleKeyPress);
      
      return () => {
        document.removeEventListener('keydown', handleKeyPress);
      };
    }
  }, [isMobile]);
  
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        {/* Left Column - Text */}
        <div className="hero-content">
          {activeTab === 'bio' && (
            <h1 className="hero-heading" style={{fontSize: '32px'}}>
              Hello, I'm Kene.<br />
              I design digital products that help businesses grow—and keep their users around.
            </h1>
          )}
          
          {activeTab === 'experience' && (
            <>
            <h1 className="hero-heading experience">
            Since 2020, I've worked closely with founding teams across real estate, sports analytics, creator tools, venture capital, and supply chain finance.I've helped shape products from zero to scale—mapping journeys, refining flows, and making things work for the people who use them.
            </h1>
            <p className='experience-second-section'>See article: <span className='pivo-seed-link'> Pivo raises $2 million seed round . </span> <span className='pivo-seed-year'> Aug 28, 2022</span></p>
            </>
          )}
          
          {activeTab === 'skills' && (
            <h1 className="hero-heading skills">
              I'm skilled at crafting onboarding flows, building scalable design systems, and iterating engaging UIs. I simplify complex dashboards, run usability tests, and collaborate across teams to drive growth. Hover on the tools to see how I make it happen 👉🏾
            </h1>
          )}
          
          {isMobile ? (
            <div className="mobile-buttons">
              <p className="mobile-text">Click to learn about my</p>
              <div className="mobile-button-container">
                <button 
                  className={`mobile-button ${activeTab === 'experience' ? 'active' : ''}`}
                  onClick={() => setActiveTab(activeTab === 'experience' ? 'bio' : 'experience')}
                >
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.5 15.75V3C13.5 2.80109 13.421 2.61032 13.2803 2.46967C13.1397 2.32902 12.9489 2.25 12.75 2.25H5.25C5.05109 2.25 4.86032 2.32902 4.71967 2.46967C4.57902 2.61032 4.5 2.80109 4.5 3V15.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2.25 15.75H15.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M6.75 5.25H11.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M6.75 8.25H11.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M6.75 11.25H11.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Experience
                </button>
                <button 
                  className={`mobile-button ${activeTab === 'skills' ? 'active' : ''}`} 
                  onClick={() => setActiveTab(activeTab === 'skills' ? 'bio' : 'skills')}
                >
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 12C10.6569 12 12 10.6569 12 9C12 7.34315 10.6569 6 9 6C7.34315 6 6 7.34315 6 9C6 10.6569 7.34315 12 9 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M14.569 14.5689L11.757 11.7569" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M3.431 14.5689L6.243 11.7569" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M3.431 3.43109L6.243 6.24309" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M14.569 3.43109L11.757 6.24309" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Skills
                </button>
              </div>
            </div>
          ) : (
            <>
              {activeTab === 'bio' && (
                <div className="key-prompt bio">
                  <p>Press <span className="key-highlight">E</span> to learn about my experience</p>
                  <p>Press <span className="key-highlight">S</span> to learn about my skills</p>
                </div>
              )}
              
              {activeTab === 'experience' && (
                <div className="key-prompt">
                  <p>Press <span className="key-highlight">R</span> to reset</p>
                  <p>Press <span className="key-highlight">S</span> to learn about my skills</p>
                </div>
              )}
              
              {activeTab === 'skills' && (
                <div className="key-prompt">
                  <p>Press <span className="key-highlight">E</span> to learn more about my experience</p>
                  <p>Press <span className="key-highlight">R</span> to reset</p>
                </div>
              )}
            </>
          )}
        </div>
        
        {/* Right Column - Image and Skills */}
        <div className="profile-container">
          <div className="profile-image-wrapper">
            {/* Add profile image container with hover effect */}
            <div className="profile-image-container">
              <img 
                src="./images/profile-image.png" 
                alt="Kene" 
                className="profile-image"
              />
              <img 
                src="./images/profile-image-hover.svg" 
                alt="Kene - Hover" 
                className="profile-image-hover"
              />
            </div>
            
            {/* Skill Icons */}
            <div 
              className={`skill-icon ae-icon ${activeIcon === 'ae' ? 'active' : ''}`}
              onMouseEnter={() => !isMobile && setHoverIcon('ae')}
              onMouseLeave={() => !isMobile && setHoverIcon(null)}
              onClick={() => {
                if (isMobile) {
                  if (activeIcon === 'ae') {
                    setActiveIcon(null);
                  } else {
                    setActiveIcon('ae');
                  }
                }
              }}
            >
              <img 
                src={(hoverIcon === 'ae' || activeIcon === 'ae') ? './images/rive-filled.svg' : '/images/rive.svg'} 
                alt="After Effects" 
              />
              <div className={`skill-tooltip ae-tooltip ${isMobile && activeIcon === 'ae' ? 'mobile-visible' : ''}`}>
              I use Rive to add motion to moments that matter—whether it's a subtle micro-interaction or a playful animation that makes the product feel more alive and responsive.
              </div>
            </div>
            
            <div 
              className={`skill-icon ai-icon ${activeIcon === 'ai' ? 'active' : ''}`}
              onMouseEnter={() => !isMobile && setHoverIcon('ai')}
              onMouseLeave={() => !isMobile && setHoverIcon(null)}
              onClick={() => {
                if (isMobile) {
                  if (activeIcon === 'ai') {
                    setActiveIcon(null);
                  } else {
                    setActiveIcon('ai');
                  }
                }
              }}
            >
              <img 
                src={(hoverIcon === 'ai' || activeIcon === 'ai') ? './images/ai-filled.svg' : './images/ai.svg'} 
                alt="Adobe Illustrator" 
              />
              <div className={`skill-tooltip ai-tooltip ${isMobile && activeIcon === 'ai' ? 'mobile-visible' : ''}`}>
              I use Illustrator to create clean, scalable graphics—logos, icons, and illustrations that stay sharp, clear, and on-brand across every screen and format.
              </div>
            </div>
            
            <div 
              className={`skill-icon figma-icon ${activeIcon === 'figma' ? 'active' : ''}`}
              onMouseEnter={() => !isMobile && setHoverIcon('figma')}
              onMouseLeave={() => !isMobile && setHoverIcon(null)}
              onClick={() => {
                if (isMobile) {
                  if (activeIcon === 'figma') {
                    setActiveIcon(null);
                  } else {
                    setActiveIcon('figma');
                  }
                }
              }}
            >
              <img 
                src={(hoverIcon === 'figma' || activeIcon === 'figma') ? '/images/figma-filled.svg' : '/images/figma.svg'} 
                alt="Figma" 
              />
              <div className={`skill-tooltip figma-tooltip ${isMobile && activeIcon === 'figma' ? 'mobile-visible' : ''}`}>
              I use Figma to design, prototype, and document everything from early concepts to final UI—keeping teams aligned and helping products ship faster, with fewer surprises.
              </div>
            </div>
            
            <div 
              className={`skill-icon ps-icon ${activeIcon === 'ps' ? 'active' : ''}`}
              onMouseEnter={() => !isMobile && setHoverIcon('ps')}
              onMouseLeave={() => !isMobile && setHoverIcon(null)}
              onClick={() => {
                if (isMobile) {
                  if (activeIcon === 'ps') {
                    setActiveIcon(null);
                  } else {
                    setActiveIcon('ps');
                  }
                }
              }}
            >
              <img 
                src={(hoverIcon === 'ps' || activeIcon === 'ps') ? '/images/ps-filled.svg' : '/images/ps.svg'} 
                alt="Photoshop" 
              />
              <div className={`skill-tooltip ps-tooltip ${isMobile && activeIcon === 'ps' ? 'mobile-visible' : ''}`}>
              I use Photoshop to craft high-impact visuals, enhance product marketing, and refine assets—bringing extra clarity and credibility to how the product shows up in the world.
              </div>
            </div>
          </div>
          
          {/* Leading Product Status */}
          <div className="status-container">
            <div className="live-status">
              <div className="live-indicator"></div>
              <span className="live-text">Leading product at</span>
            </div>
            <img 
              src={theme === 'dark' 
                ? "./images/tradevu-logo.svg"
                : "/images/tradevu-logo-white-mode.svg"} 
              alt="Tradevu" 
              className="company-logo" 
            />
          </div>
        </div>
      </section>
      
      {/* Featured Projects Section would go here */}
      <ProjectsSection />
    </div>
  );
};

export default HomePage;