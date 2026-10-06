// src/config/caseStudyConfig.js
const caseStudyConfig = {
    '180by2': {
      sections: ['Overview', 'Challenge', 'Results', 'Conclusion'],
      showTeam: false,
      showTimeline: false,
      showNextProject: 'nutch',
      nextProjectTitle: 'Nutch',
      showPreviousProject: 'portfolio',
      previousProjectTitle: 'Portfolio'
    },
    'nutch': {
      sections: ['Overview', 'Challenge', 'Results', 'Conclusion'],
      showTeam: true,
      showTimeline: true,
      showNextProject: 'pivo',
      nextProjectTitle: 'Pivo',
      showPreviousProject: '180by2',
      previousProjectTitle: '180by2'
    },
    'pivo': {
      sections: ['Overview', 'Challenge', 'Solution', 'Results','Conclusion'],
      showTeam: true,
      showTimeline: true,
      showNextProject: 'portfolio',
      nextProjectTitle: 'Portfolio',
      showPreviousProject: 'nutch',
      previousProjectTitle: 'Nutch'
    },
    'portfolio': {
      sections: ['Overview', 'Challenge', 'Solution', 'Results','Conclusion'],
      showTeam: true,
      showTimeline: false,
      showNextProject: '180by2',
      nextProjectTitle: '180by2',
      showPreviousProject: 'pivo',
      previousProjectTitle: 'Pivo'
    },
    'liberterra': {
      sections: ['Overview', 'Challenge', 'Solution', 'Results','Conclusion'],
      showTeam: false,
      showTimeline: true,
      showNextProject: 'gidigan',
      nextProjectTitle: 'Gidigan',
      showPreviousProject: 'portfolio',
      previousProjectTitle: 'Portfolio'
    },
    'gidigan': {
      sections: ['Overview', 'Challenge', 'Solution', 'Results'],
      showTeam: true,
      showTimeline: false,
      showNextProject: 'portfolio',
      nextProjectTitle: 'Portfolio',
      showPreviousProject: 'pivo',
      previousProjectTitle: 'pivo'
    },
};

export default caseStudyConfig;