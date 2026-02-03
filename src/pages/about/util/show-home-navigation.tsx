import type { AboutPageProps } from '../_data';
import { Home } from 'lucide-react';


import { FC } from 'react';
export const ShowHomeNavigationComponent: FC<AboutPageProps> = ({ sectionData }) => {
  return (
    <>
      {sectionData.showNavigationHome && (
        <div
          className="flex justify-center items-center w-full h-full"
          onClick={() => typeof window !== 'undefined' && (window.location.href = '/portfolio/about')}
          aria-role="button"
          tabIndex={0}
        >
          <Home size={24} />
          About
        </div>
      )}
    </>
  );
}
