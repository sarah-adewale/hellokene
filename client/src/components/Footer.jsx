import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import '../styles/Footer.css';
const Footer = () => {
  const { theme } = useTheme();
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <h2 className="footer-text">Building something? </h2>
        <h2 className="footer-subheading">Let’s talk about <br></br>
        how design can help.</h2>
        
        {/* <p className="footer-text">
          I'd love to hear about your next big idea.
        </p> */}
        
        <div className="footer-social-icons">
          {/* Email Icon */}
          <div className="footer-icon-wrapper">
            <Link href="mailto:akenenna@gmail.com" className="footer-icon-link">
              <div className="footer-icon">
                {theme === 'dark' ? (
                  <svg width="64" height="65" viewBox="0 0 64 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 26.2V45.7C14 46.0978 14.158 46.4793 14.4393 46.7606C14.7206 47.0419 15.1022 47.2 15.5 47.2H48.5C48.8978 47.2 49.2794 47.0419 49.5607 46.7606C49.842 46.4793 50 46.0978 50 45.7V26.2L32 14.2L14 26.2Z" stroke="#9D9D9F" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M28.7188 36.7L14.4688 46.7687" stroke="#9D9D9F" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M49.5313 46.7687L35.2812 36.7" stroke="#9D9D9F" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M50 26.2L35.2813 36.7H28.7188L14 26.2" stroke="#9D9D9F" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ) : (
                  <svg width="64" height="65" viewBox="0 0 64 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 26.2V45.7C14 46.0978 14.158 46.4793 14.4393 46.7606C14.7206 47.0419 15.1022 47.2 15.5 47.2H48.5C48.8978 47.2 49.2794 47.0419 49.5607 46.7606C49.842 46.4793 50 46.0978 50 45.7V26.2L32 14.2L14 26.2Z" stroke="#6D6C6F" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M28.7188 36.7L14.4688 46.7687" stroke="#6D6C6F" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M49.5313 46.7687L35.2812 36.7" stroke="#6D6C6F" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M50 26.2L35.2813 36.7H28.7188L14 26.2" stroke="#6D6C6F" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </div>
              <span className="footer-hover-text">Send an email</span>
            </Link>
          </div>
          
          {/* OOI Icon */}
          <div className="footer-icon-wrapper">
            <Link href="#" className="footer-icon-link">
              <div className="footer-icon">
                {theme === 'dark' ? (
                  <svg width="64" height="65" viewBox="0 0 64 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.5 43.45C27.299 43.45 32 38.4132 32 32.2C32 25.9867 27.299 20.95 21.5 20.95C15.701 20.95 11 25.9867 11 32.2C11 38.4132 15.701 43.45 21.5 43.45Z" stroke="#9D9D9F" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M42.5 42.7C44.9853 42.7 47 37.9989 47 32.2C47 26.401 44.9853 21.7 42.5 21.7C40.0147 21.7 38 26.401 38 32.2C38 37.9989 40.0147 42.7 42.5 42.7Z" stroke="#9D9D9F" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M53 21.7V42.7" stroke="#9D9D9F" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ) : (
                  <svg width="64" height="65" viewBox="0 0 64 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.5 43.45C27.299 43.45 32 38.4132 32 32.2C32 25.9867 27.299 20.95 21.5 20.95C15.701 20.95 11 25.9867 11 32.2C11 38.4132 15.701 43.45 21.5 43.45Z" stroke="#6D6C6F" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M42.5 42.7C44.9853 42.7 47 37.9989 47 32.2C47 26.401 44.9853 21.7 42.5 21.7C40.0147 21.7 38 26.401 38 32.2C38 37.9989 40.0147 42.7 42.5 42.7Z" stroke="#6D6C6F" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M53 21.7V42.7" stroke="#6D6C6F" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </div>
              <span className="footer-hover-text">Read my articles</span>
            </Link>
          </div>

          {/* LinkedIn Icon */}
          <div className="footer-icon-wrapper">
            <Link href="https://linkedin.com/in/yourprofile" className="footer-icon-link">
              <div className="footer-icon">
                {theme === 'dark' ? (
                  <svg width="64" height="65" viewBox="0 0 64 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M47.75 14.95H16.25C15.4216 14.95 14.75 15.6215 14.75 16.45V47.95C14.75 48.7784 15.4216 49.45 16.25 49.45H47.75C48.5784 49.45 49.25 48.7784 49.25 47.95V16.45C49.25 15.6215 48.5784 14.95 47.75 14.95Z" stroke="#9D9D9F" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M30.5 29.2V41.2" stroke="#9D9D9F" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M24.5 29.2V41.2" stroke="#9D9D9F" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M30.5 34.45C30.5 33.0576 31.0531 31.7222 32.0377 30.7376C33.0223 29.7531 34.3576 29.2 35.75 29.2C37.1424 29.2 38.4777 29.7531 39.4623 30.7376C40.4469 31.7222 41 33.0576 41 34.45V41.2" stroke="#9D9D9F" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M24.5 25.45C25.7426 25.45 26.75 24.4426 26.75 23.2C26.75 21.9573 25.7426 20.95 24.5 20.95C23.2574 20.95 22.25 21.9573 22.25 23.2C22.25 24.4426 23.2574 25.45 24.5 25.45Z" fill="#9D9D9F"/>
                  </svg>
                ) : (
                  <svg width="64" height="65" viewBox="0 0 64 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M47.75 14.95H16.25C15.4216 14.95 14.75 15.6215 14.75 16.45V47.95C14.75 48.7784 15.4216 49.45 16.25 49.45H47.75C48.5784 49.45 49.25 48.7784 49.25 47.95V16.45C49.25 15.6215 48.5784 14.95 47.75 14.95Z" stroke="#6D6C6F" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M30.5 29.2V41.2" stroke="#6D6C6F" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M24.5 29.2V41.2" stroke="#6D6C6F" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M30.5 34.45C30.5 33.0576 31.0531 31.7222 32.0377 30.7376C33.0223 29.7531 34.3576 29.2 35.75 29.2C37.1424 29.2 38.4777 29.7531 39.4623 30.7376C40.4469 31.7222 41 33.0576 41 34.45V41.2" stroke="#6D6C6F" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M24.5 25.45C25.7426 25.45 26.75 24.4426 26.75 23.2C26.75 21.9573 25.7426 20.95 24.5 20.95C23.2574 20.95 22.25 21.9573 22.25 23.2C22.25 24.4426 23.2574 25.45 24.5 25.45Z" fill="#6D6C6F"/>
                  </svg>
                )}
              </div>
              <span className="footer-hover-text">Connect on LinkedIn</span>
            </Link>
          </div>
        </div>
        
        <div className="footer-attribution">
          <p>
            &copy; {new Date().getFullYear()} Designed by Me | Developed by
            <Link 
              to="https://sarah-adewale.netlify.app/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="footer-link"
            >
              Sarah
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;