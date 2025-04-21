// src/components/case-study/Challenge.jsx
import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Link } from 'react-router-dom';

const Conclusion = ({ project }) => {
  const { theme, toggleTheme } = useTheme();
  const [modalImage, setModalImage] = useState(null);

  const openImageModal = (imageUrl, altText) => {
    setModalImage({ url: imageUrl, alt: altText });
  };

  const closeImageModal = () => {
    setModalImage(null);
  };
  // Only show specific content for the Pivo project
  if (project.id !== 'pivo') {
    return (
      <section className="case-study-section challenge">
        <h2>The Conclusion</h2>
        <p>Every project has a concluding part.</p>
      </section>
    );
  }

  return (
    <>
        <div className='case-study-conclusion'>
            <h2 className='conclusion-title'>Conclusion</h2>
            <p className='conclusion-content'>This case study highlights our journey to transform the onboarding experience through user-centric design and collaborative problem-solving. By simplifying the process and enhancing transparency, we not only improved customer satisfaction but also built a stronger foundation for future growth.</p>
            <p className='conclusion-content secondary-content'>For a deeper dive into the technical specifics of the KYC manager tool, explore the detailed case study <Link to="#">here. </Link></p>
        </div>
    </>
  );
};

export default Conclusion;