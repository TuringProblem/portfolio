import React from 'react';
import { HeaderCard } from '../header-card';

interface MainCardProps {
  children?: React.ReactNode;
  className?: string;
  title?: string;
}

export const MainCard: React.FC<MainCardProps> = ({ children, className, title }) => {
  return (
    <div className='bg-white border border-[var(--accent)] rounded-md ${className}'>
      <HeaderCard title={title} />
      {children}
    </div>
  );
}
