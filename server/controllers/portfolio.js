const { portfolioProjects } = require('../data');

module.exports = {
  // Get all portfolio projects
  getPortfolioProjects: (req, res) => {
    // You can add filtering logic here based on query parameters
    // For example: category, search term, etc.
    const { category } = req.query;
    
    if (category) {
      const filteredProjects = portfolioProjects.filter(project => 
        project.category && project.category.includes(category)
      );
      return res.json(filteredProjects);
    }
    
    res.json(portfolioProjects);
  },
  
  // Get a specific portfolio project by ID
  getPortfolioProject: (req, res) => {
    const { id } = req.params;
    
    try {
      // Find the project with the matching ID
      const project = portfolioProjects.find(p => p.id === id);
      
      if (!project) {
        return res.status(404).json({ message: 'Project not found' });
      }
      
      // Return the project data
      return res.json(project);
    } catch (error) {
      console.error('Error in getPortfolioProject:', error);
      return res.status(500).json({ error: 'Server error' });
    }
  }
}