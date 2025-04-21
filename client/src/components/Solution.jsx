// src/components/case-study/Solution.jsx
import React, { useState } from 'react';
import ImageModal from '../components/ImageModal';
import { useTheme } from '../context/ThemeContext';

const Solution = ({ project }) => {
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
      <section className="case-study-section solution">
        <h2>The Solution</h2>
        <p>Custom solutions were implemented to address the project challenges.</p>
      </section>
    );
  }

  return (
    <section className="case-study-section solution">
      <h2 className="solution-title">The Solution: Enhancing Flexibility and Clarity</h2>
      
      <div className="solution-intro">
        <p>
          With a clear understanding of the challenges, we embarked on a comprehensive overhaul of the onboarding process. 
          Our goal was to create a seamless, user-friendly experience that met regulatory requirements without overwhelming our customers.
        </p>
      </div>
      
      {/* Solution 1: Tiered Onboarding System */}
      <div className="solution-item">
        <h3 className="solution-item-title">
          <span className="solution-number">1.</span> Introducing a Tiered Onboarding System
        </h3>
        
        <div className="solution-content">
          <div className="tiered-system-diagram">
          <img 
            src={theme === 'dark' 
                ? "/images/tiered-onboarding.svg"
                : "/images/tiered-onboarding-white.svg"
            } 
            alt={`${project.title}`} 
            className="onboarding-image"
            onClick={() => openImageModal(theme === 'dark' ? "/images/tiered-onboarding.svg" : "/images/tiered-onboarding-white.svg", "Tiered onboarding user interface")}
            />
          
            <div className="tiered-system-image">
              <div 
                className="zoom-indicator"
                
                onClick={() => openImageModal(theme === 'dark' ? "/images/tiered-onboarding.svg" : "/images/tiered-onboarding-white.svg", "Tiered onboarding user interface")}
              
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
          
          <div className="solution-outcomes">
            <div className="outcome-column">
              <h4 className='set-out-text'>We set out to</h4>
              <p>Collaborate with the Legal team, and reassess the necessity of each document.</p>
            </div>
            
            <div className="outcome-column">
              <h4 className='set-out-text'>This helped us</h4>
              <p className='solution-subtitle'>Establish a tiered system, to allow customers access business incrementally based on their level of document clearance.</p>
            </div>
            
            <div className="outcome-column highlight">
              <h4>Which led to</h4>
              <p className='solution-subtitle'>Reduced initial burden, letting users progress at their own pace and access the platform in stages.</p>
            </div>
          </div>
          
          <div className="solution-results">
            <p>Our tiered approach simplified the onboarding journey into manageable steps, allowing customers experience the application enough to form positive impressions of our offering and general experience.</p>
            <p>We were able to record an improved 90% KYC completion rate (without manual intervention) from the previous quarter, about 80% of which made it through the staggered progression.</p>
          </div>
        </div>
      </div>
      
      {/* Solution 2: Enhancing Readability and Accessibility */}
      <div className="solution-item">
        <h3 className="solution-item-title">
          <span className="solution-number">2.</span> Enhancing Readability and Accessibility
        </h3>
        
        <div className="solution-content">
        <div className="tiered-system-diagram">
            {/* <img src="/images/document-img.svg" alt="" onClick={() => openImageModal("/images/document-img.svg", "Tiered onboarding user interface")} /> */}
            <img 
            src={theme === 'dark' 
                ? "/images/document-img.svg"
                : "/images/readability-img-white.svg"
            } 
            alt={`${project.title}`} 
            className="onboarding-image"
            onClick={() => openImageModal(theme === 'dark' ? "/images/document-img.svg" : "/images/readability-img-white.svg", "Tiered onboarding user interface")}
            />
            <div className="tiered-system-image">
              <div 
                className="zoom-indicator"
    
                onClick={() => openImageModal(theme === 'dark' ? "/images/document-img.svg" : "/images/readability-img-white.svg", "Tiered onboarding user interface")}
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
          
          <div className="solution-outcomes">
            <div className="outcome-column">
              <h4 className='set-out-text'>We introduced</h4>
              <p>User-friendly descriptions</p>
              <p>In-line Simple Instructions</p>
            </div>
            
            <div className="outcome-column">
              <h4 className='set-out-text'>So that we could</h4>
                <p className='solution-subtitle'>Add new, jargon-free explanations for each required document.</p>
                <p className='solution-subtitle'>Display samples for each required document at the point of upload.</p>
              
            </div>
            
            <div className="outcome-column highlight">
              <h4 className='set-out-text'>Which led to</h4>
              
                <p className='solution-subtitle'>Customers finding it easier to understand and gather the necessary documents.</p>
                <p className='solution-subtitle'>Reduced confusion and a sped-up document submission process.</p>
            
              
            </div>
          </div>
          
          <div className="solution-results">
            <p>The best user interfaces don't make users stop to figure things out. Our approach to simplifying document descriptions and providing sample documents embraced this philosophy, making the process as intuitive as possible.</p>
          </div>
        </div>
      </div>
      
      {/* Solution 3: Providing a Transparent Fee Structure */}
      <div className="solution-item">
        <h3 className="solution-item-title">
          <span className="solution-number">3.</span> Providing a Transparent Fee Structure
        </h3>
        
        <div className="solution-content">
        <div className="tiered-system-diagram">
            {/* <img src="/images/trans-fess.svg" alt="" onClick={() => openImageModal("/images/trans-fess.svg", "Tiered onboarding user interface")} /> */}
            <img 
            src={theme === 'dark' 
                ? "/images/trans-fess.svg"
                : "/images/trans-fess-white.svg"
            } 
            alt={`${project.title}`} 
            className="onboarding-image"
            onClick={() => openImageModal(theme === 'dark' ? "/images/trans-fess.svg" : "/images/trans-fess-white.svg", "Tiered onboarding user interface")}
            />
            <div className="tiered-system-image">
              <div 
                className="zoom-indicator"
                // onClick={() => openImageModal("/images/trans-fess.svg", "Tiered onboarding user interface")}
                onClick={() => openImageModal(theme === 'dark' ? "/images/trans-fess.svg" : "/images/trans-fess-white.svg", "Tiered onboarding user interface")}
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
          
          <div className="solution-outcomes">
            <div className="outcome-column">
              <h4 className='set-out-text'>We introduced</h4>
              <p>Clear fee breakdown</p>
              <p>Tiered Payments</p>
            </div>
            
            <div className="outcome-column">
              <h4 className='set-out-text'>So that we could</h4>
              <p className='solution-subtitle'>Clearly explain the purpose of each fee at the start of the onboarding process.</p>
              <p className='solution-subtitle'>Users made payments progressively as they completed each stage of onboarding.</p>
            </div>
            
            <div className="outcome-column highlight">
              <h4>Which led to</h4>
              <p className='solution-subtitle'>Customers making informed decisions and proceeding with confidence.</p>
              <p className='solution-subtitle'>Mitigated initial financial barrier and encouraged users to continue engaging with sign-up.</p>
            </div>
          </div>
          <div className="solution-results">
            <p>The best user interfaces don't make users stop to figure things out. Our approach to simplifying document descriptions and providing sample documents embraced this philosophy, making the process as intuitive as possible.</p>
          </div>
        </div>

        {/* Solution 4: Providing a Transparent Fee Structure */}   
        <div className="solution-item">
        <h3 className="solution-item-title">
          <span className="solution-number">4.</span> Developing the KYC Manager Tool
        </h3>
        
        <div className="solution-content">
        <div className="tiered-system-diagram">
            {/* <img src="/images/kyc-manage-img.svg" alt="" onClick={() => openImageModal("/images/kyc-manage-img.svg", "Tiered onboarding user interface")} /> */}
            <img 
            src={theme === 'dark' 
                ? "/images/kyc-manage-img.svg"
                : "/images/kyc-manage-img-white.svg"
            } 
            alt={`${project.title}`} 
            className="onboarding-image"
            onClick={() => openImageModal(theme === 'dark' ? "/images/kyc-manage-img.svg" : "/images/kyc-manage-img-white.svg", "Tiered onboarding user interface")}
            />
            <div className="tiered-system-image">
              <div 
                className="zoom-indicator"
                // onClick={() => openImageModal("/images/kyc-manage-img.svg", "Tiered onboarding user interface")}
                onClick={() => openImageModal(theme === 'dark' ? "/images/kyc-manage-img.svg" : "/images/kyc-manage-img-white.svg", "Tiered onboarding user interface")}

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
          
          <div className="solution-outcomes">
            <div className="outcome-column">
              <h4 className='set-out-text'>We introduced</h4>
              <p>KYC Management Portal (Admin app)</p>
              <p>Tiered Payments</p>
            </div>
            
            <div className="outcome-column">
              <h4 className='set-out-text'>So that we could</h4>
              <p className='solution-subtitle'>Aid relevant staff track and interact with onboarding applications.</p>
              <p className='solution-subtitle'>Users made payments progressively as they completed each stage of onboarding.</p>
            </div>
            
            <div className="outcome-column highlight">
              <h4>Which led to</h4>
              <p className='solution-subtitle'>This tool empowered account managers to resolve issues independently, reducing the need for engineering support.</p>
              <p className='solution-subtitle'>This approach mitigated the initial financial barrier and encouraged users to continue through the process.</p>
            </div>
          </div>
          <div className="solution-results">
            <p>Admins can now directly progress applications by tracking each customer’s application state, query issues for customers or members of staff to address, and directly upload additional documents received via other mediums on behalf of customers.</p>
            <p>This solution was a clear example of how collaboration across teams—legal, engineering, and account management—helped us deliver a user-centred approach that worked seamlessly.</p>
          </div>
        </div>
        </div>
      </div>
      <ImageModal 
        isOpen={modalImage !== null}
        imageUrl={modalImage?.url}
        altText={modalImage?.alt}
        onClose={closeImageModal}
      />
    </section>
  );
};

export default Solution;