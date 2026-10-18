import React from 'react';

// 180by2 case study table, shared by the Solution and Results sections.
// Styles are the cs180-table rules in CaseStudy.css.
//
// `groups` is a list of { heading, cells }: each group is a grey heading band
// over a row of cells. A cell has `text` and optionally a grey `label` above
// it, a `name` below it (quotes) or an `icon` ('good' or 'flag').

const CS180Icon = ({ good }) => (
  <span className={`cs180-learned-icon ${good ? 'cs180-learned-icon--good' : 'cs180-learned-icon--flag'}`} aria-hidden="true">
    {good ? (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M7.5 12.5l3 3 6-6.5" />
      </svg>
    ) : (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
        <path d="M6 3.5a1 1 0 0 1 1 1V5h10.2a.8.8 0 0 1 .64 1.28L15.5 9.5l2.34 3.22a.8.8 0 0 1-.64 1.28H7v6.5a1 1 0 1 1-2 0v-16a1 1 0 0 1 1-1z" />
      </svg>
    )}
  </span>
);

const CS180Table = ({ groups }) => (
  <div className="cs180-table">
    {groups.map(({ heading, cells }) => (
      <div key={heading} className="cs180-table-group">
        <h4 className="cs180-table-head">{heading}</h4>
        <div className="cs180-table-row" style={{ '--cs180-cols': cells.length }}>
          {cells.map(({ label, text, name, icon }, i) => (
            <div key={i} className="cs180-table-cell">
              {icon && <CS180Icon good={icon === 'good'} />}
              {label && <p className="cs180-table-label">{label}</p>}
              <p className="cs180-table-text">{text}</p>
              {name && <p className="cs180-table-name">{name}</p>}
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
);

export default CS180Table;
