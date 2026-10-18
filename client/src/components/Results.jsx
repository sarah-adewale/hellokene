// src/components/case-study/Results.jsx
import React, { useState } from 'react';
import ImageModal from '../components/ImageModal';
import { useTheme } from '../context/ThemeContext';
import CS180Table from './CS180Table';

const CS180_RESULTS = [
  { heading: 'Experience', cells: [
    { text: <>Easier{' '}<br />navigation</> },
    { text: <>Greater{' '}<br />purchase confidence</> },
    { text: <>Better understanding{' '}<br />of product differences</> },
  ] },
  { heading: 'Business', cells: [
    { text: '~15% monthly conversion growth' },
    { text: 'Improved campaign performance' },
    { text: 'Increased product discoverability' },
  ] },
  { heading: 'Operational', cells: [
    { text: <>Reusable{' '}<br />merchandising system</> },
    { text: <>Faster onboarding{' '}<br />of new products</> },
    { text: <>Better{' '}<br />content governance</> },
    { text: <>More consistent{' '}<br />promotional assets</> },
  ] },
];

const CS180_CHART = '/images/180by2-results-chart.webp';
const CS180_CHART_ALT = 'Product recommendation click rate, Q3 to Q4 2025: up for all five top products, from 14.2% to 20.1% for the Logitech MX Ink. A table below shows a 53% rise in click rate overall, with sessions up 62% and recommendations up 59%.';

const Results = ({ project }) => {
  const [modalImage, setModalImage] = useState(null);
  const { theme } = useTheme();

  const openImageModal = (imageUrl, altText) => {
    setModalImage({ url: imageUrl, alt: altText });
  };

  const closeImageModal = () => {
    setModalImage(null);
  };

  // Only show specific content for the Pivo project
  if (project.id !== 'pivo' && project.id !== 'nutch' && project.id !== '180by2') {
    return (
      <section className="case-study-section results">
        <h2>Results</h2>
        <p>The project delivered significant measurable improvements.</p>
      </section>
    );
  }

  return (
    <>
    {project.id === 'pivo' && (
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
    )}
    
    {project.id === 'nutch' && (
      <section className="case-study-section nutch-section">
        <h2 className="nutch-h">Product principles</h2>
        <p className="nutch-text">To craft designing around features, I established seven product principles that guided every decision. Rather than acting as broad statements, these became design constraints.</p>

        <div className="nutch-card-grid nutch-card-grid--3 nutch-principles">
          <div className="nutch-card"><h3 className="nutch-card-title">Be Clear, Not Clever</h3><p className="nutch-card-text">Interfaces should communicate instantly, not impress.</p></div>
          <div className="nutch-card"><h3 className="nutch-card-title">Extend, Don't Interrupt</h3><p className="nutch-card-text">Nutch should feel like another browser capability—not another application.</p></div>
          <div className="nutch-card"><h3 className="nutch-card-title">Speak the User's Language</h3><p className="nutch-card-text">Prompts should sound like natural questions, not prompt engineering</p></div>
          <div className="nutch-card"><h3 className="nutch-card-title">Feel Precise, Not Robotic</h3><p className="nutch-card-text">Interactions should feel accurate, responsive, and human.</p></div>
          <div className="nutch-card"><h3 className="nutch-card-title">Show What You're Doing (and Why)</h3><p className="nutch-card-text">Users should always understand what the system is processing.</p></div>
          <div className="nutch-card"><h3 className="nutch-card-title">Hide the Depth Until It's Needed</h3><p className="nutch-card-text">Start simple.{' '}<br />Reveal power progressively.</p></div>
          <div className="nutch-card"><h3 className="nutch-card-title">Work With the Web, Not Against It</h3><p className="nutch-card-text">Respect the browser instead of replacing it.</p></div>
        </div>

        <h2 className="nutch-h">Principles to product</h2>
        <p className="nutch-text">Every major feature exists because it solved a workflow problem.</p>

        <div className="nutch-feature">
          <img src={theme === 'light' ? "/images/sidebar-light1.svg" : "/images/sidebar-img.svg"} alt="" className="nutch-feature-img" />
          <div className="nutch-feature-body">
            <h3 className="nutch-feature-title">Sidebar</h3>
            <p className="nutch-feature-text">Rather than replacing the browser, the sidebar extends it, allowing users to work alongside the page instead of covering it.</p>
          </div>
        </div>

        <div className="nutch-feature">
          <img src={theme === 'light' ? "/images/selector-light2.svg" : "/images/selector-img.svg"} alt="" className="nutch-feature-img" />
          <div className="nutch-feature-body">
            <h3 className="nutch-feature-title">Selector</h3>
            <p className="nutch-feature-text">The selector became Nutch's defining interaction. Instead of describing what they need, users simply point to it.</p>
            <p className="nutch-feature-text">Whether it's a paragraph, image, chart, or block of code, Nutch understands the selected context before the conversation even begins.</p>
          </div>
        </div>

        <div className="nutch-feature">
          <img src={theme === 'light' ? "/images/model-light.svg" : "/images/model-img.svg"} alt="" className="nutch-feature-img" />
          <div className="nutch-feature-body">
            <h3 className="nutch-feature-title">Modal Flexibility</h3>
            <p className="nutch-feature-text">Different models excel at different tasks.</p>
            <p className="nutch-feature-text">Instead of locking users into a single provider, Nutch supports multiple models and allows users to connect accounts they already use.</p>
          </div>
        </div>

        <div className="nutch-feature">
          <img src={theme === 'light' ? "/images/conversation-light.svg" : "/images/conversations-img.svg"} alt="" className="nutch-feature-img" />
          <div className="nutch-feature-body">
            <h3 className="nutch-feature-title">Conversations as knowledge</h3>
            <p className="nutch-feature-text">AI conversations often become reference material.</p>
            <p className="nutch-feature-text">Rather than treating them as temporary chats, Nutch stores conversations and generated files so users can easily revisit previous work.</p>
          </div>
        </div>

        <h2 className="nutch-h">Designing for AI</h2>
        <div className="nutch-text-group">
          <p className="nutch-text">Nutch wasn't simply designed with AI. It was designed for AI. That meant thinking beyond interfaces and considering how AI should behave inside an existing workflow.</p>
          <p className="nutch-text">Design decisions included:</p>
        </div>

        <div className="nutch-card-grid nutch-card-grid--3 nutch-decisions">
          <div className="nutch-card">
            <div className="nutch-decision-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 20h9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <p className="nutch-decision-text">Editable prompts{' '}<br />instead of hidden automation</p>
          </div>
          <div className="nutch-card">
            <div className="nutch-decision-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="3.5" y="5" width="17" height="14" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M11 9H8V12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M13 15H16V12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <p className="nutch-decision-text">Context-first interactions{' '}<br />instead of blank input fields</p>
          </div>
          <div className="nutch-card">
            <div className="nutch-decision-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 7h9M11 12h9M11 17h9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M3.5 6.5l1.5 1.5L8 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3.5 16.5l1.5 1.5L8 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <p className="nutch-decision-text">Transparent{' '}<br />model selection</p>
          </div>
          <div className="nutch-card">
            <div className="nutch-decision-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 3l9 5-9 5-9-5 9-5z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3 13l9 5 9-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <p className="nutch-decision-text">Progressive disclosure{' '}<br />of advanced capabilities</p>
          </div>
          <div className="nutch-card">
            <div className="nutch-decision-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="4" y="5" width="16" height="14" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M9 5v14" stroke="currentColor" strokeWidth="1.5"/>
              </svg>
            </div>
            <p className="nutch-decision-text">Organized chat history{' '}<br />and generated files</p>
          </div>
          <div className="nutch-card">
            <div className="nutch-decision-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 3l-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M18.5 5.5l2 2-3 3-2-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M15.5 8.5l-5.09 5.09a5 5 0 1 1-1.999-1.999L13.5 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <p className="nutch-decision-text">Bring Your Own Key (BYOK){' '}<br />to support users' existing AI subscriptions while reducing platform dependency</p>
          </div>
        </div>

        <p className="nutch-emphasis-light">Every decision balanced user experience, technical feasibility, and long-term scalability.</p>
      </section>
    )}
    {/* 180by2 results. Styles are the cs180-* block in CaseStudy.css. */}
    {project.id === '180by2' && (
      <section className="cs180 cs180--compact cs180-results">
        <h2 className="cs180-h">Results</h2>
        <CS180Table groups={CS180_RESULTS} />
        {/* Scrolls sideways on phones so the figures stay readable */}
        <div className="cs180-chart">
          <img src={CS180_CHART} alt={CS180_CHART_ALT} loading="lazy" decoding="async" />
        </div>
      </section>
    )}
    </>
  );

};

export default Results;