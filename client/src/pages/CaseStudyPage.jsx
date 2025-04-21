// src/pages/CaseStudyPage.jsx
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import caseStudyConfig from '../config/caseStudyConfig';
import SectionRegistry from '../components/case-study/SectionRegistry';
import '../styles/CaseStudy.css';

const CaseStudyPage = () => {
  const [caseStudy, setCaseStudy] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { projectId } = useParams();
  const navigate = useNavigate();

  const API_BASE_URL = process.env.NODE_ENV === 'production' 
  ? '/api' 
  : 'http://localhost:3001/api';

  useEffect(() => {
    const fetchCaseStudy = async () => {
      try {
        setIsLoading(true);
        setError(null);
        
        // Get case study data from API
        const response = await axios.get(`${API_BASE_URL}/portfolio/${projectId}`);
        setCaseStudy(response.data);
        setIsLoading(false);
      } catch (err) {
        console.error('Error fetching case study:', err);
        setError('Failed to load case study. Please try again later.');
        setIsLoading(false);
      }
    };
    
    fetchCaseStudy();
  }, [projectId, API_BASE_URL]);
  
  // Handle back button
  const handleBack = () => {
    navigate(-1);
  };
  
  if (isLoading) {
    return <div className="case-study-loading">Loading...</div>;
  }
  
  if (error || !caseStudy) {
    return <div className="case-study-error">{error || 'Case study not found'}</div>;
  }
  
  // Get config for this case study, or use default if not found
  const config = caseStudyConfig[projectId] || {
    sections: ['Overview'],
    showTeam: false,
    showTimeline: false
  };
  
  return (
    <div className="case-study-container">
      <button 
        className="back-button"
        onClick={handleBack}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 19.5L7.5 12L15 4.5" stroke="#6D6C6F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
         Back to Portfolio
      </button>
      

      
      <div className="case-study-content">
        {/* Dynamically render sections based on config */}
        {config.sections.map((sectionName) => {
          const SectionComponent = SectionRegistry[sectionName];
          return SectionComponent ? (
            <SectionComponent 
              key={sectionName} 
              project={caseStudy} 
            />
          ) : null;
        })}
        
      </div>
      
      {/* Next project navigation */}
{/* Next project navigation - updated to match Figma design */}
{config.showNextProject && (
  <div className="case-study-footer">
    <div className="case-study-footer-content">
      <p className="thank-you-text">Thank you for reading.</p>
      <Link 
        to={`/portfolio/${config.showNextProject}`}
        className="next-case-study-link"
      >
        Next
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28Z" stroke="currentColor" stroke-width="2" stroke-miterlimit="10"/>
        <path d="M16.7625 20.2377L21 16.0002L16.7625 11.7627" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M11 16H21" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>

      </Link>
    </div>
  </div>
)}
    </div>
  );
};

export default CaseStudyPage;