import React from 'react';

const SectionType = ({ category, score, icon }) => {
  return (
    <div className="summary_type_container">
        <div>
            <img src={`/results-summary${icon}`} alt={`$${category} Icon`} />
            <p>{category}</p>
        </div>
        <p><span className="score_amount">{score}</span> / 100</p>
    </div>
  )
}

export default SectionType;