import React, { useState, ReactNode } from 'react';
import { ListProps } from './philosophy.interface';
import { Header } from '../../../components/cardsV2/header';
import { values, defaultSideText } from './data';

const PhilosophyListAbstract: React.FC<ListProps> = ({ values, onClick }) => {
  return (
    <div className="flex-col grid grid-cols-2 grid-cols-[repeat(auto-fit,minmax(200px,1ft))] gap-[24px] max-h-[560px]">
      {values.map((item, index) => (
        <div key={index} className="w-full shadow-xs bg-[var(--philosophy-card-background)] gap-[8px] rounded-[8px] hover:cursor-pointer border-2 border-transparent hover:border-[var(--ifm-color-primary)]" onClick={() => onClick(item.description)} >
          <div className="p-[24px_24px_0px_24px]">
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
  const [philosopher, setPhilosopher] = useState<ReactNode | null>(defaultSideText);
  const updateText = (e: string) => setPhilosopher(e);



  return (
    <div className="flex gap-[24px]">
      <div className="flex-col overflow-auto overscroll-contain w-[50%]">

        <div className="flex-col justify-center align-center items-center gap-[8px]">
          <div className="w-[100px] bg-[var(--philosophy-card-background)] mr-[8px] rounded-[8px] overflow-auto text-[var(--ifm-color-primary)] hover:cursor-pointer border border-transparent hover:border-[var(--ifm-color-primary)] hover:shadow-md" onClick={() => updateText(defaultSideText)}>
            help
          </div>
          <Header title="Favorite Philosophers" />
        </div>
        <PhilosophyListAbstract values={values} onClick={(e: string) => updateText(e)} />
      </div >
      {philosopher}
    </div >
  );
}

export default function PhilosophyListPage() {
  return React.createElement('div', null, 'This is not a page - just a philosophy list component');
}

