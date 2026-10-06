// GET /api/portfolio - every project, optionally filtered by ?category=
const { portfolioProjects } = require('../_data/projects');

module.exports = function handler(req, res) {
  const { method, query } = req;
  
  if (method === 'GET') {
    const { category } = query;
    
    if (category) {
      const filteredProjects = portfolioProjects.filter(project => 
        project.category && project.category.includes(category)
      );
      return res.status(200).json(filteredProjects);
    }
    
    return res.status(200).json(portfolioProjects);
  }
  
  // Method not allowed
  res.setHeader('Allow', ['GET']);
  res.status(405).end(`Method ${method} Not Allowed`);
};
