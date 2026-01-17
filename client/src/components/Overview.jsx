import { useTheme } from "../context/ThemeContext";

const Overview = ({ project }) => {
  const { theme } = useTheme();
    return(
    <>

    <div className="case-study-overview">

      {/* Case Study Header */}
      <div className="case-study-header">
        <h1>{project.title}</h1>
        <p className="subtitle">{project.description} </p>
        
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
        {project.id === "portfolio" && (
          <img 
          src={theme === 'dark' 
              ? "/images/portfolio-cover-image.png"
              : "/images/portfolio-cover-image-white.png"
          } 
          alt={`${project.title} onboarding process`} 
          className="onboarding-image"
          />
        )}
      </div>

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
      {project.id === 'portfolio' && (
        <>
        {/* Portfolio cards section - will stack vertically on mobile */}
    <div className="portfolio-features">
      <div className="portfolio-features-list">
        <div className="features-role-section">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.25 6.75H3.75C3.33579 6.75 3 7.08579 3 7.5V19.5C3 19.9142 3.33579 20.25 3.75 20.25H20.25C20.6642 20.25 21 19.9142 21 19.5V7.5C21 7.08579 20.6642 6.75 20.25 6.75Z" stroke="#6D6C6F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M15.75 6.75V5.25C15.75 4.85218 15.592 4.47064 15.3107 4.18934C15.0294 3.90804 14.6478 3.75 14.25 3.75H9.75C9.35218 3.75 8.97064 3.90804 8.68934 4.18934C8.40804 4.47064 8.25 4.85218 8.25 5.25V6.75" stroke="#9D9D9F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M21 11.8407C18.2646 13.4227 15.1599 14.2538 12 14.2501C8.83955 14.2583 5.73363 13.4268 3 11.8407" stroke="#9D9D9F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M10.875 11.25H13.125" stroke="#9D9D9F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <p className="features-role-text">Role</p>
        </div>
        <p className="features-role-text">User experience and interface designer</p>
      </div>

      <div className="portfolio-features-list">
        <div className="features-role-section">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.99989 20.2501C5.80097 20.2501 5.61021 20.1711 5.46956 20.0305C5.3289 19.8898 5.24989 19.699 5.24989 19.5001V15.497C4.83843 15.6933 4.38241 15.7774 3.92801 15.7408C3.54325 15.7125 3.16946 15.5998 2.83323 15.4106C2.497 15.2214 2.20659 14.9605 1.98269 14.6463C1.75879 14.3321 1.60689 13.9725 1.5378 13.5929C1.46871 13.2133 1.48413 12.8232 1.58297 12.4503C1.68181 12.0774 1.86163 11.7308 2.10963 11.4353C2.35764 11.1398 2.66774 10.9026 3.01786 10.7406C3.36797 10.5785 3.7495 10.4957 4.13529 10.4979C4.52107 10.5 4.90163 10.5872 5.24989 10.7533V6.75013C5.24989 6.55122 5.3289 6.36045 5.46956 6.2198C5.61021 6.07915 5.80097 6.00013 5.99989 6.00013H10.378C10.1817 5.58867 10.0976 5.13266 10.1343 4.67825C10.1625 4.2935 10.2753 3.9197 10.4644 3.58347C10.6536 3.24724 10.9146 2.95684 11.2287 2.73293C11.5429 2.50903 11.9026 2.35713 12.2821 2.28804C12.6617 2.21895 13.0518 2.23438 13.4247 2.33321C13.7976 2.43205 14.1442 2.61187 14.4397 2.85988C14.7352 3.10789 14.9724 3.41798 15.1345 3.7681C15.2965 4.11822 15.3794 4.49974 15.3772 4.88553C15.375 5.27132 15.2878 5.65188 15.1218 6.00013H19.4999C19.6988 6.00013 19.8896 6.07915 20.0302 6.2198C20.1709 6.36045 20.2499 6.55122 20.2499 6.75013V10.7533C19.8384 10.557 19.3824 10.4729 18.928 10.5095C18.5433 10.5378 18.1695 10.6505 17.8332 10.8397C17.497 11.0288 17.2066 11.2898 16.9827 11.604C16.7588 11.9181 16.6069 12.2778 16.5378 12.6574C16.4687 13.0369 16.4841 13.427 16.583 13.8C16.6818 14.1729 16.8616 14.5194 17.1096 14.8149C17.3576 15.1104 17.6677 15.3477 18.0179 15.5097C18.368 15.6717 18.7495 15.7546 19.1353 15.7524C19.5211 15.7502 19.9016 15.663 20.2499 15.497V19.5001C20.2499 19.699 20.1709 19.8898 20.0302 20.0305C19.8896 20.1711 19.6988 20.2501 19.4999 20.2501H5.99989Z" stroke="#6D6C6F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <p className="features-role-text">Problem Statement</p>
        </div>
        <p className="features-role-text">The existing portfolio requires an update showcase improved expertise</p>
      </div>

      <div className="portfolio-features-list">
        <div className="features-role-section">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 12L21 3" stroke="#6D6C6F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M18.3655 5.63427C16.77 4.03391 14.6317 3.09088 12.374 2.99183C10.1164 2.89277 7.90376 3.64491 6.17418 5.09938C4.44459 6.55385 3.32407 8.60464 3.03439 10.8459C2.74471 13.0871 3.30699 15.3554 4.60994 17.2018C5.91288 19.0482 7.86154 20.3382 10.0702 20.8164C12.2789 21.2946 14.5866 20.9262 16.5366 19.7842C18.4867 18.6421 19.9369 16.8095 20.6002 14.6492C21.2635 12.4889 21.0917 10.1583 20.1186 8.11864" stroke="#9D9D9F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M15.1781 8.82181C14.4349 8.08067 13.4555 7.62329 12.4102 7.52911C11.3648 7.43493 10.3195 7.7099 9.45574 8.30627C8.59201 8.90264 7.96448 9.78271 7.68213 10.7936C7.39978 11.8045 7.48047 12.8824 7.91017 13.84C8.33987 14.7977 9.09143 15.5745 10.0343 16.0356C10.9772 16.4968 12.0518 16.6131 13.0715 16.3643C14.0912 16.1155 14.9916 15.5175 15.6162 14.6739C16.2408 13.8304 16.5502 12.7947 16.4906 11.7468" stroke="#9D9D9F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <p className="features-role-text">Goal</p>
        </div>
        <p className="features-role-text">Create a portfolio that stands out and delivers results</p>
      </div>

      <div className="portfolio-features-list">
        <div className="features-role-section">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 16.5C16.1421 16.5 19.5 13.1421 19.5 9C19.5 4.85786 16.1421 1.5 12 1.5C7.85786 1.5 4.5 4.85786 4.5 9C4.5 13.1421 7.85786 16.5 12 16.5Z" stroke="#6D6C6F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 13.5C14.4853 13.5 16.5 11.4853 16.5 9C16.5 6.51472 14.4853 4.5 12 4.5C9.51472 4.5 7.5 6.51472 7.5 9C7.5 11.4853 9.51472 13.5 12 13.5Z" stroke="#9D9D9F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M16.5 15V22.5L12 20.25L7.5 22.5V15" stroke="#9D9D9F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <p className="features-role-text">KPIs</p>
        </div>
        <ul className="features-role-text features-role-text-list">
          <li>Improved aesthetic</li>
          <li>Improved architecture and navigation</li>
        </ul>
      </div>
    </div>

    {/* Methods section - will convert to scrollable grid on mobile */}
    <div className="portfolio-methods-section">
      <div>
        <p className="methods-title-text">Methods Used</p>
        <div className="methods">
          <div className="methods-list">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.19681 13.1908C2.35621 11.7746 2.06157 10.1002 2.36823 8.48207C2.6749 6.86397 3.56176 5.4135 4.86226 4.40306C6.16277 3.39262 7.78743 2.89175 9.43112 2.9945C11.0748 3.09725 12.6245 3.79657 13.789 4.96111C14.9535 6.12564 15.6528 7.67528 15.7556 9.31897C15.8584 10.9627 15.3575 12.5873 14.347 13.8878C13.3366 15.1883 11.8861 16.0752 10.268 16.3819C8.64992 16.6885 6.97553 16.3939 5.55931 15.5533L3.22494 16.2189C3.12875 16.246 3.02711 16.2469 2.93044 16.2216C2.83378 16.1964 2.74559 16.1458 2.67494 16.0752C2.6043 16.0045 2.55374 15.9163 2.52847 15.8197C2.50321 15.723 2.50414 15.6213 2.53119 15.5252L3.19681 13.1908Z" stroke="#6D6C6F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M8.63428 16.4908C8.96469 17.4328 9.50024 18.2897 10.2022 18.9995C10.9042 19.7094 11.7551 20.2544 12.6934 20.5953C13.6317 20.9362 14.634 21.0644 15.6279 20.9706C16.6218 20.8769 17.5825 20.5636 18.4405 20.0533V20.0533L20.7749 20.7189C20.8711 20.7459 20.9727 20.7469 21.0694 20.7216C21.1661 20.6963 21.2542 20.6458 21.3249 20.5751C21.3955 20.5045 21.4461 20.4163 21.4714 20.3196C21.4966 20.223 21.4957 20.1213 21.4687 20.0251L20.803 17.6908C21.3973 16.6933 21.7238 15.5592 21.7509 14.3984C21.7781 13.2377 21.5049 12.0896 20.9579 11.0654C20.411 10.0412 19.6087 9.17572 18.6289 8.55273C17.6491 7.92973 16.525 7.57039 15.3655 7.50952" stroke="#9D9D9F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <p className="methods-text">User interviews</p>
          </div>
          <div className="methods-list">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.5 20.25H22.5" stroke="#6D6C6F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M13.5 20.25V3.75C13.5 3.55109 13.421 3.36032 13.2803 3.21967C13.1397 3.07902 12.9489 3 12.75 3H3.75C3.55109 3 3.36032 3.07902 3.21967 3.21967C3.07902 3.36032 3 3.55109 3 3.75V20.25" stroke="#9D9D9F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M21 20.25V9.75C21 9.55109 20.921 9.36032 20.7803 9.21967C20.6397 9.07902 20.4489 9 20.25 9H13.5" stroke="#9D9D9F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M6 6.75H9" stroke="#9D9D9F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M7.5 12.75H10.5" stroke="#6D6C6F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M6 16.5H9" stroke="#6D6C6F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M16.5 16.5H18" stroke="#6D6C6F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M16.5 12.75H18" stroke="#6D6C6F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <p className="methods-text">Competitive research</p>
          </div>
          <div className="methods-list">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.5 13.5C9.57107 13.5 11.25 11.8211 11.25 9.75C11.25 7.67893 9.57107 6 7.5 6C5.42893 6 3.75 7.67893 3.75 9.75C3.75 11.8211 5.42893 13.5 7.5 13.5Z" stroke="#6D6C6F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M14.25 7.5H23.25" stroke="#9D9D9F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M14.25 12H23.25" stroke="#9D9D9F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M16.5 16.5H23.25" stroke="#9D9D9F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M1.6875 18C2.01795 16.7094 2.76855 15.5655 3.82097 14.7486C4.87338 13.9317 6.16774 13.4883 7.5 13.4883C8.83226 13.4883 10.1266 13.9317 11.179 14.7486C12.2314 15.5655 12.982 16.7094 13.3125 18" stroke="#6D6C6F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <p className="methods-text">User personas</p>
          </div>
          <div className="methods-list">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 17.25L3 18.75V5.25L9 3.75" stroke="#6D6C6F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M15 20.25L9 17.25V3.75L15 6.75V20.25Z" stroke="#9D9D9F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M15 6.75L21 5.25V18.75L15 20.25" stroke="#9D9D9F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <p className="methods-text">Journey map</p>
          </div>
          <div className="methods-list">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.625 6.75L14.625 3C14.625 2.58579 14.2892 2.25 13.875 2.25L10.125 2.25C9.71079 2.25 9.375 2.58579 9.375 3L9.375 6.75C9.375 7.16421 9.71079 7.5 10.125 7.5L13.875 7.5C14.2892 7.5 14.625 7.16421 14.625 6.75Z" stroke="#6D6C6F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M20.25 20.25L20.25 15.75C20.25 15.3358 19.9142 15 19.5 15L15 15C14.5858 15 14.25 15.3358 14.25 15.75L14.25 20.25C14.25 20.6642 14.5858 21 15 21L19.5 21C19.9142 21 20.25 20.6642 20.25 20.25Z" stroke="#9D9D9F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M9.75 20.25L9.75 15.75C9.75 15.3358 9.41421 15 9 15L4.5 15C4.08579 15 3.75 15.3358 3.75 15.75L3.75 20.25C3.75 20.6642 4.08579 21 4.5 21L9 21C9.41421 21 9.75 20.6642 9.75 20.25Z" stroke="#9D9D9F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 7.5L12 11.25" stroke="#9D9D9F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M6.74998 15L6.74998 13.5C6.74874 13.2042 6.80609 12.9111 6.91872 12.6375C7.03136 12.364 7.19704 12.1154 7.40622 11.9063C7.6154 11.6971 7.86393 11.5314 8.13748 11.4188C8.41102 11.3061 8.70416 11.2488 8.99998 11.25L15 11.25C15.2958 11.2488 15.5889 11.3061 15.8625 11.4188C16.136 11.5314 16.3846 11.6971 16.5937 11.9063C16.8029 12.1154 16.9686 12.364 17.0812 12.6375C17.1939 12.9111 17.2512 13.2042 17.25 13.5L17.25 15" stroke="#6D6C6F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <p className="methods-text">Site architecture</p>
          </div>
          <div className="methods-list">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19.3688 20.0908L4.36875 17.3626C4.19495 17.3318 4.03761 17.2405 3.92443 17.1051C3.81125 16.9696 3.74949 16.7986 3.75 16.622V7.37827C3.74949 7.20175 3.81125 7.03069 3.92443 6.89522C4.03761 6.75975 4.19495 6.66854 4.36875 6.63765L19.3688 3.90952C19.4768 3.89031 19.5878 3.89506 19.6939 3.92345C19.8 3.95183 19.8985 4.00315 19.9825 4.07379C20.0666 4.14443 20.1341 4.23266 20.1803 4.33225C20.2265 4.43184 20.2503 4.54036 20.25 4.65015V19.3501C20.2503 19.4599 20.2265 19.5685 20.1803 19.6681C20.1341 19.7676 20.0666 19.8559 19.9825 19.9265C19.8985 19.9971 19.8 20.0485 19.6939 20.0769C19.5878 20.1052 19.4768 20.11 19.3688 20.0908Z" stroke="#6D6C6F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M1.5 12H22.5" stroke="#9D9D9F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <p className="methods-text">Lo-fi design</p>
          </div>
          <div className="methods-list">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 20.25V3.75C18 2.92157 17.3284 2.25 16.5 2.25L7.5 2.25C6.67157 2.25 6 2.92157 6 3.75L6 20.25C6 21.0784 6.67157 21.75 7.5 21.75H16.5C17.3284 21.75 18 21.0784 18 20.25Z" stroke="#6D6C6F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 4.54688C12.5954 4.54688 13.0781 5.02957 13.0781 5.625C13.0781 6.22043 12.5954 6.70312 12 6.70312C11.4046 6.70312 10.9219 6.22043 10.9219 5.625C10.9219 5.02957 11.4046 4.54688 12 4.54688Z" fill="#6D6C6F" stroke="#9D9D9F" strokeWidth="0.09375"/>
            </svg>
            <p className="methods-text">Hi-fi prototype</p>
          </div>
          <div className="methods-list">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.75 11.25V6.375C15.75 5.87772 15.9475 5.40081 16.2991 5.04917C16.6508 4.69754 17.1277 4.5 17.625 4.5C18.1222 4.5 18.5992 4.69754 18.9508 5.04917C19.3024 5.40081 19.5 5.87772 19.5 6.375V14.25C19.5 15.2349 19.306 16.2102 18.9291 17.1201C18.5521 18.0301 17.9997 18.8569 17.3033 19.5533C16.6068 20.2497 15.78 20.8022 14.8701 21.1791C13.9601 21.556 12.9849 21.75 12 21.75C7.85621 21.75 5.99996 19.5 2.94371 13.0594C2.69507 12.628 2.62798 12.1155 2.7572 11.6346C2.88643 11.1538 3.20138 10.744 3.63277 10.4953C4.06416 10.2467 4.57666 10.1796 5.05751 10.3088C5.53837 10.438 5.94819 10.753 6.19683 11.1844L8.24996 14.7469V4.875C8.24996 4.37772 8.4475 3.90081 8.79913 3.54917C9.15076 3.19754 9.62768 3 10.125 3C10.6222 3 11.0992 3.19754 11.4508 3.54917C11.8024 3.90081 12 4.37772 12 4.875V11.25" stroke="#6D6C6F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M15.75 6.375V3.375C15.75 2.87772 15.5525 2.40081 15.2008 2.04917C14.8492 1.69754 14.3723 1.5 13.875 1.5C13.3777 1.5 12.9008 1.69754 12.5492 2.04917C12.1975 2.40081 12 2.87772 12 3.375V4.875" stroke="#9D9D9F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <p className="methods-text">User testing</p>
          </div>
        </div>
      </div>
    </div>

    {/* tools section */}
    <div className="tools-section">
      <p className="tools-section-title">Tools Used</p>
      <div className="tools-list">
        <div className="tools">
          <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="27" cy="27" r="27" fill="#2C2F42"/>
            <path d="M27.1562 27C27.1562 25.9391 27.5777 24.9217 28.3278 24.1716C29.078 23.4214 30.0954 23 31.1562 23C32.2171 23 33.2345 23.4214 33.9847 24.1716C34.7348 24.9217 35.1562 25.9391 35.1562 27C35.1562 28.0609 34.7348 29.0783 33.9847 29.8284C33.2345 30.5786 32.2171 31 31.1562 31C30.0954 31 29.078 30.5786 28.3278 29.8284C27.5777 29.0783 27.1562 28.0609 27.1562 27Z" fill="#1ABCFE"/>
            <path d="M19.1562 35C19.1562 33.9392 19.5777 32.9217 20.3278 32.1715C21.078 31.4214 22.0954 31 23.1562 31H27.1562V35C27.1562 36.0608 26.7348 37.0783 25.9847 37.8285C25.2345 38.5785 24.2171 39 23.1562 39C22.0954 39 21.078 38.5785 20.3278 37.8285C19.5777 37.0783 19.1562 36.0608 19.1562 35Z" fill="#0ACF83"/>
            <path d="M27.1562 15V23H31.1562C32.2171 23 33.2345 22.5786 33.9847 21.8284C34.7348 21.0783 35.1562 20.0609 35.1562 19C35.1562 17.9391 34.7348 16.9217 33.9847 16.1716C33.2345 15.4214 32.2171 15 31.1562 15H27.1562Z" fill="#FF7262"/>
            <path d="M19.1562 19C19.1562 20.0609 19.5777 21.0783 20.3278 21.8284C21.078 22.5786 22.0954 23 23.1562 23H27.1562V15H23.1562C22.0954 15 21.078 15.4214 20.3278 16.1716C19.5777 16.9217 19.1562 17.9391 19.1562 19Z" fill="#F24E1E"/>
            <path d="M19.1562 27C19.1562 28.0609 19.5777 29.0783 20.3278 29.8284C21.078 30.5786 22.0954 31 23.1562 31H27.1562V23H23.1562C22.0954 23 21.078 23.4214 20.3278 24.1716C19.5777 24.9217 19.1562 25.9391 19.1562 27Z" fill="#A259FF"/>
          </svg>

          <p className="tools-text">Figma</p>
        </div>
        <div className="tools">
          <svg width="55" height="54" viewBox="0 0 55 54" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="27.3333" cy="27" r="27" fill="#330000"/>
            <path d="M26.9123 32.0347H21.013L19.8077 35.7614C19.7943 35.8293 19.7559 35.8897 19.7001 35.9308C19.6444 35.9719 19.5753 35.9907 19.5064 35.9834H16.5251C16.3506 35.9834 16.3031 35.8882 16.3506 35.6979L21.457 20.9973C21.5046 20.8387 21.5522 20.6643 21.6156 20.474C21.6794 20.1341 21.7113 19.789 21.7107 19.4432C21.706 19.4035 21.7164 19.3634 21.7399 19.3311C21.7635 19.2987 21.7984 19.2764 21.8376 19.2687H25.9449C26.0718 19.2687 26.1352 19.3163 26.1511 19.3956L31.9393 35.7297C31.9869 35.9041 31.9393 35.9834 31.7808 35.9834H28.4664C28.4103 35.9888 28.3542 35.9743 28.3078 35.9424C28.2614 35.9105 28.2277 35.8632 28.2126 35.809L26.9123 32.0347ZM21.9328 28.8154H25.9608C25.8656 28.4824 25.7387 28.086 25.596 27.6736C25.4533 27.2613 25.3106 26.7856 25.1678 26.3098C25.0251 25.8341 24.8665 25.3425 24.708 24.8509C24.5494 24.3592 24.4066 23.8994 24.2798 23.4395C24.1529 22.9796 24.0419 22.5831 23.9309 22.2025H23.8992C23.7567 22.8937 23.5767 23.5766 23.36 24.2482C23.1221 25.0094 22.8843 25.8024 22.6305 26.5953C22.4085 27.404 22.1706 28.1494 21.9328 28.8154ZM35.3965 21.9805C35.1362 21.9862 34.8773 21.9401 34.635 21.8448C34.3927 21.7495 34.1718 21.6069 33.9851 21.4255C33.6217 21.0282 33.4282 20.5046 33.4459 19.9665C33.4365 19.7043 33.4825 19.4431 33.5809 19.1999C33.6793 18.9568 33.8278 18.737 34.0168 18.5551C34.398 18.1948 34.9037 17.9959 35.4282 18.0001C36.0466 18.0001 36.5224 18.1904 36.8713 18.5551C37.2226 18.9396 37.4103 19.4459 37.3946 19.9665C37.4043 20.2344 37.3601 20.5016 37.2648 20.7522C37.1695 21.0028 37.0249 21.2317 36.8396 21.4255C36.6527 21.6158 36.4272 21.7638 36.1782 21.8596C35.9293 21.9553 35.6627 21.9966 35.3965 21.9805ZM33.6203 35.7455V23.5346C33.6203 23.376 33.6838 23.3126 33.8265 23.3126H36.9664C37.1092 23.3126 37.1726 23.3919 37.1726 23.5346V35.7455C37.1726 35.92 37.1092 35.9992 36.9664 35.9992H33.8582C33.8249 36.002 33.7914 35.9972 33.7602 35.9852C33.7289 35.9731 33.7009 35.9542 33.678 35.9298C33.6551 35.9054 33.6381 35.8762 33.6281 35.8443C33.6181 35.8124 33.6154 35.7786 33.6203 35.7455Z" fill="#FF9A00"/>
          </svg>

          <p className="tools-text">Adobe Illustrator</p>
        </div>
        <div className="tools">
        <svg width="55" height="54" viewBox="0 0 55 54" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="0.666748" width="54" height="54" rx="27" fill="#07074F"/>
          <g clip-path="url(#clip0_3324_45907)">
          <path d="M31.2913 12.6792H20.1347C19.0861 12.6792 18.1667 13.5696 18.1667 14.5888V38.7707C18.1667 39.7888 19.0849 40.6803 20.1359 40.6803H37.1976C38.2474 40.6803 39.1667 39.7899 39.1667 38.7707V20.3154L34.5736 17.1334L31.2913 12.6792Z" fill="#4285F4"/>
          <path d="M23.4158 33.0429H33.9152V31.7706H23.4169L23.4158 33.0429ZM23.4158 35.5887H31.29V34.3164H23.4158V35.5887ZM23.4158 26.6791V27.9514H33.9152V26.6791H23.4158ZM23.4158 30.4972H33.9152V29.2248H23.4169L23.4158 30.4972Z" fill="#F1F1F1"/>
          <path d="M31.2915 12.6792V18.4069C31.2915 19.425 32.2097 20.3154 33.2595 20.3154H39.1658L31.2915 12.6792Z" fill="#A1C2FA"/>
          </g>
          <defs>
          <clipPath id="clip0_3324_45907">
          <rect width="28" height="28" fill="white" transform="translate(14.6667 12.6797)"/>
          </clipPath>
          </defs> 
        </svg>

          <p className="tools-text">Google Docs</p>
        </div>
        <div className="tools">
        <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="54" height="54" rx="27" fill="#033015"/>
        <g clip-path="url(#clip0_3324_45915)">
        <path d="M29.9456 12.1832H18.7894C17.7062 12.1832 16.8206 13.0473 16.8206 14.0967V38.2741C16.8206 39.3241 17.7062 40.1827 18.7894 40.1827H35.8503C36.9335 40.1827 37.8191 39.3241 37.8191 38.2741V19.8214L33.2226 16.6397L29.9456 12.1832Z" fill="#0F9D58"/>
        <path d="M22.072 25.8625V35.0916H32.5739V25.8625H22.072ZM26.6635 33.8179H23.3814V32.2271H26.6635V33.8179ZM26.6635 31.27H23.3814V29.6792H26.6635V31.27ZM26.6635 28.7276H23.3814V27.1368H26.6635V28.7276ZM31.26 33.8179H27.9773V32.2271H31.2594V33.8179H31.26ZM31.26 31.27H27.9773V29.6792H31.2594V31.27H31.26ZM31.26 28.7276H27.9773V27.1368H31.2594V28.7276H31.26Z" fill="#F1F1F1"/>
        <path d="M30.521 19.2638L37.8191 26.3387V19.8216L30.521 19.2638Z" fill="url(#paint0_linear_3324_45915)"/>
        <path d="M29.947 12.1857V17.9104C29.947 18.9653 30.8271 19.819 31.9158 19.819H37.8206L29.947 12.1857Z" fill="#87CEAC"/>
        <path d="M18.7894 12.1832C17.7062 12.1832 16.8206 13.0472 16.8206 14.0967V14.2553C16.8206 13.2053 17.7062 12.3467 18.7894 12.3467H29.9456V12.1826H18.7894V12.1832Z" fill="white" fill-opacity="0.2"/>
        <path d="M35.8509 40.0177H18.7894C17.7062 40.0177 16.8206 39.1591 16.8206 38.1091V38.2677C16.8206 39.3177 17.7062 40.1763 18.7894 40.1763H35.8503C36.9335 40.1763 37.8191 39.3177 37.8191 38.2677V38.1091C37.8191 39.1597 36.9335 40.0177 35.8509 40.0177Z" fill="#263238" fill-opacity="0.2"/>
        <path d="M31.9144 19.8212C30.8262 19.8212 29.9456 18.9681 29.9456 17.9126V18.0712C29.9456 19.1261 30.8256 19.9798 31.9144 19.9798H37.8191V19.8212H31.9144Z" fill="#263238" fill-opacity="0.1"/>
        <path d="M29.9456 12.1832H18.7894C17.7062 12.1832 16.8206 13.0473 16.8206 14.0967V38.2741C16.8206 39.3241 17.7062 40.1827 18.7894 40.1827H35.8503C36.9335 40.1827 37.8191 39.3241 37.8191 38.2741V19.8214L29.9456 12.1832Z" fill="url(#paint1_radial_3324_45915)"/>
        </g>
        <defs>
        <linearGradient id="paint0_linear_3324_45915" x1="34.17" y1="19.8704" x2="34.17" y2="26.3386" gradientUnits="userSpaceOnUse">
        <stop stop-color="#263238" stop-opacity="0.2"/>
        <stop offset="1" stop-color="#263238" stop-opacity="0.02"/>
        </linearGradient>
        <radialGradient id="paint1_radial_3324_45915" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(17.4858 12.945) scale(33.8661 32.8303)">
        <stop stop-color="white" stop-opacity="0.1"/>
        <stop offset="1" stop-color="white" stop-opacity="0"/>
        </radialGradient>
        <clipPath id="clip0_3324_45915">
        <rect width="28" height="28" fill="white" transform="translate(13 12.1821)"/>
        </clipPath>
        </defs>
        </svg>

          <p className="tools-text">Google Sheets</p>
        </div>
      </div>
    </div>
        </>
      )}
      
    </div>
        </>

    );
};

  export default Overview;