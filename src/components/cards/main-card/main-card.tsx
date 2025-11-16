import React from 'react';
import { HeaderCard } from '../header-card';

interface MainCardProps {
  children?: React.ReactNode;
  className?: string;
  title?: string;
}

export const MainCard: React.FC<MainCardProps> = ({ children, className, title }) => {

  if (title == "") {
    return (
      <div className={`bg-[var(--legend)] border border-[var(--accent)] rounded-md ${className}`}>
        {children}
      </div>

    )
  }

  return (
    <div className={`bg-[var(--legend)] border border-[var(--accent)] rounded-md ${className}`}>
      <HeaderCard title={title} />
      {children}
    </div>
  );
}
