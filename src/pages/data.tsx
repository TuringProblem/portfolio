import React, { ReactNode } from 'react';
import { PhilosophyList } from '@site/src/pages/components/philosophy';
import { TextFieldCard } from '@site/src/components/cardsV2/text-field-card';
import { EducationCard } from '@site/src/components/cardsV2/education-card';


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
      <EducationCard />
    </>
  ),
  contact: (
    <>
      { /* TODO: Create  Cards for this to display the data */}
      <div>
        <TextFieldCard position="left" />
        Here is some of my work history:
        <div>

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


