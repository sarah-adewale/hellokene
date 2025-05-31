import { EnvelopeOpen, FilePdf, Sun, Moon } from '@phosphor-icons/react';
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import '../styles/Header.css'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();
  
  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  // Handle scroll event to add backdrop filter (desktop only)
  useEffect(() => {
    if (isMobile) return; // Don't apply scroll effects on mobile
    
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobile]);
  
  // Close menu when route changes
  useEffect(() => {
    setMenuOpen(false);
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
              <li className="nav-item">
                <a 
                  href="/images/Kenenna_Anyaegbunam_2025_Resume.pdf" 
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
              
              <li className="mobile-nav-item">
                <FilePdf size={32} className="mobile-icon" />
                <a 
                  href="/images/Kenenna_Anyaegbunam_2025_Resume.pdf" 
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