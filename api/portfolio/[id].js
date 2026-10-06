// GET /api/portfolio/:id - a single project
const { portfolioProjects } = require('../_data/projects');

module.exports = function handler(req, res) {
  const { method, query } = req;
  
  if (method === 'GET') {
    const { id } = query;
    
    try {
      const project = portfolioProjects.find(p => p.id === id);
      
      if (!project) {
        return res.status(404).json({ message: 'Project not found' });
      }
      
      return res.status(200).json(project);
    } catch (error) {
      console.error('Error in getPortfolioProject:', error);
      return res.status(500).json({ error: 'Server error' });
    }
  }
  
  // Method not allowed
  res.setHeader('Allow', ['GET']);
  res.status(405).end(`Method ${method} Not Allowed`);
};
