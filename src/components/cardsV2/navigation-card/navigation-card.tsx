import { FC, ReactNode } from 'react';
import { BaseCard } from '../base';
import { AboutNavigation } from '../../AboutNavigation';

interface NavigationCardProps {
  activeRoute?: string;
  children?: ReactNode;
}

export const NavigationCard: FC<NavigationCardProps> = ({ activeRoute, children }) => {

  return (
    <>
      <BaseCard className="flex flex-col shadow-xs justify-center items-center p-[24px] min-w-[200px] min-h-[200px] max-h-[295px] bg-[var(--about-card-background)] border border-transparent hover:border-[var(--ifm-color-primary)] shadow-[0px_0.5px_1px_0px] hover:shadow-[0px_0.5px_1px_0px]">
        <AboutNavigation activeRoute={activeRoute} />
        {children}
      </BaseCard>
    </>
  );
}

