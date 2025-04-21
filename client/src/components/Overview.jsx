import { useTheme } from "../context/ThemeContext";

const Overview = ({ project }) => {
  const { theme, toggleTheme } = useTheme();
    return(
        <>

      <div className="case-study-overview">

      {/* Case Study Header */}
      <div className="case-study-header">
        <h1>{project.title}</h1>
        <p className="subtitle">A Journey from Pain Points to Product Excellence</p>
        
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
    </div>
        </>
        
    );
};

  export default Overview;