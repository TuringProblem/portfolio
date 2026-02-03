import React from 'react';
import { HeaderCard } from '../header-card';

// Temporary types for legacy component
type Colors = 'primary' | 'secondary' | 'tertiary';
const ColorMap: Record<Colors, string> = {
  primary: 'var(--ifm-color-primary)',
  secondary: 'var(--ifm-color-secondary)', 
  tertiary: 'var(--ifm-color-tertiary)'
};

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
