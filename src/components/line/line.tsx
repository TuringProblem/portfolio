import { FC } from 'react';
import { Color, GetColor } from './types';


export const getColor: GetColor = (color: Color): string => {
  switch (color) {
    case 'main':
      return 'var(--ifm-color-primary)';
    case 'secondary':
      return 'var(--ifm-color-secondary)';
    case 'red':
      return 'var(--ifm-color-red)';
    case 'green':
      return 'var(--ifm-color-green)';
    case 'yellow':
      return 'var(--ifm-color-yellow)';
    case 'blue':
      return 'var(--ifm-color-blue)';
    case 'purple':
      return 'var(--ifm-color-purple)';
    case 'pink':
      return 'var(--ifm-color-pink)';
    case 'orange':
      return 'var(--ifm-color-orange)';
    case 'gray':
      return 'var(--ifm-color-gray)';
    case 'black':
      return 'var(--ifm-color-black)';
    case 'white':
      return 'var(--ifm-color-white)';
    default:
      return 'var(--ifm-color-primary)';
  }
};



export const Line: FC<{ color: Color }> = ({ color }) => <div className={`w-full h-[1px] bg-[${getColor(color)}]`} />;
