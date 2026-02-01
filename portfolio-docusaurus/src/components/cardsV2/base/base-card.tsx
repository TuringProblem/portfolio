import React from 'react';
import { baseCardProps } from './types';

import './style.css';

export const BaseCard: React.FC<baseCardProps> = ({ children, className }) => {
  return (
    <>
      <div className={`base-card ${className}`}>
        {children}
      </div >
    </>
  );
}

