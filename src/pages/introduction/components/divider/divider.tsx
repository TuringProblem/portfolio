import React from 'react';
import { Colors, ColorMap } from '../../const';
import clsx from 'clsx';

/**
 * @author { @Override }
 * @Since 2025-11-26 : @16:04
 **/

interface DividerProps {
  color: Colors;
  className?: string;
}

export const Divider: React.FC<DividerProps> = ({ color, className }) => {
  return <div className={clsx(`h-[1px] border border-[${ColorMap[color]}] my-3.5 mx-3.5 align-center rounded-md ${className}`)} />;
};
