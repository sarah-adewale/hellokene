// The single source of project data. Read by the Vercel functions in
// api/portfolio/ and by the local Express server (server/data.js), so a
// project added here shows up both locally and in production.
//
// The leading underscore keeps Vercel from serving this file as a route.
const portfolioProjects = [
  {
    id: '180by2',
    title: '180by2 shopping experience',
    subtitle: 'A UX campaign to generate over R300k in sales, leveraging user feedback and analytics',
    description: 'A UX campaign to generate over R300k in sales, leveraging user feedback and analytics',
    category: ['E-commerce'],
    imageUrl: '/images/180by2.svg',
    gridImageUrl: '/images/180by2.svg',
    // Homepage highlight: the screen recording framed as a browser window.
    // Animated WebP converted from 180by2-shader.gif / colletions-menu.gif
    // (5.4MB instead of 20MB, same frames and timing).
    showcase: {
      background: '/images/180by2-shader.webp',
      screen: '/images/colletions-menu.webp',
    },
    readTime: '7 min read',
    caseStudyUrl: '/portfolio/180by2',
    projectUrl: 'https://180by2.co.za/',
    platforms: ["webapp"],
  },
  {
    id: 'nutch',
    title: 'Building Nutch',
    subtitle: 'Designing an AI-native workflow from first principles.',
    description: 'Designing an AI-native workflow from first principles.',
    category: ['AI'],
    imageUrl: '/images/nutch.svg',
    hoverImageUrl: '/images/nutch-hover.svg',
    gridImageUrl: '/images/nutch-highlight.gif',
    readTime: '5 min read',
    caseStudyUrl: '/portfolio/nutch',
    // "Join waitlist" shows but isn't clickable until this is set
    waitlistUrl: '',
    highlighted: true,
    growthDesign: false,
    productDesign: true,
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
    gridImageUrl: '/images/pivo-highlight.webp',
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
    id: 'liberterra',
    title: 'LiberTerra',
    subtitle: 'A secure platform for property sales & management services in Nigeria and the UK',
    description: 'A secure platform for property sales & management services in Nigeria and the UK',
    category: ['Real Estate'],
    imageUrl: '/images/new-liberterra-img.svg',
    hoverImageUrl: '/images/new-liberterra-img-hover.svg',
    gridImageUrl: '/images/liberterra-project.webp',
    readTime: '7 min read',
    projectUrl: 'https://www.behance.net/gallery/111156945/LiberTerra',
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
    id: 'tradevu',
    title: 'Tradevu Website',
    category: ['Business Portfolio'],
    imageUrl: '/images/tradevu-website-1.png',
    mobileImageUrl: '/images/tradevu-mobile.webp',
    isWebsite: true,
    projectUrl: 'https://www.tradevu.co',
  },
  {
    id: 'smartpathways-website',
    title: 'Smart Pathways',
    category: ['Business Portfolio'],
    imageUrl: '/images/smartpathways.png',
    mobileImageUrl: '/images/smart-mobile.webp',
    isWebsite: true,
    projectUrl: 'https://smart-pathways.netlify.app/',
  },
  {
    id: 'laundrybasket-website',
    title: 'Laundry Basket',
    category: ['Admin Dashboard'],
    imageUrl: '/images/laundrybasketimg.svg',
    isWebsite: true,
    projectUrl: 'https://laundrysquared.onrender.com/',
  },
  {
    id: 'gidigan-website',
    title: 'Gidigan',
    category: ['Saas'],
    imageUrl: '/images/gidiganimg.webp',
    isWebsite: true,
    projectUrl: 'https://gidigan.netlify.app/',
  },
  {
    id: 'agri-youth',
    title: 'Agri Youth',
    category: ['Website'],
    imageUrl: '/images/agri-youth.png',
    mobileImageUrl: '/images/AT-mobile.webp',
    isWebsite: true,
  },
  {
    id: 'african-technopreneurs',
    title: 'African Technopreneurs',
    category: ['Website'],
    imageUrl: '/images/african-tech.png',
    mobileImageUrl: '/images/AT2-mobile.webp',
    isWebsite: true,
    projectUrl: 'https://www.africantechno.com/',
  },
  // Brand marks, in the order the design lays them out
  {
    id: 'brand-pivo',
    title: 'Pivo',
    imageUrl: '/images/pivo-brand.svg',
    hoverImageUrl: '/images/inv-pivo-brand.svg',
    isBrand: true,
  },
  {
    id: 'brand-theresa',
    title: 'Theresa Josiah Realty',
    imageUrl: '/images/therasa-brand.svg',
    hoverImageUrl: '/images/inv-therasa-brand.svg',
    isBrand: true,
  },
  {
    id: 'brand-capital',
    title: 'capital by Tradevu',
    imageUrl: '/images/capital-by-tradevu-brand.svg',
    hoverImageUrl: '/images/inv-capital-by-tradevu-brand.svg',
    isBrand: true,
  },
  {
    id: 'brand-adrois',
    title: 'adrois',
    imageUrl: '/images/adrois-brand.svg',
    hoverImageUrl: '/images/inv-adrois-brand.svg',
    isBrand: true,
  },
  {
    id: 'brand-smylz',
    title: 'smylz',
    imageUrl: '/images/smylz-brand.svg',
    hoverImageUrl: '/images/inv-smylz-brand.svg',
    isBrand: true,
  },
  {
    id: 'brand-gidigan',
    title: 'Gidigan',
    imageUrl: '/images/gidigan-brand.svg',
    hoverImageUrl: '/images/inv-gidigan-brand.svg',
    isBrand: true,
  },
  {
    id: 'brand-nutch',
    title: 'nutch',
    imageUrl: '/images/nutch-brand.svg',
    hoverImageUrl: '/images/inv-nutch-brand.svg',
    isBrand: true,
  },
  {
    id: 'brand-textfx',
    title: 'Text FX',
    imageUrl: '/images/textfx-brand.svg',
    hoverImageUrl: '/images/inv-textfx-brand.svg',
    isBrand: true,
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

module.exports = { portfolioProjects };
