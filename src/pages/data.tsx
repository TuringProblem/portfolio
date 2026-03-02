import React, { FC, ReactNode } from 'react';
import { PhilosophyList } from '@site/src/pages/components/philosophy';
import { EducationCard } from '@site/src/components/cardsV2/education-card';
import { educationData } from '@site/src/components/cardsV2/education-card/data';
import { TextFieldCardProps, TextFieldCard } from '@site/src/components/cardsV2';



const contentData: TextFieldCardProps[] = [
  {
    position: 'left',
    size: 'md',
    title: 'Email',
  },
  {
    position: 'left',
    size: 'md',
    title: 'Password',
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
      <p>I make contributions to open source projects on GitHub. I'm also a maintainer of the <a href="https://github.com/TuringProblem/" className="text-blue-600 hover:underline">portfolio</a> project, which is a static site generator built with Docusaurus. I'm excited to continue improving the project and contributing to the open source community.</p>
      <div className="background-color: #1A1A1A; color: white; padding: 20px;">
        <h1>👋 𝙷𝚒, 𝙸'𝚖 𝙰𝚗𝚍𝚛𝚎𝚠</h1>
        <h3>𝚂𝚘𝚏𝚝𝚠𝚊𝚛𝚎 𝙴𝚗𝚐𝚒𝚗𝚎𝚎𝚛 𝚏𝚛𝚘𝚖 Boston</h3>
      </div>
      <div>
        I'm Famous!
      </div>
      <p>
        <img src="https://komarev.com/ghpvc/?username=turingproblem&label=Profile%20views&color=0e75b6&style=flat" alt="turingproblem" />
      </p>
    </>
  ),
  education: (
    <>
      <p>I'm on Twitter as <a href="https://twitter.com/TuringProblem" className="text-blue-600 hover:underline">@TuringProblem</a>. I tweet about programming, math, and computer science.</p>
      <EducationCard itemXS={educationData} />
    </>
  ),
  contact: (
    <>
      <div>
        <ContactContent data={contentData} />
      </div>
      <button> test </button>
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


