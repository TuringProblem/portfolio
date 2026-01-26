import React from 'react';
import { ListProps } from './philosophy.interface';
import { values } from './data';


const PhilosophyListAbstract: React.FC<ListProps> = ({ values }) => {
  return (
    <div className="flex-col grid grid-cols-3 md:grid-cols-2 lg:grid-cols-4 gap-[24px] max-h-[550px]">
      {values.map((item, index) => (
        <div key={index} className="w-full bg-[var(--philosophy-card-background)] gap-[8px] rounded-[8px]">
          <div className="p-[24px_24px_0px_24px] hover:cursor-pointer" onClick={() => window.open(item.link, "_blank")}>
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
  return (
    <div>
      <div className="flex-col overflow-auto">
        <h1>Favorite Philosophers</h1>
        <PhilosophyListAbstract values={values} />
      </div>
    </div>
  );
}

