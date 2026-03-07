import React, { FC, ReactNode } from 'react';
import { ContactContent } from '@site/src/pages/about/contact/content/contact-content';
import { DefaultData } from '@site/src/pages/about/default/data/default-data';
import { GithubContent } from '@site/src/pages/about/github/content/github-content';
import { EducationContent } from '@site/src/pages/about/education/content/education-content';
import { ResumeContent } from '@site/src/pages/about/resume/content/resume-content';

type DataType = 'default' | 'github' | 'education' | 'contact' | 'resume';


// INFO: Just for a heads up - Record<string, ReactNode> is the same as { [key: string]: ReactNode } ... why typescript, why lol
export const getChanges = (resumeImageUrl: string): Record<DataType, ReactNode> => ({
  default: <DefaultData />,
  github: <GithubContent />,
  education: <EducationContent />,
  contact: <ContactContent />,
  resume: <ResumeContent imageUrl={resumeImageUrl} />,
});


export default function DataPage() {
  return React.createElement('div', null, 'This is not a page - just data functions');
}


