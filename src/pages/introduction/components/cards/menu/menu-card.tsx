import React from 'react';

interface MenuCardProps {
  title?: string;
}

export const MenuCard: React.FC<MenuCardProps> = ({ title }) => {
  return (
    <div className="flex justify-center bg-[var(--menu-card)] gap-2 min-w-[200px] max-w-[200px] rounded-md shadow-md">
      <h2 className="text-[var(--menu-card-header)] text-2xl font-bold">
        {title}
      </h2>
    </div>
  );
};
