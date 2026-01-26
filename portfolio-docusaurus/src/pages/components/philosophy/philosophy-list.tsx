import React, { useState } from 'react';
import { ListProps } from './philosophy.interface';
import { values } from './data';
import { getPilosopherTextValues } from './data';




const PhilosophyListAbstract: React.FC<ListProps> = ({ values, onClick }) => {
  return (
    <div className="flex-col grid grid-cols-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[24px] max-h-[560px]">
      {values.map((item, index) => (
        <div key={index} className="w-full bg-[var(--philosophy-card-background)] gap-[8px] rounded-[8px]" >
          <div className="p-[24px_24px_0px_24px] hover:cursor-pointer" onClick={() => onClick(item.philosopher)}>
            <img src={item.imageLink} alt="image" height={450} />
            <div className="text-[14px]">
              <i>{item.quote}</i>
            </div>
          </div>
          <a href={item.link} className="text-blue-600 hover:underline">{item.philosopher}</a>
        </div>
      ))}
    </div>
  );
}

export const PhilosophyList = () => {
  const philosophers = getPilosopherTextValues();
  const [philosopher, setPhilosopher] = useState<React.ReactNode | null>(philosophers.ludwig);



  return (
    <div className="flex gap-[24px]">
      <div className="flex-col overflow-auto w-[650px]">
        <h1>Favorite Philosophers</h1>
        <PhilosophyListAbstract values={values} onClick={(e) => setPhilosopher(e)} />
      </div>
      {philosopher}
    </div>
  );
}

