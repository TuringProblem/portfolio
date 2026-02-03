import type { AboutPageProps } from '../../pages/about/_data';
import { Home } from 'lucide-react';


import { FC } from 'react';
export const ShowHomeNavigationComponent: FC<AboutPageProps> = ({ sectionData }) => {
  return (
    <>
      {sectionData.showNavigationHome && (
        <div
          className="flex justify-center items-center w-full h-full hover:cursor-pointer hover:text-[var(--ifm-color-primary)]"
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
