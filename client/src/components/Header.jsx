import { CaretDown } from '@phosphor-icons/react';
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { isWebsitePreviewPath } from '../config/websitePreviews';
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

const TEXT_FX_URL = 'https://www.figma.com/community/plugin/1607414274813196918';

const MoonIcon = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M18.6226 13.1142C17.2728 13.4927 15.8466 13.5051 14.4904 13.1501C13.1342 12.7951 11.897 12.0856 10.9057 11.0943C9.91444 10.103 9.20489 8.8658 8.84992 7.50962C8.49495 6.15345 8.50735 4.72723 8.88586 3.37744C7.55509 3.74784 6.34458 4.46044 5.37492 5.44427C4.40526 6.42809 3.71028 7.6488 3.35921 8.9848C3.00814 10.3208 3.01323 11.7255 3.37398 13.0589C3.73472 14.3923 4.43853 15.608 5.4153 16.5847C6.39206 17.5615 7.6077 18.2653 8.94112 18.626C10.2745 18.9868 11.6792 18.9919 13.0152 18.6408C14.3512 18.2897 15.5719 17.5948 16.5558 16.6251C17.5396 15.6554 18.2522 14.4449 18.6226 13.1142Z" fill="currentColor"/>
  </svg>
);

const SunIcon = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M11 16.1562C13.8477 16.1562 16.1562 13.8477 16.1562 11C16.1562 8.15228 13.8477 5.84375 11 5.84375C8.15228 5.84375 5.84375 8.15228 5.84375 11C5.84375 13.8477 8.15228 16.1562 11 16.1562Z" fill="currentColor"/>
    <path d="M11 3.09375V1.375" stroke="currentColor" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M5.40508 5.40557L4.19336 4.19385" stroke="currentColor" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M3.09375 11H1.375" stroke="currentColor" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M5.40508 16.5947L4.19336 17.8064" stroke="currentColor" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M11 18.9062V20.625" stroke="currentColor" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16.5947 16.5947L17.8064 17.8064" stroke="currentColor" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M18.9062 11H20.625" stroke="currentColor" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16.5947 5.40557L17.8064 4.19385" stroke="currentColor" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Segmented moon / sun control. Clicking the inactive half switches theme;
// clicking the active half is a no-op.
const ThemeToggle = ({ theme, onSelect, className = '' }) => (
  <div className={`theme-toggle ${className}`} role="group" aria-label="Colour theme">
    <button
      type="button"
      className={`theme-toggle-option ${theme === 'dark' ? 'is-active' : ''}`}
      onClick={() => onSelect('dark')}
      aria-pressed={theme === 'dark'}
      aria-label="Dark mode"
    >
      <MoonIcon />
    </button>
    <button
      type="button"
      className={`theme-toggle-option ${theme === 'light' ? 'is-active' : ''}`}
      onClick={() => onSelect('light')}
      aria-pressed={theme === 'light'}
      aria-label="Light mode"
    >
      <SunIcon />
    </button>
  </div>
);

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [toolsOpen, setToolsOpen] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();
  const scrollTimeoutRef = useRef(null);
  const toolsDropdownRef = useRef(null);

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

  // Blurred backdrop once the page has scrolled
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeoutRef.current) {
        cancelAnimationFrame(scrollTimeoutRef.current);
      }
    };
  }, [handleScroll]);

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

  // Close the dropdown when the route changes
  useEffect(() => {
    setToolsOpen(false);
  }, [location]);

  // The context only exposes toggleTheme, so switching to the already-active
  // theme is a no-op.
  const selectTheme = useCallback((next) => {
    if (next !== theme) toggleTheme();
  }, [theme, toggleTheme]);

  // Website previews fill the top of the page; their frame has its own close button
  if (isWebsitePreviewPath(location.pathname)) return null;

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        {/* Logo - Left side */}
        <div className="logo-container">
          <Link to="/" className="logo-link">
            <img 
              src="/images/kene-logo-new.webp"
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
                  <span className="tools-trigger-emoji" aria-hidden="true">🚀</span>
                  {/* "Tools" alone on phones (CSS picks one) */}
                  <span className="tools-label-full">Tools I've Shipped</span>
                  <span className="tools-label-short">Tools</span>
                  <CaretDown size={14} className={`tools-caret ${toolsOpen ? 'tools-caret--open' : ''}`} />
                </button>
                {toolsOpen && (
                  <div className="tools-dropdown">
                    <a href={TEXT_FX_URL} target="_blank" rel="noopener noreferrer" className="tools-dropdown-link">
                      <div className="tool-icon-wrap"><TextFXIcon /></div>
                      <div className="tool-info">
                        <span className="tool-title">Text FX</span>
                        <span className="tool-subtitle">Turn Figma text into animated{' '}<br />components or export as JSON</span>
                      </div>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="tool-link-arrow">
                        <path d="M6 3L11 8L6 13" stroke="#E7E7E7" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </a>
                    {/* Not launched yet, so not a link */}
                    <div className="tools-dropdown-link tools-dropdown-link--disabled" aria-disabled="true">
                      <div className="tool-icon-wrap"><NutchAIIcon /></div>
                      <div className="tool-info">
                        <span className="tool-title">Nutch AI</span>
                        <span className="tool-subtitle">Enhance your browsing experience{' '}<br />with AI that follows you around</span>
                      </div>
                      <span className="coming-soon-badge">Coming Soon</span>
                    </div>
                  </div>
                )}
              </li>
            </ul>
          </nav>
          
          {/* Theme Toggle */}
          <ThemeToggle
            theme={theme}
            onSelect={selectTheme}
            className="theme-toggle--header"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;