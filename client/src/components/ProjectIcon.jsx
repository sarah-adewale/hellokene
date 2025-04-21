// Icon components
const ProjectIcon = ({ name, color }) => {
  // Define SVG paths for different icons
  const getIconPath = (iconName) => {
    switch (iconName) {
      case 'Website':
        return (
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.1875 9.625V3.9375C2.1875 3.70544 2.27969 3.48288 2.44378 3.31878C2.60788 3.15469 2.83044 3.0625 3.0625 3.0625H10.9375C11.1696 3.0625 11.3921 3.15469 11.5562 3.31878C11.7203 3.48288 11.8125 3.70544 11.8125 3.9375V9.625" stroke={color} stroke-width="0.875" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M1.3125 9.625H12.6875V10.5C12.6875 10.7321 12.5953 10.9546 12.4312 11.1187C12.2671 11.2828 12.0446 11.375 11.8125 11.375H2.1875C1.95544 11.375 1.73288 11.2828 1.56878 11.1187C1.40469 10.9546 1.3125 10.7321 1.3125 10.5V9.625Z" stroke={color} stroke-width="0.875" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M7.875 4.8125H6.125" stroke={color} stroke-width="0.875" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        );
      case 'Globe':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M2 12H22" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22C9.49872 19.2616 8.07725 15.708 8 12C8.07725 8.29203 9.49872 4.73835 12 2Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
      case 'LeafyGreen':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.5 9.5C4.5 12.5 4.5 18.5 4.5 18.5C4.5 18.5 10.5 18.5 13.5 16.5C16.5 14.5 16.5 11.5 14.5 9.5C12.5 7.5 9.5 7.5 6.5 9.5Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M14.5 7.5C15.2372 6.76275 16.2372 6.34937 17.25 6.34937C18.2628 6.34937 19.2628 6.76275 20 7.5C20.7373 8.23725 21.1506 9.23725 21.1506 10.25C21.1506 11.2628 20.7373 12.2628 20 13L16.5 16.5L13 13" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M9 16C9 16 9.5 14.5 11 13" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
      case 'ChartBar':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 20V10" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 20V4" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M6 20V14" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="project-icon" style={{ backgroundColor: `${color}20` }}>
      {getIconPath(name)}
    </div>
  );
};