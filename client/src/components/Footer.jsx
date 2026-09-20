import React from 'react';
import {
  EMAIL_URL,
  BOOK_A_CALL_URL,
  LINKEDIN_URL,
  MEDIUM_URL,
  DEVELOPER_URL,
} from '../config/links';
import '../styles/Footer.css';

const LinkedInIcon = () => (
  <svg width="40" height="48" viewBox="0 0 40 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M29.8438 13.2188H10.1562C9.63848 13.2188 9.21875 13.6385 9.21875 14.1562V33.8438C9.21875 34.3615 9.63848 34.7812 10.1562 34.7812H29.8438C30.3615 34.7812 30.7812 34.3615 30.7812 33.8438V14.1562C30.7812 13.6385 30.3615 13.2188 29.8438 13.2188Z" stroke="currentColor" strokeWidth="1.875" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M19.0625 22.125V29.625" stroke="currentColor" strokeWidth="1.875" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M15.3125 22.125V29.625" stroke="currentColor" strokeWidth="1.875" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M19.0625 25.4062C19.0625 24.536 19.4082 23.7014 20.0236 23.0861C20.6389 22.4707 21.4735 22.125 22.3438 22.125C23.214 22.125 24.0486 22.4707 24.6639 23.0861C25.2793 23.7014 25.625 24.536 25.625 25.4062V29.625" stroke="currentColor" strokeWidth="1.875" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M15.3125 19.7812C16.0892 19.7812 16.7188 19.1517 16.7188 18.375C16.7188 17.5983 16.0892 16.9688 15.3125 16.9688C14.5358 16.9688 13.9062 17.5983 13.9062 18.375C13.9062 19.1517 14.5358 19.7812 15.3125 19.7812Z" fill="currentColor"/>
  </svg>
);

const MediumIcon = () => (
  <svg width="46" height="46" viewBox="0 0 64 65" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M21.5 43.45C27.299 43.45 32 38.4132 32 32.2C32 25.9867 27.299 20.95 21.5 20.95C15.701 20.95 11 25.9867 11 32.2C11 38.4132 15.701 43.45 21.5 43.45Z" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M42.5 42.7C44.9853 42.7 47 37.9989 47 32.2C47 26.401 44.9853 21.7 42.5 21.7C40.0147 21.7 38 26.401 38 32.2C38 37.9989 40.0147 42.7 42.5 42.7Z" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M53 21.7V42.7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const Footer = () => (
  <footer className="footer-container">
    <div className="footer-content">
      <p className="footer-eyebrow">Building something?</p>
      <h2 className="footer-heading">
        Let me know<br />
        how I can help
      </h2>

      <div className="footer-actions">
        <a className="footer-cta footer-cta--primary" href={EMAIL_URL}>
          Send an email
        </a>
        {BOOK_A_CALL_URL ? (
          <a
            className="footer-cta footer-cta--secondary"
            href={BOOK_A_CALL_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Book a call
          </a>
        ) : (
          <span className="footer-cta footer-cta--secondary">Book a call</span>
        )}
      </div>

      <div className="footer-social-icons">
        <div className="footer-icon-wrapper">
          <a
            className="footer-icon-link"
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Kene on LinkedIn"
          >
            <span className="footer-icon"><LinkedInIcon /></span>
            <span className="footer-hover-text">Connect on LinkedIn</span>
          </a>
        </div>
        <div className="footer-icon-wrapper">
          <a
            className="footer-icon-link"
            href={MEDIUM_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Kene on Medium"
          >
            <span className="footer-icon"><MediumIcon /></span>
            <span className="footer-hover-text">Read my articles</span>
          </a>
        </div>
      </div>

      <div className="footer-attribution">
        <p>
          Built by me &amp;
          <a
            href={DEVELOPER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            Sarah
          </a>
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
