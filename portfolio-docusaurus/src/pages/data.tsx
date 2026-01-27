import React, { ReactNode } from 'react';
import { PhilosophyList } from './components/philosophy';


export const getChanges = (resumeImageUrl: string): { [key: string]: ReactNode } => ({
  default: (
    <>
      <p>I'm Andrew, a Computer Science student at Northeastern University. Academically, I'm interested in Compilers, Programming Languages, Mathematics, and Philosophy.With respect to leisurely activities - I enjoy programming, <a href="#" className="text - blue - 600 hover:underline" > music < /a>, and sports.</p >
      <PhilosophyList />
    </>
  ),
  github: (
    <>
      <p>I make contributions to open source projects on GitHub.I'm also a maintainer of the <a href="https://github.com/TuringProblem/" className="text - blue - 600 hover:underline">portfolio</a> project, which is a static site generator built with Docusaurus. I'm excited to continue improving the project and contributing to the open source community.</p>
    </>
  ),
  twitter: (
    <>
      <p>I'm on Twitter as <a href="https://twitter.com/TuringProblem" className="text - blue - 600 hover:underline">@TuringProblem</a>. I tweet about programming, math, and computer science.</p>
    </>
  ),
  linkedin: (
    <>
      <div>
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


