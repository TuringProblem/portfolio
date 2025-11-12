import React from 'react';

interface HeaderCardProps {
  title?: string;
}



export const HeaderCard: React.FC<HeaderCardProps> = ({ title }) => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">
        {title}
      </h1>
    </div>
  );
}
