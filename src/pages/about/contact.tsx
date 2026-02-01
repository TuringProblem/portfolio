import React from 'react';
import Layout from '@theme/Layout';
import { BaseCard } from '../../components/cardsV2';
import { Home } from 'lucide-react';
import { getChanges } from '../data';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { AboutNavigation } from '../../components/AboutNavigation';

const ContactPage = () => {
  const resumeImageUrl = useBaseUrl('/img/resume.png');
  const changes = getChanges(resumeImageUrl);

  return (
    <Layout
      title="Contact"
      description="Andrew's Contact Information">
      <main className="">
        <div className="mx-auto p-[24px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-10 items-center gap-10 justify-items-center">
            <div className="flex gap-[48px] items-center justify-center min-h-[100%] p-[0px_40px_40px_40px]">
              <BaseCard className="flex-col shadow-xs justify-center items-center p-[24px] min-w-[1200px] max-h-[850px] bg-[var(--about-card-background)] border border-transparent hover:border-[var(--ifm-color-primary)] shadow-[0px_0.5px_1px_0px] hover:shadow-[0px_0.5px_1px_0px]">
                <AboutNavigation activeRoute="contact" />
                <div className="text-center min-h-[900px] overflow-auto">
                  {changes.contact}
                </div>
              </BaseCard>
            </div>
          </div>
          <BaseCard className="flex w-[150px] h-[50px] justify-center items-center bg-[var(--about-card-background)] border border-transparent hover:border-[var(--ifm-color-primary)] shadow-[0px_0.5px_1px_0px] hover:shadow-[0px_0.5px_1px_0px] hover:cursor-pointer">
            <div className="flex justify-center items-center w-full h-full" onClick={() => window.location.href = '/portfolio/about'} aria-role="button" tabIndex={0}>
              <Home size={24} />
              About
            </div>
          </BaseCard>
        </div>
      </main>
    </Layout>
  );
}

export default ContactPage;
