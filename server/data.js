// data.js - Your projects data store
// This file serves as your data source without needing a database

const portfolioProjects = [
    {
      id: 'pivo',
      title: 'Pivo',
      subtitle: 'A finance platform, providing credit and business tools to supply chain SMEs.',
      description: 'Designed a mobile banking experience that helps SMEs manage their finances easily.',
      category: ['Fintech'],
      imageUrl: '/images/new-pivo-img.svg',
      hoverImageUrl: '/images/new-pivo-img-hover.svg',
      gridImageUrl: '/images/new-pivo-grid-img.svg',
      readTime: '10 min read',
      caseStudyUrl: '/portfolio/pivo',
      highlighted: true,
      growthDesign: true,
      productDesign: false,
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
      caseStudyUrl: '/portfolio/portfolio', // Internal link to case study
      highlighted: true,
      growthDesign: true,
      productDesign: false,
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
      caseStudyUrl: '/portfolio/liberterra',
      highlighted: false,
      growthDesign: false,
      productDesign: true,
      platforms: ["webapp"],
      icon: {
        name: 'LeafyGreen',
        color: '#84CC16'
      }
    },
    {
      id: 'betweysure',
      title: 'Betweysure',
      subtitle: 'Betweysure is a football forecast & prediction platform for punters and gamblers',
      description: 'A platform for sports betting analytics and insights.',
      category: ['Sports Analytics'],
      imageUrl: '/images/new-betweysure-img.svg',
      hoverImageUrl: '/images/new-betweysure-img-hover.svg',
      gridImageUrl: '/images/betweysure-grid.svg',
      readTime: '5 min read',
      projectUrl: 'https://pivo.app',
      highlighted: false,
      growthDesign: false,
      productDesign: true,
      platforms: ["webapp"],
      icon: {
        name: 'ChartBar',
        color: '#F59E0B'
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
      readTime: '5 min read',
      projectUrl: 'https://pivo.app',
      requiresCredentials: true,
      highlighted: true,
      growthDesign: false,
      productDesign: true,
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
      readTime: '6 min read',
      caseStudyUrl: '/portfolio/gidigan',
      highlighted: false,
      growthDesign: false,
      productDesign: true,
      platforms: ["webapp"],
      icon: {
        name: 'Website',
        color: '#9D9D9F'
      }
    },
    {
      id: 'smartpathways',
      title: 'Smart Pathways',
      subtitle: 'Guidance and support services for students & professionals migrating to Canada',
      description: 'A platform for sports betting analytics and insights.',
      category: ['Business Portfolio'],
      imageUrl: '/images/smart-pathways.svg',
      hoverImageUrl: '/images/smart-pathways-hover.svg',
      gridImageUrl: '/images/smart-pathways-grid.svg',
      readTime: '5 min read',
      projectUrl: 'https://pivo.app',
      highlighted: false,
      growthDesign: false,
      productDesign: true,
      platforms: ["webapp"],
      icon: {
        name: 'ChartBar',
        color: '#F59E0B'
      }
    },
    {
      id: 'illustration1',
      title: 'Nature Series',
      imageUrl: '/images/rick-illustration.svg',
      isIllustration: true,
      highlighted: false,
      growthDesign: false,
      productDesign: false
    },
    {
      id: 'illustration2',
      title: 'Tech Icons',
      imageUrl: '/images/keanu-illustration.svg',
      isIllustration: true,
      highlighted: false,
      growthDesign: false,
      productDesign: false
    },
    {
      id: 'illustration3',
      title: 'Abstract Art',
      imageUrl: '/images/floating-light-illustration.svg',
      isIllustration: true,
      highlighted: false,
      growthDesign: false,
      productDesign: false
    },
    {
      id: 'illustration4',
      title: 'UI Components',
      imageUrl: '/images/finance-illustration.svg',
      isIllustration: true,
      highlighted: false,
      growthDesign: false,
      productDesign: false
    },
    {
      id: 'illustration5',
      title: 'Branding Elements',
      imageUrl: '/images/illustration2.svg',
      isIllustration: true,
      highlighted: false,
      growthDesign: false,
      productDesign: false
    },
    {
      id: 'illustration6',
      title: 'Infographics',
      imageUrl: '/images/illustration2.svg',
      isIllustration: true,
      highlighted: false,
      growthDesign: false,
      productDesign: false
    }
  ];
  
  module.exports = {
    portfolioProjects
  };