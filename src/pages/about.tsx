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

    <BaseCard className="flex-col shadow-xs justify-center items-center p-[24px] min-w-[400px] max-w-[1400px] w-full max-w-[1400px] max-h-[850px] bg-[var(--about-card-background)] border border-transparent hover:border-[var(--ifm-color-primary)] shadow-[0px_0.5px_1px_0px] hover:shadow-[0px_0.5px_1px_0px] w-full">
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
  );
}


export const IntroPage: React.FC = () => {
  return (
    <Layout
      title="Me"
      description="Introduction to Andrew">
      <main className="containedItems">
        <NavigationCard />
        <CardContent />
      </main>
    </Layout>
  );
}

export default IntroPage;
