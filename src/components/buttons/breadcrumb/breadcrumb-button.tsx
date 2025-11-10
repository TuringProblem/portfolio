import React from 'react';

import { Link } from 'react-router-dom';

export const BreadcrumbButton: React.FC<{text: string}> = ({text}) => {
  return (
    <Link to="/">
      <button className="px-4 py-1 border border-[var(--border)] text-[var(--text-primary)] rounded-md hover:text-[var(--accent)] hover:border-[var(--accent)] transition-all duration-300">
        ← {text} 
      </button>
    </Link>
  );
};
