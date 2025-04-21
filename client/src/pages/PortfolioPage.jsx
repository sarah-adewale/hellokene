import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PortfolioCard from '../components/PortfolioCard';

const PortfolioPage = () => {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState('all');
  const [viewMode, setViewMode] = useState('list'); // 'list' or 'grid'
  
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get('/api/portfolio');
        setProjects(response.data);
        setFilteredProjects(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching projects:', error);
        setIsLoading(false);
      }
    };
    
    fetchProjects();
  }, []);
  
  // Filter projects when category changes
  useEffect(() => {
    if (activeCategory === 'all') {
      setFilteredProjects(projects);
    } else if (activeCategory === 'web') {
      const filtered = projects.filter(project => 
        project.category.some(cat => ['Web', 'Website'].includes(cat))
      );
      setFilteredProjects(filtered);
    } else if (activeCategory === 'app') {
      const filtered = projects.filter(project => 
        project.category.some(cat => ['App', 'Mobile', 'Application'].includes(cat))
      );
      setFilteredProjects(filtered);
    } else if (activeCategory === 'other') {
      const filtered = projects.filter(project => 
        project.category.some(cat => 
          !['Web', 'Website', 'App', 'Mobile', 'Application'].includes(cat)
        )
      );
      setFilteredProjects(filtered);
    }
  }, [activeCategory, projects]);
  
  return (
    <div className="pt-24 section-container">
      <h1 className="text-4xl font-medium text-text-primary mb-8">Portfolio</h1>
      
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        {/* Category filters */}
        <div className="flex space-x-4 mb-4 md:mb-0">
          <button 
            className={`px-4 py-2 text-base rounded-full ${
              activeCategory === 'all' 
                ? 'border border-[#654EA3] text-text-primary' 
                : 'text-text-tertiary'
            }`}
            onClick={() => setActiveCategory('all')}
          >
            All
          </button>
          <button 
            className={`px-4 py-2 text-base rounded-full ${
              activeCategory === 'web' 
                ? 'border border-[#654EA3] text-text-primary' 
                : 'text-text-tertiary'
            }`}
            onClick={() => setActiveCategory('web')}
          >
            Web
          </button>
          <button 
            className={`px-4 py-2 text-base rounded-full ${
              activeCategory === 'app' 
                ? 'border border-[#654EA3] text-text-primary' 
                : 'text-text-tertiary'
            }`}
            onClick={() => setActiveCategory('app')}
          >
            App
          </button>
          <button 
            className={`px-4 py-2 text-base rounded-full ${
              activeCategory === 'other' 
                ? 'border border-[#654EA3] text-text-primary' 
                : 'text-text-tertiary'
            }`}
            onClick={() => setActiveCategory('other')}
          >
            Other
          </button>
        </div>
        
        {/* View mode toggle */}
        <div className="flex items-center space-x-3">
          <button 
            id="list-filter"
            className="p-2 rounded-full"
            onClick={() => setViewMode('list')}
          >
            <svg 
              className={`w-5 h-5 ${viewMode === 'list' ? 'text-text-primary' : 'text-text-tertiary'}`}
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
          
          <div className="w-px h-4 bg-text-disabled"></div>
          
          <button 
            id="grid-filter"
            className="p-2 rounded-full"
            onClick={() => setViewMode('grid')}
          >
            <svg 
              className={`w-5 h-5 ${viewMode === 'grid' ? 'text-text-primary' : 'text-text-tertiary'}`}
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M4 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1v-4zM14 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      
      {isLoading ? (
        <div className="flex justify-center py-20">
          <svg 
            className="animate-spin h-10 w-10 text-text-secondary" 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24"
          >
            <circle 
              className="opacity-25" 
              cx="12" 
              cy="12" 
              r="10" 
              stroke="currentColor" 
              strokeWidth="4"
            ></circle>
            <path 
              className="opacity-75" 
              fill="currentColor" 
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        </div>
      ) : filteredProjects.length === 0 ? (
        <div className="empty-state flex flex-col items-center justify-center py-20">
          <img 
            src="/images/mouse.gif" 
            alt="No projects found" 
            className="w-40 h-40 mb-4"
          />
          <p className="text-2xl text-text-tertiary">
            No projects in this category yet.
          </p>
        </div>
      ) : (
        <div className={`projects ${viewMode === 'list' ? 'list-view' : ''}`}>
          {filteredProjects.map((project) => (
            <PortfolioCard 
              key={project.id} 
              project={project} 
              viewMode={viewMode}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default PortfolioPage;