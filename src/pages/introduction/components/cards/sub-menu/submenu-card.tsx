import React from 'react';


export const SubmenuCard: React.FC = () => {
  return (
    <div className="mt-2 flex justify-center bg-[var(--menu-card)] gap-2 w-full h-full rounded-md shadow-md">
      <h2 className="text-[var(--menu-card-header)] text-2xl font-bold">
        Submenu
      </h2>
    </div>
  );
};
