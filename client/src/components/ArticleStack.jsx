import React, { useCallback, useState } from 'react';
import { MEDIUM_ARTICLES, articleUrl } from '../config/articles';
import '../styles/ArticleStack.css';

const ExternalArrow = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="article-card-arrow" aria-hidden="true">
    <path d="M4.375 2.625H11.375V9.625" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M2.625 11.375L11.375 2.625" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const Chevron = ({ direction }) => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path
      d={direction === 'prev' ? 'M10 3L5 8L10 13' : 'M6 3L11 8L6 13'}
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const TITLE_MAX = 30;

// Trimmed here rather than with text-overflow so the cut is by character
// count, as specced. The full title stays in the link's tooltip.
const truncate = (text = '') => (
  text.length > TITLE_MAX ? `${text.slice(0, TITLE_MAX).trimEnd()}…` : text
);

const ArticleStack = ({ articles = MEDIUM_ARTICLES }) => {
  const [index, setIndex] = useState(0);

  const step = useCallback((delta) => (event) => {
    // The card behind is a link - don't follow it when paging.
    event.preventDefault();
    event.stopPropagation();
    setIndex((current) => (current + delta + articles.length) % articles.length);
  }, [articles.length]);

  if (!articles.length) return null;

  const article = articles[index];

  return (
    <div className="article-stack">
      {/* Decorative depth behind the card; they fade out on hover */}
      <span className="article-stack-layer article-stack-layer--back" aria-hidden="true" />
      <span className="article-stack-layer article-stack-layer--mid" aria-hidden="true" />

      <a
        className="article-card"
        href={articleUrl(article)}
        target="_blank"
        rel="noopener noreferrer"
        title={article.title}
      >
        <span className="article-card-body">
          <span className="article-card-title">
            {truncate(article.title)}
            <ExternalArrow />
          </span>
          <span className="article-card-meta">{article.readTime}</span>
        </span>
        {article.image ? (
          <img className="article-card-thumb" src={article.image} alt="" aria-hidden="true" />
        ) : (
          <span className="article-card-thumb article-card-thumb--empty" aria-hidden="true" />
        )}
      </a>

      <button
        type="button"
        className="article-nav article-nav--prev"
        onClick={step(-1)}
        aria-label="Previous article"
      >
        <Chevron direction="prev" />
      </button>
      <button
        type="button"
        className="article-nav article-nav--next"
        onClick={step(1)}
        aria-label="Next article"
      >
        <Chevron direction="next" />
      </button>
    </div>
  );
};

export default ArticleStack;
