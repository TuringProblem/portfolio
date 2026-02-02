import React from 'react';
import Layout from '@theme/Layout';
import { BaseCard } from '../../components/cardsV2';
import { Download, Home } from 'lucide-react';
import { getChanges } from '../data';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { NavigationCard } from '../../components/cardsV2/navigation-card';
import { downloadResume } from '../../utils/downloadResume';


import '../about.css';


const ResumePage = () => {
  const resumeImageUrl = useBaseUrl('/img/resume.png');

  const changes = getChanges(resumeImageUrl);

  return (
    <Layout
      title="Resume"
      description="Andrew's Resume">
      <main className="containedItems">
        <NavigationCard activeRoute="resume">
          <div className="flex justify-center items-center w-full h-full" onClick={() => window.location.href = '/portfolio/about'} aria-role="button" tabIndex={0}>
            <Home size={24} />
            About
          </div>


        </NavigationCard>

        <BaseCard className="flex-col shadow-xs justify-center items-center p-[24px] max-h-[850px] bg-[var(--about-card-background)] border border-transparent hover:border-[var(--ifm-color-primary)] shadow-[0px_0.5px_1px_0px] hover:shadow-[0px_0.5px_1px_0px] overflow-auto overscroll-contain w-full">
          <div className="flex justify-center mb-[16px]" onClick={() => downloadResume(resumeImageUrl)} aria-role="button" tabIndex={0}>
            <Download size={24} />
            Download
          </div>
          <div className="text-center min-h-[700px] overflow-auto">
            {changes.resume}
          </div>

        </BaseCard>
      </main>
    </Layout>
  );
}

export default ResumePage;
