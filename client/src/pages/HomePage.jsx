import React, { useState, useEffect, useCallback, useMemo } from 'react';
import '../styles/Home.css';
import ProjectsSection from '../components/ProjectSection';
import ArticleStack from '../components/ArticleStack';
import { EMAIL_URL, LINKEDIN_URL, RESUME_URL, BOOK_A_CALL_URL } from '../config/links';


// Underlined references in the hero copy. An empty string means "no URL yet",
// which renders the phrase as plain underlined text instead of a dead link.
const HERO_LINKS = {
  tradevu: 'https://www.tradevu.co',
  pivo: 'https://www.ycombinator.com/companies/pivo-technology-inc',
  pivoSeed: 'https://techcrunch.com/2022/11/24/pivo-powers-up-nigerian-freight-carriers-with-a-bespoke-digital-bank-gets-2m-seed-funding/',
  africanTechnopreneurs: 'https://www.africantechno.com/',
  oneEightyBy2: 'https://180by2.co.za/',
  ikedc: 'https://www.ikejaelectric.com/',
  lexAi: '',
  inclusivePeace: 'https://www.inclusivepeace.org/',
  capitalInvestmentClub: 'https://www.capitalinvestmentclub.org/',
};

// Tools that float around the cover image. `id` drives both the position
// class and the tooltip class in Home.css.
const SKILL_TOOLS = [
  { id: 'rive',  name: 'Rive',              icon: '/images/rive-icon.svg',       blurb: 'I use Rive to bring web animations to life' },
  { id: 'ai',    name: 'Adobe Illustrator', icon: '/images/ilustrator-icon.svg', blurb: 'I use Illustrator to craft vector artwork' },
  { id: 'figma', name: 'Figma',             icon: '/images/figma-icon.svg',      blurb: 'I use Figma to ideate and prototype products' },
  { id: 'ps',    name: 'Adobe Photoshop',   icon: '/images/photoshop-icon.svg',  blurb: 'I use Photoshop for creative visual design' },
];

const HeroLink = ({ href, children }) => (
  href
    ? <a className="hero-link" href={href} target="_blank" rel="noopener noreferrer">{children}</a>
    : <span className="hero-link">{children}</span>
);

const HomePage = () => {
  const [activeTab, setActiveTab] = useState('bio');
  const [useTapChips, setUseTapChips] = useState(false);
  const [coverFlipped, setCoverFlipped] = useState(false);

  // Tap chips instead of keyboard shortcuts on phones and on touch screens
  // with no mouse or trackpad (an iPad without a keyboard is wider than a
  // phone but has no keys to press).
  useEffect(() => {
    let timeoutId;
    const touchOnly = window.matchMedia('(hover: none)');

    const update = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setUseTapChips(window.innerWidth < 768 || touchOnly.matches);
      }, 100); // Debounce resize events
    };

    update();
    window.addEventListener('resize', update, { passive: true });
    touchOnly.addEventListener('change', update);

    return () => {
      window.removeEventListener('resize', update);
      touchOnly.removeEventListener('change', update);
      clearTimeout(timeoutId);
    };
  }, []);

    // Optimize keyboard event handler
    const handleKeyPress = useCallback((event) => {
      // Ignore shortcuts while typing or when a modifier is held.
      if (event.metaKey || event.ctrlKey || event.altKey) return;
      const el = event.target;
      if (el && (el.isContentEditable || ['INPUT', 'TEXTAREA', 'SELECT'].includes(el.tagName))) return;

      const key = event.key.toLowerCase();

      if (key === 'r') {
        setActiveTab('bio');
      } else if (key === 'e') {
        setActiveTab('experience');
      } else if (key === 'k') {
        window.open(RESUME_URL, '_blank', 'noopener,noreferrer');
      }
    }, []);
  
    // Shortcuts stay on everywhere: a tablet with a keyboard can use them too
    useEffect(() => {
      document.addEventListener('keydown', handleKeyPress, { passive: true });
      return () => {
        document.removeEventListener('keydown', handleKeyPress);
      };
    }, [handleKeyPress]);

  // Helper function to get heading class based on active tab
// Memoize heading class calculation
const headingClass = useMemo(() => (
  activeTab === 'experience' ? 'hero-copy experience' : 'hero-copy'
), [activeTab]);


  return (
      <div className="home-container">
        {/* Hero Section */}
        <section className="hero-section">
          {/* Left Column - Text */}
          <div className="hero-content">
            {activeTab === 'bio' && (
              <div className={headingClass}>
                <h1 className="hero-lede">
                  Hello, I'm Kene.<br />
                  I design and ship digital products for people and businesses.
                </h1>
                <p>
                  I've worked with teams across AI, fintech, e-commerce, and other
                  industries, implementing research, strategy, and systems to ship
                  delightful product experiences that drive revenue.
                </p>
                <p>
                  I currently lead product &amp; design at{' '}
                  <HeroLink href={HERO_LINKS.tradevu}>Tradevu</HeroLink>, building
                  payments and lending infrastructure for businesses across borders.
                </p>
              </div>
            )}

            {activeTab === 'experience' && (
              <div className={headingClass}>
                <p>My work has taken me from</p>
                <p>
                  Fintech with{' '}
                  <HeroLink href={HERO_LINKS.pivo}>Pivo Africa (YC '22)</HeroLink>, where we{' '}
                  <HeroLink href={HERO_LINKS.pivoSeed}>raised $2M in seed capital</HeroLink>{' '}
                  to power $40M+ in transaction volume and $3M+ in loans to small and
                  medium businesses.
                </p>
                <p>
                  Extended reality with{' '}
                  <HeroLink href={HERO_LINKS.africanTechnopreneurs}>African Technopreneurs</HeroLink>,
                  where we expanded sales, rentals and adoption of AR/VR devices in
                  excess of R2M through{' '}
                  <HeroLink href={HERO_LINKS.oneEightyBy2}>180by2</HeroLink>.
                </p>
                <p>
                  Contract work with Nigeria's largest power utility &ndash;{' '}
                  <HeroLink href={HERO_LINKS.ikedc}>IKEDC</HeroLink>, AI legal and estate
                  management platform &ndash; <HeroLink href={HERO_LINKS.lexAi}>Lex AI</HeroLink>,
                  a Geneva-based peace-building think tank &ndash;{' '}
                  <HeroLink href={HERO_LINKS.inclusivePeace}>Inclusive Peace</HeroLink>, an
                  operating network for investments &ndash;{' '}
                  <HeroLink href={HERO_LINKS.capitalInvestmentClub}>Capital Investment Club</HeroLink>{' '}
                  and more.
                </p>
              </div>
            )}

            {useTapChips ? (
              /* Touch devices get tappable chips instead of keyboard shortcuts. */
              <div className="key-prompt">
                {activeTab === 'bio' ? (
                  <p>
                    <button
                      type="button"
                      className="tap-chip"
                      onClick={() => setActiveTab('experience')}
                    >
                      Read more
                    </button>{' '}
                    on my experience
                  </p>
                ) : (
                  <p>
                    <button
                      type="button"
                      className="tap-chip"
                      onClick={() => setActiveTab('bio')}
                    >
                      Reset
                    </button>{' '}
                    or{' '}
                    <a
                      className="tap-chip"
                      href={RESUME_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View my resum&eacute;
                    </a>
                  </p>
                )}
              </div>
            ) : (
              <div className="key-prompt">
                {activeTab === 'bio' ? (
                  <p>
                    Click <span className="key-highlight">E</span> for more on my experience
                  </p>
                ) : (
                  <p>
                    Click <span className="key-highlight">R</span> to reset or{' '}
                    <span className="key-highlight">K</span> for my resume
                  </p>
                )}
              </div>
            )}

            {/* Contact actions */}
            <div className="hero-actions">
              <a className="hero-cta hero-cta--primary" href={EMAIL_URL}>
                Send an email
              </a>
              {BOOK_A_CALL_URL ? (
                <a
                  className="hero-cta hero-cta--secondary"
                  href={BOOK_A_CALL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book a call
                </a>
              ) : (
                <span className="hero-cta hero-cta--secondary">Book a call</span>
              )}
              <a
                className="hero-social"
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Kene on LinkedIn"
              >
                <img src="/images/linkedIn-icon.svg" alt="" aria-hidden="true" />
              </a>
            </div>
          </div>
          
          {/* Right Column - Image and Skills */}
          <div className="profile-container">
            <div className={`profile-image-wrapper ${coverFlipped ? 'is-flipped' : ''}`}>
              {/* Clicking swaps to the other image. */}
              <button
                type="button"
                className="profile-image-container"
                onClick={() => setCoverFlipped((prev) => !prev)}
                aria-label="Switch profile photo"
              >
                <img 
                  src="/images/new-cover-img.svg" 
                  alt="Kene" 
                  className="profile-image"
                  loading="eager"
                  decoding="async"
                />
                <img 
                  src="/images/profile-image.png" 
                  alt="" 
                  aria-hidden="true"
                  className="profile-image-hover"
                  loading="lazy"
                  decoding="async"
                />
              </button>
              
              {/* Skill Icons */}
              {SKILL_TOOLS.map((tool) => (
                <div key={tool.id} className={`skill-icon ${tool.id}-icon`}>
                  <img
                    src={tool.icon}
                    alt={tool.name}
                    loading="lazy"
                    decoding="async"
                  />
                  <span className={`skill-tooltip ${tool.id}-tooltip`}>
                    {tool.blurb}
                  </span>
                </div>
              ))}
            </div>

            <ArticleStack />
          </div>
        </section>
        
        {/* Featured Projects Section would go here */}
        <ProjectsSection />
      </div>

  );
};

export default HomePage;