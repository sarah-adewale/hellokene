// src/config/caseStudyConfig.js
const caseStudyConfig = {
    'nutch': {
      sections: ['Overview', 'Challenge', 'Results', 'Conclusion'],
      showTeam: true,
      showTimeline: true,
      showNextProject: 'pivo',
      nextProjectTitle: 'Pivo',
    },
    'pivo': {
      sections: ['Overview', 'Challenge', 'Solution', 'Results','Conclusion'],
      showTeam: true,
      showTimeline: true,
      showNextProject: 'portfolio',
      nextProjectTitle: 'Portfolio',
      showPreviousProject: 'gidigan',
      previousProjectTitle: 'Gidigan'
    },
    'portfolio': {
      sections: ['Overview', 'Challenge', 'Solution', 'Results','Conclusion'],
      showTeam: true,
      showTimeline: false,
      showNextProject: 'liberterra',
      nextProjectTitle: 'Gidigan',
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