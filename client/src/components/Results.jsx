// src/components/case-study/Results.jsx
import React, { useState } from 'react';
import ImageModal from '../components/ImageModal';
import { useTheme } from '../context/ThemeContext';

const Results = ({ project }) => {
  const [modalImage, setModalImage] = useState(null);
  const { theme, toggleTheme } = useTheme();

  const openImageModal = (imageUrl, altText) => {
    setModalImage({ url: imageUrl, alt: altText });
  };

  const closeImageModal = () => {
    setModalImage(null);
  };

  // Only show specific content for the Pivo project
  if (project.id !== 'pivo') {
    return (
      <section className="case-study-section results">
        <h2>Results</h2>
        <p>The project delivered significant measurable improvements.</p>
      </section>
    );
  }

  return (
    <section className="case-study-section results">
      <h2 className="results-title">Results: Quantifiable Improvements</h2>
      
      <div className="results-intro">
        <p>
          Our strategic updates to the onboarding process delivered remarkable results within the first 60 days:
        </p>
      </div>
      
      <div className="results-highlights">
        <ul className="results-list">
          <li><span className='results-list-strong'>Increased onboarding success</span>  rate from 35% <span className='results-list-strong'>to over 70%.</span> </li>
          <li><span className='results-list-strong'>Decreased churn by 28%</span>, with users easily reaching the dashboard through tiered progression.</li>
          <li>Customer satisfaction <span className='results-list-strong'>(CSAT) score rose by 40%</span> </li>
          <li><span className='results-list-strong'>About 50% fewer support interactions</span>  between ops and engineering.</li>
        </ul>
      </div>
      
    
        <div className="tiered-system-diagram">
            {/* <img src="/images/bar-chart-img.svg" alt="" onClick={() => openImageModal("/images/bar-chart-img.svg", "Tiered onboarding user interface")} /> */}
            <img 
            src={theme === 'dark' 
                ? "/images/bar-chart-img.svg"
                : "/images/bar-chart-img-white.svg"
            } 
            alt={`${project.title}`} 
            className="onboarding-image"
            onClick={() => openImageModal(theme === 'dark' ? "/images/bar-chart-img.svg" : "/images/bar-chart-img-white.svg", "Tiered onboarding user interface")}
            />
            <div className="tiered-system-image">
              <div 
                className="zoom-indicator"
                // onClick={() => openImageModal("/images/bar-chart-img.svg", "Tiered onboarding user interface")}
                onClick={() => openImageModal(theme === 'dark' ? "/images/bar-chart-img.svg" : "/images/bar-chart-img-white.svg", "Tiered onboarding user interface")}
              >
                {theme === 'dark' ? (
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.5 3H13V5.5" stroke="#E7E7E7" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9.5 6.5L13 3" stroke="#E7E7E7" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M5.5 13H3V10.5" stroke="#E7E7E7" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M6.5 9.5L3 13" stroke="#E7E7E7" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M13 10.5V13H10.5" stroke="#E7E7E7" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9.5 9.5L13 13" stroke="#E7E7E7" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3 5.5V3H5.5" stroke="#E7E7E7" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M6.5 6.5L3 3" stroke="#E7E7E7" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.5 3H13V5.5" stroke="#232327" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9.5 6.5L13 3" stroke="#232327" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M5.5 13H3V10.5" stroke="#232327" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M6.5 9.5L3 13" stroke="#232327" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M13 10.5V13H10.5" stroke="#232327" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9.5 9.5L13 13" stroke="#232327" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3 5.5V3H5.5" stroke="#232327" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M6.5 6.5L3 3" stroke="#232327" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            )}

                <span>Tap to enlarge</span>
              </div>
            </div>
          </div>
      
      <div className="future-enhancements">
        <h2 className="future-title">Looking Ahead: Future Enhancements</h2>
        
        <p className="future-intro">
          Building on our success, we are exploring further enhancements to continue improving the onboarding experience:
        </p>
        
        <div className="enhancement-item">
          <h3 className="enhancement-title">In-App Signature Capability</h3>
          <p className="enhancement-desc">Implementing a feature for customers to sign documents directly within the app.</p>
        </div>
        
        <div className="enhancement-item">
          <p className="enhancement-potential"> Potential: Streamline the process for all future document requirements, including loan applications.</p>
        </div>
        
        <div className="enhancement-item">
          <h3 className="enhancement-title">Expedited Customer Reviews</h3>
          <p className="enhancement-desc">Implementing AI solutions to speed up backend reviews and approvals.</p>
        </div>
        
        <div className="enhancement-item">
          <p className="enhancement-potential"><span className='results-list-strong'>Potential:</span>  Reduce waiting times and enhance user satisfaction.</p>
        </div>
      </div>
      
      <div className="process-flow">
        <h2 className="process-flow-title">What the flow?</h2>
        
        <p className="process-flow-intro">
          We're really proud of the improvements and results we made through this process. Our user flow (old vs new) shares the blueprint for our journey from rapid churn to high retention.
        </p>
        
    
        <div className="tiered-system-diagram">
            {/* <img src="/images/flow-img.svg" alt="" onClick={() => openImageModal("/images/flow-img.svg", "Tiered onboarding user interface")} /> */}
            <img 
            src={theme === 'dark' 
                ? "/images/flow-img.svg"
                : "/images/flow-img-white.svg"
            } 
            alt={`${project.title}`} 
            className="onboarding-image"
            onClick={() => openImageModal(theme === 'dark' ? "/images/flow-img.svg" : "/images/flow-img-white.svg", "Tiered onboarding user interface")}
            />
            <div className="tiered-system-image">
              <div 
                className="zoom-indicator"
                // onClick={() => openImageModal("/images/flow-img.svg", "Tiered onboarding user interface")}
                onClick={() => openImageModal(theme === 'dark' ? "/images/flow-img.svg" : "/images/flow-img-white.svg", "Tiered onboarding user interface")}

              >
                {theme === 'dark' ? (
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.5 3H13V5.5" stroke="#E7E7E7" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9.5 6.5L13 3" stroke="#E7E7E7" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M5.5 13H3V10.5" stroke="#E7E7E7" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M6.5 9.5L3 13" stroke="#E7E7E7" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M13 10.5V13H10.5" stroke="#E7E7E7" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9.5 9.5L13 13" stroke="#E7E7E7" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3 5.5V3H5.5" stroke="#E7E7E7" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M6.5 6.5L3 3" stroke="#E7E7E7" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.5 3H13V5.5" stroke="#232327" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9.5 6.5L13 3" stroke="#232327" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M5.5 13H3V10.5" stroke="#232327" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M6.5 9.5L3 13" stroke="#232327" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M13 10.5V13H10.5" stroke="#232327" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9.5 9.5L13 13" stroke="#232327" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3 5.5V3H5.5" stroke="#232327" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M6.5 6.5L3 3" stroke="#232327" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            )}

                <span>Tap to enlarge</span>
              </div>
            </div>
          </div>
      </div>
      
      {/* Image Modal */}
      <ImageModal 
        isOpen={modalImage !== null}
        imageUrl={modalImage?.url}
        altText={modalImage?.alt}
        onClose={closeImageModal}
      />
    </section>
  );
};

export default Results;