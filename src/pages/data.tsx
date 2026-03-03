import React, { FC, ReactNode } from 'react';
import { PhilosophyList } from '@site/src/pages/components/philosophy';
import { EducationCard } from '@site/src/components/cardsV2/education-card';
import { educationData } from '@site/src/components/cardsV2/education-card/data';
import { TextFieldCardProps, TextFieldCard } from '@site/src/components/cardsV2';
import githubImage from '@site/static/img/github.png';



const contentData: TextFieldCardProps[] = [
  {
    position: 'left',
    size: 'md',
    title: 'Subject',
  },
  {
    position: 'center',
    size: 'md',
    title: 'Message',
  },
];


interface ContactContentProps {
  data: TextFieldCardProps[];
}


export const ContactContent: FC<ContactContentProps> = ({ data }) => {
  return (
    <div className="flex flex-col gap-[16px]">
      {data.map((item, index) => (
        <TextFieldCard key={index} position={item.position} title={item.title} />
      ))}
    </div>
  );
};

export const getChanges = (resumeImageUrl: string): { [key: string]: ReactNode } => ({
  default: (
    <>
      <p>I'm Andrew, a Computer Science student at Northeastern University. Academically, I'm interested in Compilers, Programming Languages, Mathematics, and Philosophy. With respect to leisurely activities - I enjoy programming, <a href="#" className="text-blue-600 hover:underline">music</a>, and sports.</p>
      <PhilosophyList />
    </>
  ),
  github: (
    <>
      <div>
        <div className="flex flex-col gap-[16px] items-center">
          <img src="https://komarev.com/ghpvc/?username=turingproblem&label=Profile%20views&color=0e75b6&style=flat" alt="turingproblem" className="w-[100px] object-contain" />
          <img src={githubImage} onClick={() => window.open("https://github.com/TuringProblem/")} alt="Github Profile" className="hover:cursor-pointer relative" />
        </div>
      </div>
    </>
  ),
  education: (
    <>
      <EducationCard itemXS={educationData} />
    </>
  ),
  contact: (
    <>
      <div>
        <ContactContent data={contentData} />
        <div className="flex justify-start p-[16px]">
          <a href="" >link</a>
        </div>
      </div>
    </>
  ),
  resume: (
    <>
      <img src={resumeImageUrl} alt="Resume" className="w-[1000px] object-contain" />
    </>
  ),
});


export default function DataPage() {
  return React.createElement('div', null, 'This is not a page - just data functions');
}


