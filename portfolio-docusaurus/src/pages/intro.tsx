import React, { useState, ReactNode } from 'react';
import Layout from '@theme/Layout';
import { Download, Linkedin, Github, Twitter } from 'lucide-react';
import { BaseCard } from '../components/cardsV2';
import { ChevronLeft } from 'lucide-react';
import useBaseUrl from '@docusaurus/useBaseUrl';

const links = {
  GIT: "https://github.com/TuringProblem",
  TWITTER: "https://twitter.com/TuringProblem",
  LINKEDIN: "https://www.linkedin.com/in/andrew-wellington-37a665246/",
}

/**
const LinkByName: React.FC<{ data: string }> = ({ data }) => {
  return (
    <div className="flex gap-1 hover:text-blue-600 transition-colors">
      {data.map((item, index) => (
        <button
          key={index}
          className="flex gap-1 hover:text-blue-600 transition-colors"
          onClick={() => redirect(item)}
        >
          <Linkedin size={24} /> {item}
        </button>
      ))}
    </div>
  );
}
**/

const redirect = (url: string) => window.location.href = url;




const getChanges = (resumeImageUrl: string) => ({
  default: (
    <>
      <p>I'm Andrew, a Computer Science student at Northeastern University. Academically, I'm interested in Compilers, Programming Languages, Mathematics, and Philosophy. With respect to leisurely activities - I enjoy programming, <a href="#" className="text - blue - 600 hover:underline">music</a>, and sports.</p>
    </>
  ),
  github: (
    <>
      <p> I make contributions to open source projects on GitHub. I'm also a maintainer of the <a href="https://github.com/TuringProblem/" className="text - blue - 600 hover:underline">portfolio</a> project, which is a static site generator built with Docusaurus. I'm excited to continue improving the project and contributing to the open source community.</p>
    </>
  ),
  twitter: (
    <>
      <p> I'm on Twitter as <a href="https://twitter.com/TuringProblem" className="text - blue - 600 hover:underline">@TuringProblem</a>. I tweet about programming, math, and computer science.</p>
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
})




const CardContent: React.FC = () => {
  const resumeImageUrl = useBaseUrl('/img/resume.png');
  const changes = getChanges(resumeImageUrl);
  const [content, setContent] = useState<ReactNode | null>(changes.default);
  const updateText = (e: ReactNode) => setContent(e);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-10 items-center gap-10 justify-items-center">
      <div className="flex gap-[48px] items-center justify-center min-h-[100%] p-[0px_40px_40px_40px]">
        <BaseCard className="flex-col shadow-xs justify-center items-center p-[24px] min-w-[1200px] bg-[var(--about-card-background)]  border border-transparent hover:border-[var(--ifm-color-primary)] shadow-[0px_0.5px_1px_0px] hover:shadow-[0px_0.5px_1px_0px]">
          <div className="flex justify-center items-center mb-[24px] gap-[16px]">
            {/* TODO: Clean this up, and do funcitonal map approach -> map.((key, index) => something...))*/}
            <button
              className="flex gap-1 hover:shadow-[0px_1px_1px_0px] p-[4px] rounded-[8px] justify-center items-center gap-[8px] border-2 hover:border-[var(--ifm-color-primary)] hover:text-[var(--ifm-color-primary)] transition-colors hover:cursor-pointer"
              onClick={() => updateText(changes.github)}
            >
              <Github size={24} /> Github Profile
            </button>
            <button
              className="flex transition-colors hover:shadow-[0px_1px_1px_0px] p-[4px] rounded-[8px] justify-center items-center gap-[8px] border-2 hover:border-[var(--ifm-color-primary)] hover:text-[var(--ifm-color-primary)] transition-colors hover:cursor-pointer"
              onClick={() => updateText(changes.twitter)}
            >
              <Twitter size={24} /> (𝕏)* Account
            </button>
            <button
              className="flex gap-1 hover:text-blue-600 transition-colors hover:shadow-[0px_1px_1px_0px] p-[4px] rounded-[8px] justify-center items-center gap-[8px] border-2 hover:border-[var(--ifm-color-primary)] hover:text-[var(--ifm-color-primary)] transition-colors hover:cursor-pointer"
              onClick={() => updateText(changes.linkedin)}
            >
              <Linkedin size={24} /> Linkedin
            </button>
            <button className="flex gap-1 hover:text-blue-600 transition-colors hover:shadow-[0px_1px_1px_0px] p-[4px] rounded-[8px] justify-center items-center gap-[8px] border-2 hover:border-[var(--ifm-color-primary)] hover:text-[var(--ifm-color-primary)] transition-colors hover:cursor-pointer"
              onClick={() => updateText(changes.resume)}
            >
              <Download size={24} /> Resume
            </button>
          </div>
          <div>
            <div className="text-center min-h-[900px]">
              {content}
            </div>
          </div>
        </BaseCard>
      </div>
    </div>

  );

}


export const IntroPage: React.FC = () => {
  return (
    <Layout
      title="Me"
      description="Introduction to Andrew">
      <main className="container mx-auto px-4 py-8">
        <div className="mx-auto p-[24px]">
          <CardContent />
          <BaseCard className="flex w-[150px] h-[50px] justify-center items-center bg-[var(--about-card-background)] border border-transparent hover:border-[var(--ifm-color-primary)] shadow-[0px_0.5px_1px_0px] hover:shadow-[0px_0.5px_1px_0px] hover:cursor-pointer">
            <div className="flex justify-center items-center w-full h-full" onClick={() => window.history.back()}>
              <ChevronLeft size={24} />
              Return
            </div>
          </BaseCard>
        </div>
      </main>
    </Layout>
  );
}

export default IntroPage;
