import React from 'react';
import { HeaderCard } from '../header-card';
import { Colors, ColorMap } from '../../../pages';

interface MainCardProps {
  children?: React.ReactNode;
  className?: string;
  color: Colors;
  title?: string;
}

export const MainCard: React.FC<MainCardProps> = ({ children, className, color, title }) => {

  if (title == "") {
    return (
      <div className={`bg-[${ColorMap[color]}] border border-[var(--accent)] rounded-md ${className}`}>
        {children}
      </div>

    )
  }

  return (
    <div className={`bg-[${ColorMap[color]}] border border-[var(--accent)] rounded-md ${className}`}>
      <HeaderCard title={title} />
      {children}
    </div>
  );
}
