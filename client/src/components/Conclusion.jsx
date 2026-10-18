// src/components/case-study/Challenge.jsx
import React from 'react';
import { Link } from 'react-router-dom';

// 180by2: [icon paths, principle]. Line icons drawn on a 24px grid.
const CS180_PRINCIPLES = [
  [<><circle cx="12" cy="12" r="9" /><path d="M8.5 14.5s1.3 1.5 3.5 1.5 3.5-1.5 3.5-1.5" /><path d="M9 9.5h.01M15 9.5h.01" strokeWidth="2" /></>,
    'Organise around customer intent, not internal inventory.'],
  [<><path d="M3 21h18" /><path d="M6 21V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v17" /><path d="M14 12h.01" strokeWidth="2" /></>,
    'Every unanswered question becomes a potential exit point.'],
  [<><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" /><path d="m9 12 2 2 4-4" /></>,
    'Product pages should reduce uncertainty, not simply describe products'],
  [<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />,
    'Trust begins before checkout.'],
  [<><path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2z" /><path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" /></>,
    'Every release is a hypothesis.'],
  [<><path d="m11 17 2 2a1 1 0 1 0 3-3" /><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" /><path d="m21 3 1 11h-2" /><path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3" /><path d="M3 4h8" /></>,
    'Great e-commerce helps customers make confident decisions.'],
];

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
  if (project.id !== 'pivo' && project.id !== 'nutch' && project.id !== '180by2') {
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
    {/* 180by2 closing principles. Styles are the cs180-* block in CaseStudy.css. */}
    {project.id === '180by2' && (
      <section className="cs180 cs180--compact cs180-principles">
        <h2 className="cs180-h">Principles I still use today</h2>
        <div className="cs180-pair">
          <p className="cs180-text">This project changed how I think about e-commerce.</p>
          <p className="cs180-text">Mainly because of the questions we learned to answer.</p>
        </div>
        <ul className="cs180-principle-grid">
          {CS180_PRINCIPLES.map(([icon, text]) => (
            <li key={text} className="cs180-principle">
              <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                {icon}
              </svg>
              <p className="cs180-table-text">{text}</p>
            </li>
          ))}
        </ul>
      </section>
    )}

    </>
  );
};

export default Conclusion;