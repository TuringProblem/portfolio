import React from 'react';
import { HeaderTypes } from './types';
import { grabTextAndPaddingSizes } from '../../../utils';

/**
 * @author { @Override }
 * @since 02012026
 * @see <a href="https://github.com/TuringProblem">Github Profile</a>
 **/

export const Header: React.FC<HeaderTypes> = ({ title, size, position }) => {
  const [actualTextSize, actualPaddingSize, actualPosition] = grabTextAndPaddingSizes(size, position);

  return (
    <>
      <div className={`${actualPaddingSize} ${actualPosition}`}>
        <div className={`${actualTextSize} font-bold text-[var(--legend-text)]`}>
          {title}
        </div>
      </div>
    </>
  );
}



