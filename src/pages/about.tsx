import React from 'react';
import Layout from '@theme/Layout';
import { BaseCard } from '../components/cardsV2';
import { NavigationCard } from '../components/cardsV2/navigation-card';

import './about.css';

/**
 
const links = {
  GIT: "https://github.com/TuringProblem",
  TWITTER: "https://twitter.com/TuringProblem",
  LINKEDIN: "https://www.linkedin.com/in/andrew-wellington-37a665246/",
}
**/

// const redirect = (url: string) => window.location.href = url;






/**
 * TODO: Really need to refactor - this is fine for now, but I would much rather have the files put into an array object and map them  
 * @see /src/pages/about/
 **/
const CardContent: React.FC = () => {
  const buttonConfigs = [
    { route: 'profile', label: 'Profile' },
    { route: 'github', label: 'Github Profile' },
    { route: 'education', label: 'Education' },
    { route: 'contact', label: 'Contact' },
    { route: 'resume', label: 'Resume' }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-10 items-center gap-10 justify-items-center">
      <div className="flex gap-[48px] items-center justify-center min-h-[100%] p-[0px_40px_40px_40px] justify-between">

        <BaseCard className="flex-col shadow-xs justify-center items-center p-[24px] min-w-[400px] max-w-[1400px] w-full max-w-[1400px] max-h-[850px] bg-[var(--about-card-background)] border border-transparent hover:border-[var(--ifm-color-primary)] shadow-[0px_0.5px_1px_0px] hover:shadow-[0px_0.5px_1px_0px]">
          <div>
            <div className="text-center min-h-[700px] overflow-auto">
              <p>Click a button above to view that section, or they'll each have their own URL:</p>
              <ul className="list-disc list-inside mt-4 space-y-2">
                {buttonConfigs.map((config, index) => (
                  <li key={index}>
                    <a href={`/portfolio/about/${config.route}`} className="text-blue-600 hover:underline">
                      /portfolio/about/{config.route} - {config.label}
                    </a>
                  </li>
                ))}
              </ul>
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
        <div className="containedItems">
          <NavigationCard />
          <CardContent />
        </div>
      </main>
    </Layout>
  );
}

export default IntroPage;
