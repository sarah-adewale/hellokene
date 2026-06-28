import { EnvelopeOpen, FilePdf, Sun, Moon, CaretDown } from '@phosphor-icons/react';
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import '../styles/Header.css'

const TextFXIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="32" height="32" rx="16" fill="#050C13"/>
    <g clipPath="url(#clip0_7606_45038)">
      <g filter="url(#filter0_f_7606_45038)">
        <rect x="6.42831" y="16" width="13.44" height="13.44" rx="1.6" transform="rotate(-45 6.42831 16)" stroke="#2A9DF4" strokeWidth="0.64"/>
      </g>
      <rect x="6.88086" y="16" width="12.8" height="12.8" rx="1.28" transform="rotate(-45 6.88086 16)" fill="#2A9DF4"/>
      <g filter="url(#filter1_f_7606_45038)">
        <rect x="7.60909" y="16" width="11.7702" height="11.7702" rx="1.12" transform="rotate(-45 7.60909 16)" stroke="url(#paint0_linear_7606_45038)" style={{mixBlendMode:'soft-light'}} strokeWidth="0.32"/>
      </g>
      <g filter="url(#filter2_f_7606_45038)">
        <rect x="7.60909" y="16" width="11.7702" height="11.7702" rx="1.12" transform="rotate(-45 7.60909 16)" stroke="url(#paint1_linear_7606_45038)" style={{mixBlendMode:'lighten'}} strokeWidth="0.32"/>
      </g>
      <g filter="url(#filter3_i_7606_45038)">
        <path d="M23.2271 15.5473C23.4771 15.7972 23.4771 16.2024 23.2271 16.4524L17.0922 22.5873C16.6891 22.9905 15.9997 22.7049 15.9997 22.1347L15.9997 9.86492C15.9997 9.29474 16.6891 9.00919 17.0922 9.41237L23.2271 15.5473Z" fill="#1C7CDD"/>
      </g>
      <g filter="url(#filter4_i_7606_45038)">
        <path d="M13.7591 14.1101C13.4057 14.1101 13.1191 13.8236 13.1191 13.4701V13.2801C13.1191 12.9267 13.4057 12.6401 13.7591 12.6401H18.2391C18.5926 12.6401 18.8791 12.9267 18.8791 13.2801V13.4701C18.8791 13.8236 18.5926 14.1101 18.2391 14.1101H17.2058C17.0291 14.1101 16.8858 14.2534 16.8858 14.4301V18.7201C16.8858 19.0736 16.5993 19.3601 16.2458 19.3601H15.7525C15.399 19.3601 15.1125 19.0736 15.1125 18.7201V14.4301C15.1125 14.2534 14.9692 14.1101 14.7925 14.1101H13.7591Z" fill="#1464B6"/>
      </g>
    </g>
    <defs>
      <filter id="filter0_f_7606_45038" x="0.371484" y="0.439355" width="31.1203" height="31.1213" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feGaussianBlur stdDeviation="3.2" result="effect1_foregroundBlur_7606_45038"/>
      </filter>
      <filter id="filter1_f_7606_45038" x="6.95211" y="7.02096" width="17.9591" height="17.9581" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feGaussianBlur stdDeviation="0.48" result="effect1_foregroundBlur_7606_45038"/>
      </filter>
      <filter id="filter2_f_7606_45038" x="6.95211" y="7.02096" width="17.9591" height="17.9581" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feGaussianBlur stdDeviation="0.48" result="effect1_foregroundBlur_7606_45038"/>
      </filter>
      <filter id="filter3_i_7606_45038" x="16" y="9.22363" width="7.41406" height="13.8722" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="0.32"/>
        <feGaussianBlur stdDeviation="0.16"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.0666667 0 0 0 0 0.160784 0 0 0 0 0.258824 0 0 0 0.5 0"/>
        <feBlend mode="normal" in2="shape" result="effect1_innerShadow_7606_45038"/>
      </filter>
      <filter id="filter4_i_7606_45038" x="13.1191" y="12.6401" width="5.75977" height="7.04021" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="0.32"/>
        <feGaussianBlur stdDeviation="0.64"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.0338609 0 0 0 0 0.180926 0 0 0 0 0.342697 0 0 0 1 0"/>
        <feBlend mode="normal" in2="shape" result="effect1_innerShadow_7606_45038"/>
      </filter>
      <linearGradient id="paint0_linear_7606_45038" x1="18.1719" y1="16.2673" x2="7.14328" y2="33.4099" gradientUnits="userSpaceOnUse">
        <stop stopColor="#48ABF7"/>
        <stop offset="1" stopColor="#145E96"/>
      </linearGradient>
      <linearGradient id="paint1_linear_7606_45038" x1="18.8507" y1="16.7199" x2="7.14328" y2="33.4099" gradientUnits="userSpaceOnUse">
        <stop stopColor="#9ADDFF"/>
        <stop offset="1" stopColor="#145E96"/>
      </linearGradient>
      <clipPath id="clip0_7606_45038">
        <rect x="4" y="4" width="24" height="24" rx="3.84" fill="white"/>
      </clipPath>
    </defs>
  </svg>
);

const NutchAIIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="32" height="32" rx="16" fill="#0A9348"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M26.5368 7.00696C26.8577 7.01922 27.016 7.38788 26.8141 7.63782C25.7674 8.93412 24.1085 10.8862 23.3327 11.4279C22.2858 12.1587 21.8251 12.6154 20.1677 12.712C20.0611 12.7182 20.0524 12.7918 20.1589 12.799C20.2435 12.8046 20.3418 12.8088 20.4548 12.8087C20.5732 12.8087 20.6309 13.0286 20.528 13.087C19.5928 13.6157 18.3778 14.617 18.1345 16.0089C18.9227 16.9747 20.5543 19.3027 20.7761 20.8878C20.8897 21.0937 20.9211 21.6423 20.1374 22.1876C19.1573 22.8694 16.8342 24.7443 15.3854 24.9786C13.9365 25.2127 10.7838 23.4869 10.5495 22.0382C10.5425 20.8875 10.9378 18.195 12.5739 16.6271C11.8912 15.8961 10.2555 14.3345 9.03777 13.7765C8.97167 13.7461 8.92454 13.685 8.9118 13.6134C8.897 13.5294 8.87584 13.4287 8.84832 13.3204C8.81815 13.2018 8.68242 13.2491 8.69109 13.3712C8.75786 14.3119 8.47341 15.6402 7.14031 16.84C6.81394 17.069 6.23544 17.6738 6.05926 18.5157C6.01833 18.7114 5.75493 18.7939 5.65984 18.6183C4.96841 17.3352 4.42489 14.8804 6.16082 12.1525C6.7363 11.2008 8.55108 9.83088 11.2096 11.9611C11.6571 12.2451 12.8293 13.3673 13.9372 15.5831C14.3775 15.3985 15.4708 15.1401 16.3229 15.5831C17.096 12.5524 20.2003 6.77183 26.5368 7.00696ZM12.7067 19.9825C12.688 19.882 12.5478 19.8706 12.5134 19.9669L12.2389 20.7345C12.1966 20.8529 12.127 20.9595 12.0358 21.046L11.7653 21.3038C11.7132 21.3533 11.7286 21.4395 11.7946 21.4679L12.0329 21.5704C12.2132 21.6481 12.359 21.79 12.4421 21.9679L13.1276 23.4347C13.1774 23.5403 13.3366 23.4894 13.3161 23.3741L13.0973 22.1407C13.0368 21.8001 13.2018 21.459 13.5065 21.295L13.9186 21.0724C14.0061 21.0253 13.9795 20.8938 13.8805 20.8849L13.4626 20.8478C13.1047 20.8157 12.8114 20.5487 12.7458 20.1954L12.7067 19.9825Z" fill="#FCFCFC"/>
  </svg>
);

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [toolsOpen, setToolsOpen] = useState(false);
  const [mobileToolsOpen, setMobileToolsOpen] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();
  const scrollTimeoutRef = useRef(null);
  const toolsDropdownRef = useRef(null);

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

    // Optimized scroll handler with throttling
    const handleScroll = useCallback(() => {
      if (scrollTimeoutRef.current) return;
      
      scrollTimeoutRef.current = requestAnimationFrame(() => {
        const shouldBeScrolled = window.scrollY > 20;
        if (scrolled !== shouldBeScrolled) {
          setScrolled(shouldBeScrolled);
        }
        scrollTimeoutRef.current = null;
      });
    }, [scrolled]);

  
  // Handle scroll event to add backdrop filter (desktop only)
  useEffect(() => {
    if (isMobile) return; // Don't apply scroll effects on mobile
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeoutRef.current) {
        cancelAnimationFrame(scrollTimeoutRef.current);
      }
    };
  }, [isMobile, handleScroll]);
  
  // Close tools dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (toolsDropdownRef.current && !toolsDropdownRef.current.contains(e.target)) {
        setToolsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setMenuOpen(false);
    setToolsOpen(false);
    document.body.classList.remove('menu-open');
  }, [location]);
  
  // Close menu when resizing to desktop
  useEffect(() => {
    if (!isMobile && menuOpen) {
      setMenuOpen(false);
      document.body.classList.remove('menu-open');
    }
  }, [isMobile, menuOpen]);
  
  const toggleMenu = () => {
    const newMenuState = !menuOpen;
    setMenuOpen(newMenuState);
    
    // Toggle body class to prevent scrolling when menu is open
    if (newMenuState) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
  };
  
  // Close menu when clicking outside
  const handleMenuClose = () => {
    setMenuOpen(false);
    document.body.classList.remove('menu-open');
  };
  
  return (
    <header className={`site-header ${!isMobile && scrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        {/* Logo - Left side */}
        <div className="logo-container">
          <Link to="/" className="logo-link">
            <img 
              src={theme === 'dark' 
                  ? "/images/kene-logo-dark.svg"
                  : "/images/kene-logo-imp.svg"
              } 
              alt="Kene Logo" 
              className="kene-logo-img"
            />
          </Link>
        </div>
        
        {/* Right side navigation and controls */}
        <div className="header-right">
          {/* Desktop Navigation */}
          <nav className="desktop-nav">
            <ul className="nav-list">
              <li className="nav-item nav-item-dropdown" ref={toolsDropdownRef}>
                <button
                  className={`nav-link tools-trigger ${toolsOpen ? 'tools-trigger--open' : ''}`}
                  onClick={() => setToolsOpen(!toolsOpen)}
                  aria-expanded={toolsOpen}
                >
                  Tools I've Shipped
                  <CaretDown size={14} className={`tools-caret ${toolsOpen ? 'tools-caret--open' : ''}`} />
                </button>
                {toolsOpen && (
                  <div className="tools-dropdown">
                    <a href="https://www.figma.com/community/plugin/1607414274813196918" target="_blank" rel="noopener noreferrer" className="tools-dropdown-link">
                      <div className="tool-icon-wrap"><TextFXIcon /></div>
                      <div className="tool-info">
                        <span className="tool-title">Text FX</span>
                        <span className="tool-subtitle">Turn Figma text into animated<br />components or export as JSON</span>
                      </div>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="tool-link-arrow">
                        <path d="M6 3L11 8L6 13" stroke="#E7E7E7" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </a>
                    <a href="#" className="tools-dropdown-link">
                      <div className="tool-icon-wrap"><NutchAIIcon /></div>
                      <div className="tool-info">
                        <span className="tool-title">Nutch AI</span>
                        <span className="tool-subtitle">Enhance your browsing experience<br />with AI that follows you around</span>
                      </div>
                      <span className="coming-soon-badge">Coming Soon</span>
                    </a>
                  </div>
                )}
              </li>
              <li className="nav-item">
                <a
                  href="/images/Kenenna_Anyaegbunam_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-link"
                >
                  My Resumé
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="mailto:akenenna@gmail.com"
                  className="nav-link"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          
          {/* Theme Toggle - Desktop only */}
          <div className="sun-circle">
            <button 
                className="sun-circle" 
                onClick={toggleTheme}
                aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
                {theme === 'dark' ? (
                <Sun size={24} weight="fill" color="#FCFCFC" />
                ) : (
                <Moon size={24} weight="fill" color="#232327" />
                )}
            </button>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className={`hamburger-menu ${menuOpen ? 'active' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle mobile menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        
        {/* Mobile Menu Overlay */}
        <div className={`mobile-menu ${menuOpen ? 'active' : ''}`}>
          <div className="mobile-menu-container">
            <ul className="mobile-nav-list">
              {/* Theme Toggle in Mobile Menu */}
              <li className="mobile-nav-item">
                <button 
                  className="mobile-theme-toggle"
                  onClick={toggleTheme}
                  aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
                >
                  {theme === 'dark' ? (
                    <Sun size={24} weight="fill" color="#FCFCFC" />
                  ) : (
                    <Moon size={24} weight="fill" color="#232327" />
                  )}
                </button>
              </li>
              
              <li className="mobile-nav-item mobile-tools-item">
                <button
                  className="mobile-tools-trigger"
                  onClick={() => setMobileToolsOpen(!mobileToolsOpen)}
                >
                  <span className="mobile-nav-link">Tools I've Shipped</span>
                  <CaretDown size={16} className={`tools-caret ${mobileToolsOpen ? 'tools-caret--open' : ''}`} />
                </button>
                {mobileToolsOpen && (
                  <div className="mobile-tools-list">
                    <a href="#" className="mobile-tool-link" onClick={handleMenuClose}>
                      <div className="tool-icon-wrap"><TextFXIcon /></div>
                      <div className="tool-info">
                        <span className="tool-title">Text FX</span>
                        <span className="tool-subtitle">Turn Figma text into animated<br />components or export as JSON</span>
                      </div>
                    </a>
                    <a href="#" className="mobile-tool-link" onClick={handleMenuClose}>
                      <div className="tool-icon-wrap"><NutchAIIcon /></div>
                      <div className="tool-info">
                        <span className="tool-title">Nutch AI</span>
                        <span className="tool-subtitle">Enhance your browsing experience<br />with AI that follows you around</span>
                      </div>
                      <span className="coming-soon-badge">Coming Soon</span>
                    </a>
                  </div>
                )}
              </li>

              <li className="mobile-nav-item">
                <FilePdf size={32} className="mobile-icon" />
                <a
                  href="/images/Kenenna_Anyaegbunam_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mobile-nav-link"
                  onClick={handleMenuClose}
                >
                  My Resumé
                </a>
              </li>
              
              <li className="mobile-nav-item">
                <EnvelopeOpen size={32} className="mobile-icon" />
                <a 
                  href="mailto:akenenna@gmail.com"
                  className="mobile-nav-link"
                  onClick={handleMenuClose}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;