import { EnvelopeOpen, FilePdf, Sun, Moon } from '@phosphor-icons/react';
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import '../styles/Header.css'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();
  
  // Handle scroll event to add backdrop filter
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Close menu when route changes
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);
  
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    // Toggle body class to prevent scrolling when menu is open
    if (!menuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
  };
  
  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        {/* Logo - Left side */}
        <div className="logo-container">
          <Link to="/" className="logo-link">
            <img 
            src={theme === 'dark' 
                ? "/images/kene-logo-imp.png"
                : "/images/kene-logo-dark.png"
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
          
          {/* Theme Toggle */}
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
          
          {/* Mobile Menu Button - Only visible on mobile */}
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
        
        {/* Mobile Menu - Overlay that appears when hamburger is clicked */}
        <div className={`mobile-menu ${menuOpen ? 'active' : ''}`}>
          <div className="mobile-menu-container">
            <ul className="mobile-nav-list">
              {/* Add Theme Toggle Button to Mobile Menu */}
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
                  href="/resume.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="mobile-nav-link"
                >
                  My Resumé
                </a>
              </li>
              <li className="mobile-nav-item">
                <EnvelopeOpen size={32} className="mobile-icon" />
                <a 
                  href="/contact" 
                  className="mobile-nav-link"
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