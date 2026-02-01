import React, { ReactNode } from 'react';
import { Philosophers } from './types';
import { Header } from '../header';

interface PhilosophyCardProps {
  philosopherHeader: Philosophers;
  subHeader?: string;
  mainContent?: ReactNode;
  footer?: ReactNode;
}

export const PhilosophyCard: React.FC<PhilosophyCardProps> = ({ philosopherHeader, subHeader, mainContent, footer }) => {
  return (
    <>
      <Header title={philosopherHeader} />
      <div>
        {subHeader}
      </div>
    </>
  );
}

