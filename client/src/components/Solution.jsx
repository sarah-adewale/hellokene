import React, { useState } from 'react';
import ImageModal from '../components/ImageModal';
import { useTheme } from '../context/ThemeContext';

// 180by2: a screen recording framed as a browser window on a grey card.
// `crop` picks how the recording is scaled and cropped in the window (see
// the cs180-shot--* rules); without it the whole page width shows.
const CS180Shot = ({ src, alt, crop }) => (
  <div className={`cs180-shot${crop ? ` cs180-shot--${crop}` : ''}`}>
    <div className="cs180-shot-window">
      <span className="cs180-dots" aria-hidden="true"><span /><span /><span /></span>
      <div className="cs180-shot-screen">
        <img src={src} alt={alt} loading="lazy" decoding="async" />
      </div>
    </div>
  </div>
);

// 180by2: the old and new menus in one window, split by a draggable handle.
// A transparent range input over the screen does the dragging, so it also
// works with touch and the arrow keys.
const CS180Compare = ({ before, after }) => {
  const [position, setPosition] = useState(50);
  return (
    <div className="cs180-compare" style={{ '--cs180-split': `${position}%` }}>
      <span className="cs180-compare-label">Before</span>
      <span className="cs180-compare-label cs180-compare-label--after">After</span>
      <div className="cs180-compare-window">
        <span className="cs180-dots" aria-hidden="true"><span /><span /><span /></span>
        <div className="cs180-compare-screen">
          <img src={after.src} alt={after.alt} loading="lazy" decoding="async" />
          <div className="cs180-compare-before">
            <img src={before.src} alt={before.alt} loading="lazy" decoding="async" />
          </div>
        </div>
      </div>
      <div className="cs180-compare-track">
        <span className="cs180-compare-line" aria-hidden="true" />
        <div className="cs180-compare-zone">
          <span className="cs180-compare-handle" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 7l-5 5 5 5M15 7l5 5-5 5" />
            </svg>
          </span>
          <input
            type="range"
            className="cs180-compare-input"
            min="0"
            max="100"
            value={position}
            onChange={(e) => setPosition(Number(e.target.value))}
            aria-label="Drag to compare the old and new navigation"
          />
        </div>
      </div>
    </div>
  );
};

// 180by2 validation table: [heading, cells]. A cell is [label, text] or, for
// the quotes, [question, quote, name].
const CS180_VALIDATION = [
  ['We looked for evidence across three areas', [
    ['Product click-through', <>Increased from<br />42% → 58%</>],
    ['Navigation abandonment', <>Reduced by<br />22%</>],
    ['Bounce rate', <>Reduced by<br />15%</>],
  ]],
  ['We noticed users were', [
    [null, <>Locating products<br />without assistance</>],
    [null, <>Fewer backtracks<br />between categories</>],
    [null, <>Less reliance<br />on search</>],
  ]],
  ['Interaction analysis showed', [
    ['Fewer', <>“Where can I find...?”<br />support requests.</>],
    ['Faster', <>Merchandising of<br />newly added products.</>],
    ['Reduced', <>Internal effort<br />maintaining navigation.</>],
  ]],
  ['Users also said', [
    ['When you came to the site, where did you start?', '“I went straight to cameras, then GoPro, because that’s what we already shoot with. Last time I searched instead and got mounts and batteries mixed in.”', 'Angela'],
    ['How did you feel choosing between products?', '“I’m not a camera person, so the beginner options helped. I didn’t have to compare specs I don’t understand.”', 'Sipho'],
  ]],
];

// 180by2: what the first round taught us. `good` picks the green badge,
// otherwise a red flag.
const CS180_LEARNED = [
  [true, <>Discovery<br />improved</>],
  [true, <>Customers reached<br />products faster</>],
  [false, <>Product pages were the next major<br />source of hesitation.</>],
];

const CS180_BROWSE_BY = [
  ['Product category & brand', 'Menu items for ‘Categories’ and ‘brands’ aimed at making sorting simpler.'],
  ['Intended Use', '‘Use-case’ sorting helped with leading users to find new, interesting products.'],
  ['Product Type', '‘Type’ sorting helped narrow options depending on the user’s expertise.'],
];

const CS180_PAGE_PARTS = ['Product overview', 'Rich media', 'Key features', 'Compatible accessories', 'Supporting content'];

const CS180Icon = ({ good }) => (
  <span className={`cs180-learned-icon ${good ? 'cs180-learned-icon--good' : 'cs180-learned-icon--flag'}`} aria-hidden="true">
    {good ? (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M7.5 12.5l3 3 6-6.5" />
      </svg>
    ) : (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
        <path d="M6 3.5a1 1 0 0 1 1 1V5h10.2a.8.8 0 0 1 .64 1.28L15.5 9.5l2.34 3.22a.8.8 0 0 1-.64 1.28H7v6.5a1 1 0 1 1-2 0v-16a1 1 0 0 1 1-1z" />
      </svg>
    )}
  </span>
);

const Solution = ({ project }) => {
    const [modalImage, setModalImage] = useState(null);
    const { theme } = useTheme();

    const openImageModal = (imageUrl, altText) => {
      setModalImage({ url: imageUrl, alt: altText });
    };
  
    const closeImageModal = () => {
      setModalImage(null);
    };
  
  if (project.id !== 'pivo' && project.id !== '180by2') {
    return (
      <section className="case-study-section solution">
        <h2>The Solution</h2>
        <p>Custom solutions were implemented to address the project challenges.</p>
      </section>
    );
  }

  return (
    <>
    {project.id === 'pivo' && (
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
          
          {/* <div className="solution-outcomes">
            <img src="/images/tiered-table.svg" alt="" />
          </div> */}
          <div className="solution-outcomes">
            <div className="table-container">
              <img src="/images/tiered-table.svg" alt="Tiered onboarding system table" />
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
            <div className="table-container">
              <img src="/images/enhanced-readbility-table.svg" alt="" />
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
          
          {/* <div className="solution-outcomes">
            <img src="/images/tiered-table.svg" alt="" />
          </div> */}
          <div className="solution-outcomes">
            <div className="table-container">
            <img src="/images/tiered-table.svg" alt="" />
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
          
          {/* <div className="solution-outcomes">
            <img src="/images/kyc-table.svg" alt="" />
          </div> */}
          <div className="solution-outcomes">
            <div className="table-container">
            <img src="/images/kyc-table.svg" alt="" />
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
    )}
    {/* 180by2 solution. Styles are the cs180-* block in CaseStudy.css. */}
    {project.id === '180by2' && (
      <section className="cs180 cs180--compact cs180-solution">
        <h2 className="cs180-h">Our observations</h2>

        <blockquote className="cs180-quote cs180-quote--point">
          1. Customers couldn’t find products the way they naturally searched for them.
        </blockquote>
        <div className="cs180-split">
          <CS180Shot
            src="/images/180by2-old-nav.webp"
            alt="The old 180by2 homepage, with a menu of promotions, latest arrivals, cameras and virtual reality"
            crop="old"
          />
          <div className="cs180-split-text">
            <p className="cs180-text">People rarely started with a specific product.</p>
            <p className="cs180-text">Some looked for a camera.<br />Others searched for a brand.</p>
            <p className="cs180-text">Many simply wanted equipment for travel, content creation or a hobby they were beginning.</p>
            <p className="cs180-text">The navigation reflected the catalogue<br />but customers thought in use cases.</p>
          </div>
        </div>

        <h3 className="cs180-label">Hypothesis</h3>
        <p className="cs180-text">If navigation reflected customers’ mental models rather than internal inventory structures, discovery would become faster and require less effort.</p>
        <h3 className="cs180-label">Design decision</h3>
        <p className="cs180-text">Restructure the main navigation around multiple entry points into the catalogue.</p>

        <CS180Compare
          before={{ src: '/images/180by2-nav-before.webp', alt: 'Before: the Cameras menu listed brands and camera types in three plain columns' }}
          after={{ src: '/images/180by2-nav-after.webp', alt: 'After: the Virtual Reality menu is organised by category, use case, brand and type' }}
        />

        <p className="cs180-text">Navigation started to feel more familiar. Customers could now browse by</p>
        <dl className="cs180-methods">
          {CS180_BROWSE_BY.map(([way, description]) => (
            <div key={way} className="cs180-method">
              <dt className="cs180-chip">{way}</dt>
              <dd>{description}</dd>
            </div>
          ))}
        </dl>

        <h3 className="cs180-label">Validation</h3>
        <div className="cs180-table">
          {CS180_VALIDATION.map(([heading, cells]) => (
            <div key={heading} className="cs180-table-group">
              <h4 className="cs180-table-head">{heading}</h4>
              <div className={`cs180-table-row cs180-table-row--${cells.length}`}>
                {cells.map(([label, text, name], i) => (
                  <div key={i} className="cs180-table-cell">
                    {label && <p className="cs180-table-label">{label}</p>}
                    <p className="cs180-table-text">{text}</p>
                    {name && <p className="cs180-table-name">{name}</p>}
                  </div>
                ))}
              </div>
            </div>
          ))}
          <div className="cs180-table-group">
            <h4 className="cs180-table-head">What we learned</h4>
            <div className="cs180-table-row cs180-table-row--3">
              {CS180_LEARNED.map(([good, text], i) => (
                <div key={i} className="cs180-table-cell">
                  <CS180Icon good={good} />
                  <p className="cs180-table-text">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <blockquote className="cs180-quote cs180-quote--point">
          2. Finding a product wasn’t the same as feeling ready to buy it.
        </blockquote>
        <div className="cs180-split">
          <CS180Shot
            src="/images/product-page-hero.webp"
            alt="A 180by2 product page for the Meta Quest 3 headset"
            crop="product"
          />
          <div className="cs180-split-text">
            <p className="cs180-text">Buying emerging technology often requires reassurance before commitment.</p>
            <p className="cs180-text">Customers still left product pages looking for compatibility information, reviews, accessories and practical guidance.</p>
          </div>
        </div>

        <h3 className="cs180-label">Hypothesis</h3>
        <p className="cs180-text">If product pages answered the questions customers left the website to research, decisions would require less effort.</p>
        <h3 className="cs180-label">Design decisions</h3>
        <p className="cs180-text cs180-text--lead">We introduced dedicated product pages that brought together everything a customer needed to evaluate a purchase.</p>
        <p className="cs180-text">Each page combined</p>
        <ul className="cs180-tags">
          {CS180_PAGE_PARTS.map((part) => (
            <li key={part} className="cs180-chip">{part}</li>
          ))}
        </ul>

        <div className="cs180-split cs180-split--reverse">
          <div className="cs180-split-text">
            <p className="cs180-text">Everything above the fold was optimised for purchase.</p>
            <p className="cs180-text">Information e.g. payment support is streamlined to be displayed under the main CTA</p>
            <p className="cs180-text">‘Pairs well with’ expanded and placed closer to the purchase point for ease of access</p>
          </div>
          <CS180Shot
            src="/images/product-description.webp"
            alt="Scrolling the redesigned Meta Quest 3 product page, from price and payment options down to the product description"
          />
        </div>
      </section>
    )}
    </>
  );
};

export default Solution;
