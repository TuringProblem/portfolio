import React from 'react';
import Layout from '@theme/Layout';
import { BaseCard } from '../components/cardsV2';
import { NavigationCard } from '../components/cardsV2/navigation-card';
import { aboutData } from './about/_data';

import './about.css';

const CardContent: React.FC = () => {
  const buttonConfigs = aboutData.data.map(item => ({
    route: item.locationRef,
    label: item.layoutTitle
  }));

  return (

    <BaseCard className="flex-col shadow-xs justify-center items-center p-[24px] min-w-[400px] bg-[var(--about-card-background)] border border-transparent hover:border-[var(--ifm-color-primary)] shadow-[0px_0.5px_1px_0px] hover:shadow-[0px_0.5px_1px_0px] w-full h-full">
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
        <div className="flex flex-col gap-[48px]">
          <NavigationCard />
        </div>
        <CardContent />
      </main>
    </Layout>
  );
}

export default IntroPage;
