// src/components/case-study/Challenge.jsx
import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';

const Challenge = ({ project }) => {
  const { theme, toggleTheme } = useTheme();
  const [modalImage, setModalImage] = useState(null);

  const openImageModal = (imageUrl, altText) => {
    setModalImage({ url: imageUrl, alt: altText });
  };

  const closeImageModal = () => {
    setModalImage(null);
  };
  // Only show specific content for the Pivo project
  if (project.id !== 'pivo') {
    return (
      <section className="case-study-section challenge">
        <h2>The Challenge</h2>
        <p>Every project has unique challenges that needed to be addressed.</p>
      </section>
    );
  }

  return (
    <section className="case-study-section challenge">
      <h2 className="challenge-title">The Challenge: Navigating Initial Friction</h2>
      
      <div className="challenge-intro">
        <p>
          As our team set out to tackle the month's priorities, it became clear that scaling customer onboarding was our most pressing challenge. This was our first major update post-MVP (Minimum Viable Product), and we had accumulated a wealth of feedback from various stakeholders—customers, account managers, and marketing data.
        </p>
        <p className="pain-points-intro">We identified these key pain points</p>
      </div>
      
      <div className="pain-points-grid">
        {/* Document Overload */}
        <div className="pain-point-item">
          <div className="">
          <img 
            src={theme === 'dark' 
                ? "/images/pivo-screen1.svg"
                : "/images/pivo-screen1-white.svg"
            } 
            alt={`${project.title} onboarding process`} 
            className="pain-point-img1"
            />
           
          </div>
          <div className="pain-point-content">
            <h3>Document Overload</h3>
            <p>Regulatory requirements mandated a long list of documents for account opening.</p>
            
            <div className="impact-tag churn">
              <span>Churn trigger</span>
            </div>
            <p className="impact-description">
              Customers didn't always have the required documents on hand which led them to either skip the registration or drop-off altogether
            </p>
          </div>
        </div>
        
        {/* Account creation fees */}
        <div className="pain-point-item">
          <div className="">
          <img 
            src={theme === 'dark' 
                ? "/images/pivo-screen2.svg"
                : "/images/pivo-screen-white2.svg"
            } 
            alt={`${project.title} onboarding process`} 
            className="pain-point-img1"
            />
           
          </div>
          <div className="pain-point-content">
            <h3>Account creation fees</h3>
            <p>Fees associated with onboarding were not clearly communicated to the customer at the start</p>
            
            <div className="impact-tag trust">
              <span>Trust Barrier</span>
            </div>
            <p className="impact-description">
              Customers hesitated to complete the process as the costs raised questions due to unfamiliarity with requirements and the lack of forward information
            </p>
          </div>
        </div>
        
        {/* Inflexible Form Completion */}
        <div className="pain-point-item">
          <div className="">
          <img 
            src={theme === 'dark' 
                ? "/images/pivo-screen-4.svg"
                : "/images/pivo-screen-white4.svg"
            } 
            alt={`Form with terms and conditions`} 
            className="pain-point-img1"
            />
            {/* <img src="/images/pivo-screen-4.svg" alt="Form with terms and conditions" /> */}
          </div>
          <div className="pain-point-content">
            <h3>Inflexible Form Completion</h3>
            <p>Users were required to fill out the onboarding form in a single session.</p>
            
            <div className="impact-tag frustration">
              <span>Frustration</span>
            </div>
            <p className="impact-description">
              Without all necessary information or documents on hand, many users abandoned the process.
            </p>
          </div>
        </div>
        
        {/* Lack of Document Awareness */}
        <div className="pain-point-item">
          <div className="">
          <img 
            src={theme === 'dark' 
                ? "/images/pivo-screen5.svg"
                : "/images/pivo-screen5-shite.svg"
            } 
            alt="Document upload interface for meeting minutes" 
            className="pain-point-img1"
            />
          </div>
          <div className="pain-point-content">
            <h3>Lack of Document Awareness</h3>
            <p>Customers often didn't recognise or know how to obtain the required documents.</p>
            
            <div className="impact-tag confusion">
              <span>Confusion</span>
            </div>
            <p className="impact-description">
              This led to delays and increased support requests.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Challenge;