import React from 'react';
import { Colors, convertColor } from '../../const';
import clsx from 'clsx';

/**
 * @author { @Override }
 * @Since 2025-11-26 : @16:04
 **/

interface DividerProps {
  color?: Colors;
}

export const Divider: React.FC<DividerProps> = ({ color }) => {
  return <div className={clsx(`p-2 bg-[var(${convertColor(color)})] my-3.5 mx-3.5 align-center rounded-md`)} />;
};
