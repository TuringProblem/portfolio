import React from 'react';
import { HeaderTypes, grabTextAndPaddingSizes } from './types';

export const Header: React.FC<HeaderTypes> = ({ title, size }) => {
  const [actualTextSize, actualPaddingSize] = grabTextAndPaddingSizes(size);

  return (
    <>
      <div className={`${actualPaddingSize}`}>
        <div className={`${actualTextSize} font-bold text-[var(--legend-text)]`}>
          {title}
        </div>
      </div>
    </>
  );
}



