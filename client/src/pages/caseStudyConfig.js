// src/pages/caseStudyConfig.js
const caseStudyConfig = {
    '180by2': {
      sections: ['Overview', 'Challenge', 'Results', 'Conclusion'],
      showTeam: false,
      showTimeline: false,
      showNextProject: 'nutch',
      nextProjectTitle: 'Nutch',
      showPreviousProject: 'pivo',
      previousProjectTitle: 'Pivo'
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
      showNextProject: '180by2',
      nextProjectTitle: '180by2',
      showPreviousProject: 'nutch',
      previousProjectTitle: 'Nutch'
    },
};

export default caseStudyConfig;