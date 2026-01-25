import React from 'react';

import './style.css';

interface baseCardProps {
  variant?: string;
  children?: React.ReactNode;
  className?: string;
}

export const BaseCard: React.FC<baseCardProps> = ({ children, className }) => {



  return (
    <>
      <div className={`base-card ${className}`}>
        {children}
      </div >
    </>
  );
}

