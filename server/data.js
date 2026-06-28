// data.js - Your projects data store
// This file serves as your data source without needing a database

const portfolioProjects = [
    {
      id: 'nutch',
      title: 'Building Nutch',
      subtitle: 'Designing an AI-native workflow from first principles.',
      description: 'Designing an AI-native workflow from first principles.',
      category: ['AI'],
      imageUrl: '/images/nutch.svg',
      hoverImageUrl: '/images/nutch-hover.svg',
      gridImageUrl: '/images/nutch-grid.svg',
      readTime: '5 min read',
      caseStudyUrl: '/portfolio/nutch',
      isWebsite: false,
      platforms: ["extension"],
      icon: {
        name: 'Website',
        color: '#9D9D9F'
      }
    },
    {
      id: 'pivo',
      title: 'Pivo: Scaling Customer Onboarding',
      subtitle: 'A finance platform, providing credit and business tools to supply chain SMEs.',
      description: 'Designed a mobile banking experience that helps SMEs manage their finances easily.',
      category: ['Fintech'],
      imageUrl: '/images/new-pivo-img.svg',
      hoverImageUrl: '/images/new-pivo-img-hover.svg',
      gridImageUrl: '/images/new-pivo-grid-img.svg',
      readTime: '10 min read',
      caseStudyUrl: '/portfolio/pivo',
      isWebsite: false,
      platforms: ["webapp", "android", "ios"],
      icon: {
        name: 'Website',
        color: '#9D9D9F'
      }
    },
    {
      id: 'portfolio',
      title: 'Portfolio Refresh',
      subtitle: 'An updated portfolio of work, showing increased aptitude and experience.',
      description: 'Designed and developed a personal portfolio website to showcase my projects.',
      category: ['Portfolio'],
      imageUrl: '/images/new-portfolio-img.svg',
      hoverImageUrl: '/images/new-portfolio-img-hover.svg',
      gridImageUrl: '/images/new-portfolio-grid-img.svg',
      readTime: '4 min read',
      caseStudyUrl: '/portfolio/portfolio',
      isWebsite: false,
      figmaUrl: 'YOUR_FIGMA_URL_HERE',
      platforms: ["webapp"],
      icon: {
        name: 'Globe',
        color: '#10B981'
      }
    },
    {
      id: 'liberterra',
      title: 'LiberTerra',
      subtitle: 'A secure platform for property sales & management services in Nigeria and the UK',
      description: 'A secure platform for property sales & management services in Nigeria and the UK',
      category: ['Real Estate'],
      imageUrl: '/images/new-liberterra-img.svg',
      hoverImageUrl: '/images/new-liberterra-img-hover.svg',
      gridImageUrl: '/images/liberterra-grid.svg',
      readTime: '7 min read',
      projectUrl: 'https://www.behance.net/gallery/111156945/LiberTerra',
      isWebsite: false,
      figmaUrl: 'YOUR_FIGMA_URL_HERE',
      platforms: ["webapp"],
      icon: {
        name: 'LeafyGreen',
        color: '#84CC16'
      }
    },

    {
      id: 'laundrybasket',
      title: 'Laundry Basket',
      subtitle: 'An order & customer management platform for laundry service in Sedona, Arizona',
      description: 'A platform for sports betting analytics and insights.',
      category: ['Admin Dashboard'],
      imageUrl: '/images/laundry-basket.svg',
      hoverImageUrl: '/images/laundry-basket-hover.svg',
      gridImageUrl: '/images/laundry-basket-grid.svg',
      readTime: '--',
      projectUrl: 'https://laundry-squared.netlify.app/',
      requiresCredentials: true,
      isWebsite: false,
      platforms: ["webapp"],
      icon: {
        name: 'ChartBar',
        color: '#F59E0B'
      }
    },
    {
      id: 'gidigan',
      title: 'Gidigan',
      subtitle: 'An online service creators and professionals can use to buy and sell products & services',
      description: 'Designed a mobile banking experience that helps SMEs manage their finances easily.',
      category: ['Saas'],
      imageUrl: '/images/gidigan.svg',
      hoverImageUrl: '/images/gidigan-hover.svg',
      gridImageUrl: '/images/gidigan-grid.svg',
      readTime: '--',
      projectUrl: 'https://gidigan.netlify.app/',
      isWebsite: false,
      figmaUrl: 'YOUR_FIGMA_URL_HERE',
      platforms: ["webapp"],
      icon: {
        name: 'Website',
        color: '#9D9D9F'
      }
    },
    {
      id: 'tradevu',
      title: 'Tradevu Website',
      category: ['Business Portfolio'],
      imageUrl: '/images/tradevu-website-1.png',
      mobileImageUrl: '/images/tradevu-mobile.svg',
      isWebsite: true,
      projectUrl: 'https://www.tradevu.co',
    },
    {
      id: 'smartpathways',
      title: 'Smart Pathways',
      category: ['Business Portfolio'],
      imageUrl: '/images/smartpathways.png',
      mobileImageUrl: '/images/smart-mobile.svg',
      isWebsite: true,
      projectUrl: 'https://smart-pathways.netlify.app/',
    },
    {
      id: 'agri-youth',
      title: 'Agri Youth',
      category: ['Website'],
      imageUrl: '/images/agri-youth.png',
      mobileImageUrl: '/images/AT-mobile.svg',
      isWebsite: true,
    },
    {
      id: 'african-technopreneurs',
      title: 'African Technopreneurs',
      category: ['Website'],
      imageUrl: '/images/african-tech.png',
      mobileImageUrl: '/images/AT2-mobile.svg',
      isWebsite: true,
      projectUrl: 'https://www.africantechno.com/',
    },
    {
      id: 'illustration1',
      title: 'Rick Sanchez',
      imageUrl: '/images/rick-sanchez.svg',
      isIllustration: true,
      highlighted: false,
      growthDesign: false,
      productDesign: false
    },
    {
      id: 'illustration2',
      title: 'smoking kills',
      imageUrl: '/images/smoking-kills1.svg',
      isIllustration: true,
      highlighted: false,
      growthDesign: false,
      productDesign: false
    },
    {
      id: 'illustration3',
      title: 'document parsing',
      imageUrl: '/images/floating-light-illustration.svg',
      isIllustration: true,
      highlighted: false,
      growthDesign: false,
      productDesign: false
    },
    {
      id: 'illustration4',
      title: 'platform access',
      imageUrl: '/images/finance-illustration.svg',
      isIllustration: true,
      highlighted: false,
      growthDesign: false,
      productDesign: false
    },
    {
      id: 'pedros-cat',
      title: "Pedro's cat",
      imageUrl: '/images/cat.png',
      isIllustration: true,
      highlighted: false,
      growthDesign: false,
      productDesign: false
    },
    {
      id: 'akame',
      title: 'akame',
      imageUrl: '/images/akame 1.svg',
      isIllustration: true,
      highlighted: false,
      growthDesign: false,
      productDesign: false
    },
    {
      id: 'access-asset',
      title: 'access asset',
      imageUrl: '/images/hand.svg',
      isIllustration: true,
      highlighted: false,
      growthDesign: false,
      productDesign: false
    }
  ];
  
  module.exports = {
    portfolioProjects
  };