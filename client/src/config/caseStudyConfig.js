// src/config/caseStudyConfig.js
const caseStudyConfig = {
    'pivo': {
      sections: ['Overview', 'Challenge', 'Solution', 'Results','Conclusion'],
      showTeam: true,
      showTimeline: true,
      showNextProject: 'portfolio',
      nextProjectTitle: 'Gidigan'
    },
    'portfolio': {
      sections: ['Overview', 'Challenge', 'Solution', 'Results','Conclusion'],
      showTeam: true,
      showTimeline: false,
      showNextProject: 'liberterra',
      nextProjectTitle: 'Gidigan'
    },
    'liberterra': {
      sections: ['Overview', 'Challenge', 'Solution', 'Results','Conclusion'],
      showTeam: false,
      showTimeline: true,
      showNextProject: 'gidigan',
      nextProjectTitle: 'Gidigan'
    },
    'gidigan': {
      sections: ['Overview', 'Challenge', 'Solution', 'Results'],
      showTeam: true,
      showTimeline: false,
      showNextProject: 'portfolio',
      nextProjectTitle: 'Gidigan'
    },
  };
  
  export default caseStudyConfig;