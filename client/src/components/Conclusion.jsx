// src/components/case-study/Challenge.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Conclusion = ({ project }) => {
  // const { theme, toggleTheme } = useTheme();
  // const [modalImage, setModalImage] = useState(null);

  // const openImageModal = (imageUrl, altText) => {
  //   setModalImage({ url: imageUrl, alt: altText });
  // };

  // const closeImageModal = () => {
  //   setModalImage(null);
  // };
  // Only show specific content for the Pivo project
  if (project.id !== 'pivo' && project.id !== 'portfolio' && project.id !== 'nutch') {
    return (
      <section className="case-study-section challenge">
        <h2>The Conclusion</h2>
        <p>Every project has a concluding part.</p>
      </section>
    );
  }

  return (
    <>
    {project.id === "pivo" && (
      <div className='case-study-conclusion'>
        <h2 className='conclusion-title'>Conclusion</h2>
        <p className='conclusion-content'>This case study highlights our journey to transform the onboarding experience through user-centric design and collaborative problem-solving. By simplifying the process and enhancing transparency, we not only improved customer satisfaction but also built a stronger foundation for future growth.</p>
        <p className='conclusion-content secondary-content'>For a deeper dive into the technical specifics of the KYC manager tool, explore the detailed case study <Link to="#">here. </Link></p>
      </div>
    )}
    {project.id === "portfolio" && (
      <>
      <div className='impact-section'>
        <p className='research-section-title'>Impact and conclusion</p>
        <p className='research-findings-secondary-text'>The final session with my testers was met with positive reactions. They all expressed an increased appreciation for my skills citing</p>
        <ol>
          <li>the improved design style</li>
          <li>simplified navigation</li>
          <li>fun interactions</li>
        </ol>
      </div>
      <div className='impact-section impact-section-2'>
        <p className='research-section-title'>Next Steps</p>
        <p className='research-findings-secondary-text'>Following it’s launch, I will</p>
        <ol>
          <li>track site visits against job leads to determine if the improved design has any improved impact on my ability to attract work</li>
          <li>continue to collect feedback from the public on areas of improvement</li>
        </ol>
      </div>
      </>
    )}
    {project.id === 'nutch' && (
      <section className="case-study-section nutch-section nutch-conclusion">
        <h2 className="nutch-h">AI-First Product Development</h2>
        <div className="nutch-text-group">
          <p className="nutch-text">AI wasn't just part of the product. It became part of my design process.</p>
          <p className="nutch-text">Throughout the project I used AI to accelerate:</p>
        </div>
        <div className="nutch-tags">
          {['Competitive analysis', 'Product strategy', 'Product Requirements Documents', 'Information Architecture', 'UX Writing', 'Design System documentation', 'Design critique', 'Backend planning', 'Website messaging', 'Developer hand-off documentation'].map((tag) => (
            <span key={tag} className="nutch-tag">{tag}</span>
          ))}
        </div>
        <div className="nutch-text-group">
          <p className="nutch-text">Every output was reviewed, challenged, ranked, and validated before becoming part of the product.</p>
          <p className="nutch-text">The objective wasn't to replace design thinking. It was to remove repetitive work so more time could be spent solving meaningful problems.</p>
        </div>

        <h2 className="nutch-h">Building the Foundation</h2>
        <p className="nutch-text">Beyond designing the interface, I established the systems required to move the product into development. Deliverables included:</p>
        <div className="nutch-tags">
          {['Product positioning', 'Brand identity', 'Design system foundations', 'Typography and token strategy', 'Product Requirements Document', 'Backend developer handoff', 'Frontend planning', 'Website strategy', 'Live documentation in Notion'].map((tag) => (
            <span key={tag} className="nutch-tag">{tag}</span>
          ))}
        </div>
        <p className="nutch-text">This creates a shared source of truth across product, design, and engineering.</p>

        <h2 className="nutch-h">Cross-Functional Collaboration</h2>
        <p className="nutch-text">Because I led both product and design, my role extended beyond interface design. I worked across:</p>
        <div className="nutch-tags">
          {['Product Strategy', 'UX', 'Brand', 'Design Systems', 'Developer Documentation', 'Engineering Collaboration', 'Marketing Website', 'Launch Planning'].map((tag) => (
            <span key={tag} className="nutch-tag">{tag}</span>
          ))}
        </div>
        <p className="nutch-text">The goal was to ensure every decision—from positioning to implementation—aligned around the same product vision.</p>

        <h2 className="nutch-h">Looking ahead</h2>
        <div className="nutch-text-group">
          <p className="nutch-text">The prototype represents the beginning, not the finish line.</p>
          <p className="nutch-text">If Nutch were moving into production today, my focus would shift from designing the experience to measuring it.</p>
          <p className="nutch-text">Key success metrics would include:</p>
        </div>
        <div className="nutch-tags">
          {['Activation rate', 'Prompt completion rate', 'Conversation revisit rate', 'File reuse', 'Model preference', 'Time-to-answer', 'Retention', 'Daily active users'].map((tag) => (
            <span key={tag} className="nutch-tag">{tag}</span>
          ))}
        </div>
        <p className="nutch-text">These metrics would inform future iterations and product decisions.</p>

        <h2 className="nutch-h">Reflection</h2>
        <div className="nutch-text-group">
          <p className="nutch-text">Building Nutch changed how I think about AI products.</p>
          <p className="nutch-text">The biggest lesson wasn't learning how to design AI interfaces.</p>
          <p className="nutch-text">It was learning that the best AI experiences don't ask users to change how they work.</p>
          <p className="nutch-text">They quietly improve the workflows that are already there.</p>
          <p className="nutch-text">Instead of building another destination for AI, Nutch became an exploration into bringing AI to the place where work already happens.</p>
          <p className="nutch-text">Excited to put it in your hands in the coming months.</p>
          <p className="nutch-text">Till the next one 🥂</p>
        </div>
      </section>
    )}

    </>
  );
};

export default Conclusion;