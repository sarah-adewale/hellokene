// src/components/CredentialPopup.jsx
import React, { useState } from 'react';
import '../styles/CredentialPopup.css';
import { useTheme } from '../context/ThemeContext';

// In CredentialPopup.jsx
const CredentialPopup = ({ isOpen, onClose, credentials, projectUrl }) => {
    const [emailCopied, setEmailCopied] = useState(false);
    const [passwordCopied, setPasswordCopied] = useState(false);
    const { theme, toggleTheme } = useTheme();

    if (!isOpen) return null;
  
    const copyToClipboard = (text, field) => {
      navigator.clipboard.writeText(text).then(
        () => {
          // Show copied indicator
          if (field === 'email') {
            setEmailCopied(true);
            setTimeout(() => setEmailCopied(false), 2000);
          } else {
            setPasswordCopied(true);
            setTimeout(() => setPasswordCopied(false), 2000);
          }
        },
        (err) => {
          console.error('Could not copy text: ', err);
        }
      );
    };
    
    const openProjectUrl = () => {
      // Check if projectUrl exists before trying to open it
      if (projectUrl) {
        window.open(projectUrl, '_blank', 'noopener,noreferrer');
      } else {
        console.error('No project URL provided');
      }
    };
  
    return (
      <div className="popup-overlay" onClick={onClose}>
        <div className="credential-popup" onClick={(e) => e.stopPropagation()}>
          <h2>🔓 Demo Access</h2>
          
          {/* Email and password fields remain the same */}
          <div className="credential-field">
            <label>Email</label>
            <div className="input-with-copy">
              <input 
                type="text" 
                value={credentials.email} 
                readOnly 
              />
              <button 
                className="copy-button"
                onClick={() => copyToClipboard(credentials.email, 'email')}
                title="Copy email"
              >
                {emailCopied ? (
                  // <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  // <path d="M8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14Z" fill="currentcolor"/>
                  // <path fill-rule="evenodd" clip-rule="evenodd" d="M11.1118 6.15487C11.3024 6.35467 11.2949 6.67116 11.0951 6.86178L7.42639 10.3618C7.23308 10.5462 6.92895 10.5461 6.73581 10.3615L4.90456 8.61148C4.70492 8.4207 4.69774 8.1042 4.88852 7.90456C5.0793 7.70492 5.3958 7.69774 5.59544 7.88852L7.08155 9.30868L10.4049 6.13823C10.6047 5.94761 10.9212 5.95506 11.1118 6.15487Z" fill="currentColor"/>
                  // </svg>
                  theme === 'dark' ? (
                    <img src="/images/CheckCircle.svg" alt="" />
                  ):(
                    <img src="/images/check-circle-light.svg" alt="" />
                  )
                  
                  
                ) : (
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.5 10.5H13.5V2.5H5.5V5.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M10.5 5.5H2.5V13.5H10.5V5.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>

                )}
              </button>
            </div>
          </div>
          
          <div className="credential-field">
            <label>Password</label>
            <div className="input-with-copy">
              <input 
                type="text" 
                value={credentials.password} 
                readOnly 
              />
              <button 
                className="copy-button"
                onClick={() => copyToClipboard(credentials.password, 'password')}
                title="Copy password"
              >
                {passwordCopied ? (
                  theme === 'dark' ? (
                    <img src="/images/CheckCircle.svg" alt="" />
                  ):(
                    <img src="/images/check-circle-light.svg" alt="" />
                  )
                  
                ) : (
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.5 10.5H13.5V2.5H5.5V5.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M10.5 5.5H2.5V13.5H10.5V5.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>

                )}
              </button>
            </div>
          </div>
          
          <p className="credential-note">
            Try out the admin features with this test account.<br />
            All data is sample data for demonstration purposes only.
          </p>
          
          <div className="popup-actions">
            <button 
              className="open-project-button"
              onClick={openProjectUrl}
            >
              Open Demo Dashboard
              
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default CredentialPopup;