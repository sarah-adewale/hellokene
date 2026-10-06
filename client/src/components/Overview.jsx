import { useTheme } from "../context/ThemeContext";

// Questions shoppers bring to unfamiliar tech, shown as chips in the 180by2 overview
const CS180_QUESTIONS = [
  ['🤔', 'Which camera is right for me?'],
  ['🧐', "What's the difference between these models?"],
  ['🤨', 'Will it work for what I want to do?'],
  ['🥲', 'What accessories do I actually need?'],
  ['😰', 'Can I trust this retailer?'],
  ['🤕', 'What happens if I need support afterwards?'],
];

const Overview = ({ project }) => {
  const { theme } = useTheme();
    return(
    <>

    <div className="case-study-overview">

      {/* Case Study Header */}
      <div className="case-study-header">
        <h1>{project.title}</h1>
        <p className={`subtitle ${['nutch', '180by2'].includes(project.id) ? 'nutch-subtitle' : ''}`}>{project.description} </p>
        
        {/* Category Tags */}
        <div className="category-tags">
          {project.category?.map((cat, index) => (
            <span key={index} className="category-tag">{cat}</span>
          ))}
          
          {/* Platform icons */}
          <div className="platform-icons">
            {project.platforms?.includes('website') && (
              <div className="platform-icon">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14Z" stroke="currentColor" stroke-miterlimit="10"/>
                    <path d="M2 8H14" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M8 13.8375C9.38071 13.8375 10.5 11.224 10.5 8C10.5 4.77604 9.38071 2.1625 8 2.1625C6.61929 2.1625 5.5 4.77604 5.5 8C5.5 11.224 6.61929 13.8375 8 13.8375Z" stroke="currentColor" stroke-miterlimit="10"/>
                </svg>

              </div>
            )}
            {project.platforms?.includes('webapp') && (
              <div className="platform-icon">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 15H2C1.73478 15 1.48043 14.8946 1.29289 14.7071C1.10536 14.5196 1 14.2652 1 14V8C1 7.73478 1.10536 7.48043 1.29289 7.29289C1.48043 7.10536 1.73478 7 2 7H5C5.26522 7 5.51957 7.10536 5.70711 7.29289C5.89464 7.48043 6 7.73478 6 8V14C6 14.2652 5.89464 14.5196 5.70711 14.7071C5.51957 14.8946 5.26522 15 5 15ZM2 8V14H5V8H2Z" fill="currentColor"/>
                <path d="M14 2H3C2.73478 2 2.48043 2.10536 2.29289 2.29289C2.10536 2.48043 2 2.73478 2 3V6H3V3H14V10H7V11H8V13H7V14H11.5V13H9V11H14C14.2652 11 14.5196 10.8946 14.7071 10.7071C14.8946 10.5196 15 10.2652 15 10V3C15 2.73478 14.8946 2.48043 14.7071 2.29289C14.5196 2.10536 14.2652 2 14 2Z" fill="currentColor"/>
                </svg>
              </div>
            )}
            {project.platforms?.includes('extension') && (
              <div className="platform-icon">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.5002 11.8125C3.38417 11.8125 3.27289 11.7664 3.19084 11.6843C3.10879 11.6023 3.0627 11.491 3.0627 11.375V9.0398C2.82268 9.15429 2.55667 9.20334 2.2916 9.18198C2.06716 9.16549 1.84912 9.09974 1.65298 8.98939C1.45685 8.87904 1.28744 8.72681 1.15683 8.54355C1.02622 8.36028 0.937614 8.15048 0.897312 7.92907C0.857011 7.70766 0.866008 7.48009 0.923663 7.26256C0.981318 7.04502 1.08621 6.84287 1.23088 6.67049C1.37556 6.4981 1.55645 6.35973 1.76068 6.26521C1.96491 6.17069 2.18747 6.12235 2.41251 6.12363C2.63756 6.12491 2.85955 6.17577 3.0627 6.27261V3.93745C3.0627 3.82142 3.10879 3.71014 3.19084 3.62809C3.27289 3.54605 3.38417 3.49995 3.5002 3.49995H6.0541C5.93961 3.25994 5.89056 2.99393 5.91192 2.72886C5.92841 2.50442 5.99417 2.28637 6.10451 2.09024C6.21486 1.8941 6.36709 1.7247 6.55035 1.59409C6.73362 1.46348 6.94342 1.37487 7.16483 1.33457C7.38624 1.29427 7.61381 1.30326 7.83134 1.36092C8.04888 1.41857 8.25103 1.52347 8.42342 1.66814C8.5958 1.81281 8.73417 1.9937 8.82869 2.19794C8.92321 2.40217 8.97156 2.62473 8.97028 2.84977C8.969 3.07481 8.91813 3.29681 8.82129 3.49995H11.3752C11.4912 3.49995 11.6025 3.54605 11.6846 3.62809C11.7666 3.71014 11.8127 3.82142 11.8127 3.93745V6.27261C11.5727 6.15811 11.3067 6.10906 11.0416 6.13042C10.8172 6.14691 10.5991 6.21267 10.403 6.32302C10.2068 6.43337 10.0374 6.58559 9.90683 6.76886C9.77622 6.95213 9.68761 7.16193 9.64731 7.38334C9.60701 7.60474 9.61601 7.83231 9.67366 8.04985C9.73132 8.26739 9.83621 8.46954 9.98088 8.64192C10.1256 8.8143 10.3064 8.95268 10.5107 9.0472C10.7149 9.14172 10.9375 9.19006 11.1625 9.18878C11.3876 9.1875 11.6096 9.13663 11.8127 9.0398V11.375C11.8127 11.491 11.7666 11.6023 11.6846 11.6843C11.6025 11.7664 11.4912 11.8125 11.3752 11.8125H3.5002Z" stroke="currentColor" stroke-width="0.875" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
            )}
            {project.platforms?.includes('ios') && (
              <div className="platform-icon">
               <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.01718 6.13046L11.375 11.8125" stroke="currentColor" stroke-width="0.875" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M5.6875 2.1875L7 4.40781" stroke="currentColor" stroke-width="0.875" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M3.14453 10.9375L2.625 11.8125" stroke="currentColor" stroke-width="0.875" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M8.31251 2.1875L4.17813 9.1875" stroke="currentColor" stroke-width="0.875" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M9.82187 9.1875H12.6875" stroke="currentColor" stroke-width="0.875" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M1.3125 9.1875H7.79297" stroke="currentColor" stroke-width="0.875" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
            )}
            {project.platforms?.includes('android') && (
              <div className="platform-icon">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.17657 12.2555C2.17724 12.3325 2.19823 12.408 2.23741 12.4743C2.27659 12.5406 2.33258 12.5953 2.39972 12.6331C2.46686 12.6708 2.54277 12.6901 2.61978 12.6891C2.69678 12.6881 2.77216 12.6668 2.83829 12.6273L12.0149 7.37187C12.0824 7.33601 12.1388 7.28246 12.1782 7.21694C12.2176 7.15143 12.2384 7.07644 12.2384 7C12.2384 6.92356 12.2176 6.84857 12.1782 6.78306C12.1388 6.71754 12.0824 6.66399 12.0149 6.62812L2.83829 1.37266C2.77216 1.33318 2.69678 1.31187 2.61978 1.31086C2.54277 1.30985 2.46686 1.32919 2.39972 1.36692C2.33258 1.40465 2.27659 1.45944 2.23741 1.52574C2.19823 1.59205 2.17724 1.66752 2.17657 1.74453V12.2555Z" stroke="currentColor" stroke-width="0.875" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M2.3078 1.4328L9.61952 8.74452" stroke="currentColor" stroke-width="0.875" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M2.3078 12.5672L9.61952 5.25546" stroke="currentColor" stroke-width="0.875" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>

              </div>
            )}
            {project.platforms?.includes('ar/vr') && (
              <div className="platform-icon">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.33334 4H4.66668M8.06668 12.6667L6.72001 11.3333M8.06668 12.6667L6.72001 14M8.06668 12.6667C4.70001 12.6667 1.87334 11.3333 1.33334 10M10.0873 12.514C12.4013 12.154 14.1773 11.1933 14.6667 10M4.66668 2H11.3333C12.58 2 13.2027 2 13.6667 2.268C13.9707 2.44353 14.2231 2.69599 14.3987 3C14.6667 3.464 14.6667 4.08667 14.6667 5.33333C14.6667 6.58 14.6667 7.20267 14.3987 7.66667C14.2231 7.97068 13.9707 8.22314 13.6667 8.39867C13.2027 8.66667 12.58 8.66667 11.3333 8.66667H11.0707C10.6127 8.66667 10.384 8.66667 10.17 8.61933C9.88318 8.55565 9.61391 8.42955 9.38134 8.25C9.20801 8.11533 9.06134 7.94 8.76801 7.588C8.53468 7.308 8.41734 7.168 8.28334 7.10467C8.19469 7.06304 8.09795 7.04146 8.00001 7.04146C7.90207 7.04146 7.80533 7.06304 7.71668 7.10467C7.58268 7.16733 7.46601 7.30733 7.23201 7.588C6.93868 7.94 6.79201 8.11533 6.61868 8.25C6.38611 8.42955 6.11684 8.55565 5.83001 8.61933C5.61668 8.66667 5.38734 8.66667 4.92934 8.66667H4.66668C3.42001 8.66667 2.79734 8.66667 2.33334 8.39867C2.02933 8.22314 1.77687 7.97068 1.60134 7.66667C1.33334 7.20267 1.33334 6.58 1.33334 5.33333C1.33334 4.08667 1.33334 3.464 1.60134 3C1.77687 2.69599 2.02933 2.44353 2.33334 2.268C2.79734 2 3.42001 2 4.66668 2Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
            )}
          </div>

        </div>
        {/* Read time */}
        <div className="read-time">
            <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 16.1875C12.4173 16.1875 15.1875 13.4173 15.1875 10C15.1875 6.58274 12.4173 3.8125 9 3.8125C5.58274 3.8125 2.8125 6.58274 2.8125 10C2.8125 13.4173 5.58274 16.1875 9 16.1875Z" stroke="currentColor" stroke-width="2" stroke-miterlimit="10"/>
                <path d="M9 10L11.7844 7.21564" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M7.3125 1.5625H10.6875" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

            <span className="read-time-text">{project.readTime || '10 min read'}</span>
          </div>
      </div>

      {/* Onboarding Process Visual */}
      {project.id !== 'nutch' && project.id !== '180by2' && (
      <div className="onboarding-process">
        {project.id === 'pivo' && (

          <img 
            src={theme === 'dark' 
                ? "/images/onboarding-process.svg"
                : "/images/onboarding-img-white.svg"
            } 
            alt={`${project.title} onboarding process`} 
            className="onboarding-image"
            />

        )}
      </div>
      )}

      {/* Nutch overview intro + banner */}
      {project.id === 'nutch' && (
        <>
          <div className="overview-text nutch-overview-text">
            <p>I bet you're tired of hearing "Artificial Intelligence is changing how people work."</p>
            <p>Ironically, using AI still feels surprisingly manual. Every interaction begins with the same routine:</p>
            <p className="nutch-mono">Find the right tab → Copy → Paste → Explain context → Wait → Repeat.</p>
            <p>The tools are powerful. The workflow isn't.</p>
            <p>I wanted to explore what happens if AI becomes part of the browser instead of another destination. That question became Nutch.</p>
          </div>

          <div className="nutch-banner">
            <img
              src="/images/nutch-banner.svg"
              alt="Nutch"
              className="nutch-banner-img"
            />
          </div>
        </>
      )}

      {/* 180by2 overview. Styles are the cs180-* block in CaseStudy.css. */}
      {project.id === '180by2' && (
        <section className="cs180">
          <h2 className="cs180-h">Buying a VR headset isn't like buying headphones.</h2>
          <p className="cs180-text">We're often ready to assume customers already know what they're looking for when they visit an online store.</p>
          <p className="cs180-text">That assumption works when replacing a phone charger or buying a familiar product. It breaks down when someone is investing in a VR headset, a 360° camera, or equipment they've never owned before.</p>
          <p className="cs180-text">Buying unfamiliar technology changes the way people shop.</p>
          <p className="cs180-text">Customers aren't simply looking for products, they're trying to answer questions they haven't had to ask since buying their first smartphone.</p>

          <ul className="cs180-questions">
            {CS180_QUESTIONS.map(([emoji, question]) => (
              <li key={question} className="cs180-question">
                <span aria-hidden="true">{emoji}</span>
                {question}
              </li>
            ))}
          </ul>

          <div className="cs180-pair">
            <p className="cs180-text">Every unanswered question introduces uncertainty.</p>
            <p className="cs180-text">And uncertainty is expensive.</p>
          </div>

          <p className="cs180-text">Over three months, we rebuilt 180by2's buying journey around one principle:</p>
          <blockquote className="cs180-quote">
            Good e-commerce doesn't simply display inventory.<br />
            It helps customers make confident decisions.
          </blockquote>

          <div className="cs180-figures">
            <figure className="cs180-figure">
              <img src="/images/180by2img1.svg" alt="A laptop showing a full shopping cart on an online store" />
              <figcaption>
                Customers <span className="cs180-accent cs180-accent--no">rarely</span> begin with a{' '}<br />
                cart full of confident choices
              </figcaption>
            </figure>
            <figure className="cs180-figure">
              <img src="/images/180by2img2.svg" alt="Two people researching a VR headset with a video tutorial, notes and a phone" />
              <figcaption>
                In <span className="cs180-accent cs180-accent--yes">reality</span>, they begin with questions,{' '}<br />
                comparisons, tutorials, and uncertainty.
              </figcaption>
            </figure>
          </div>

          <h2 className="cs180-h">The business</h2>
          <p className="cs180-text">180by2 is a subsidiary of African Technopreneurs, focused on making immersive technology more accessible across South Africa. Its catalogue spans VR headsets, 360° cameras, action cameras, accessories and enterprise solutions, serving everyone from first-time buyers to creators and businesses adopting emerging technology.</p>
          <p className="cs180-text">The business has become a top retailer of immersive technology in South Africa, drawing in qualified visitors and partners such as the NBA, RMB, and ABSA, along with collaborations with brands like Insta360 and Takealot.</p>
        </section>
      )}

      {/* Overview Text */}
      <div className="overview-text">
        {project.id === 'pivo' && (
          <p>
            In the dynamic world of digital finance, the onboarding experience is pivotal. It's the gateway through which potential customers become 
            active users, and it's also where many can fall off the journey. This case study explores how we transformed our customer onboarding process, 
            enhancing user experience and operational efficiency.
          </p>
        )}
      </div>
      
    </div>
        </>

    );
};

  export default Overview;