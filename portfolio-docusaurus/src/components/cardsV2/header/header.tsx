import React from 'react';

type HeaderTypes = { title: string; }


export const Header: React.FC<HeaderTypes> = ({ title }) => (
  <>
    <div className="p-[0px_24px_24px_24px]">
      <div className="text-[32px] font-bold text-[var(--legend-text)]">
        {title}
      </div>
    </div>
  </>
);


