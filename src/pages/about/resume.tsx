import React from 'react';
import Layout from '@theme/Layout';
import { BaseCard } from '../../components/cardsV2';
import { Download, Home } from 'lucide-react';
import { getChanges } from '../data';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { NavigationCard } from '../../components/cardsV2/navigation-card';

import './styles.css';


const ResumePage = () => {
  const resumeImageUrl = useBaseUrl('/img/resume.png');
  
  const downloadResume = async () => {
    try {
      const response = await fetch(resumeImageUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      
      const link: HTMLAnchorElement = document.createElement('a');
      link.href = url;
      link.download = 'resume.png';

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Failed to download resume:', error);
    }
  };
  const changes = getChanges(resumeImageUrl);

  return (
    <Layout
      title="Resume"
      description="Andrew's Resume">
      <main className="">
        <div className="mainContainer">
          <NavigationCard activeRoute="resume">
            <div className="flex justify-center items-center w-full h-full" onClick={() => window.location.href = '/portfolio/about'} aria-role="button" tabIndex={0}>
              <Home size={24} />
              About
            </div>


          </NavigationCard>

          <BaseCard className="flex-col shadow-xs justify-center items-center p-[24px] min-w-[1200px] max-h-[850px] bg-[var(--about-card-background)] border border-transparent hover:border-[var(--ifm-color-primary)] shadow-[0px_0.5px_1px_0px] hover:shadow-[0px_0.5px_1px_0px] overflow-auto overscroll-contain">
            <div className="flex justify-center mb-[16px]" onClick={() => downloadResume()} aria-role="button" tabIndex={0}>
              <Download size={24} />
              Download
            </div>
            <div className="text-center min-h-[700px] overflow-auto">
              {changes.resume}
            </div>

          </BaseCard>
        </div>
      </main>
    </Layout>
  );
}

export default ResumePage;
