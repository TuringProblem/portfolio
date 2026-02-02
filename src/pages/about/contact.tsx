import React from 'react';
import Layout from '@theme/Layout';
import { BaseCard } from '../../components/cardsV2';
import { Home } from 'lucide-react';
import { getChanges } from '../data';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { NavigationCard } from '../../components/cardsV2/navigation-card';

import './styles.css';

const ContactPage = () => {
  const resumeImageUrl = useBaseUrl('/img/resume.png');
  const changes = getChanges(resumeImageUrl);

  return (
    <Layout
      title="Contact"
      description="Andrew's Contact Information">
      <main className="">
        <div className="mainContainer">

          <NavigationCard activeRoute="contact" >
            <div className="flex justify-center items-center w-full h-full" onClick={() => window.location.href = '/portfolio/about'} aria-role="button" tabIndex={0}>
              <Home size={24} />
              About
            </div>
          </NavigationCard>

          <BaseCard className="flex-col shadow-xs justify-center items-center p-[24px] min-w-[1200px] max-h-[850px] bg-[var(--about-card-background)] border border-transparent hover:border-[var(--ifm-color-primary)] shadow-[0px_0.5px_1px_0px] hover:shadow-[0px_0.5px_1px_0px]">
            <div className="text-center min-h-[700px] overflow-auto">
              {changes.contact}
            </div>
          </BaseCard>
        </div>

      </main>
    </Layout>
  );
}

export default ContactPage;
