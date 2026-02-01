import React from 'react';
import { baseCardProps } from './types';

import './style.css';

/**
 * @author { @Override }
 * @since 02012026
 * @see <a href="https://github.com/TuringProblem">Github Profile</a>
 **/
export const BaseCard: React.FC<baseCardProps> = ({ children, className }) => {
  return (
    <>
      <div className={`base-card ${className}`}>
        {children}
      </div >
    </>
  );
}

