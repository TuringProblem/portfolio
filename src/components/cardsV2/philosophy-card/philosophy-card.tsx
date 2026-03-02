import { Header } from '../header';
import { PhilosophyCardProps } from './types';

export const PhilosophyCard: React.FC<PhilosophyCardProps> = ({ philosopherHeader, subHeader, mainContent, footer }) => {
  return (
    <>
      <Header title={philosopherHeader} />
      <div>
        {subHeader}
      </div>
      <div className="p-[16px]">
        {mainContent}
      </div>
    </>
  );
}

