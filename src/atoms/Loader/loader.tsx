import React from 'react';
import './style.scss';

export const AtomLoader: React.FC = () => {
  const numberOfAtoms = 9;

  return (
    <div className="loader-container">
      <div className="atom-loader">
        {[...Array(numberOfAtoms)].map((_, index) => (
          <div key={index + 1} className={`atom atom-${index + 1}`}></div>
        ))}
      </div>
    </div>
  );
};
