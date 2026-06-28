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
  if (project.id !== 'pivo' && project.id !== 'portfolio' && project.id !== 'nutch') {
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
        <div className='tiered-system-diagram tiered-system-diagram-assessment-table'>
          {theme === "dark" ? (
            <img src="/images/assessment-table.svg" alt="" />
          ):(
            <img src="/images/assessment-table-white.svg" alt="" />
          )}
          
        </div>
        {/* mobile */}
        <div className='tiered-system-diagram-mobile '>
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
    {project.id === 'nutch' && (
      <section className="case-study-section nutch-section">
        <h2 className="nutch-h">The Challenge</h2>
        <div className="nutch-text-group">
          <p className="nutch-text">Existing AI tools interrupt the very workflows they're designed to improve.</p>
          <p className="nutch-text">Every interaction requires users to rebuild context before the AI can help, which introduces unnecessary friction into tasks that should feel native. The challenge wasn't simply to build another browser extension.</p>
          <p className="nutch-text">It was to design an experience that understands context without asking users to recreate it.</p>
        </div>

        <div className="nutch-screens">
          <img
            src={theme === 'light' ? "/images/challenge-img1.svg" : "/images/the-challenge-card1.svg"}
            alt="Today, you must provide context as artifacts from your place of focus"
            className="nutch-screen-img"
          />
          <img
            src={theme === 'light' ? "/images/challenge-img2.svg" : "/images/the-challenge-cards2.svg"}
            alt="This on-demand model means more explaining and less getting things done"
            className="nutch-screen-img"
          />
        </div>

        <h2 className="nutch-h">The opportunity</h2>
        <div className="nutch-text-group">
          <p className="nutch-text">Rather than starting with features, I studied how people actually worked with AI.</p>
          <div className="nutch-explore-row">
            <p className="nutch-text">I explored a few interesting products.</p>
            <div className="nutch-product-stack">
              <span className="nutch-product-item" data-label="ChatGPT">
              <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="2" width="50" height="50" rx="25" fill="#232327" className="nutch-icon-bg"/>
                <rect x="2" y="2" width="50" height="50" rx="25" stroke="#0B0A0F" strokeWidth="4" className="nutch-icon-ring"/>
                <g clipPath="url(#clip0_7799_23372)">
                  <path d="M11.0063 18.6813C11.0063 14.4375 14.4438 11 18.6876 11H35.3063C39.5501 11 42.9876 14.4375 42.9876 18.6813V43H18.6876C14.4438 43 11.0063 39.5625 11.0063 35.3188V18.6813Z" fill="#74AA9C"/>
                  <path d="M37.3126 24.7938L37.3063 24.7875C37.8376 23.15 37.6438 21.3625 36.7813 19.8813C35.4626 17.6 32.8251 16.4188 30.2501 16.9625L30.2438 16.9688C29.0938 15.6875 27.4501 14.9625 25.7313 14.9688C23.0938 14.9688 20.7563 16.6625 19.9438 19.1625V19.175C18.2626 19.5313 16.8126 20.5938 15.9563 22.0875C14.6313 24.3625 14.9251 27.2375 16.6876 29.1938L16.6938 29.2C16.1626 30.8375 16.3563 32.625 17.2188 34.1063C18.5376 36.3875 21.1751 37.5688 23.7501 37.025L23.7563 37.0188C24.9063 38.3 26.5501 39.025 28.2688 39.0188C30.9063 39.0188 33.2438 37.325 34.0563 34.825V34.8125C35.7376 34.4563 37.1876 33.3938 38.0438 31.9C39.3688 29.625 39.0751 26.75 37.3126 24.7938ZM29.3813 28.3688L27.0001 29.7438L24.6188 28.3688V25.6188L27.0001 24.2438L29.3813 25.6188V28.3688ZM35.4251 20.6563H35.4126C35.9376 21.5688 36.1313 22.6313 35.9563 23.6688L31.0376 20.8313C30.9813 20.8 30.9251 20.775 30.8626 20.7563C30.6563 20.6875 30.4251 20.7125 30.2313 20.8313L24.6188 24.075V21.7063L29.2563 19.025C29.7063 18.7625 30.1938 18.5875 30.7001 18.4938L30.6938 18.4813C32.5188 18.1438 34.4376 18.9625 35.4251 20.6563ZM25.7251 16.5313L25.7188 16.5375C26.7751 16.5375 27.7876 16.9 28.6001 17.5688L23.6876 20.4125C23.6313 20.4438 23.5813 20.4813 23.5376 20.525C23.3751 20.6688 23.2813 20.8813 23.2813 21.1125V27.5938L21.2313 26.4125V21.0563C21.2313 20.5375 21.3188 20.025 21.4938 19.5438L21.4813 19.5375C22.0938 17.7875 23.7626 16.5313 25.7251 16.5313ZM17.3001 22.8625V22.875C17.8251 21.9625 18.6501 21.2625 19.6376 20.8938V26.575C19.6376 26.6375 19.6438 26.7 19.6626 26.7625C19.7063 26.975 19.8438 27.1625 20.0438 27.275L25.6563 30.5188L23.6063 31.7063L18.9688 29.0313C18.5188 28.775 18.1188 28.4375 17.7876 28.0438L17.7751 28.0563C16.5751 26.6375 16.3251 24.5688 17.3001 22.8625ZM18.5751 33.325H18.5876C18.0626 32.4125 17.8688 31.35 18.0438 30.3125L22.9626 33.15C23.0188 33.1813 23.0751 33.2063 23.1376 33.225C23.3438 33.2938 23.5751 33.2688 23.7688 33.15L29.3813 29.9063V32.275L24.7438 34.9563C24.2938 35.2188 23.8063 35.3938 23.3001 35.4875L23.3063 35.5C21.4813 35.8438 19.5626 35.025 18.5751 33.325ZM28.2751 37.4563L28.2813 37.45C27.2251 37.45 26.2126 37.0875 25.4001 36.4188L30.3188 33.5813C30.3751 33.55 30.4251 33.5125 30.4688 33.4688C30.6313 33.325 30.7251 33.1125 30.7251 32.8813V26.3938L32.7751 27.575V32.9313C32.7751 33.45 32.6876 33.9625 32.5126 34.4438L32.5251 34.45C31.9063 36.2 30.2376 37.4563 28.2751 37.4563ZM36.7001 31.125V31.1125C36.1751 32.025 35.3501 32.725 34.3626 33.0938V27.4125C34.3626 27.35 34.3563 27.2875 34.3376 27.225C34.2938 27.0125 34.1563 26.825 33.9563 26.7125L28.3438 23.4688L30.3938 22.2813L35.0313 24.9563C35.4813 25.2125 35.8813 25.55 36.2126 25.9438L36.2251 25.9313C37.4251 27.35 37.6751 29.4188 36.7001 31.125Z" fill="white"/>
                </g>
                <defs>
                  <clipPath id="clip0_7799_23372">
                    <rect x="11" y="11" width="32" height="32" rx="16" fill="white"/>
                  </clipPath>
                </defs>
              </svg>
              </span>
              <span className="nutch-product-item" data-label="Claude">
              <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="2" width="50" height="50" rx="25" fill="#232327" className="nutch-icon-bg"/>
                <rect x="2" y="2" width="50" height="50" rx="25" stroke="#0B0A0F" strokeWidth="4" className="nutch-icon-ring"/>
                <path d="M39.7502 23.96L40.7302 24.52V24.938L40.4502 25.916L28.5762 28.71L27.4602 25.936L39.7502 23.96Z" fill="#FF7043"/>
                <path d="M35.3099 15.7461L36.6759 16.0321L37.0399 16.4801L37.3859 17.5501L37.2419 18.2341L29.2759 29.1281L26.6199 26.4741L33.9659 16.8341L35.3099 15.7461Z" fill="#FF7043"/>
                <path d="M28.4381 14.0439L29.2761 13.4839L29.9741 13.7639L30.6721 14.7439L28.7581 26.2399L27.4581 25.3579L26.9001 23.8199L27.8801 15.1599L28.4381 14.0439Z" fill="#FF7043"/>
                <path d="M19.478 14.228L20.338 13.128L20.9 13L22.016 13.162L22.566 13.594L26.574 22.478L28.022 26.698L26.326 27.64L19.864 15.912L19.478 14.228Z" fill="#FF7043"/>
                <path d="M15.3078 20.3299L15.0278 19.2099L15.8678 18.2339L16.8438 18.3739H17.1238L22.9898 22.7039L24.8058 24.0999L27.3198 26.0559L25.9238 28.4299L24.6658 27.4519L23.8278 26.6139L15.7278 20.8879L15.3078 20.3299Z" fill="#FF7043"/>
                <path d="M13.632 27.5917L13 26.8917V26.2717L13.632 26.0557L20.756 26.4757L27.738 27.0337L27.512 28.4237L14.192 27.7317L13.632 27.5917Z" fill="#FF7043"/>
                <path d="M17.8219 34.862H16.4259L15.8699 34.222V33.458L18.2419 31.782L27.8819 25.646L28.8559 27.312L17.8219 34.862Z" fill="#FF7043"/>
                <path d="M20.4761 38.766L19.9161 38.906L19.0801 38.486L19.2201 37.786L27.4601 26.894L28.5761 28.43L22.4321 36.53L20.4761 38.766Z" fill="#FF7043"/>
                <path d="M27.46 40.162L27.04 40.722L26.202 41.002L25.504 40.442L25.084 39.602L27.18 28.292L28.438 28.432L27.46 40.162Z" fill="#FF7043"/>
                <path d="M34.5818 37.0899V38.2059L34.4418 38.6259L33.8838 38.9059L32.9058 38.7739L26.1938 28.7819L28.8558 26.7539L31.0898 30.8039L31.2998 32.2699L34.5818 37.0899Z" fill="#FF7043"/>
                <path d="M37.7961 35.4142L37.9361 36.1122L37.5161 36.6702L37.0961 36.5302L34.7221 34.8542L31.0921 31.6422L28.2981 29.6862L29.1361 27.0342L30.5321 27.8722L31.3721 29.4082L37.7961 35.4142Z" fill="#FF7043"/>
                <path d="M35.9801 28.2898L39.4721 28.5698L40.3101 29.1298L40.8681 29.9658V30.5698L39.3321 31.2238L31.5101 29.2678L28.2981 29.1278L29.1361 26.1958L31.3701 27.8718L35.9801 28.2898Z" fill="#FF7043"/>
              </svg>
              </span>
              <span className="nutch-product-item" data-label="Monica AI">
              <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="2" width="50" height="50" rx="25" fill="#232327" className="nutch-icon-bg"/>
                <rect x="2" y="2" width="50" height="50" rx="25" stroke="#0B0A0F" strokeWidth="4" className="nutch-icon-ring"/>
                <path d="M27.0001 41.3332C34.9162 41.3332 41.3334 34.9159 41.3334 26.9998C41.3334 19.0838 34.9162 12.6665 27.0001 12.6665C19.084 12.6665 12.6667 19.0838 12.6667 26.9998C12.6667 34.9159 19.084 41.3332 27.0001 41.3332Z" fill="url(#paint0_linear_7815_56479)"/>
                <path d="M27.0033 36.5435C33.0767 36.5435 38 32.2709 38 27.0002V26.9975C37.9987 21.7275 33.0747 17.4562 27.0013 17.4575H26.9967C20.9233 17.4575 16 21.7295 16 27.0002V27.0062C16.004 32.2769 20.93 36.5469 27.0033 36.5435Z" fill="#D9D9D9"/>
                <path d="M33.0421 25.1669L30.3695 27.8602L33.8575 30.0169M22.1201 24.9922V30.2002" stroke="#0B0A0F" strokeWidth="1.5" className="nutch-icon-line" strokeLinecap="round" strokeLinejoin="round"/>
                <defs>
                  <linearGradient id="paint0_linear_7815_56479" x1="27.0001" y1="12.6665" x2="27.0001" y2="41.3332" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#9143FF"/>
                    <stop offset="1" stopColor="#1749FF"/>
                  </linearGradient>
                </defs>
              </svg>
              </span>
              <span className="nutch-product-item" data-label="Raycast">
              <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="2" width="50" height="50" rx="25" fill="#232327" className="nutch-icon-bg"/>
                <rect x="2" y="2" width="50" height="50" rx="25" stroke="#0B0A0F" strokeWidth="4" className="nutch-icon-ring"/>
                <g clipPath="url(#clip0_7799_23475)">
                  <path fillRule="evenodd" clipRule="evenodd" d="M19.0063 31.6562V34.9937L11 26.9875L12.675 25.3188L19.0063 31.6562ZM22.3438 34.9937H19.0063L27.0125 43L28.6812 41.3312L22.3438 34.9937ZM41.3312 28.6625L43 26.9937L27.0063 11L25.3375 12.6688L31.6562 19H27.8375L23.425 14.5938L21.75 16.2562L24.5 19.0063H22.5875V31.4188H35V29.5063L37.75 32.2563L39.4188 30.5875L35 26.1625V22.3438L41.3312 28.6625ZM19.8375 18.1625L18.1687 19.8313L19.9563 21.6187L21.625 19.95L19.8375 18.1625ZM34.0438 32.3687L32.3813 34.0375L34.1688 35.825L35.8375 34.1562L34.0438 32.3687ZM16.2562 21.7437L14.5875 23.4125L19.0063 27.8312V24.4875L16.2562 21.7437ZM29.5063 34.9937H26.1687L30.5875 39.4125L32.2563 37.7437L29.5063 34.9937Z" fill="#FF6363"/>
                </g>
                <defs>
                  <clipPath id="clip0_7799_23475">
                    <rect x="11" y="11" width="32" height="32" rx="6.85714" fill="white"/>
                  </clipPath>
                </defs>
              </svg>
              </span>
              <span className="nutch-product-item" data-label="Arc">
              <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="2" width="50" height="50" rx="25" fill="#232327" className="nutch-icon-bg"/>
                <rect x="2" y="2" width="50" height="50" rx="25" stroke="#0B0A0F" strokeWidth="4" className="nutch-icon-ring"/>
                <g clipPath="url(#clip0_7799_23500)">
                  <path d="M29.0668 11.0018C31.0885 11.0599 32.9144 12.2467 33.7893 14.0833L37.2613 21.3868L37.3171 21.2457C37.4549 20.8816 37.5679 20.5087 37.6554 20.1294L37.7039 19.9032C38.2889 16.9779 41.1322 15.0846 44.0629 15.6634C44.759 15.8024 45.4209 16.0772 46.0108 16.4721C46.6007 16.867 47.1069 17.3742 47.5007 17.9649C47.8945 18.5555 48.168 19.2179 48.3056 19.9143C48.4433 20.6106 48.4424 21.3273 48.303 22.0233C47.5232 25.9177 45.5129 29.5319 42.6294 32.3953L42.5381 32.484L43.7552 35.0431C45.1679 38.0137 43.7042 41.6043 40.6283 42.6119L40.4895 42.6553L40.3835 42.6873C39.9129 42.8198 39.4263 42.8873 38.9374 42.8879C37.9152 42.888 36.914 42.5984 36.0497 42.0527C35.1854 41.507 34.4935 40.7274 34.0541 39.8045L33.1146 37.8293L32.8776 37.888C31.6075 38.1882 30.3193 38.3544 29.0305 38.38L28.6791 38.3835C27.4389 38.3835 26.1782 38.2393 24.9186 37.9598L24.6702 37.9019L23.7676 39.7996C23.1591 41.0792 22.0722 42.0684 20.7411 42.5542L20.5804 42.61C19.8871 42.8386 19.1547 42.9244 18.4274 42.862C17.7001 42.7996 16.993 42.5904 16.3488 42.247C13.7829 40.8832 12.8045 37.6902 14.0564 35.0529L15.1772 32.6961L15.0793 32.6012C13.5428 31.0855 12.3248 29.3627 11.5168 27.5108L11.4091 27.2576L11.3936 27.2165C10.2815 24.4514 11.617 21.3039 14.3804 20.185C16.5479 19.3076 18.9507 19.9376 20.4282 21.5845L20.456 21.6164L24.028 14.1027C24.4515 13.1977 25.1184 12.4283 25.9542 11.8806C26.7899 11.3329 27.7615 11.0285 28.7604 11.0015L28.9116 11L29.0668 11.0018Z" fill="white"/>
                  <path d="M23.7314 35.8465L26.9308 29.1151C24.4871 28.5961 22.0284 27.0845 20.6378 25.2456L17.2922 32.279C19.1513 33.8561 21.3834 35.0958 23.7314 35.8465Z" fill="#1A007F"/>
                  <path d="M37.0833 25.0444C35.476 27.0146 33.244 28.4757 30.8557 29.045L34.045 35.7563C36.3729 34.9701 38.5494 33.7005 40.429 32.0732L37.0833 25.0444Z" fill="#4E000A"/>
                  <path d="M17.2921 32.2794L15.6193 35.7964C14.7678 37.585 15.4076 39.7869 17.161 40.719C19.0203 41.7064 21.3077 40.9357 22.2046 39.0561L23.7313 35.8468C21.3737 35.0868 19.1866 33.8752 17.2921 32.2794Z" fill="#1A007F"/>
                  <path d="M43.7239 17.3654C43.2508 17.2707 42.7637 17.2701 42.2904 17.3637C41.8171 17.4573 41.3669 17.6432 40.9654 17.9108C40.564 18.1784 40.2192 18.5225 39.9508 18.9234C39.6823 19.3243 39.4955 19.7742 39.401 20.2473C39.0483 22.011 38.222 23.6534 37.0833 25.0491L40.4238 32.0828C43.5074 29.4074 45.7846 25.7646 46.601 21.6884C46.999 19.6931 45.7091 17.7583 43.7239 17.3654Z" fill="#FF9396"/>
                  <path d="M30.8558 29.0447C30.1404 29.216 29.4098 29.3067 28.6792 29.3067C28.1099 29.3067 27.5205 29.2412 26.9309 29.1153C24.4872 28.5963 22.0284 27.0847 20.6378 25.2458C20.2901 24.7872 20.0081 24.3086 19.8115 23.8198C19.0507 21.9404 16.9093 21.0336 15.0299 21.7893C13.1506 22.5502 12.2439 24.6915 12.9995 26.5708C13.861 28.707 15.3827 30.6671 17.2923 32.2793C19.1851 33.8748 21.3704 35.0865 23.7263 35.8467C25.3437 36.3655 27.0215 36.6528 28.6742 36.6528C30.5081 36.6528 32.3169 36.3353 34.0401 35.7559L30.8558 29.0447Z" fill="#002DC8"/>
                  <path d="M42.1873 35.7809L40.4239 32.0727L37.0834 25.044L37.0784 25.0491C37.0784 25.0491 37.0784 25.044 37.0834 25.044L32.2264 14.8259C31.9283 14.199 31.4586 13.6693 30.8718 13.2984C30.285 12.9274 29.6052 12.7304 28.9109 12.73C27.4951 12.73 26.2053 13.5462 25.5957 14.8261L20.6428 25.2456C22.0334 27.0845 24.4922 28.5961 26.9359 29.1151L28.5381 25.7495C28.6893 25.4319 29.1427 25.4319 29.2939 25.7495L30.8609 29.0446H30.871H30.8608L34.0502 35.7558L35.6172 39.0509C35.9151 39.6791 36.3854 40.2096 36.9732 40.5807C37.5611 40.9518 38.2423 41.1482 38.9375 41.147C39.2651 41.147 39.5925 41.1017 39.915 41.011C42.1269 40.4012 43.1749 37.8568 42.1873 35.7809Z" fill="#FF536A"/>
                </g>
                <defs>
                  <clipPath id="clip0_7799_23500">
                    <rect x="11" y="11" width="37.41" height="32" rx="6.85714" fill="white"/>
                  </clipPath>
                </defs>
              </svg>
              </span>
              <span className="nutch-product-item" data-label="Copilot">
              <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="2" width="50" height="50" rx="25" fill="#232327" className="nutch-icon-bg"/>
                <rect x="2" y="2" width="50" height="50" rx="25" stroke="#0B0A0F" strokeWidth="4" className="nutch-icon-ring"/>
                <path d="M42.8673 33.6685C41.7207 35.6605 35.0633 40.3598 26.9873 40.3598C18.9113 40.3598 12.254 35.6605 11.1073 33.6685C11.0428 33.5518 11.0061 33.4217 11 33.2885V29.5452C11.0076 29.4314 11.032 29.3207 11.0733 29.2132C11.5693 27.9685 12.868 26.1598 14.544 25.6745C14.766 25.1045 15.0947 24.2705 15.402 23.6552C15.3527 23.1743 15.3295 22.6912 15.3327 22.2078C15.3327 20.4352 15.708 18.8798 16.8407 17.7218C17.3693 17.1812 18.0253 16.7665 18.804 16.4545C20.668 14.9405 23.322 13.6665 26.9587 13.6665C30.5953 13.6665 33.3073 14.9405 35.1713 16.4545C35.9493 16.7665 36.6053 17.1812 37.134 17.7218C38.2667 18.8798 38.6427 20.4352 38.6427 22.2078C38.6427 22.6985 38.6247 23.1845 38.5727 23.6552C38.88 24.2705 39.2087 25.1045 39.4313 25.6745C41.1067 26.1598 42.4053 27.9685 42.9013 29.2132C42.9553 29.3498 42.978 29.4958 42.978 29.6432V33.1885C42.978 33.3565 42.9513 33.5232 42.8673 33.6685ZM27.2167 25.6872H26.758C26.6171 25.9241 26.4592 26.1505 26.2853 26.3645C25.2607 27.6258 23.73 28.3512 21.6133 28.3512C19.3153 28.3512 17.632 27.8732 16.5753 26.6752C16.5358 26.6298 16.4977 26.5831 16.4613 26.5352L16.3313 26.6752V35.4452C18.2427 36.4838 22.3447 38.3472 26.9873 38.3472C31.63 38.3472 35.732 36.4838 37.6433 35.4452V26.6752L37.5133 26.5352C37.5133 26.5352 37.4693 26.5958 37.3993 26.6752C36.3433 27.8732 34.6593 28.3512 32.3613 28.3512C30.2447 28.3512 28.7147 27.6258 27.6893 26.3645C27.5164 26.1499 27.3585 25.9235 27.2167 25.6872ZM25.904 21.7778C25.9576 21.3834 25.9859 20.9859 25.9887 20.5878V20.5598C25.9867 19.5352 25.7627 18.8678 25.4047 18.4585C24.9507 17.9385 24.0113 17.5398 22.0313 17.7538C20.026 17.9712 18.9047 18.4692 18.2693 19.1192C17.654 19.7485 17.3307 20.6898 17.3307 22.2078C17.3307 23.8212 17.5627 24.7738 18.074 25.3538C18.56 25.9052 19.5173 26.3532 21.6133 26.3532C23.2247 26.3532 24.146 25.8292 24.7353 25.1045C25.3673 24.3258 25.7233 23.1858 25.904 21.7778ZM28.0707 21.7778C28.2513 23.1858 28.6073 24.3258 29.24 25.1045C29.8287 25.8292 30.75 26.3532 32.3613 26.3532C34.458 26.3532 35.4147 25.9052 35.9007 25.3538C36.412 24.7738 36.6447 23.8212 36.6447 22.2078C36.6447 20.6898 36.3213 19.7485 35.706 19.1192C35.07 18.4692 33.9493 17.9712 31.9433 17.7538C29.964 17.5398 29.0247 17.9385 28.57 18.4585C28.212 18.8678 27.988 19.5352 27.986 20.5598V20.5878C27.9864 20.9403 28.0147 21.3369 28.0707 21.7778Z" fill="url(#paint0_linear_7799_23525)"/>
                <path d="M30.332 30.0107C31.068 30.0107 31.6647 30.6074 31.6647 31.3434V34.0087C31.6704 34.1873 31.6401 34.3652 31.5756 34.5318C31.5112 34.6984 31.414 34.8504 31.2896 34.9787C31.1653 35.107 31.0165 35.209 30.852 35.2787C30.6875 35.3483 30.5107 35.3842 30.332 35.3842C30.1534 35.3842 29.9766 35.3483 29.8121 35.2787C29.6476 35.209 29.4988 35.107 29.3745 34.9787C29.2501 34.8504 29.1529 34.6984 29.0885 34.5318C29.024 34.3652 28.9937 34.1873 28.9994 34.0087V31.3434C28.9994 30.6074 29.596 30.0107 30.332 30.0107ZM23.6681 30.0107C24.4041 30.0107 25.0007 30.6074 25.0007 31.3434V34.0087C25.0064 34.1873 24.9761 34.3652 24.9116 34.5318C24.8472 34.6984 24.75 34.8504 24.6256 34.9787C24.5013 35.107 24.3525 35.209 24.188 35.2787C24.0235 35.3483 23.8467 35.3842 23.6681 35.3842C23.4894 35.3842 23.3126 35.3483 23.1481 35.2787C22.9836 35.209 22.8348 35.107 22.7105 34.9787C22.5861 34.8504 22.4889 34.6984 22.4245 34.5318C22.36 34.3652 22.3297 34.1873 22.3354 34.0087V31.3434C22.3354 30.6074 22.9321 30.0107 23.6681 30.0107Z" fill="url(#paint1_linear_7799_23525)"/>
                <defs>
                  <linearGradient id="paint0_linear_7799_23525" x1="11" y1="14" x2="43" y2="40" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#93D6ED"/>
                    <stop offset="1" stopColor="#A487F2"/>
                  </linearGradient>
                  <linearGradient id="paint1_linear_7799_23525" x1="22" y1="30" x2="32" y2="35" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#93D6ED"/>
                    <stop offset="1" stopColor="#A487F2"/>
                  </linearGradient>
                </defs>
              </svg>
              </span>
              <span className="nutch-product-item" data-label="Cursor">
              <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="2" width="50" height="50" rx="25" fill="#232327" className="nutch-icon-bg"/>
                <rect x="2" y="2" width="50" height="50" rx="25" stroke="#0B0A0F" strokeWidth="4" className="nutch-icon-ring"/>
                <path d="M38.2266 19.9734L27.56 13.8134C27.3922 13.715 27.2012 13.6631 27.0066 13.6631C26.8121 13.6631 26.6211 13.715 26.4533 13.8134L15.7733 19.9734C15.48 20.1334 15.3066 20.4534 15.3066 20.7868V33.2134C15.3066 33.5468 15.48 33.8534 15.7733 34.0268L26.4533 40.1868C26.8 40.3868 27.2133 40.3868 27.56 40.1868L38.24 34.0268C38.5333 33.8668 38.7066 33.5468 38.7066 33.2134V20.7868C38.7066 20.4534 38.5333 20.1468 38.24 19.9734H38.2266ZM37.56 21.2801L27.2533 39.1334C27.1866 39.2534 27 39.2001 27 39.0668V27.3734C27 27.1334 26.88 26.9201 26.6666 26.8001L16.5466 20.9601C16.4266 20.8934 16.48 20.7068 16.6133 20.7068H37.2266C37.52 20.7068 37.7066 21.0268 37.56 21.2801Z" fill="white"/>
              </svg>
              </span>
            </div>
          </div>
          <div className="nutch-explore-row">
            <p className="nutch-text">Spoke to a few interesting people.</p>
            <div className="nutch-product-stack">
              <span className="nutch-avatar-item">
                <img src={theme === 'light' ? "/images/spoke-light1.svg" : "/images/spoke-1.svg"} alt="" className="nutch-avatar" />
                <span className="nutch-avatar-tip"><strong>Sarah,</strong> Software engineer</span>
              </span>
              <span className="nutch-avatar-item">
                <img src={theme === 'light' ? "/images/spoke-light2.svg" : "/images/spoke-2.svg"} alt="" className="nutch-avatar" />
                <span className="nutch-avatar-tip"><strong>Moyo,</strong> IT &amp; systems admin</span>
              </span>
              <span className="nutch-avatar-item">
                <img src={theme === 'light' ? "/images/spoke-light3.svg" : "/images/spoke-3.svg"} alt="" className="nutch-avatar" />
                <span className="nutch-avatar-tip"><strong>Stephanie,</strong> Student</span>
              </span>
              <span className="nutch-avatar-item">
                <img src={theme === 'light' ? "/images/spoke-light4.svg" : "/images/spoke-4.svg"} alt="" className="nutch-avatar" />
                <span className="nutch-avatar-tip"><strong>Ayo,</strong> Comms manager</span>
              </span>
              <span className="nutch-avatar-item">
                <img src={theme === 'light' ? "/images/spoke-light5.svg" : "/images/spoke-5.svg"} alt="" className="nutch-avatar" />
                <span className="nutch-avatar-tip"><strong>Voke,</strong> Ops manager</span>
              </span>
            </div>
          </div>
          <p className="nutch-text">And instead of asking:</p>
          <p className="nutch-question nutch-question--strike">What features are missing?</p>
          <p className="nutch-text">I asked:</p>
          <p className="nutch-question nutch-question--cursor">Where does the workflow break?</p>
          <p className="nutch-text">Three consistent themes emerged:</p>
        </div>

        <div className="nutch-card-grid nutch-card-grid--3 nutch-card-grid--bordered nutch-themes">
          <div className="nutch-card">
            <img src="/images/context-loss-img.svg" alt="" className="nutch-card-img" />
            <div className="nutch-card-body">
              <h3 className="nutch-card-title">Context Loss</h3>
              <p className="nutch-card-text">Users repeatedly copy &amp; paste information between browser tabs and AI tools, forcing them to rebuild context every time.</p>
            </div>
          </div>
          <div className="nutch-card">
            <img src="/images/workflow-img.svg" alt="" className="nutch-card-img" />
            <div className="nutch-card-body">
              <h3 className="nutch-card-title">Workflow Fragmentation</h3>
              <p className="nutch-card-text">AI has become another destination instead of becoming part of existing workflows.</p>
            </div>
          </div>
          <div className="nutch-card">
            <img src="/images/cognitive-img.svg" alt="" className="nutch-card-img" />
            <div className="nutch-card-body">
              <h3 className="nutch-card-title">Cognitive Overhead</h3>
              <p className="nutch-card-text">The time spent explaining the problem often outweighs the time saved by the answer.</p>
            </div>
          </div>
        </div>

        <h2 className="nutch-h">Reframing the problem</h2>
        <div className="nutch-text-group">
          <p className="nutch-text">The real problem wasn't AI.</p>
          <p className="nutch-text">The real problem was context.</p>
          <p className="nutch-text">That insight became the foundation of the product.</p>
          <p className="nutch-emphasis nutch-emphasis--cursor">Better work starts with better context.</p>
          <p className="nutch-text">Instead of moving work to AI, bring AI to the work.</p>
          <p className="nutch-text">Everything that followed was measured against that idea.</p>
        </div>
      </section>
    )}
    </>
  );
};

export default Challenge;