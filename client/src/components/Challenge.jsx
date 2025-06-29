// src/components/case-study/Challenge.jsx
import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import ImageModal from './ImageModal';
import { Link } from 'react-router-dom';

const Challenge = ({ project }) => {
  const { theme } = useTheme();
  const [modalImage, setModalImage] = useState(null);

  const openImageModal = (imageUrl, altText) => {
    setModalImage({ url: imageUrl, alt: altText });
  };

  const closeImageModal = () => {
    setModalImage(null);
  };
  // Only show specific content for the Pivo project
  if (project.id !== 'pivo' && project.id !== 'portfolio') {
    return (
      <section className="case-study-section challenge">
        <h2>The Challenge</h2>
        <p>Every project has unique challenges that needed to be addressed.</p>
      </section>
    );
  }

  return (
    <>
    {project.id === 'pivo' && (
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
    )}
    {project.id === 'portfolio' && (
      <>
      <div className='research-section'>
        <div>
          <p className='research-section-title'>Research & validation</p>
          <p className='research-section-text'>I began by establishing the target audience for research, setting the following criteria according to the established goals and KPIs. In addition to myself, as the primary user, an ideal 3rd party user, is someone who</p>
          <ul className='research-section-text'>
              <li>is hiring for a full-time or contract role now or in the future</li> 
              <li>sources talent for people looking to hire now or in the future</li> 
              <li>works on a team looking to hire now or in the future</li> 
              <li>knows someone who  looking to hire now or in the future</li> 
          </ul>
          <p className='research-section-text'>Five (5) professionals within the tech ecosystem who met the requirements detailed in this criteria, agreed to participate and  provided insight into their needs, wants, fears, behaviours and motivations when assessing a designer’s portfolio. </p>
        </div>
        <div className='research-section-footer'>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M11.25 11.25H12V16.5H12.75" fill="currentColor"/>
            <path d="M11.25 11.25H12V16.5H12.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M11.8125 6.79688C12.4079 6.79688 12.8906 7.27957 12.8906 7.875C12.8906 8.47043 12.4079 8.95312 11.8125 8.95312C11.2171 8.95312 10.7344 8.47043 10.7344 7.875C10.7344 7.27957 11.2171 6.79688 11.8125 6.79688Z" fill="currentColor" stroke="currentColor" stroke-width="0.09375"/>
          </svg>

          <p className='research-section-text-secondary'> I opted NOT to run a comparative analysis on the existing website at the start, because I wanted to understand them and their needs objectively, avoiding any suggestive bias my existing portfolio might encourage.</p>
        </div>
      </div>
      <div className='research-findings-section'>
        <p className='research-findings-title'>Research findings</p>
        <div className='tiered-system-diagram'>
        <img 
            src={theme === 'dark' 
                ? "/images/research-img.svg"
                : "/images/research-img.svg"
            } 
            alt={`${project.title}`} 
            className="onboarding-image"
            onClick={() => openImageModal(theme === 'dark' ? "/images/research-img.svg" : "/images/research-img.svg", "Tiered onboarding user interface")}
            />
            <div className="tiered-system-image">
              <div 
                className="zoom-indicator"
                onClick={() => openImageModal(theme === 'dark' ? "/images/research-img.svg" : "/images/research-img.svg", "Tiered onboarding user interface")}

              >
                {theme === 'dark' ? (
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

                <span className='zoom-indicator-btn-text'>Tap to enlarge</span>
              </div>
            </div>
        </div>
        
        <p className='research-findings-secondary-text'>Analysing the results, I deduced that there was a common need to see a portfolio that is easy to read and instantly communicates a high level of creativity, expertise, attention to detail, and a clear understanding of what it takes to build products that work. </p>
      </div>
      <div className='user-persona-section'>
        <p className='research-findings-title'>User personas</p>
        <p className='research-findings-secondary-text'>Using the findings and resulting analysis, I was able to build the following user personas who accurately represent the target audience and addresses their expansive needs and frustrations.</p>
        <div className='user-persona-img-section'>
          {theme === "dark" ? (
            <img src="/images/ada-user-persona.svg" alt="" />
          ): (
            <img src="/images/ada-user-persona-white.svg" alt="" />
          )}
          {/* <img src="/images/ada-user-persona.svg" alt="" /> */}
          {theme === "dark" ? (
            <img src="/images/charles-user-persona.svg" alt="" />
          ): (
            <img src="/images/charles-user-persona-white.svg" alt="" />
          )}
          {theme === "dark" ? (
             <img src="/images/emma-user-persona.svg" alt="" />
          ): (
            <img src="/images/emma-user-persona-white.svg" alt="" />
          )}
         
        </div>

        {/* mobile view */}

        <div className='user-persona-img-section-mobile' style={{display: '1px solid red'}}>
          {theme === "dark" ? (
            <img src="/images/ada-user-persona-mobile.svg" alt="" />
          ): (
            <img src="/images/ada-user-persona-white.svg" alt="" />
          )}
          {theme === "dark" ? (
            <img src="/images/charles-user-persona-mobile.svg" alt="" />
          ): (
            <img src="/images/charles-user-persona-white.svg" alt="" />
          )}
          {theme === "dark" ? (
             <img src="/images/emma-user-persona-mobile.svg" alt="" />
          ): (
            <img src="/images/emma-user-persona-white.svg" alt="" />
          )}
         
        </div>
      </div>
      <div className='competitor-section'>
        <p className='research-findings-title'>Competitor research</p>
        <p className='research-findings-secondary-text'>I took some time to discover the latest trends in website and portfolio design, identifying the most captivating and efficient presentations achievable. These were the top inspirations that covered my moodboard</p>
        <div className='competitor-image-section'>
          {theme === 'dark' ? (
            <Link to='#'><img src="/images/competitor1.svg" alt="" /></Link> 
          ): (
            <Link to='#'><img src="/images/competitor1-white.svg" alt="" /></Link> 
          )}
          {theme === "dark" ? (
            <Link to='https://www.fey.com/'><img src="/images/competitor2.svg" alt="" /></Link> 
          ) : (
            <Link to='https://www.fey.com/'><img src="/images/competitor2-white.svg" alt="" /></Link> 
          )}
          {theme === "dark" ? (
            <Link to=''><img src="/images/competitor3.svg" alt="" /></Link>
          ): (
            <Link to=''><img src="/images/competitor3-white.svg" alt="" /></Link>
          )}
           
        </div>
      </div>
      <div className='design-assessment-section'>
        <p className='research-section-title'>Existing design assessment</p>
        <p className='research-findings-secondary-text'>As with every re-design, it was important to highlight the aspects of the existing design that worked, those that required improvement and those that didn’t work. Along with my own heuristic evaluation, I ran another user testing session with my contributors to map out these points and distribute them in the figure below</p>
        <div className='tiered-system-diagram'>
          {theme === "dark" ? (
            <img src="/images/assessment-table.svg" alt="" />
          ):(
            <img src="/images/assessment-table-white.svg" alt="" />
          )}
          
        </div>
        {/* mobile */}
        <div className='tiered-system-diagram-mobile'>
          {theme === "dark" ? (
            <img src="/images/assessment-table-mobile.svg" alt="" />
          ):(
            <img src="/images/assessment-table-white.svg" alt="" />
          )}
          
        </div>
      </div>
      <div className='design-assessment-footer'>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M11.25 11.25H12V16.5H12.75" fill="currentColor"/>
          <path d="M11.25 11.25H12V16.5H12.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M11.8125 6.79688C12.4079 6.79688 12.8906 7.27957 12.8906 7.875C12.8906 8.47043 12.4079 8.95312 11.8125 8.95312C11.2171 8.95312 10.7344 8.47043 10.7344 7.875C10.7344 7.27957 11.2171 6.79688 11.8125 6.79688Z" fill="currentColor" stroke="currentColor" stroke-width="0.09375"/>
        </svg>
        <p className='design-assessment-footer-text'>To get a look at the previous design, visit <a className='design-assessment-footer-link' href="https://hellokene.netlify.app/">hellokene.netlify.app</a></p>
      </div>
      <ImageModal 
        isOpen={modalImage !== null}
        imageUrl={modalImage?.url}
        altText={modalImage?.alt}
        onClose={closeImageModal}
      />
      </>
    )}
    </>
  );
};

export default Challenge;