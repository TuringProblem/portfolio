import React, { useState, ReactNode } from 'react';
import Layout from '@theme/Layout';
import { Download, MailWarning, Github, GraduationCap, User } from 'lucide-react';
import { BaseCard } from '../components/cardsV2';
import { ChevronLeft } from 'lucide-react';
import { getChanges } from './data';
import useBaseUrl from '@docusaurus/useBaseUrl';

import clsx from 'clsx';
/**
 
const links = {
  GIT: "https://github.com/TuringProblem",
  TWITTER: "https://twitter.com/TuringProblem",
  LINKEDIN: "https://www.linkedin.com/in/andrew-wellington-37a665246/",
}
**/

// const redirect = (url: string) => window.location.href = url;






const CardContent: React.FC = () => {
  const resumeImageUrl = useBaseUrl('/img/resume.png');
  const changes = getChanges(resumeImageUrl);
  const [content, setContent] = useState<ReactNode | null>(changes.default);
  const [isPng, setIsPng] = useState(false);
  const updateText = (e: ReactNode) => setContent(e);


  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-10 items-center gap-10 justify-items-center">
      <div className="flex gap-[48px] items-center justify-center min-h-[100%] p-[0px_40px_40px_40px]">
        <BaseCard className={clsx("flex-col shadow-xs justify-center items-center p-[24px] min-w-[1200px] max-h-[850px] bg-[var(--about-card-background)]  border border-transparent hover:border-[var(--ifm-color-primary)] shadow-[0px_0.5px_1px_0px] hover:shadow-[0px_0.5px_1px_0px]", isPng ? "overflow-auto overscroll-contain" : "")}>
          <div className="flex justify-center items-center mb-[24px] gap-[16px]">
            {/* TODO: Clean this up, and do funcitonal map approach -> map.((key, index) => something...))*/}
            <div onClick={() => setIsPng(false)}>
              <button
                className="flex gap-1 hover:shadow-[0px_1px_1px_0px] p-[4px] rounded-[8px] justify-center items-center gap-[8px] border-2 hover:border-[var(--ifm-color-primary)] hover:text-[var(--ifm-color-primary)] transition-colors hover:cursor-pointer"
                onClick={() => updateText(changes.default)}
              >
                <User size={24} /> Profile
              </button>
            </div>


            <div onClick={() => setIsPng(false)}>
              <button
                className="flex gap-1 hover:shadow-[0px_1px_1px_0px] p-[4px] rounded-[8px] justify-center items-center gap-[8px] border-2 hover:border-[var(--ifm-color-primary)] hover:text-[var(--ifm-color-primary)] transition-colors hover:cursor-pointer"
                onClick={() => updateText(changes.github)}
              >
                <Github size={24} /> Github Profile
              </button>
            </div>

            <div onClick={() => setIsPng(false)}>
              <button
                className="flex transition-colors hover:shadow-[0px_1px_1px_0px] p-[4px] rounded-[8px] justify-center items-center gap-[8px] border-2 hover:border-[var(--ifm-color-primary)] hover:text-[var(--ifm-color-primary)] transition-colors hover:cursor-pointer"
                onClick={() => updateText(changes.education)}
              >
                <GraduationCap size={24} /> Education
              </button>
            </div>
            <div onClick={() => setIsPng(false)}>
              <button
                className="flex gap-1 hover:text-blue-600 transition-colors hover:shadow-[0px_1px_1px_0px] p-[4px] rounded-[8px] justify-center items-center gap-[8px] border-2 hover:border-[var(--ifm-color-primary)] hover:text-[var(--ifm-color-primary)] transition-colors hover:cursor-pointer"
                onClick={() => updateText(changes.contact)}
              >
                <MailWarning size={24} /> Contact
              </button>
            </div>
            <div onClick={() => setIsPng(true)}>
              <button className="flex gap-1 hover:text-blue-600 transition-colors hover:shadow-[0px_1px_1px_0px] p-[4px] rounded-[8px] justify-center items-center gap-[8px] border-2 hover:border-[var(--ifm-color-primary)] hover:text-[var(--ifm-color-primary)] transition-colors hover:cursor-pointer"
                onClick={() => updateText(changes.resume)}
              >
                <Download size={24} /> Resume
              </button>
            </div>
          </div>
          <div>
            <div className="text-center min-h-[900px] overflow-auto">
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
      <main className="">
        <div className="mx-auto p-[24px]">
          <CardContent />
          <BaseCard className="flex w-[150px] h-[50px] justify-center items-center bg-[var(--about-card-background)] border border-transparent hover:border-[var(--ifm-color-primary)] shadow-[0px_0.5px_1px_0px] hover:shadow-[0px_0.5px_1px_0px] hover:cursor-pointer">
            <div className="flex justify-center items-center w-full h-full" onClick={() => window.history.back()} aria-role="button" tabIndex={0}>
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
